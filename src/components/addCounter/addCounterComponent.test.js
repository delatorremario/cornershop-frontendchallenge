import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../utils";
import AddCounterComponent from "./addCounterComponent";

const setUp = (props = {}) => shallow(<AddCounterComponent {...props} />);

describe("add counter component", () => {
  let component;
  beforeEach(() => {
    const props = { saveCounter: () => () => {} };
    component = setUp(props);
  });

  describe("Cheking PropTypes", () => {
    it("Should not trow warning", () => {
      const expectedProps = {
        saveCounter: () => () => {}
      };
      const propsErr = checkProps(AddCounterComponent, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  it("Should render form", () => {
    const form = findByTestAttr(component, "counter-form");
    expect(form.length).toBe(1);
  });
});
