<template>
  <div class="carousel">
    <slot></slot>
    <!-- <button class="carousel__nav carousel__next" @click.prevent="next"></button> -->
    <!-- <button class="carousel__nav carousel__prev" @click.prevent="prev"></button> -->
    <div class="flex flex-row-reverse">
      <div class="bg-gray-400 rounded-full px-2">
        <div class="carousel__pagination relative text-center">
          <button
            v-for="n in slidesCount"
            :key="n"
            @click="goto(n - 1)"
            :class="{ active: n - 1 == index }"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["size", "index", "limit"],
  data() {
    return {
      slides: [],
      direction: null,
    };
  },
  watch: {
    slides() {
      if (this.index >= this.slidesCount) {
        this.index = this.slidesCount - 1;
      }
    },
  },
  computed: {
    slidesCount() {
      return Math.floor(this.size / this.limit);
    },
  },
  methods: {
    setIndex(value) {
      this.$emit("update:index", value);
    },
    next() {
      this.setIndex(this.index + 1);
      this.direction = "right";
      if (this.index >= this.slidesCount) {
        this.setIndex(0);
      }
    },
    prev() {
      this.setIndex(this.index - 1);
      this.direction = "left";
      if (this.index < 0) {
        this.setIndex(this.slidesCount - 1);
      }
    },
    goto(index) {
      this.direction = index > this.index ? "right" : "left";
      this.setIndex(index);
    },
  },
  mounted() {
    setInterval(this.next, 10000);
  },
};
</script>

<style>
.carousel {
  position: relative;
  overflow: hidden;
}

.carousel__nav {
  position: absolute;
  top: 50%;
  margin-top: -31px;
  left: 10px;
  background: url("~/assets/images/previous.png");
  width: 63px;
  height: 63px;
}
.carousel__nav.carousel__next {
  right: 10px;
  left: auto;
  background-image: url("~/assets/images/next.png");
}

.carousel__pagination {
  position: relative;
  /* bottom: 10px; */
  /* left: 0; */
  /* right: 0; */
  text-align: center;
}

.carousel__pagination button {
  /* display: inline-block; */
  width: 10px;
  height: 10px;
  background-color: #fff;
  opacity: 0.8;
  border-radius: 10px;
  margin: 0 5px;
}

.carousel__pagination button.active {
  background-color: #1e3a8a;
}
</style>
