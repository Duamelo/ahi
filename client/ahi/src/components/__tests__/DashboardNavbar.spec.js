import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
// eslint-disable-next-line no-unused-vars
import Navbar from "../Dashboard/NavbarView.vue";
// import Profile from "../Dashboard/NavbarProfileView.vue";

describe("NavbarProfile", () => {
  it("Navbar se rend correctement", () => {
    const wrapper = mount(Navbar);
    // expect(wrapper.text()).toContain("John Doe");
    // expect(wrapper.text()).toContain("Vendeur");
    // const link = wrapper.get("img");
    // expect(link.attributes().src).toBe("https://picsum.photos/200/300");
  });
});
