<template >
  <div class="bg-white flex justify-between " v-if="size != 0 && size > limits[0]">
    <select
      :value="limit_index"
      @change="(e) => setLimit(e.target.value)"
      class="
        w-25
        form-select
        appearance-none
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700
        focus:bg-white
        focus:border-blue-600
        focus:outline-none
      "
    >
      <option v-for="(size, index) in limits" :key="index" :value="index">
        {{ size }} par page
      </option>
    </select>
    <ul class="flex list-style-none overflow-x-auto" v-if="size > limit">
      <li>
        <button
          :class="{ disabled: previous_disabled, page_item: true }"
          @click="setIndex(page_index - 1)"
        >
          Previous
        </button>
      </li>
      <li v-for="index in indexes" :key="index">
        <button
          :class="{ active: isActive(index), page_item: true }"
          @click="setIndex(index)"
        >
          {{ index + 1 }}
        </button>
      </li>
      <li>
        <button
          :class="{ disabled: next_disabled, page_item: true }"
          @click="setIndex(page_index + 1)"
        >
          Next
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["page_index", "limit_index", "limits", "size"],
  // emits: ["update:page_index","update:limit_index"],
  methods: {
    setIndex(value) {
      this.$emit("update:page_index", value);
    },
    setLimit(value) {
      this.$emit("update:limit_index", value);
    },
    isActive(index) {
      return index == this.page_index;
    },
    values(arr, index, limit) {
      let begin = index * limit;
      let end = Math.min(begin + limit, arr.length);
      return arr.slice(begin, end);
    },
  },
  computed: {
    previous_disabled() {
      return this.page_index == 0;
    },
    next_disabled() {
      return this.page_index == this.indexes.length - 1;
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
.page_item {
  display: block;
  position: relative;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  outline: 2px solid transparent;
  outline-offset: 2px;

  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin-right: 0px;

  border-radius: 0.25rem;
  border-width: 0px;
}

.page_item:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(229, 231, 235, var(--tw-bg-opacity));
}
.page_item.disabled,
.page_item.disabled:hover {
  --tw-text-opacity: 1;
  pointer-events: none;
  background-color: transparent;
  color: #2563eb;
}
.page_item.active {
  -tw-bg-opacity: 1;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #1e3c87;
  color: white;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.page_item.active:hover {
  --tw-bg-opacity: 1;
  background-color: rgba(59, 130, 246, var(--tw-bg-opacity));
  --tw-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
    var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
</style>