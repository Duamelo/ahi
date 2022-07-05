<template>
  <div class="flex flex-col gap-10 pt-10 pb-6">
    <div
      class="flex flex-col gap-5 md:flex-row w-11/12 justify-between mx-auto"
    >
      <div class="flex flex-col w-full md:w-1/3 gap-4">
        <div class="text-white font-bold">Marketplace informations</div>
        <div class="flex flex-col gap-2 ml-2">
          <router-link to="" class="text-white"
            >Foire aux questions</router-link
          >
          <router-link to="" class="text-white">Qui sommes-nous ?</router-link>
          <router-link to="" class="text-white">Devenir vendeur</router-link>
          <router-link to="" class="text-white">Nous rejoindre</router-link>
          <router-link to="" class="text-white">Suivi de commandes</router-link>
          <router-link to="" class="text-white"
            >Programme d’affiliation</router-link
          >
        </div>
      </div>
      <div class="flex flex-col w-full md:w-1/3 gap-4">
        <div class="text-white font-bold">Les conseils de pro</div>
        <div class="flex flex-col gap-2 ml-2">
          <router-link to="" class="text-white"
            >Toutes les catégories</router-link
          >
          <router-link to="" class="text-white"
            >Nos marques favorites</router-link
          >
          <router-link to="" class="text-white"
            >Des comparatifs au top</router-link
          >
          <router-link to="" class="text-white"
            >Les tricks des éditeurs
          </router-link>
        </div>
      </div>
      <div class="flex flex-col w-full md:w-1/3 gap-8">
        <div class="flex flex-col gap-2">
          <div class="text-white font-bold">
            Rejoignez-nous sur les réseaux :
          </div>
          <div class="flex flex-row gap-3">
            <router-link to="">
              <img
                src="@/assets/icons/ic_facebook.svg"
                alt="Icône - Facebook"
              />
            </router-link>
            <router-link to="">
              <img src="@/assets/icons/ic_twitter.svg" alt="Icône - Twitter" />
            </router-link>
            <router-link to="">
              <img
                src="@/assets/icons/ic_instagram.svg"
                alt="Icône - Instagram"
              />
            </router-link>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <div class="text-white font-bold">
            La sécurité dans vos paiements avec:
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-row w-full md:w-1/3 items-center text-center mx-3 md:mx-auto gap-8"
    >
      <div class="text-white font-semibold">Marketplace 2022</div>
      <div class="w-px h-6 bg-gray-200"></div>
      <div class="text-white font-semibold">Tous droits réservés</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer-frame",
};
</script>
