import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../utils";
import LoadingComponent from "./loadingComponent";

const setUp = (props = {}) => shallow(<LoadingComponent {...props} />);

describe("loading component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render loadin", () => {
    const alert = findByTestAttr(component, "loading");
    expect(alert.length).toBe(1);
  });
});
