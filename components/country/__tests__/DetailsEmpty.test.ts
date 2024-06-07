import { it, describe, expect } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import DetailsEmpty from "../DetailsEmpty.vue";

describe("CountryDetailsEmpty", () => {
  it("can mount the component", async () => {
    const component = await mountSuspended(DetailsEmpty);

    // Check for the SVG icon
    expect(component.find("svg").exists()).toBe(true);

    // Check for the specific text
    expect(component.html()).toContain(
      "Please choose a couuntry from drop down"
    );

    expect(component.html()).toContain(
      "and click on submit to view country details."
    );
  });
});
