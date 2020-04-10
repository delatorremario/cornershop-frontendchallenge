import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "../../../utils";
import CountersListComponent from "./countersListComponent";

const setUp = (props = {}) => shallow(<CountersListComponent {...props} />);

describe("counters list component", () => {
  let component;
  beforeEach(() => {
    component = setUp({ countersList: [] });
  });

  it("Should render card counter", () => {
    const form = findByTestAttr(component, "counter-list");
    expect(form.length).toBe(1);
  });
});
