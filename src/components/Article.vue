<template>
  <router-link class="article" to="/products" v-if="article" onclick="{
    console.log(article);
  }">
    <img class="thumb" src="@/assets/images/img_article.png" alt="Article" />

    <div class="info">
      <div class="text-base font-medium">
        {{ article.name }}
      </div>
      <div class="flex md:flex-col xl:flex-row justify-between">
        <div class="flex flex-row w-3/4 gap-2">
          <img
            v-for="i in article.note"
            :key="i"
            src="@/assets/icons/ic_star.svg"
            alt="check"
          />
          <img
            class="w-1/5"
            v-for="i in 5 - article.note"
            :key="i"
            src="@/assets/icons/ic_star_white.svg"
            alt="uncheck"
          />
        </div>
        <span class="text-xl font-medium">({{ article.review }})</span>
      </div>
      <div class="font-bold">{{ article.price }} FCFA</div>
    </div>
  </router-link>
  <div v-else> Error undefined article </div>
</template>

<script>
export default {
  // props: ["note", "price", "review", "name", "src"],
  props: ["article"],
};
</script>

<style scoped>
.article {
  display: flex;
  padding: 28px;
  background-color: #ffffff;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  border-radius: 0.75rem;
  color: black;
  border: 1px solid rgba(0, 0, 0, 0.125);
  gap: 2.5rem;
  box-shadow: 3px 5px 4px rgb(0 0 0 / 50%);
}
.article:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
