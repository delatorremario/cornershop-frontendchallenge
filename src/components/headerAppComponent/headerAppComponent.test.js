import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../utils";
import HeaderAppComponent from "./headerAppComponent";

const setUp = (props = {}) => shallow(<HeaderAppComponent {...props} />);

describe("header app component", () => {
  let component;
  beforeEach(() => {
    const props = {
      setSorter: () => () => {},
      onChange: () => () => {},
      setFilter: () => () => {},
      clearFilters: () => () => {},
    };
    component = setUp(props);
  });

  it("Should render header app", () => {
    const form = findByTestAttr(component, "header-app");
    expect(form.length).toBe(1);
  });
});
