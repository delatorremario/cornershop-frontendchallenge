import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../utils";
import AddCounterComponent from "./addCounterComponent";

const setUp = (props = {}) => shallow(<AddCounterComponent {...props} />);

describe("add counter component", () => {
  describe("Renders", () => {
    let component;
    let mockFunc;
    beforeEach(() => {
      mockFunc = jest.fn(() => ({ bind: jest.fn() }));
      const props = { submitForm: mockFunc };
      component = setUp(props);
    });
    it("Should render form", () => {
      const form = findByTestAttr(component, "counter-form");
      expect(form.length).toBe(1);
    });
  });

});
