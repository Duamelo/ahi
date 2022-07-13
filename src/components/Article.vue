<template>
  <div
    class="flex flex-col gap-10 w-4/5 md:w-1/4 bg-white shadow-xl rounded-xl py-10 mx-auto md:mx-0"
  >
    <router-link class="flex flex-col" to="/products">
      <img
        class="flex w-full"
        src="@/assets/images/img_article.png"
        alt="Image - Article"
      />
      <div class="flex flex-col gap-2 mx-4">
        <div class="text-base font-medium">
          KIPSTA by decathlon BALLON DE FOOTBALL F100
        </div>
        <div class="flex md:flex-col xl:flex-row justify-between">
          <div class="flex flex-row w-3/4 gap-2">
            <img
              v-for="i in 5"
              :key="i"
              src="@/assets/icons/ic_star.svg"
              alt="Icône - Etoile"
            />
          </div>
          <span class="text-xl font-medium">(10)</span>
        </div>
        <div class="font-bold">3,850 FCFA</div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>
