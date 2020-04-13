import { types } from "../../actions/types";

import countersReducer from "./reducer";

const initialState = {
  loading: false,
  counters: [],
  error: "",
  upSortDirection: true,
  sortBy: "counter",
  less: 0,
  greater: 0,
  showAddCounter: false
};

describe("Counters Reducer", () => {
  it("Should return default state", () => {
    const newState = countersReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("Should return new state if receiving type", () => {
    const counters = [{ title: "test", count: 0 }];
    const newState = countersReducer(undefined, {
      type: types.FETCH_COUNTERS_SUCCESS,
      payload: counters
    });
    expect(newState).toEqual({ ...initialState, counters });
  });
});
