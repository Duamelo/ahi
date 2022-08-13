<template>
  <div class="category flex flex-col w-full bg-gray-100">
    <Header class="bg-white w-full"></Header>
    <div class="container">
      <div class="layout">
        <div class="filtres">
          <div class="filtre flex-row items-center">
            <label class="badge ml-3"> 0 </label>
            <label class="title"> Filtres sélectionnés </label>
          </div>
          <div class="filtre">
            <h3 class="title">Tri selon</h3>
            <div class="flex items-center font-bold gap-2">
              <input type="radio" name="tri" /> Pertinence
            </div>
            <div class="flex items-center font-bold gap-2">
              <input type="radio" name="tri" /> Prix: dans l’ordre croissant
            </div>
            <div class="flex items-center font-bold gap-2">
              <input type="radio" name="tri" /> Prix: dans l’ordre décroissant
            </div>
            <div class="flex items-center font-bold gap-2">
              <input type="radio" name="tri" /> Meilleures notes
            </div>
          </div>
          <div class="filtre flex-row items-center">
            <h3 class="title">Livraison gratuite</h3>
            <input type="checkbox" name="livraison" />
          </div>
          <div class="filtre">
            <h3 class="title">Prix</h3>
            <div class="flex flex-col md:flex-row gap-4 mdgap-3">
              <div class="flex flex-col md:w-2/5 bg-gray-200 px-2 rounded-lg">
                <span class="font-medium text-sm">Minimum</span>
                <input
                  class="w-full font-medium bg-gray-200"
                  type="text"
                  value="60000"
                  name="minPrice"
                />
              </div>
              <div class="flex flex-col md:w-2/5 bg-gray-200 px-2 rounded-lg">
                <span class="font-medium text-sm">Maximum</span>
                <input
                  class="w-full font-medium bg-gray-200"
                  type="text"
                  value="560000"
                  name="minPrice"
                />
              </div>
            </div>
          </div>
          <div class="filtre">
            <h3 class="title">Notes</h3>
            <div class="flex flex-col gap-3">
              <div class="flex flex-row gap-3 items-center">
                <input type="checkbox" name="note1" />
                <div class="flex flex-col gap-1 xl:flex-row">
                  <div class="flex flex-row gap-1">
                    <img
                      class="w-1/5"
                      v-for="i in 3"
                      :key="i"
                      src="@/assets/icons/ic_star_yellow.svg"
                      alt="Icône - Star"
                    />
                    <img
                      class="w-1/5"
                      v-for="i in 2"
                      :key="i"
                      src="@/assets/icons/ic_star_white.svg"
                      alt="Icône - Star 2"
                    />
                  </div>
                  <span class="font-medium pl-0 xl:pl-5">3 et plus</span>
                </div>
              </div>
              <div class="flex flex-row gap-3 items-center">
                <input type="checkbox" name="note2" />
                <div class="flex flex-col gap-1 xl:flex-row">
                  <div class="flex flex-row gap-1">
                    <img
                      class="w-1/5"
                      v-for="i in 4"
                      :key="i"
                      src="@/assets/icons/ic_star_yellow.svg"
                      alt="Icône - Star"
                    />
                    <img
                      class="w-1/5"
                      v-for="i in 1"
                      :key="i"
                      src="@/assets/icons/ic_star_white.svg"
                      alt="Icône - Star 2"
                    />
                  </div>
                  <span class="font-medium pl-0 xl:pl-5">4 et plus</span>
                </div>
              </div>
            </div>
          </div>
          <div class="filtre">
            <h3 class="title">Marques</h3>
            <div class="flex flex-col gap-1">
              <div
                v-for="i in marques.length"
                :key="i"
                class="flex flex-row gap-3 items-center"
              >
                <input type="checkbox" name="marque" />
                <span class="font-medium">{{ marques[i - 1] }}</span>
              </div>
            </div>
          </div>
          <div class="filtre">
            <h3 class="title">Disponibilité</h3>
            <div class="flex flex-col gap-1">
              <div class="flex flex-row gap-3 items-center">
                <input type="checkbox" name="localement" />
                <span class="font-medium">Localement</span>
              </div>
              <div class="flex flex-row gap-3 items-center">
                <input type="checkbox" name="importation" />
                <span class="font-medium">Importation</span>
              </div>
            </div>
          </div>
        </div>
        <div class="results">
          <h1 class="text-xl md:text-2xl font-bold mx-3 md:mx-0">
            Commençons avec cette sélection
          </h1>
          <div class="article">
            <ArticleCard
              v-for="i in 9"
              :key="i"
              :title="titles[i - 1]"
              :desc="descs[i - 1]"
              :nbrEtoiles="nbrEtoiles[i - 1]"
              :nbrAvis="nbrAvis[i - 1]"
            >
            </ArticleCard>
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
import ArticleCard from "@/components/ArticleCard.vue";
export default {
  data() {
    return {
      marques: [
        "Helwett Packard",
        "Asus",
        "DeLL",
        "Acer",
        "Chromebook",
        "Macbook",
      ],
      titles: [
        "HP Pavillon 15-eg0006nf",
        "HP ENVY 13-ba1067nf",
        "OMEN HP 17-ck0070nf",
        "Dell Vostro 3558 Core i5",
        "HP EliteBook Folio 1040 G3",
        "DELL Latitude 5000/5400",
        "Acer ENDURO Urban N3",
        " Acer Swift 3-sf31651",
        "Acer Aspire 5",
      ],
      descs: [
        'Intel® Core™ i38 Go - RAM512 Go - Disque SSD15.6" - FHDCarte graphique Intel® UHD',
        'Intel® Core™ i7- 16 Go RAM- 1 To Disque SSD- 13.3" - FHDCarte graphique Intel® Iris® Xᵉ',
        'Intel® Core™ i7- 16 Go RAM- 1 To Disque SSD- 17.3"-  FHDNVIDIA® GeForce RTX™ 3060',
        "Intel Core i5 5200U / 2.2 GHz - 4 Go RAM -1366 x 768 (HD)- 1 To HDD SATA- Intel HD Graphics 5500",
        "Intel Core i5 6300U- 8 Go RAM- M2SATA 250 Go- 1920x1080- LED - Intel HD Graphics 4500",
        "Intel Core i5 8265U / 1.6 GHz- 8 Go RAM- 1920 x 1080 (Full HD)- 256 Go SSD (NVMe)- Intel UHD Graphics 620",
        "11th Gen Intel® Core™ i7-  NVIDIA® GeForce® MX330- 1TB SSD- 32 GB RAM- 14-inch FHD (1920 x 1080)",
        "11th Gen Intel® Core™ i7-  NVIDIA® GeForce® MX330- PCle Gen 4 SSD- 16 GB RAM- 16-inch FHD (1920 x 1080)",
        "11th Gen Intel® Core™ i7-  NVIDIA® GeForce® MX350- M.2 PCle SSD- 24 GB RAM- 17-inch FHD (1920 x 1080)",
      ],
      nbrEtoiles: [4, 3, 5, 3, 4, 3, 3, 5, 3],
      nbrAvis: [100, 99, 10, 29, 30, 109, 80, 95, 99],
    };
  },
  components: {
    Header,
    Footer,
    ArticleCard,
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .category {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.container {
  display: flex;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  flex-direction: column;
  align-items: center;
  width: 91.666667%;
  gap: 3rem;
}

.layout {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2.5rem;
}

.filtres {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
}
.badge {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: #c4c4c4;
  color: black;
  font-weight: 600;
  font-size: 20px;
  align-items: center;
  border-radius: 0.5rem;
}

.title {
  color: #1e3c87;
  font-size: 20px;
  font-weight: 600;
}

.filtre {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background-color: #ffffff;
  width: 100%;
  border-radius: 0.5rem;
  grid-column: span 1 / span 1;
  gap: 1rem;
}
.results {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2rem;
}

.article {
  display: grid;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 2.5rem;
  width: 100%;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
}

@media (min-width: 768px) {
  .container {
    margin-top: 4rem;
    margin-bottom: 4rem;
  }
  .layout {
    flex-direction: row;
  }
  .filtres {
    display: flex;
    flex-direction: column;
    width: 29%;
  }
  .filtre {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 2.5rem;
  }
  .results {
    align-items: flex-start;
    width: 75%;
  }
  .article {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (min-width: 1280px) {
  .article {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
</style>
