import { shallowMount } from "@vue/test-utils";
import Incrementer from "@/components/Incrementer.vue";

describe("Incrementer.vue", () => {
  it("renders score", () => {
    const target = "Devs";
    const score = 2;
    const label = "Dev";

    const wrapper = shallowMount(Incrementer, {
      propsData: { target, score, label },
    });

    expect(wrapper.text()).toMatch("2");
  });
});
