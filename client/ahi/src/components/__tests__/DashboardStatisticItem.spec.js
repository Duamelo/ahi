import { describe, it, expect } from "vitest";

import { mount } from "@cypress/vue";
// eslint-disable-next-line no-unused-vars
import StatisticItem from "../Dashboard/Statistic/StatisticItem.vue";

describe("StatisticItem", () => {
  it("StatisticItem se rend correctement", () => {
    const wrapper = mount(StatisticItem, {
      props: {
        count: "200K",
        name: "Achat",
      },
      slots: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>`,
      },
    });
    expect(wrapper.text()).toContain("200K");
    expect(wrapper.text()).toContain("Achat");
  });
});
