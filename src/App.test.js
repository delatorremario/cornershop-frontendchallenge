import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttr, testStore } from "./../utils";

import React from "react";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  return shallow(<App store={store} />).childAt(0).dive();
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      counters: [
        {
          id: "k8vtjajb",
          title: "bob",
          count: 0
        }
      ]
    };
    wrapper = setUp(initialState);
  });
  it("Should render without error", () => {
    const component = findByTestAttr(wrapper, "app-component");
    expect(component.length).toBe(1);
  });
});
