import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../utils";
import MainComponent from "./mainComponent";

const setUp = (props = {}) => shallow(<MainComponent {...props} />);

describe("main app component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render main", () => {
    const form = findByTestAttr(component, "main");
    expect(form.length).toBe(1);
  });
});
