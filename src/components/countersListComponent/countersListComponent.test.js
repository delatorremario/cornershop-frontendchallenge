import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../../utils";
import CountersListComponent from "./countersListComponent";

const setUp = (props = {}) => shallow(<CountersListComponent {...props} />);

describe("counters list component", () => {
  let component;
  beforeEach(() => {
    component = setUp({ countersList: [] });
  });

  describe("Cheking PropTypes", () => {
    it("Should not trow warning", () => {
      const expectedProps = {
        countersList: [{ name: "Contador test", count: 0 }]
      };
      const propsErr = checkProps(CountersListComponent, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  it("Should render card counter", () => {
    const form = findByTestAttr(component, "counter-list");
    expect(form.length).toBe(1);
  });
});
