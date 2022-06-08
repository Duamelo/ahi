<template>
  <div @click="toggle">
    <slot name="toggled" v-if="this.sharedState.active">
      <button>Dropdown Toogle</button>
    </slot>
    <slot name="untoggled" v-else>
      <button>Dropdown Toogle</button>
    </slot>
    <slot />
  </div>
</template>

<script>
export default {
  name: "AppDropdown",
  provide() {
    return {
      sharedState: this.sharedState,
    };
  },
  data() {
    return {
      sharedState: {
        active: false,
      },
    };
  },
  methods: {
    toggle() {
      this.sharedState.active = !this.sharedState.active;
    },
  },
};
</script>