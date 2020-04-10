import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../utils";
import HeaderAppComponent from "./headerAppComponent";

const setUp = (props = {}) => shallow(<HeaderAppComponent {...props} />);

describe("header app component", () => {
  let component;
  beforeEach(() => {
    const props = {
      setSorter: () => () => {},
      onChange: () => () => {},
      setFilter: () => () => {},
      clearFilters: () => () => {}
    };
    component = setUp(props);
  });

  describe("Cheking PropTypes", () => {
    it("Should not trow warning", () => {
      const expectedProps = {
        upSortDirection: true,
        sortBy: "name",
        setSorter: () => () => {},
        setFilter: () => () => {},
        onChange: () => () => {},
        less: 0,
        greater: 0,
        clearFilters: () => () => {}
      };
      const propsErr = checkProps(HeaderAppComponent, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  it("Should render header app", () => {
    const form = findByTestAttr(component, "header-app");
    expect(form.length).toBe(1);
  });
});
