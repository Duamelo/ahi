<template >
  <div class="bg-white">
    <select v-model="limit_index">
      <option v-for="(size, index) in limits" :key="index" :value="index">
        {{ size }} par page
      </option>
    </select>
    <ul class="flex list-style-none">
      <li class="page-item">
        <button :disabled="previous_disabled" @click="setIndex(index - 1)">
          Previous
        </button>
      </li>
      <li v-for="index in indexes" :key="index" class="page-item">
        <button
          :class="{ active: isActive(index) }"
          @click="setIndex(index)"
        >
          {{ index +1 }}
        </button>
      </li>
      <li class="page-item">
        <button :disabled="next_disabled" @click="setIndex(index + 1)">
          Next
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["page_index","limit_index", "limits", "size"],
  // emits: ["update:page_index","update:limit_index"],
  methods: {
    setIndex(value) {
      this.$emit("update:page_index", value);
    },
    setLimit(value) {
      this.$emit("update:limit_index", value);
    },
    isActive(index){
      return index == this.page_index
    }
  },
  computed: {
    previous_disabled(){
      return this.page_index == 0
    },
    next_disabled(){
      return this.page_index == this.size -1
    },
    limit() {
      return this.limits[this.limit_index];
    },
    indexes() {
      return Array.from(
        Array(Math.ceil(this.size / this.limit)),
        (_, index) => index
      );
    },
  },
};
</script>

<style scoped>
button:hover {
  background-color: gray;
}
button {
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  padding: 6px;
  border-radius: 5px;
  transition-duration: 300ms;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.active {
  background-color: skyblue;
}
button.active:hover {
  background-color: deepskyblue;
}
</style>