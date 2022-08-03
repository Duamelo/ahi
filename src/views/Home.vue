<template>
  <div
    class="
      home
      flex flex-col
      items-center
      w-full
      overflow-auto
      bg-no-repeat
      relative
      bg-gray-100
    "
  >
    <Header class="bg-white w-full"></Header>
    <div class="flex flex-col w-full">
      <div class="w-full my-1">
        <Carousel
          class="mx-auto my-2 p-11"
          :size="count"
          v-model:index="index"
          :limit="limit"
        >
          <div class="my-2">
            <div class="w-full bg-blue-900 rounded-xl py-10">
              <div class="flex flex-col gap-10">
                <div
                  class="
                    flex
                    md:w-auto
                    text-white text-2xl text-center
                    font-semibold
                    mx-auto
                  "
                >
                  Jusqu’à 60% de réduction sur de nombreux articles
                </div>
                <CarouselArticle :index="index">
                  <div class="flex justify-around gap-2" :key="index">
                    <Reduction
                      v-for="(reduction, key) in offres"
                      :key="key"
                      :reduction="reduction"
                    />
                  </div>
                </CarouselArticle>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <div
        class="
          flex flex-col
          gap-4
          md:gap-10
          items-center
          my-1
          py-10
          bg-image-background
          w-full
          h-auto
        "
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
          <div class="bg-white">
            <router-link
              to="/category"
              class="button-outlined flex items-center px-4"
            >
              <MenuIcon />
            </router-link>
          </div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 w-11/12 gap-x-16 gap-y-4">
          <Category
            v-for="(category, index) in categories"
            :key="index"
            :category="category"
          />
        </div>
      </div>
      <div
        class="
          flex flex-col
          gap-10
          items-center
          my-16
          py-10
          bg-image-background-2
          w-full
          h-auto
        "
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
        </div>
        <div class="flex flex-col md:flex-row w-11/12 gap-10">
          <Article
            v-for="(article, index) in topArticles"
            :article="article"
            :key="index"
          />
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
        </div>
        <div class="brands">
          <brand
            className="brand"
            v-for="brand in brands"
            :key="brand.brand"
            :bg="brand.bg"
            :brand="brand.brand"
            :logo="brand.logo"
          />
        </div>
      </div>
      <div
        class="
          flex flex-col
          gap-10
          items-center
          my-1
          py-10
          bg-image-background
          w-full
          h-auto
        "
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
          class="
            grid grid-cols-2
            gap-5
            md:flex md:flex-row md:w-10/12 md:justify-between
          "
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
        class="
          relative
          flex flex-col
          gap-10
          items-center
          my-16
          bg-blue-500
          w-full
        "
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
            <router-link
              to="/category"
              class="
                w-48
                md:w-64
                bg-blue-900
                text-white text-lg
                md:text-xl
                hover:bg-blue-400
                font-semibold
                rounded-xl
                z-10
                p-4
              "
            >
              Ca se passe ici !!!
            </router-link>
          </div>
        </div>
        <img
          class="
            absolute
            right-0
            bottom-0
            mr-14
            mb-0
            hidden
            md:block
            w-1/3
            2xl:w-1/5
          "
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
            <BlogPostThumb
              class="col-span-1"
              id="1"
              src="/ahi-frontend/src/assets/images/image-blog-1.png"
            >
              5 raisons d’acheter nos produits avec de la crypto
            </BlogPostThumb>
            <BlogPostThumb
              class="col-span-1"
              src="/ahi-frontend/src/assets/images/image-blog-2.png"
            >
              La nouvelle technologie à prix imbattable en ce moment...
            </BlogPostThumb>
            <BlogPostThumb
              class="row-span-2"
              src="/ahi-frontend/src/assets/images/image-blog-5.png"
            >
              Comment prendre soin de son élevage en ces temps de sécheresse ?
            </BlogPostThumb>
            <BlogPostThumb
              class="col-span-1"
              src="/ahi-frontend/src/assets/images/image-blog-3.png"
            >
              Des recettes à tester en famille pour les fêtes
            </BlogPostThumb>
            <BlogPostThumb
              class="col-span-1"
              src="/ahi-frontend/src/assets/images/image-blog-4.png"
            >
              Entretenir vos plantes: la technique ultime
            </BlogPostThumb>
          </div>
          <div class="flex flex-row-reverse">
            <router-link
              to="/blogpost"
              class="
                bg-blue-900
                hover:bg-blue-400
                rounded-lg
                text-white
                px-6
                py-3
              "
            >
              Découvrer nos articles
            </router-link>
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
import Brand from "../components/home/brand.vue";
import Reduction from "../components/home/reduction.vue";
import { faker } from "@faker-js/faker";
import { MenuIcon } from "@heroicons/vue/outline";
import Category from "../components/home/category.vue";
import BlogPostThumb from "../components/home/BlogPostThumb.vue";
export default {
  computed: {
    count() {
      return this._offres.length;
    },
    offres() {
      let trueIndex = this.index * 3;
      return this._offres.slice(trueIndex, trueIndex + 3);
    },
  },
  data() {
    let offres = Array.from(Array(20), () => {
      return {
        pourcentage: faker.datatype.number(60),
        limite: faker.datatype.number({ min: 10000, max: 100000 }),
        code: faker.name.jobArea(),
      };
    });
    let topArticles = Array.from(Array(4), () => {
      return {
        note: faker.datatype.number({ min: 3, max: 5 }),
        price: faker.datatype.number({ min: 10000, max: 100000 }),
        review: faker.datatype.number(99),
        name: faker.commerce.productName(),
        src: faker.image.business(),
      };
    });
    return {
      limit: 3,
      topArticles,
      categories: [
        {
          src: "/ahi-frontend/src/assets/icons/ic_produitsAlimentaires.svg",
          alt: "Alimetaire",
          label: "Produits alimentaires",
        },
        {
          src: "/ahi-frontend/src/assets/icons/ic_vetements.svg",
          alt: "Icône - Catégories",
          label: "Vêtements et lingerie",
        },
        {
          src: "/ahi-frontend/src/assets/icons/ic_telephones.svg",
          alt: "Icône - Catégories",
          label: "Téléphones & accessoires",
        },
        {
          src: "/ahi-frontend/src/assets/icons/ic_huileries.svg",
          alt: "Icône - Catégories",
          label: "Huileries & Epices",
        },
        {
          src: "/ahi-frontend/src/assets/icons/ic_lessive.svg",
          alt: "Icône - Catégories",
          label: "Lessive et accesoires",
        },
        {
          src: "/ahi-frontend/src/assets/icons/ic_tvs.svg",
          alt: "Icône - Catégories",
          label: "TVs & Enceintes",
        },
        {
          src: "/ahi-frontend/src/assets/icons/ic_terroir.svg",
          alt: "Icône - Catégories",
          label: "Produits du terroir",
        },
        {
          src: "/ahi-frontend/src/assets/icons/ic_hygiene.svg",
          alt: "Icône - Catégories",
          label: "Hygiène & Beauté",
        },
        {
          src: "/ahi-frontend/src/assets/icons/ic_sportifs.svg",
          alt: "Icône - Catégories",
          label: "Sportifs du dimanche",
        },
        {
          src: "/ahi-frontend/src/assets/icons/ic_cuisine.svg",
          alt: "Icône - Catégories",
          label: "Cuisine et ustensiles",
        },
        {
          src: "/ahi-frontend/src/assets/icons/ic_boissons.svg",
          alt: "Icône - Catégories",
          label: "Boissons & alcools",
        },
        {
          src: "/ahi-frontend/src/assets/icons/ic_meubles.svg",
          alt: "Icône - Catégories",
          label: "Meubles & Arts",
        },
      ],
      brands: [
        {
          bg: "/ahi-frontend/src/assets/images/img_nike.png",
          brand: "Nike",
          logo: "/ahi-frontend/src/assets/icons/ic_nike_3.svg",
        },
        {
          bg: "/ahi-frontend/src/assets/images/img_apple.png",
          brand: "Apple",
          logo: "/ahi-frontend/src/assets/icons/ic_apple.svg",
        },
        {
          bg: "/ahi-frontend/src/assets/images/img_adidas.png",
          brand: "Adidas",
          logo: "/ahi-frontend/src/assets/icons/ic_adidas.svg",
        },
        {
          bg: "/ahi-frontend/src/assets/images/img_mi.png",
          logo: "/ahi-frontend/src/assets/icons/ic_mi.svg",
          brand: "Mi",
        },
        {
          bg: "/ahi-frontend/src/assets/images/img_nivea.png",
          brand: "Nivea",
          logo: "/ahi-frontend/src/assets/icons/ic_nivea.svg",
        },
        {
          bg: "/ahi-frontend/src/assets/images/img_decathlon.png",
          brand: "Decathlon",
          logo: "/ahi-frontend/src/assets/icons/ic_decathlon.svg",
        },
        {
          bg: "/ahi-frontend/src/assets/images/img_ikea.png",
          brand: "Ikea",
          logo: "/ahi-frontend/src/assets/icons/ic_ikea.svg",
        },
        {
          bg: "/ahi-frontend/src/assets/images/img_converse.png",
          brand: "Converse",
          logo: "/ahi-frontend/src/assets/icons/ic_converse.svg",
        },
      ],
      slides: 5,
      _offres: offres,
      index: 0,
    };
  },
  components: {
    Brand,
    Reduction,
    BlogPostThumb,
    MenuIcon,
    Header,
    Footer,
    Carousel,
    Category,
    CarouselArticle,
    Article,
  },
};
</script>

<style scoped>
.hover-card {
  box-shadow: 3px 5px 4px rgb(0 0 0 / 50%);
}
.hover-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
@media (min-width: 1024px) {
  .home {
    display: flex;
    align-items: center;
  }
}
.brands {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

/* XL */
@media (min-width: 1200) {
  .brand {
    margin: 10px;
    width: 15%;
  }
}

/* Laptop  and Tablet */
@media (min-width: 870px) and (max-width: 1200px) {
  .brand {
    margin: 10px;
    min-width: 20%;
  }
}
/* Mobile */
@media (max-width: 425px) {
  .brand {
    margin: 10px;
    min-width: 40%;
  }
}

.bg-image-background {
  background-image: url("@/assets/images/image-background.png");
}
.bg-image-background-2 {
  background-image: url("@/assets/images/image-background-2.png");
}
</style>
