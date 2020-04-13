import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../utils";
import ErrorComponent from "./errorComponent";

const setUp = (props = {}) => shallow(<ErrorComponent {...props} />);

describe("error component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render error", () => {
    const alert = findByTestAttr(component, "error");
    expect(alert.length).toBe(1);
  });
});
