import { describe, it, expect } from "vitest";

import { mount } from "@cypress/vue";
// eslint-disable-next-line no-unused-vars
import Gains from "../Dashboard/GainsView.vue";

describe("Gains", () => {
  it("Gains se rend correctement", () => {
    const wrapper = mount(Gains, {
      props: {
        benefices: "+100 k",
        rapport: 75,
        entries: 70,
      },
      slots: {},
    });
    expect(wrapper.text()).toContain("+100 k");
    expect(wrapper.text()).toContain("75%");
    expect(wrapper.text()).toContain("70%");
  });
});
