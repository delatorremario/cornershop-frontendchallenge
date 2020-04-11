import moxios from "moxios";
import { testStore } from "./../../utils";
import { fetchCounters } from "./../actions";

describe("fetchCounters action", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("Store is update correctly", () => {
    const exptectedState = [
      {
        id: "k8vtjajb",
        title: "bob",
        count: 0
      }
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: exptectedState
      });
    });
    return store.dispatch(fetchCounters()).then(() => {
      const newState = store.getState();
      expect(newState.counters).toBe(exptectedState);
    });
  });
});
