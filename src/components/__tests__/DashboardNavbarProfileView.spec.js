import { mount } from "@cypress/vue";
// eslint-disable-next-line no-unused-vars
import NavbarProfile from "../Dashboard/NavbarProfile.vue";

describe("NavbarProfile", () => {
  it("NavbarProfile se rend correctement", () => {
    const wrapper = mount(NavbarProfile, {
      props: {
        href: "/not",
        nom: "John Doe",
        role: "Vendeur",
        profile: "https://picsum.photos/200/300",
      },
    });
    expect(wrapper.text()).toContain("John Doe");
    expect(wrapper.text()).toContain("Vendeur");
    const image = wrapper.get("img");
    expect(image.attributes().src).toBe("https://picsum.photos/200/300");
  });
});
