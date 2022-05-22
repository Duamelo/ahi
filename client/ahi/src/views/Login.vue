<template>
  <div class="login flex flex-col bg-gray-100">
    <div class="flex flex-row justify-between w-full bg-white p-10">
      <button class="flex flex-row gap-4" @click="$router.go(-1)">
        <span>
          <img src="@/assets/icons/ic_back.svg" alt="Icône - Retour" />
        </span>
        <span class="text-black text-xl font-semibold"> Retour </span>
      </button>
      <img
        class="w-12 h-auto"
        src="@/assets/icons/ic_ahi_2.svg"
        alt="Icône - AHI 2"
      />
      <div class="w-1/12"></div>
    </div>

    <div class="flex flex-col gap-12 w-5/6 2xl:w-3/4 mx-auto my-20">
      <div class="flex flex-col w-1/2 ahi-green text-center mx-auto">
        <span class="text-3xl 2xl:text-4xl font-semibold">Bon retour !!!</span>
        <span class="text-lg 2xl:text-2xl font-normal"
          >Nous espérions que vous reviendrez</span
        >
      </div>

      <div class="grid grid-cols-2 gap-10">
        <div
          class="col-span-1 flex flex-col gap-10 bg-white rounded shadow-lg p-10"
        >
          <span
            class="flex w-1/2 text-black text-xl 2xl:text-3xl text-center font-semibold mx-auto"
          >
            Un fervent client ?
          </span>
          <div class="flex flex-col gap-6">
            <input
              class="w-11/12 text-xl 2xl:text-3xl rounded border py-2 px-5 mx-auto"
              type="text"
              name="email"
              placeholder="Adresse mail"
            />
            <input
              class="w-11/12 text-xl 2xl:text-3xl rounded border py-2 px-5 mx-auto"
              type="password"
              name="password"
              placeholder="Mot de passe"
            />
            <router-link
              class="w-1/2 underline text-lg 2xl:text-2xl text-center font-medium ahi-green mx-auto"
              to=""
            >
              Mot de passe oublié ?
            </router-link>
            <div class="flex flex-row gap-3 w-3/5 justify-center mx-auto">
              <input
                class="my-2"
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
              />
              <div class="text-black text-xl 2xl:text-3xl font-semibold">
                Se souvenir de moi
              </div>
            </div>
            <button
              class="w-3/5 bg-blue-900 text-white text-xl text-center font-semibold rounded py-2.5 mx-auto"
            >
              Connexion
            </button>
          </div>
          <router-link
            class="w-1/2 text-lg 2xl:text-3xl text-center font-medium ahi-green mx-auto"
            to=""
          >
            Plutôt un vendeur ?
          </router-link>
        </div>
        <div
          class="col-span-1 flex flex-col gap-2 bg-white rounded shadow-lg p-10"
        >
          <div class="flex flex-col gap-1 w-2/3 font-semibold mx-auto">
            <span
              class="flex text-black text-xl 2xl:text-3xl text-center mx-auto"
            >
              Vous êtes nouveau ici ?
            </span>
            <span
              class="flex text-gray-500 text-lg 2xl:text-xl text-center mx-auto"
            >
              Heureux de vous compter parmi nous
            </span>
          </div>
          <div class="flex flex-col w-11/12 font-semibold mx-auto">
            <div class="w-full text-lg 2xl:text-xl text-center">
              La hyper_marketplace vous ouvre ses portes. AHI est la solution
              offerte pour votre commerce. Qu’attendez vous pour créer un compte
              ?
            </div>
            <img
              class="w-4/5 mx-auto"
              src="@/assets/images/img_create_project.png"
              alt="Image - Création de compte"
            />
            <button
              class="w-3/5 bg-blue-900 text-white text-xl text-center font-semibold rounded py-2.5 mx-auto"
              @click="$router.push('/register')"
            >
              Créer un compte
            </button>
          </div>
        </div>
        <div class="col-span-2 bg-white rounded shadow-lg py-4">
          <div class="flex flex-col gap-3 w-2/3 mx-auto">
            <div class="text-black text-xl text-center font-bold">
              En un seul clique connectez vous. Suffit de connecter votre
              compte...
            </div>
            <button
              class="w-1/5 bg-blue-900 text-white text-xl text-center font-semibold rounded-lg py-2.5 mx-auto"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>

    <Footer class="bg-blue-900 w-full rounded"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.ahi-green {
  color: #29b9ad;
}
</style>
