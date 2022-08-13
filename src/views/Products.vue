<template>
  <div class="product flex flex-col w-full overflow-x-auto bg-no-repeat">
    <Header class="bg-white w-full"></Header>

    <div class="flex flex-col gap-12 w-auto md:w-11/12 items-center mx-5 my-10">
      <div class="flex flex-col gap-10 w-auto mx-2 md:mx-0">
        <span class="text-2xl text-black font-bold">
          {{ product.name }}
        </span>
        <div class="flex flex-row items-center gap-2">
          <button class="text-sm text-black font-medium">
            Voir les détails du produit
          </button>
          <div class="w-0.5 h-6 bg-gray-500 border"></div>
          <div class="flex flex-row gap-1">
            <img
              v-for="i in 4"
              :key="i"
              src="@/assets/icons/ic_star_yellow.svg"
              alt="Icône - Star"
            />
            <img src="@/assets/icons/ic_star_white.svg" alt="Icône - Star 2" />
          </div>
          <div class="text-sm">sur <span>42</span> avis</div>
        </div>
        <div class="flex flex-col md:flex-row gap-5">
          <div class="flex md:flex-col gap-4">
            <button>
              <img src="@/assets/images/img_bag_1.png" alt="Image - Bag 1" />
            </button>
            <button>
              <img src="@/assets/images/img_bag_2.png" alt="Image - Bag 2" />
            </button>
            <button>
              <img src="@/assets/images/img_bag_3.png" alt="Image - Bag 3" />
            </button>
            <button>
              <img src="@/assets/images/img_bag_4.png" alt="Image - Bag 4" />
            </button>
            <button class="flex flex-col gap-2 items-center">
              <img src="@/assets/icons/ic_share.svg" alt="Icône - Share" />
              <span class="text-blue-900 font-semibold">Share</span>
            </button>
          </div>
          <div class="w-auto h-full">
            <img
              class="h-full"
              src="@/assets/images/img_bag.png"
              alt="Image - Bag"
            />
          </div>
          <div class="flex flex-col gap-3">
            <div class="flex flex-row bg-blue-900 rounded-lg">
              <div
                class="flex flex-col w-1/3 text-white text-center items-center p-3 border-r-8 border-dotted"
              >
                <span class="w-full text-3xl text-center font-bold">
                  {{ product.pourcentagePromo }} %
                </span>
                OFFERT
              </div>
              <div class="flex flex-col w-3/4 gap-2 p-3">
                <div class="flex flex-row gap-6">
                  <span class="text-white">Code promo</span>
                  <div
                    class="flex bg-white text-black text-center font-bold items-center rounded-full p-1"
                  >
                    {{ product.codePromo }}
                  </div>
                </div>
                <div class="flex flex-row gap-6 text-white">
                  Veuillez entrez ce code au moment de votre achat ( valable une
                  seule fois )
                </div>
              </div>
            </div>
            <div class="flex flex-col bg-white shadow-md rounded-lg">
              <div class="flex flex-col gap-3 w-11/12 mx-auto my-2">
                <div class="flex flex-row justify-between text-black">
                  <div class="flex flex-col">
                    <div class="text-xl font-bold">{{ product.prixPromo }}</div>
                    <div class="line-through">{{ product.prix }}</div>
                  </div>
                  <div class="flex flex-row h-8 gap-2 my-auto">
                    <button class="shadow-md rounded-md px-2" @click="prev">
                      <img
                        src="@/assets/icons/ic_back_2.svg"
                        alt="Icône - Back"
                      />
                    </button>
                    <button
                      class="text-black text-xl font-bold shadow-md rounded-md px-2"
                    >
                      {{ this.nProduct }}
                    </button>
                    <button class="shadow-md rounded-md px-2" @click="next">
                      <img
                        src="@/assets/icons/ic_next.svg"
                        alt="Icône - Next"
                      />
                    </button>
                  </div>
                </div>
                <div class="flex flex-col gap-1">
                  <button
                    class="flex gap-3 items-center justify-center bg-green-300 w-full text-white text-center font-medium rounded-lg py-2"
                  >
                    Ajouter au panier
                    <img
                      src="@/assets/icons/ic_panier.svg"
                      alt="Icône - Panier"
                    />
                  </button>
                  <div
                    class="flex flex-row gap-2 justify-center text-black font-semibold"
                  >
                    <img
                      src="@/assets/icons/ic_cadenas.svg"
                      alt="Icône - Cadenas"
                    />
                    Paiement sécurisé
                  </div>
                  <div
                    class="text-green-300 text-xl font-bold text-center italic"
                  >
                    MoMo Pay
                  </div>
                </div>
                <div class="flex flex-row justify-center gap-2">
                  <span class="font-medium">Payez en x2 fois</span>
                  <button class="text-green-300 underline">
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
            <div
              class="flex flex-col gap-2 bg-blue-900 shadow-md rounded-lg pl-5 py-4"
            >
              <div class="flex flex-row gap-5">
                <img
                  src="@/assets/icons/ic_validate.svg"
                  alt="Icône - Valider"
                />
                <span class="text-white font-medium">En stock</span>
              </div>
              <div class="flex flex-row gap-5">
                <img
                  src="@/assets/icons/ic_vehicule.svg"
                  alt="Icône - Véhicule"
                />
                <span class="text-white font-medium">Livraison en 24h </span>
              </div>
              <div class="flex flex-row gap-5">
                <img src="@/assets/icons/ic_temps.svg" alt="Icône - Temps" />
                <div class="flex gap-3">
                  <span class="text-white font-medium">
                    Retour sous 7 jours
                  </span>
                  <span class="text-white font-thin">
                    ( Voir nos conditions de retour )
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-green-300 text-xl font-bold text-left underline">
          Signaler des problèmes survenues avec le produit
        </div>
        <div
          class="flex flex-col gap-3 md:flex-row shadow-lg justify-between p-3"
        >
          <div class="flex flex-col gap-3 w-full md:w-1/5 font-bold">
            Vendu par :
            <div class="flex flex-row gap-4 items-center">
              <div class="w-7 h-7 rounded-full bg-red-500"></div>
              <span class="text-black">Jonathan Doe</span>
            </div>
          </div>
          <button
            class="flex w-4/5 md:w-auto gap-3 items-center justify-center bg-green-300 text-white text-xl text-center font-medium rounded-lg px-5"
          >
            Accéder à sa boutique
          </button>
        </div>
        <div class="flex flex-col gap-5 mt-10">
          <div
            class="w-3/4 md:w-auto text-2xl text-black font-bold mx-auto md:mx-0"
          >
            Ceci pourrait vous intéresser
          </div>
          <div class="flex flex-col md:flex-row w-full gap-10">
            <Article
              v-for="(article, index) in newArticle"
              :article="article"
              :key="index"
            />
          </div>
        </div>
        <div class="flex flex-col gap-5 shadow-md rounded-lg mt-8 px-14 py-4">
          <DetailsArticle></DetailsArticle>
        </div>
        <div class="flex flex-col gap-5 mt-10">
          <div
            class="w-3/4 md:w-auto text-2xl text-black font-bold mx-auto md:mx-0"
          >
            Retrouvez de nouveaux produits ...
          </div>
          <div class="flex flex-col md:flex-row w-full gap-10">
            <Article
              v-for="(article, index) in newArticle"
              :article="article"
              :key="index"
            />
          </div>
        </div>
      </div>
    </div>

    <Footer class="bg-blue-900 w-full rounded"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Article from "@/components/Article.vue";
import DetailsArticle from "@/components/DetailsArticle.vue";
import { faker } from "@faker-js/faker";
export default {
  data() {
    let recommendedArticle = Array.from(Array(4), () => {
      return {
        note: faker.datatype.number({ min: 3, max: 5 }),
        price: faker.datatype.number({ min: 10000, max: 100000 }),
        review: faker.datatype.number(99),
        name: faker.commerce.productName(),
        src: faker.image.business(),
      };
    });
    let newArticle = Array.from(Array(4), () => {
      return {
        note: faker.datatype.number({ min: 3, max: 5 }),
        price: faker.datatype.number({ min: 10000, max: 100000 }),
        review: faker.datatype.number(99),
        name: faker.commerce.productName(),
        src: faker.image.business(),
      };
    });
    console.log("hellp");
    return {
      recommendedArticle,
      newArticle,
      nProduct: 1,
      product: {
        name: "Sac à dos avec port USB - Noir",
        pourcentagePromo: 15,
        codePromo: "HDJXG511",
        prix: "13,000 FCFA",
        prixPromo: "7,250 FCFA",
      },
    };
  },
  components: {
    Header,
    Footer,
    Article,
    DetailsArticle,
  },
  methods: {
    prev() {
      if (this.nProduct > 1) {
        this.nProduct--;
      }
    },
    next() {
      this.nProduct++;
    },
  },
};
</script>

<style>
@media (min-width: 1024px) {
  /* .product {
    min-height: 100vh;
    display: flex;
    align-items: center;
  } */
}
</style>
