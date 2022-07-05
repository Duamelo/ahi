<template>
  <div class="blog flex flex-col w-full bg-gray-100">
    <Header class="bg-white w-full"></Header>

    <div
      class="flex flex-col gap-12 w-11/12 2xl:w-3/4 items-center mx-auto my-16"
    >
      <div class="flex flex-col gap-3 w-full items-center">
        <div
          class="w-full md:w-2/5 text-3xl 2xl:text-4xl text-blue-900 text-center font-bold"
        >
          Des recettes simples et faciles à faire en famille
        </div>
        <div class="text-black text-lg 2xl:text-2xl font-bold">
          Temps de lecture: <span class="font-normal">4min</span>
        </div>
        <div
          class="w-full md:w-3/5 text-lg 2xl:text-2xl text-green-300 text-center font-bold"
        >
          Des délices à souhait pour votre palais qui ne demandent que de finir
          dans votre estomac
        </div>
        <div class="w-full">
          <img
            class="w-full"
            src="@/assets/images/img_blogpost_1.png"
            alt="Image - Blogpost 1"
          />
        </div>
        <div class="text-black text-lg 2xl:text-2xl font-bold">
          Ecrit par: <span class="font-normal">John Doe</span>
        </div>
      </div>
      <div class="flex flex-col md:flex-row justify-between gap-5">
        <div class="flex flex-col gap-12 w-full md:w-5/6 items-start">
          <div class="flex flex-col gap-3">
            <div
              class="w-full md:w-3/5 text-2xl 2xl:text-3xl text-green-300 font-bold"
            >
              Comment faire des repas en fonction de son budget ?
            </div>
            <div class="text-xl text-black font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam
              tellus iaculis vestibulum, elementum eu. Commodo ornare nibh
              hendrerit porttitor diam ipsum donec sed amet. Viverra nam non
              nunc cursus. Neque massa, lectus bibendum interdum urna, at
              magna.<br /><br />
              Massa sed sed sed dui id ullamcorper integer egestas adipiscing.
              Adipiscing ac enim facilisi quis dolor, phasellus ullamcorper. A,
              ullamcorper in ullamcorper in egestas tincidunt velit. Tellus
              mollis senectus mauris leo quam. Faucibus ut id pharetra semper.
              Sapien dictum placerat et, ultrices fringilla etiam vestibulum at.
              Nulla scelerisque quisque metus, ut platea elementum purus.
              Condimentum sodales in urna, porta et sit dictumst. Proin viverra
              amet vitae faucibus commodo in.<br /><br />
              Purus egestas egestas sagittis molestie lorem ultrices vitae.
              Vulputate mauris molestie pretium hac. Duis vel, eu interdum
              tellus. Dolor non viverra vel elementum. Mauris.
            </div>
          </div>
          <div class="flex flex-col md:flex-row gap-5">
            <div class="w-full md:w-1/2 2xl:w-full">
              <img
                src="@/assets/images/img_blogpost_2.png"
                alt="Images - Blogpost 2"
              />
            </div>
            <div class="w-full md:w-1/2 text-xl text-black font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              tellus egestas fames nulla tortor suspendisse. A orci, aliquam,
              ipsum est in fusce nunc. Id vitae id odio morbi sed mauris
              senectus at. Amet, mus tortor sit dui. Viverra duis eleifend nunc
              maecenas morbi cursus donec. Eu enim, ac eget condimentum eget eu.
              Nisl, est sed ut enim elementum ultricies.<br />
              Est nibh enim augue augue amet non mattis senectus eget. Dolor
              eget lacinia augue posuere elit malesuada. Felis donec tortor
              turpis diam.
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <div class="w-full text-2xl 2xl:text-3xl text-green-300 font-bold">
              Une façon d’apprécier les meilleurs plats avec un max de
              ressources
            </div>
            <div class="text-xl text-black font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              neque, euismod tellus phasellus quis cras at dolor urna. Pulvinar
              eu, massa sed pellentesque. Facilisi ipsum amet nibh tellus mattis
              fames commodo, sit massa. Ullamcorper adipiscing amet, eu
              facilisis adipiscing ipsum. Facilisi urna tristique semper
              ullamcorper morbi urna purus. Mollis scelerisque id posuere nec
              dictum ut. Aenean facilisis mauris venenatis massa habitant at.
              Nisl, duis varius quam tellus in vitae tortor. Pellentesque id
              ornare libero nunc.<br /><br />
              Nunc feugiat dolor, at augue. Praesent euismod convallis ipsum
              donec tristique sed praesent proin ultricies.<br /><br />
              Non ut et nisi, adipiscing turpis nisi convallis vitae. Tellus
              praesent adipiscing vulputate scelerisque velit sit magna feugiat.
              Id vulputate aliquam ut nunc in condimentum diam. Quam magna enim,
              consectetur consectetur. Augue id commodo venenatis adipiscing
              morbi. Enim commodo praesent eleifend at enim eu ut malesuada.
              Lacus hendrerit nulla cursus enim sed in. Magna malesuada ultrices
              fusce velit nunc mi condimentum porttitor. Ut turpis malesuada et
              lobortis sed at nisl, in. Fusce nam viverra orci egestas nunc
              blandit lectus tempus, molestie. Volutpat mattis lobortis
              consectetur egestas. Mauris rhoncus cras sed diam suspendisse
              mattis. Mattis velit in scelerisque purus feugiat duis in dolor
              nunc. Urna, viverra tempor, morbi elit at nunc libero enim vel.
              Sit dignissim accumsan suspendisse nisi, quis. Id blandit at
              sapien convallis erat sed ultricies sed. Dignissim congue diam
              mauris, euismod ut amet, vivamus tortor, scelerisque. Tristique
              bibendum bibendum a a viverra phasellus mauris. Consectetur nunc
              in pellentesque egestas mi in nulla nulla risus. Eget semper
              lacinia adipiscing blandit proin tempus. Tempus id bibendum
              maecenas amet donec leo. Malesuada ullamcorper sem sit augue
              iaculis lorem nunc.
            </div>
          </div>
          <div class="flex flex-row w-full justify-between">
            <button
              class="flex items-center gap-3 text-white text-sm md:text-xl font-bold bg-green-300 rounded-lg p-2 md:p-3"
            >
              <img
                src="@/assets/icons/ic_back_white.svg"
                alt="Icône - Back white"
              />
              Astuces du jour
            </button>
            <button
              class="flex items-center gap-3 text-white text-sm md:text-xl font-bold bg-blue-900 rounded-lg p-2 md:p-3"
            >
              Bien vendre sur AHI
              <img
                src="@/assets/icons/ic_next_white.svg"
                alt="Icône - Back white"
              />
            </button>
          </div>
        </div>

        <div class="flex md:flex-col gap-4 mt-10">
          <button
            class="flex w-14 h-14 justify-center items-center bg-blue-900 rounded-lg"
          >
            <img
              src="@/assets/icons/ic_facebook_2.svg"
              alt="Icône - Facebook 2"
            />
          </button>
          <button
            class="flex w-14 h-14 justify-center items-center bg-blue-900 rounded-lg"
          >
            <img
              src="@/assets/icons/ic_twitter_2.svg"
              alt="Icône - Twitter 2"
            />
          </button>
          <button
            class="flex w-14 h-14 justify-center items-center bg-blue-900 rounded-lg"
          >
            <img
              src="@/assets/icons/ic_instagram_2.svg"
              alt="Icône - Instagram 2"
            />
          </button>
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
    Footer
  },
};
</script>

<style>
@media (min-width: 1024px) {
  .blog {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
