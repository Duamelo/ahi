<template>
  <div class="register flex flex-col bg-gray-100">
    <Header class="bg-white w-full"></Header>

    <div class="flex flex-col gap-12 w-5/6 2xl:w-3/4 mx-auto my-10">
      <div class="flex flex-col gap-2 w-1/2 text-black text-center mx-auto">
        <span class="text-2xl 2xl:text-3xl font-bold">
          Finalisons votre authentification
        </span>
        <span class="text-xl 2xl:text-3xl font-normal">
          Merci de renseigner avec exactitude vos infomartions..
        </span>
      </div>
      <div class="grid grid-cols-2 gap-10">
        <div
          class="col-span-1 flex flex-col gap-10 bg-white rounded shadow-lg p-10"
        >
          <span
            class="w-11/12 ahi-green text-2xl 2xl:text-4xl font-semibold mx-auto"
          >
            Informations personnelles
          </span>
          <div class="flex flex-col gap-10">
            <input
              class="w-11/12 text-xl 2xl:text-3xl rounded border py-2 px-5 mx-auto"
              type="text"
              name="nom"
              placeholder="Nom"
            />
            <input
              class="w-11/12 text-xl 2xl:text-3xl rounded border py-2 px-5 mx-auto"
              type="text"
              name="prenoms"
              placeholder="Prénoms"
            />
            <input
              class="w-11/12 text-xl 2xl:text-3xl rounded border py-2 px-5 mx-auto"
              type="date"
              name="dateDeNaissance"
              placeholder="Date de naissance"
            />
            <input
              class="w-11/12 text-xl 2xl:text-3xl rounded border py-2 px-5 mx-auto"
              type="text"
              name="lieuResidence"
              placeholder="Lieu de résidence"
            />
            <input
              class="w-11/12 text-xl 2xl:text-3xl rounded border py-2 px-5 mx-auto"
              type="text"
              name="IFU"
              placeholder="IFU {Facultatif}"
            />
          </div>
        </div>
        <div
          class="col-span-1 flex flex-col gap-10 bg-white rounded shadow-lg p-10 my-12"
        >
          <span
            class="w-11/12 ahi-green text-2xl 2xl:text-4xl font-semibold mx-auto"
          >
            Vérification
          </span>
          <div class="flex flex-col gap-10">
            <input
              class="w-11/12 text-xl 2xl:text-3xl rounded border py-2 px-5 mx-auto"
              type="text"
              name="idCommercant"
              placeholder="ID de commercant"
            />
            <input
              class="w-11/12 text-xl 2xl:text-3xl rounded border py-2 px-5 mx-auto"
              type="text"
              name="insererPiece"
              placeholder="Veuillez insérer la pièce ici"
            />
            <input
              class="w-11/12 text-xl 2xl:text-3xl rounded border py-2 px-5 mx-auto"
              type="text"
              name="code2PA"
              placeholder="Code 2PA"
            />
          </div>
          <div class="flex flex-row-reverse px-4">
            <button
              class="bg-blue-900 text-white text-xl text-center font-semibold rounded py-2.5 px-4"
            >
              Création de compte
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
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
@media (min-width: 1024px) {
  .register {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.ahi-green {
  color: #29b9ad;
}

</style>
