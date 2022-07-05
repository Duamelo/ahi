import { describe, it } from "vitest";

import { mount } from "@cypress/vue";
// import PathItemView from "../PathItemView.vue";
import PathView from "../Path/PathView.vue";

describe("Path View", () => {
  it("renders properly", () => {
    mount(PathView, { props: {} });
  });
});
