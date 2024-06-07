import { it, describe, expect } from "vitest";
import { mockNuxtImport, mountSuspended } from "@nuxt/test-utils/runtime";
import SelectorSection from "../SelectorSection.vue";
import Combobox from "@/components/ui/combobox/Combobox.vue";

mockNuxtImport("useCountryStore", () => {
  return () => ({
    details: undefined,
  });
});

describe("CountrySelectorSection", () => {
  it("can mount the component", async () => {
    const component = await mountSuspended(SelectorSection);

    expect(component.text()).toContain("Country Info");

    const combobox = component.findComponent(Combobox);
    expect(combobox.exists()).toBe(true);

    const button = component.find('button[type="submit"]');
    expect(button.exists()).toBe(true);
  });
});
