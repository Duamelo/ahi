import { describe, it, expect } from "vitest";

import { mount } from "@cypress/vue";
// eslint-disable-next-line no-unused-vars
import DashboardCard from "../Dashboard/DashboardCard.vue";

describe("DashboardCard", () => {
  it("Dashboard Card se rend correctement", () => {
    const wrapper = mount(DashboardCard, {
      props: {},
      slots: {
        title: "Test",
        left: "tseT",
        default: "Card content",
      },
    });
    expect(wrapper.text()).toContain("Test");
    expect(wrapper.text()).toContain("tseT");
    expect(wrapper.text()).toContain("Card content");
  });
});
