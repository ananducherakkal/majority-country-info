import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import DetailsItem from "../DetailsItem.vue";

describe("CountryDetailsItem", () => {
  it("renders the label and value correctly", () => {
    const label = "Test Label";
    const value = "Test Value";

    const wrapper = mount(DetailsItem, {
      props: { label, value },
    });

    // Check if the label is rendered correctly
    expect(wrapper.html()).toContain(label);

    // Check if the value is rendered correctly
    expect(wrapper.html()).toContain(value);
  });
});
