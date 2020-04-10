import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../utils";
import CounterCardComponent from "./counterCardComponent";

const setUp = (props = {}) => shallow(<CounterCardComponent {...props} />);

describe("counter card component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  describe("Cheking PropTypes", () => {
    it("Should not trow warning", () => {
      const expectedProps = {
        name: "Name test",
        count: 0
      };
      const propsErr = checkProps(CounterCardComponent, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  it("Should render card counter", () => {
    const form = findByTestAttr(component, "counter-card");
    expect(form.length).toBe(1);
  });
});
