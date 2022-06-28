import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import HeaderView from "@/components/HeaderView.vue"

describe("HeaderView.vue", () => {
  it("displays hello header view message", () => {
    const wrapper = mount(HeaderView)
    expect(wrapper.text()).toContain("Hello Header View")
  })
  it("Is a div", () => {
    const wrapper = mount(HeaderView)
    const div = wrapper.find('div')
    expect(div.isVisible()).toBe(true)
  })
})
