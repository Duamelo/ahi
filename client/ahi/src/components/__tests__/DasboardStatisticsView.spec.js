import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
// eslint-disable-next-line no-unused-vars
import Statistic from "../Dashboard/Statistic/StatisticView.vue";

describe("Statistic", () => {
  it("Statistic se rend correctement", () => {
    const wrapper = mount(Statistic, {
      props: {
        clients: "9.842K",
        revenue: "700k (fcfa)",
        produits: "240k",
        ventes: "100k",
      },
    });
    expect(wrapper.text()).toContain("9.842K");
    expect(wrapper.text()).toContain("Clients");
    expect(wrapper.text()).toContain("700k (fcfa)");
    expect(wrapper.text()).toContain("Revenue");
    expect(wrapper.text()).toContain("240k");
    expect(wrapper.text()).toContain("Produits");
    expect(wrapper.text()).toContain("100k");
    expect(wrapper.text()).toContain("Ventes");
  });
});
