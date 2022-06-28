import { describe, it, expect } from "vitest";

import { mount } from "@cypress/vue";
import Menu from "../Dashboard/MenuView.vue";

describe("PathItemView", () => {
  it("Menu se rend correctement", () => {
    const wrapper = mount(Menu);
    expect(wrapper.text()).toContain("AHI");
    expect(wrapper.text()).toContain("MARKETPLACE");
    expect(wrapper.text()).toContain("PAGES & APPS");
    expect(wrapper.text()).toContain("Email");
    expect(wrapper.text()).toContain("Chat");
    expect(wrapper.text()).toContain("Calendrier");
    expect(wrapper.text()).toContain("Tasks");
    expect(wrapper.text()).toContain("E-COM");
    expect(wrapper.text()).toContain("User");
    expect(wrapper.text()).toContain("CATALOGUES");
    expect(wrapper.text()).toContain("CUSTOMERS");
    expect(wrapper.text()).toContain("SALES");
    expect(wrapper.text()).toContain("SETTINGS");
    expect(wrapper.text()).toContain("MARKETING");
  });
});
