<template>
    <div
      v-if="!error"
      class="
        bg-green-100
        rounded-lg
        py-3
        px-6
        mb-3
        text-base text-green-700
        inline-flex
        items-center
        w-full
      "
      role="alert"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="check-circle"
        class="w-4 h-4 mr-2 fill-current"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
        ></path>
      </svg>
      {{ message }}
      <button
        type="button"
        class="
          btn-close
          box-content
          w-4
          h-4
          p-1
          ml-auto
          text-yellow-900
          border-none
          rounded-none
          opacity-50
          focus:shadow-none focus:outline-none focus:opacity-100
          hover:text-yellow-900 hover:opacity-75 hover:no-underline
        "
        aria-label="Close"
        @click="close"
      ></button>
    </div>
    <div
      v-else
      class="
        bg-red-100
        rounded-lg
        py-5
        px-6
        mb-3
        text-base text-red-700
        inline-flex
        items-center
        w-full
      "
      role="alert"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="times-circle"
        class="w-4 h-4 mr-2 fill-current"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
        ></path>
        {{ message }}
        <button
          type="button"
          class="
            btn-close
            box-content
            w-4
            h-4
            p-1
            ml-auto
            text-yellow-900
            border-none
            rounded-none
            opacity-50
            focus:shadow-none focus:outline-none focus:opacity-100
            hover:text-yellow-900 hover:opacity-75 hover:no-underline
          "
          aria-label="Close"
          @click="close"
        ></button>
      </svg>
    </div>
</template>

<script>
export default {
  props: ["error", "message", "show"],
  methods:{
      close() {
            this.$emit('update:show', false)
      }
  }
};
</script>

<style>
</style>