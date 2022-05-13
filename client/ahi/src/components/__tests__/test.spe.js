import { describe, it, expect } from "vitest";

import { mount } from "@cypress/vue";
// eslint-disable-next-line no-unused-vars
import Compoent from "../Dashboard/Compoent.vue";

describe("Compoent", () => {
  it("Compoent se rend correctement", () => {
    const wrapper = mount(Compoent, {
      props: {},
      slots: {},
    });
    expect(wrapper.text()).toContain("Acceuil");
    const link = wrapper.get("a");
    expect(link.attributes().href).toBe("/not");
  });
});
