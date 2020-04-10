import { types } from "../../actions/types";

import countersReducer from "./reducer";

describe("Counters Reducer", () => {
  it("Should return default state", () => {
    const newState = countersReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if receiving type", () => {
    const counters = [{ title: "test", count: 0 }];
    const newState = countersReducer(undefined, {
      type: types.GET_COUNTERS,
      payload: counters
    });
    expect(newState).toEqual(counters);
  });
});
