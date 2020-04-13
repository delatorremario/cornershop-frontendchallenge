import { types } from "../../actions/types";

import countersReducer from "./reducer";

const initialState = {
  loading: false,
  counters: [],
  error: ""
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

  it("Add Counter Reducer", () => {
    const counter = { id: "k8xffn60", title: "My Counter", count: 0 };
    const newState = countersReducer(undefined, {
      type: types.ADD_COUNTER,
      payload: counter
    });
    expect(newState).toEqual({ ...initialState, counters: [counter] });
  });
});
