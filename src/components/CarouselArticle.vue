<template>
  <div class="flex flex-col">
    <transition :name="transition">
      <slot></slot>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    index: { type: Number, default: 0 },
  },
  /*
    data () {
        return {
            index: 0
        }
    },
    */
  computed: {
    transition() {
      if (this.$parent.direction) {
        return "slide-" + this.$parent.direction;
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
.slide-right-enter-active {
  animation: slideRightIn 0.5s;
}

.slide-right-leave-active {
  animation: slideRightOut 0.5s;
  position: absolute;
  width: 100%;
}

.slide-left-enter-active {
  animation: slideLeftIn 0.5s;
}

.slide-left-leave-active {
  animation: slideLeftOut 0.5s;
  position: absolute;
  width: 100%;
}

@keyframes slideRightIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideRightOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes slideLeftIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideLeftOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
