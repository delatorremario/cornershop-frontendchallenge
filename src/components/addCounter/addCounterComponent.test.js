import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../utils";
import AddCounterComponent from "./addCounterComponent";

const setUp = (props = {}) => shallow(<AddCounterComponent {...props} />);

describe("add counter component", () => {
  describe("Renders", () => {
    let component;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn(() => ({ bind: jest.fn() }));
      const props = { saveCounter: mockFunc };
      component = setUp(props);
    });
    it("Should render form", () => {
      const form = findByTestAttr(component, "counter-form");
      expect(form.length).toBe(1);
    });
    it("Should emit callback on click event", () => {
      const button = findByTestAttr(component, "button-submit");
      button.simulate("click");
      const callback = mockFunc.mock.calls.length;
      expect(callback).toBe(1);
    });
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
});
