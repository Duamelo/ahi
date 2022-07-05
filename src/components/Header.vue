<template>
  <div class="flex flex-col">
    <div class="flex flex-row w-11/12 justify-between p-4 mx-auto">
      <router-link class="flex flex-col justify-center" to="/">
        <img
          class="w-12 h-auto"
          src="@/assets/icons/ic_ahi.svg"
          alt="Icône - AHI"
        />
      </router-link>
      <div class="relative w-6/12">
        <label
          class="absolute right-0 top-0 w-6 h-auto mt-2.5 mr-8"
          for="search"
        >
          <img src="@/assets/icons/ic_search.svg" alt="Icône - Recherche" />
        </label>
        <input
          class="w-full justify-center pl-4 py-1.5 bg-gray-100 border rounded-xl"
          name="search"
          type="text"
          placeholder="Rechercher un produit, une marque, une identité"
        />
      </div>
      <div class="flex flex-row gap-5">
        <button
          class="text-white bg-blue-900 rounded-lg px-5"
          @click="$router.push('/login')"
        >
          Connexion
        </button>
        <button class="text-white bg-blue-900 rounded-lg px-5">Aide ?</button>
      </div>
    </div>
    <div class="flex flex-row w-full border-t border-black px-5 pt-2">
      <button
        class="flex gap-2 w-full text-center items-center justify-center text-blue-900 font-semibold px-2"
        v-for="i in menu.length"
        :key="i"
        @click="choose(i)"
      >
        <img
          v-if="i === 1"
          src="@/assets/icons/ic_menu_2.svg"
          alt="Icône - Menu 2"
        />
        <div
          class="pb-2"
          :class="{ 'border-b-2 border-blue-900': menu[i - 1].isClicked }"
        >
          {{ menu[i - 1].name }}
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
  data() {
    return {
      menu: [
        {
          name: "Catégories",
          isClicked: false,
        },
        {
          name: "Bons plans",
          isClicked: false,
        },
        {
          name: "Meilleurs soldes",
          isClicked: false,
        },
        {
          name: "Big Market",
          isClicked: false,
        },
        {
          name: "Mobilier",
          isClicked: false,
        },
        {
          name: "Informatique",
          isClicked: false,
        },
        {
          name: "Santé & Hygiène",
          isClicked: false,
        },
        {
          name: "Mode",
          isClicked: false,
        },
        {
          name: "Game & Geek",
          isClicked: false,
        },
      ],
    };
  },
  methods: {
    choose(k) {
      for (let i = 1; i <= this.menu.length; i++) {
        if (i === k) {
          this.menu[i - 1].isClicked = true;
        } else {
          this.menu[i - 1].isClicked = false;
        }
      }
    },
  },
}
</script>
