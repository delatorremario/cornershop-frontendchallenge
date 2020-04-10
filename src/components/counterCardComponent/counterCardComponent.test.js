import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../utils";
import CounterCardComponent from "./counterCardComponent";

const setUp = (props = {}) => shallow(<CounterCardComponent {...props} />);

describe("counter card component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render card counter", () => {
    const form = findByTestAttr(component, "counter-card");
    expect(form.length).toBe(1);
  });
});
