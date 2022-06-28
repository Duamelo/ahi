import { describe, test, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HeaderView from "../HeaderView.vue";

describe("HeaderView", () => {
  test("renders properly", () => {
    const wrapper = mount(HeaderView)
    expect(wrapper.find("div").text()).toContain("Hello Vitest")
  })
})
