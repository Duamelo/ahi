<template>
  <div
    class="home flex flex-col items-center w-full overflow-auto bg-no-repeat relative bg-gray-100"
  >
    <!-- <h1>This is a home page</h1> -->
    <Header class="bg-white w-full"></Header>
    <div class="flex flex-col w-full xl:w-11/12 2xl:w-4/5">
      <div class="w-full my-1">
        <Carousel class="w-4/5 mx-auto my-2">
          <CarouselArticle
            class="my-2"
            v-for="n in slides"
            :key="n"
            :index="n - 1"
          >
            <div class="w-full bg-blue-900 rounded-xl py-10">
              <div class="flex flex-col gap-10">
                <div
                  class="flex w-11/12 md:w-auto text-white text-2xl text-center font-semibold mx-auto"
                >
                  Jusqu’à 60% de réduction sur de nombreux articles
                </div>
                <div
                  class="flex flex-col md:flex-row items-center md:justify-center gap-20"
                >
                  <div
                    v-for="i in 3"
                    :key="i"
                    class="flex flex-col w-4/5 md:w-1/5 bg-green-300 rounded-xl"
                  >
                    <div class="w-11/12 mx-auto">
                      <div class="flex justify-between">
                        <span class="text-white text-2xl font-bold"
                          >{{ offres[i - 1].pourcentage }}%</span
                        >
                        <span class="text-black text-2xl font-bold">
                          OFFERTS
                        </span>
                      </div>
                      <div class="flex">
                        <span class="text-white text-xl font-medium"
                          >dès {{ offres[i - 1].limite }} FCFA</span
                        >
                      </div>
                      <div class="flex flex-row-reverse">
                        <span class="text-white text-xl font-medium"
                          >d’achats</span
                        >
                      </div>
                    </div>
                    <div class="flex bg-white rounded-b-xl">
                      <span class="font-semibold w-full text-center">
                        avec le code:
                        <span class="font-bold">SOLDES</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselArticle>
        </Carousel>
      </div>
      <div
        class="flex flex-col gap-4 md:gap-10 items-center my-1 py-10 bg-image-background w-full h-auto"
      >
        <div class="flex w-11/12 justify-between">
          <div class="flex flex-col gap-2 w-2/3 md:w-auto">
            <div class="text-green-400 md:text-xl font-bold">
              LES CATEGORIES POUR BIEN FAIRE SES COURSES
            </div>
            <div class="font-bold text-sm md:text-base">
              Parce que votre temps est un précieux pour nous ...
            </div>
          </div>
          <button
            class="flex items-center bg-white hover:bg-gray-200 shadow-lg rounded-xl px-4"
          >
            <img
              class="flex mx-auto"
              src="@/assets/icons/ic_menu.svg"
              alt="Icône - menu"
            />
          </button>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 w-11/12 gap-x-16 gap-y-4">
          <button
            class="flex w-auto gap-3 items-center bg-white hover:bg-gray-100 shadow-lg rounded-xl p-3 md:px-8 md:py-3"
          >
            <img
              class="flex w-4"
              src="@/assets/icons/ic_produitsAlimentaires.svg"
              alt="Icône - Catégories"
            />
            <span class="font-medium">Produits alimentaires</span>
          </button>
          <button
            class="flex w-auto gap-3 items-center bg-white hover:bg-gray-100 shadow-lg rounded-xl p-3 md:px-8 md:py-3"
          >
            <img
              class="flex w-4"
              src="@/assets/icons/ic_vetements.svg"
              alt="Icône - Catégories"
            />
            <span class="font-medium">'Vêtements et lingerie</span>
          </button>
          <button
            class="flex w-auto gap-3 items-center bg-white hover:bg-gray-100 shadow-lg rounded-xl p-3 md:px-8 md:py-3"
          >
            <img
              class="flex w-4"
              src="@/assets/icons/ic_telephones.svg"
              alt="Icône - Catégories"
            />
            <span class="font-medium">Téléphones & accessoires</span>
          </button>
          <button
            class="flex w-auto gap-3 items-center bg-white hover:bg-gray-100 shadow-lg rounded-xl p-3 md:px-8 md:py-3"
          >
            <img
              class="flex w-4"
              src="@/assets/icons/ic_huileries.svg"
              alt="Icône - Catégories"
            />
            <span class="font-medium">Huileries & Epices</span>
          </button>
          <button
            class="flex w-auto gap-3 items-center bg-white hover:bg-gray-100 shadow-lg rounded-xl p-3 md:px-8 md:py-3"
          >
            <img
              class="flex w-4"
              src="@/assets/icons/ic_lessive.svg"
              alt="Icône - Catégories"
            />
            <span class="font-medium">Lessive et accesoires</span>
          </button>
          <button
            class="flex w-auto gap-3 items-center bg-white hover:bg-gray-100 shadow-lg rounded-xl p-3 md:px-8 md:py-3"
          >
            <img
              class="flex w-4"
              src="@/assets/icons/ic_tvs.svg"
              alt="Icône - Catégories"
            />
            <span class="font-medium">TVs & Enceintes</span>
          </button>
          <button
            class="flex w-auto gap-3 items-center bg-white hover:bg-gray-100 shadow-lg rounded-xl p-3 md:px-8 md:py-3"
          >
            <img
              class="flex w-4"
              src="@/assets/icons/ic_terroir.svg"
              alt="Icône - Catégories"
            />
            <span class="font-medium">Produits du terroir</span>
          </button>
          <button
            class="flex w-auto gap-3 items-center bg-white hover:bg-gray-100 shadow-lg rounded-xl p-3 md:px-8 md:py-3"
          >
            <img
              class="flex w-4"
              src="@/assets/icons/ic_hygiene.svg"
              alt="Icône - Catégories"
            />
            <span class="font-medium">Hygiène & Beauté</span>
          </button>
          <button
            class="flex w-auto gap-3 items-center bg-white hover:bg-gray-100 shadow-lg rounded-xl p-3 md:px-8 md:py-3"
          >
            <img
              class="flex w-4"
              src="@/assets/icons/ic_sportifs.svg"
              alt="Icône - Catégories"
            />
            <span class="font-medium">Sportifs du dimanche</span>
          </button>
          <button
            class="flex w-auto gap-3 items-center bg-white hover:bg-gray-100 shadow-lg rounded-xl p-3 md:px-8 md:py-3"
          >
            <img
              class="flex w-4"
              src="@/assets/icons/ic_cuisine.svg"
              alt="Icône - Catégories"
            />
            <span class="font-medium">Cuisine et ustensiles</span>
          </button>
          <button
            class="flex w-auto gap-3 items-center bg-white hover:bg-gray-100 shadow-lg rounded-xl p-3 md:px-8 md:py-3"
          >
            <img
              class="flex w-4"
              src="@/assets/icons/ic_boissons.svg"
              alt="Icône - Catégories"
            />
            <span class="font-medium">Boissons & alcools</span>
          </button>
          <button
            class="flex w-auto gap-3 items-center bg-white hover:bg-gray-100 shadow-lg rounded-xl p-3 md:px-8 md:py-3"
          >
            <img
              class="flex w-4"
              src="@/assets/icons/ic_meubles.svg"
              alt="Icône - Catégories"
            />
            <span class="font-medium">Meubles & Arts</span>
          </button>
        </div>
      </div>
      <div
        class="flex flex-col gap-10 items-center my-16 py-10 bg-image-background-2 w-full h-auto"
      >
        <div class="flex w-11/12 justify-between">
          <div class="flex flex-col gap-2">
            <div class="text-green-400 text-lg md:text-xl font-bold">
              NOS TOPS VENTES DU MARCHE
            </div>
            <div class="font-bold text-sm md:text-base">
              Ils sont faits pour vous...
            </div>
          </div>
          <!-- <button class="flex items-center bg-white hover:bg-gray-200 shadow-lg rounded-xl px-4">
            <img class="flex mx-auto" src="~/assets/icons/ic_menu.svg" alt="Icône - menu">
          </button> -->
        </div>
        <div class="flex flex-col md:flex-row w-11/12 gap-10">
          <Article v-for="i in 4" :key="i"></Article>
        </div>
      </div>
      <div class="flex flex-col gap-10 items-center my-16 py-10 w-full h-auto">
        <div class="flex w-11/12 justify-between">
          <div class="flex flex-col gap-2">
            <div class="text-green-400 text-xl font-bold">
              LES MARQUES DU MOMENT
            </div>
            <div class="font-bold">
              Parce qu’elles sont les meilleures pour vous servir...
            </div>
          </div>
          <!-- <button class="flex items-center bg-white hover:bg-gray-200 shadow-lg rounded-xl px-4">
            <img class="flex mx-auto" src="~/assets/icons/ic_menu.svg" alt="Icône - menu">
          </button> -->
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 w-11/12 gap-x-4 gap-y-4">
          <div class="flex">
            <img
              class=""
              src="@/assets/images/img_nike.png"
              alt="Image - Nike"
            />
            <img
              class="absolute mt-2 ml-8 md:mt-12 md:ml-24"
              src="@/assets/icons/ic_nike_3.svg"
              alt="Icône - Nike"
            />
          </div>
          <div class="flex">
            <img
              class=""
              src="@/assets/images/img_apple.png"
              alt="Image - Apple"
            />
            <img
              class="absolute mt-3 ml-14 md:mt-16 md:ml-28"
              src="@/assets/icons/ic_apple.svg"
              alt="Icône - Apple"
            />
          </div>
          <div class="flex">
            <img
              class=""
              src="@/assets/images/img_adidas.png"
              alt="Image - Adidas"
            />
            <img
              class="absolute mt-2 ml-6 md:mt-12 md:ml-24"
              src="@/assets/icons/ic_adidas.svg"
              alt="Icône - Adidas"
            />
          </div>
          <div class="flex">
            <img class="" src="@/assets/images/img_mi.png" alt="Image - Mi" />
            <img
              class="absolute mt-4 ml-10 md:mt-16 md:ml-24"
              src="@/assets/icons/ic_mi.svg"
              alt="Icône - Mi"
            />
          </div>
          <div class="flex">
            <img
              class=""
              src="@/assets/images/img_nivea.png"
              alt="Image - Nivea"
            />
            <img
              class="absolute w-1/3 md:w-auto mt-10 ml-4 md:mt-16 md:ml-16"
              src="@/assets/icons/ic_nivea.svg"
              alt="Icône - Nivea"
            />
          </div>
          <div class="flex">
            <img
              class=""
              src="@/assets/images/img_decathlon.png"
              alt="Image - Decathlon"
            />
            <img
              class="absolute w-1/3 md:w-auto mt-12 ml-4 md:mt-20 md:ml-8"
              src="@/assets/icons/ic_decathlon.svg"
              alt="Icône - Decathlon"
            />
          </div>
          <div class="flex">
            <img
              class=""
              src="@/assets/images/img_ikea.png"
              alt="Image - Ikea"
            />
            <img
              class="absolute w-1/3 md:w-auto mt-10 ml-4 md:mt-20 md:ml-20"
              src="@/assets/icons/ic_ikea.svg"
              alt="Icône - Ikea"
            />
          </div>
          <div class="flex">
            <img
              class=""
              src="@/assets/images/img_converse.png"
              alt="Image - Converse"
            />
            <img
              class="absolute w-1/3 md:w-auto mt-12 ml-4 md:mt-20 md:ml-6"
              src="@/assets/icons/ic_converse.svg"
              alt="Icône - Converse"
            />
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-10 items-center my-1 py-10 bg-image-background w-full h-auto"
      >
        <div class="flex flex-col w-2/3 md:w-auto items-center gap-2 mx-auto">
          <div class="text-xl font-bold">
            Toujours en pleine action 24h/24 pour vous
          </div>
          <div class="font-semibold">
            ( A Porto et bientôt partout au Bénin)
          </div>
        </div>
        <div
          class="grid grid-cols-2 gap-5 md:flex md:flex-row md:w-10/12 md:justify-between"
        >
          <div class="flex flex-col items-center gap-2">
            <div class="flex justify-center bg-blue-900 rounded-xl p-4">
              <span class="text-2xl text-white font-bold">+10k</span>
            </div>
            <span class="font-medium">produits</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="flex justify-center bg-red-700 rounded-xl p-4">
              <span class="text-2xl text-white font-bold">+250</span>
            </div>
            <span class="font-medium">vendeurs</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="flex justify-center bg-blue-900 rounded-xl p-4">
              <span class="text-2xl text-white font-bold">+1M</span>
            </div>
            <span class="font-medium">de traffic</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="flex justify-center bg-red-700 rounded-xl p-4">
              <span class="text-2xl text-white font-bold">+15</span>
            </div>
            <span class="font-medium">partenariats</span>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col gap-10 items-center my-16 py-10 bg-image-background-2 w-full h-auto"
      >
        <div class="flex w-11/12 justify-between">
          <div class="flex flex-col gap-2">
            <div class="text-black text-xl font-bold">
              NOS TOPS VENTES DU MARCHE
            </div>
            <div class="font-bold">Ils sont faits pour vous...</div>
          </div>
          <!-- <button class="flex items-center bg-white hover:bg-gray-200 shadow-lg rounded-xl px-4">
            <img class="flex mx-auto" src="~/assets/icons/ic_menu.svg" alt="Icône - menu">
          </button> -->
        </div>
        <div class="flex flex-col md:flex-row w-11/12 gap-10">
          <Article v-for="i in 4" :key="i"></Article>
        </div>
      </div>
      <div
        class="relative flex flex-col gap-10 items-center my-16 bg-blue-500 w-full"
      >
        <img
          class="absolute left-0 bottom-0 ml-32 mb-0 z-0 w-1/3"
          src="@/assets/images/polygon1.png"
          alt="Image - Polygone 1"
        />
        <img
          class="absolute left-0 bottom-0 ml-64 mb-0 z-0 w-1/3"
          src="@/assets/images/polygon2.png"
          alt="Image - Polygone 2"
        />
        <div class="flex flex-row w-11/12 justify-between my-20">
          <div class="flex flex-col gap-8">
            <div class="text-yellow-400 text-3xl md:text-5xl font-bold z-10">
              Des soldes et des promotions
            </div>
            <div class="text-white text-3xl md:text-5xl font-bold z-10">
              imbattables sur votre market !
            </div>
            <div class="text-white text-2xl md:text-4xl font-normal z-10">
              Juste pour vous et rien que pour vous...
            </div>
            <button
              class="w-48 md:w-64 bg-blue-900 text-white text-lg md:text-xl hover:bg-blue-400 font-semibold rounded-xl z-10 p-4"
            >
              Ca se passe ici !!!
            </button>
          </div>
        </div>
        <img
          class="absolute right-0 bottom-0 mr-14 mb-0 hidden md:block w-1/3 2xl:w-1/5"
          src="@/assets/images/man.png"
          alt="Image - Man"
        />
      </div>
      <div class="flex flex-col gap-10 items-center my-16 py-10 w-full h-auto">
        <div class="flex flex-col w-11/12 gap-10 justify-between">
          <div class="flex flex-col gap-2">
            <div class="text-green-400 text-xl font-bold">
              LA MINUTE BLOGGEUR
            </div>
            <div class="font-bold">Quand de la lecture vous aide à choisir</div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div
              class="col-span-1 flex flex-col gap-4 bg-green-300 rounded-lg p-2"
            >
              <img
                class="w-full"
                src="@/assets/images/image-blog-1.png"
                alt="Image - Blog 1"
              />
              <div class="w-5/6 font-semibold text-white text-lg mx-auto">
                5 raisons d’acheter nos produits avec de la crypto
              </div>
            </div>
            <div
              class="col-span-1 flex flex-col gap-4 bg-green-300 rounded-lg p-2"
            >
              <img
                src="@/assets/images/image-blog-2.png"
                alt="Image - Blog 2"
              />
              <div class="w-5/6 font-semibold text-white text-lg mx-auto">
                La nouvelle technologie à prix imbattable en ce moment...
              </div>
            </div>
            <div
              class="row-span-2 flex flex-col gap-4 bg-green-300 rounded-lg p-2"
            >
              <img
                src="@/assets/images/image-blog-5.png"
                alt="Image - Blog 5"
              />
              <div class="w-5/6 font-semibold text-white text-lg mx-auto">
                Comment prendre soin de son élevage en ces temps de sécheresse ?
              </div>
            </div>
            <div
              class="col-span-1 flex flex-col gap-4 bg-green-300 rounded-lg p-2"
            >
              <img
                src="@/assets/images/image-blog-3.png"
                alt="Image - Blog 3"
              />
              <div class="w-5/6 font-semibold text-white text-lg mx-auto">
                Des recettes à tester en famille pour les fêtes
              </div>
            </div>
            <div
              class="col-span-1 flex flex-col gap-4 bg-green-300 rounded-lg p-2"
            >
              <img
                src="@/assets/images/image-blog-4.png"
                alt="Image - Blog 4"
              />
              <div class="w-5/6 font-semibold text-white text-lg mx-auto">
                Entretenir vos plantes: la technique ultime
              </div>
            </div>
          </div>
          <div class="flex flex-row-reverse">
            <button
              class="bg-blue-900 hover:bg-blue-400 rounded-lg text-white px-6 py-3"
            >
              Découvrer nos articles
            </button>
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
import CarouselArticle from "@/components/CarouselArticle.vue";
import Carousel from "@/components/Carousel.vue";
import Article from "@/components/Article.vue";
export default {
  data() {
    return {
      slides: 5,
      offres: [
        {
          pourcentage: "60",
          limite: "50,000",
        },
        {
          pourcentage: "30",
          limite: "25,000",
        },
        {
          pourcentage: "10",
          limite: "10,000",
        },
      ],
    };
  },
  components: {
    Header,
    Footer,
    Carousel,
    CarouselArticle,
    Article,
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .home {
    display: flex;
    align-items: center;
  }
}
.bg-image-background {
  background-image: url("@/assets/images/image-background.png");
}
.bg-image-background-2 {
  background-image: url("@/assets/images/image-background-2.png");
}
</style>
