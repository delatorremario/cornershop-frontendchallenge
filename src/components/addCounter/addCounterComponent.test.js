import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../utils";
import AddCounterComponent from "./addCounterComponent";

const setUp = (props = { saveCounter: () => () => {} }) =>
  shallow(<AddCounterComponent {...props} />);

describe("add counter component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render form", () => {
    const form = findByTestAttr(component,'counter-form');
    expect(form.length).toBe(1);
  });
});
