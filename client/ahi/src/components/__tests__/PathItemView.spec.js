import { describe, it, expect } from "vitest";

import { mount } from "@cypress/vue";
import PathItemView from "../Path/PathItem.vue";

describe("Path view Item", () => {
  it("item non actif se rend correctement", () => {
    const wrapper = mount(PathItemView, {
      props: { active: false, href: "/not" },
      slots: {
        default: "Acceuil",
      },
    });
    expect(wrapper.text()).toContain("Acceuil");
    const link = wrapper.get("a");
    expect(link.attributes().href).toBe("/not");

    expect(wrapper.text()).toContain(">");
  });
  it("item actif se rend correctement", () => {
    const wrapper = mount(PathItemView, {
      props: { active: true },
      slots: {
        default: "Acceuil",
      },
    });
    expect(wrapper.text()).toContain("Acceuil");
    expect(wrapper.text()).not.toContain(">");
  });
});
