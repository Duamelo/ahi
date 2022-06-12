<template>
  <path-view>
    <path-item href="/dashboard"> Dashboard </path-item>
    <path-item active="true" href="/dashboard/customers">Customers</path-item>
  </path-view>
  <dashboard-card>
    <template #title>
      <input class="outlined me-3" placeholder="Rechercher par nom/e-mail" v-model="filtre" />
    </template>
    <template #left>
      <router-link :to="append($route.path, 'new')">
        <button class="btn btn-outline-primary">+</button>
      </router-link>
    </template>
    <div class="mt-2">
      <table class="table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Address Mail</th>
            <th>Status</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(customer, index) in values" 
            :key="index" class="my-4">
            <td>{{ customer.name }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.verified ? "Verifié" : "Invité" }}</td>
            <td>
              <router-link :to="append($route.path, `edit/${index}`)">
                <button>
                  <PencilIcon />
                  Modifier
                </button>
              </router-link>
            </td>
            <td>
              <button @click="delete_customer(customer.name)">
                <TrashIcon />
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <pagination
      v-model:page_index="page_index"
      v-model:limit_index="limit_index"
      :limits="limits"
      :size="customers.length"
    />
  </dashboard-card>
</template>
<style>
svg {
  height: 30px;
  margin-right: 4px;
}

button {
  display: inline-flex;
  margin-right: 10px;
}
table {
  transition-duration: 300ms;
}
</style>

<script setup>
import PathItem from "../../../components/Path/PathItem.vue";
import PathView from "../../../components/Path/PathView.vue";
import Products from "../../../components/Dashboard/Catalogues/products.vue";
import DashboardCard from "../../../components/Dashboard/DashboardCard.vue";
import Pagination from "../../../components/Dashboard/Pagination.vue";
import { TrashIcon, PencilIcon } from "@heroicons/vue/outline";
import { computed, ref } from "vue";

const limits = [10, 25, 50, 100];
const page_index = ref(0);
const limit_index = ref(1);
const filtre = ref("")
const values = computed(() =>
  Pagination.methods.values(
    customers.value,
    page_index.value,
    limits[limit_index.value]
  )
);
const customers = computed(()=> _customers.value.filter((customer) => customer.name.includes(filtre.value) || customer.email.includes(filtre.value)))
function delete_customer(customer){
  _customers.value = _customers.value.filter((c)=> c.name != customer)
}
var _customers = ref([
  {
    name: "Zane_Lehner",
    email: "Joanie_Kunze55@hotmail.com",
    verified: false,
  },
  {
    name: "Loren.Kunde61",
    email: "Reynold80@yahoo.com",
    verified: false,
  },
  {
    name: "Brad.Casper39",
    email: "Nikolas31@gmail.com",
    verified: false,
  },
  {
    name: "Callie25",
    email: "Chadrick.Ledner@yahoo.com",
    verified: false,
  },
  {
    name: "Pink_Cremin",
    email: "Lilliana_Paucek@yahoo.com",
    verified: false,
  },
  {
    name: "Joshuah.Luettgen",
    email: "Eldred.Runolfsdottir43@hotmail.com",
    verified: true,
  },
  {
    name: "Arnaldo.Walker3",
    email: "Irving_Smitham@gmail.com",
    verified: false,
  },
  {
    name: "Ken.Hoppe89",
    email: "Ward.Emmerich@gmail.com",
    verified: false,
  },
  {
    name: "Benton2",
    email: "Sebastian.Feest35@yahoo.com",
    verified: false,
  },
  {
    name: "Ahmed81",
    email: "Leora_Fay@yahoo.com",
    verified: true,
  },
  {
    name: "Johathan_Wiza17",
    email: "Darryl_Frami@hotmail.com",
    verified: false,
  },
  {
    name: "Christiana18",
    email: "Emory_Legros58@hotmail.com",
    verified: false,
  },
  {
    name: "Jermain_Blanda",
    email: "Carli40@hotmail.com",
    verified: true,
  },
  {
    name: "Leta_Howell",
    email: "Rae.Friesen47@gmail.com",
    verified: true,
  },
  {
    name: "Tatyana.Marquardt24",
    email: "Ellsworth.Rutherford@hotmail.com",
    verified: false,
  },
  {
    name: "Nia_MacGyver65",
    email: "Annette_Olson@yahoo.com",
    verified: false,
  },
  {
    name: "Amelie.Cruickshank",
    email: "Jewell.Mayert@yahoo.com",
    verified: false,
  },
  {
    name: "Kaelyn23",
    email: "Itzel_Macejkovic47@hotmail.com",
    verified: false,
  },
  {
    name: "Jovanny_Ebert",
    email: "Cristopher.Lind@hotmail.com",
    verified: true,
  },
  {
    name: "Niko_Daniel75",
    email: "Ronaldo.Bogisich@hotmail.com",
    verified: false,
  },
  {
    name: "Oren.Aufderhar",
    email: "Pascale23@gmail.com",
    verified: true,
  },
  {
    name: "Carter21",
    email: "Beth.Gerhold65@yahoo.com",
    verified: false,
  },
  {
    name: "Romaine46",
    email: "Shanel_Zboncak35@hotmail.com",
    verified: false,
  },
  {
    name: "Adelia96",
    email: "Christelle.Leuschke@hotmail.com",
    verified: true,
  },
  {
    name: "Savanna94",
    email: "Catalina.Johnson5@hotmail.com",
    verified: true,
  },
  {
    name: "Clemens4",
    email: "Hortense19@yahoo.com",
    verified: true,
  },
  {
    name: "Evalyn.McKenzie",
    email: "Zackary.Schmidt52@hotmail.com",
    verified: true,
  },
  {
    name: "Ashly_Beier78",
    email: "Pete.Rogahn@gmail.com",
    verified: false,
  },
  {
    name: "Tillman_Terry41",
    email: "Alex.Larson44@yahoo.com",
    verified: false,
  },
  {
    name: "Quinton59",
    email: "Susanna_Leuschke@yahoo.com",
    verified: true,
  },
  {
    name: "Lafayette_Donnelly1",
    email: "Ramona.Schinner69@yahoo.com",
    verified: false,
  },
  {
    name: "Clovis_Spencer14",
    email: "Lonzo30@yahoo.com",
    verified: true,
  },
  {
    name: "Rosalinda_Tromp",
    email: "Hugh21@gmail.com",
    verified: false,
  },
  {
    name: "Dorothy.Leuschke95",
    email: "Kira.Skiles83@hotmail.com",
    verified: true,
  },
  {
    name: "Michele_Heidenreich79",
    email: "Daphney.Champlin@hotmail.com",
    verified: true,
  },
  {
    name: "Alice55",
    email: "Juwan2@gmail.com",
    verified: true,
  },
  {
    name: "Samir83",
    email: "Berta.Murray49@yahoo.com",
    verified: true,
  },
  {
    name: "Diamond.Senger41",
    email: "Jeanie.OReilly29@yahoo.com",
    verified: true,
  },
  {
    name: "Kevon_Stokes61",
    email: "Arjun_Wyman53@hotmail.com",
    verified: false,
  },
  {
    name: "Petra97",
    email: "Lesley_Huel16@yahoo.com",
    verified: false,
  },
  {
    name: "Nelle25",
    email: "Madyson.Moen@gmail.com",
    verified: true,
  },
  {
    name: "Ottis9",
    email: "Xzavier.Stark@hotmail.com",
    verified: false,
  },
  {
    name: "Cornelius_Walker",
    email: "Francisco.Baumbach89@gmail.com",
    verified: false,
  },
  {
    name: "Dolores.Legros",
    email: "Vinnie_Bode92@hotmail.com",
    verified: false,
  },
  {
    name: "Bradly_Hane81",
    email: "Kade48@yahoo.com",
    verified: false,
  },
  {
    name: "Antonio_Kilback",
    email: "Gilbert78@gmail.com",
    verified: false,
  },
  {
    name: "Ofelia_Mraz",
    email: "Juston57@yahoo.com",
    verified: false,
  },
  {
    name: "Verlie.Nitzsche",
    email: "Roman77@hotmail.com",
    verified: true,
  },
  {
    name: "Westley.Collins19",
    email: "Alycia_Ullrich59@yahoo.com",
    verified: true,
  },
  {
    name: "Lorenza99",
    email: "Annabel_Turcotte14@hotmail.com",
    verified: true,
  },
  {
    name: "Josefina.Bahringer72",
    email: "Green.Connelly7@gmail.com",
    verified: false,
  },
  {
    name: "Christiana_Stanton",
    email: "Fred.Durgan82@yahoo.com",
    verified: true,
  },
  {
    name: "Marianna95",
    email: "Nelle_Rogahn68@yahoo.com",
    verified: true,
  },
  {
    name: "Augustine_Osinski1",
    email: "Colleen.Hoppe@hotmail.com",
    verified: true,
  },
  {
    name: "Wayne.Price50",
    email: "Vivienne.Berge@yahoo.com",
    verified: false,
  },
  {
    name: "Elody.Ernser",
    email: "Fausto5@hotmail.com",
    verified: false,
  },
  {
    name: "Tyra41",
    email: "Edd82@yahoo.com",
    verified: true,
  },
  {
    name: "Eleanore_Considine",
    email: "Donnie.Ullrich6@yahoo.com",
    verified: false,
  },
  {
    name: "Nettie.Boehm42",
    email: "May_Fisher56@gmail.com",
    verified: true,
  },
  {
    name: "Nels86",
    email: "Reinhold19@yahoo.com",
    verified: false,
  },
  {
    name: "Reanna22",
    email: "Rossie_Rutherford1@hotmail.com",
    verified: true,
  },
  {
    name: "Euna31",
    email: "Sandra_Jacobs97@yahoo.com",
    verified: false,
  },
  {
    name: "Josephine.Hoeger58",
    email: "Khalid.Douglas@hotmail.com",
    verified: false,
  },
  {
    name: "Caleb_Ryan38",
    email: "Jovan.Bernier@yahoo.com",
    verified: true,
  },
  {
    name: "Marlee.Runolfsdottir77",
    email: "Etha18@gmail.com",
    verified: false,
  },
  {
    name: "Lilliana_Nikolaus",
    email: "Lenna57@hotmail.com",
    verified: true,
  },
  {
    name: "Nicholas19",
    email: "Cornell.Mueller80@yahoo.com",
    verified: true,
  },
  {
    name: "Dimitri.Larson",
    email: "Ansel_Will@yahoo.com",
    verified: true,
  },
  {
    name: "Cloyd.Cummings84",
    email: "Catherine_Feil@yahoo.com",
    verified: true,
  },
  {
    name: "Nestor89",
    email: "Karine36@hotmail.com",
    verified: true,
  },
  {
    name: "Jamie94",
    email: "Bell9@gmail.com",
    verified: true,
  },
  {
    name: "Cletus51",
    email: "Melyssa81@hotmail.com",
    verified: true,
  },
  {
    name: "Elliott.Bashirian",
    email: "Avery83@hotmail.com",
    verified: false,
  },
  {
    name: "Kathlyn57",
    email: "Leslie23@hotmail.com",
    verified: true,
  },
  {
    name: "Freeman_Nikolaus",
    email: "Hellen.Miller@yahoo.com",
    verified: false,
  },
  {
    name: "Eda.Davis81",
    email: "Armand.Beatty86@yahoo.com",
    verified: false,
  },
  {
    name: "Maci.Heller",
    email: "Rory_Bashirian25@hotmail.com",
    verified: true,
  },
  {
    name: "Kayleigh15",
    email: "Susana14@gmail.com",
    verified: true,
  },
  {
    name: "Edmond.Waelchi66",
    email: "Orville81@yahoo.com",
    verified: false,
  },
  {
    name: "Ida_Jacobs",
    email: "Brooke_Abernathy2@hotmail.com",
    verified: false,
  },
  {
    name: "Jeromy_Kuvalis55",
    email: "Jeffery.Lindgren@gmail.com",
    verified: false,
  },
  {
    name: "Brown92",
    email: "Rodger_Klocko89@gmail.com",
    verified: true,
  },
  {
    name: "Frances_Shanahan31",
    email: "Ken.Boyer@yahoo.com",
    verified: true,
  },
  {
    name: "Austen_Lynch92",
    email: "Jettie.Effertz@yahoo.com",
    verified: true,
  },
  {
    name: "Estrella.Abbott35",
    email: "Kevon_Johnson63@hotmail.com",
    verified: true,
  },
  {
    name: "Forrest_Pagac14",
    email: "Lisa26@hotmail.com",
    verified: false,
  },
  {
    name: "Shanon.Wintheiser",
    email: "Sasha68@gmail.com",
    verified: false,
  },
  {
    name: "Robin_Fay",
    email: "Isaac.Wilkinson@yahoo.com",
    verified: false,
  },
  {
    name: "Kade.Bins59",
    email: "Gladys58@hotmail.com",
    verified: true,
  },
  {
    name: "Kailee_Rice45",
    email: "Corene55@gmail.com",
    verified: true,
  },
  {
    name: "Fern.Koch41",
    email: "Emile10@hotmail.com",
    verified: true,
  },
  {
    name: "Kaitlin.Marks92",
    email: "Lexie_Reynolds62@gmail.com",
    verified: true,
  },
  {
    name: "Maximilian_Wiza49",
    email: "Anabelle.OReilly97@gmail.com",
    verified: false,
  },
  {
    name: "Nat5",
    email: "Mertie.Shields@yahoo.com",
    verified: false,
  },
  {
    name: "Khalil.Parker",
    email: "Layla.Auer28@yahoo.com",
    verified: true,
  },
  {
    name: "Eugenia.Feeney",
    email: "Bulah_Howe5@gmail.com",
    verified: true,
  },
  {
    name: "Kyleigh_Carter",
    email: "Reilly.Auer4@yahoo.com",
    verified: true,
  },
  {
    name: "Marisa.Beatty",
    email: "Theresia34@gmail.com",
    verified: true,
  },
  {
    name: "Shad_West",
    email: "Verda54@hotmail.com",
    verified: false,
  },
  {
    name: "Assunta.Johnson",
    email: "Casimir_Wolf79@gmail.com",
    verified: false,
  },
  {
    name: "Darren73",
    email: "Amir_Miller@hotmail.com",
    verified: false,
  },
  {
    name: "Jamir.Dare",
    email: "Porter.Runolfsdottir@yahoo.com",
    verified: false,
  },
  {
    name: "Laverna.Strosin",
    email: "Devonte72@hotmail.com",
    verified: true,
  },
  {
    name: "Brooks_Marquardt",
    email: "Kraig_Leffler@hotmail.com",
    verified: false,
  },
  {
    name: "Erna.Rolfson",
    email: "Narciso.Rolfson@yahoo.com",
    verified: false,
  },
  {
    name: "Olin60",
    email: "Donnell_Pouros@hotmail.com",
    verified: false,
  },
  {
    name: "Joelle85",
    email: "Leone_Bins@hotmail.com",
    verified: false,
  },
  {
    name: "Pat_Hansen",
    email: "Eriberto94@hotmail.com",
    verified: true,
  },
  {
    name: "Shany_Rippin51",
    email: "Gianni17@gmail.com",
    verified: true,
  },
  {
    name: "Cheyenne13",
    email: "Velva19@gmail.com",
    verified: false,
  },
  {
    name: "Richard_Daniel",
    email: "Joel_Luettgen@gmail.com",
    verified: true,
  },
  {
    name: "Lea59",
    email: "Lane_Rodriguez51@hotmail.com",
    verified: true,
  },
  {
    name: "Hassan.Kihn",
    email: "Ofelia92@yahoo.com",
    verified: false,
  },
  {
    name: "Westley11",
    email: "Ally_OHara@gmail.com",
    verified: false,
  },
  {
    name: "Cristian65",
    email: "Christina.Graham19@gmail.com",
    verified: false,
  },
  {
    name: "Isobel.Haley",
    email: "Cruz.Harber@yahoo.com",
    verified: false,
  },
  {
    name: "Cruz_Hintz81",
    email: "Jorge.Thiel16@yahoo.com",
    verified: true,
  },
  {
    name: "Marcelo.Ernser",
    email: "Lillie_Johns67@hotmail.com",
    verified: false,
  },
  {
    name: "Addie_Glover27",
    email: "Alivia.Oberbrunner@yahoo.com",
    verified: true,
  },
  {
    name: "Nickolas14",
    email: "Shanel85@yahoo.com",
    verified: true,
  },
  {
    name: "Cornelius77",
    email: "Keyon.Steuber@gmail.com",
    verified: true,
  },
  {
    name: "Ottis.Grimes",
    email: "Arden31@hotmail.com",
    verified: false,
  },
  {
    name: "Celestino_Daniel",
    email: "Magnus86@hotmail.com",
    verified: false,
  },
  {
    name: "Casimer.Orn19",
    email: "Howard.Stokes@gmail.com",
    verified: true,
  },
  {
    name: "Jovani.Bogan",
    email: "Sister.Farrell@hotmail.com",
    verified: true,
  },
  {
    name: "Robert85",
    email: "Bennett.Hahn@hotmail.com",
    verified: false,
  },
  {
    name: "Sigrid_Conroy",
    email: "Kaylin_Jenkins67@hotmail.com",
    verified: false,
  },
  {
    name: "Westley.Ortiz78",
    email: "Orlando.Howe@hotmail.com",
    verified: false,
  },
  {
    name: "Angelita_Weber",
    email: "Greg_Connelly98@hotmail.com",
    verified: true,
  },
  {
    name: "Aidan.Fisher",
    email: "Cicero_King52@yahoo.com",
    verified: true,
  },
  {
    name: "Josiane.Franecki",
    email: "Chyna42@yahoo.com",
    verified: true,
  },
  {
    name: "Gerson23",
    email: "Clint_Torp32@yahoo.com",
    verified: true,
  },
  {
    name: "Gilbert.Reichel35",
    email: "Aubrey.Lakin@gmail.com",
    verified: true,
  },
  {
    name: "Sydni44",
    email: "Ricardo.Schultz@gmail.com",
    verified: false,
  },
  {
    name: "Emmet.Aufderhar",
    email: "Vinnie_DuBuque@hotmail.com",
    verified: true,
  },
  {
    name: "Eloisa_Bode70",
    email: "Amira.Berge40@yahoo.com",
    verified: false,
  },
  {
    name: "Joanny.Hackett",
    email: "Nichole_Ledner6@gmail.com",
    verified: true,
  },
  {
    name: "Reilly31",
    email: "Noemi_OReilly@gmail.com",
    verified: false,
  },
  {
    name: "Taya.Tillman",
    email: "Kiel_Effertz@gmail.com",
    verified: false,
  },
  {
    name: "Johnathon_Considine",
    email: "Royce_Thompson@yahoo.com",
    verified: true,
  },
  {
    name: "Lilyan_Christiansen",
    email: "Rollin_Beer76@gmail.com",
    verified: false,
  },
  {
    name: "Colt.Hoeger",
    email: "Hollie.Balistreri@hotmail.com",
    verified: false,
  },
  {
    name: "Damian_Veum51",
    email: "Arne_Harris50@gmail.com",
    verified: true,
  },
  {
    name: "Keith_Torp",
    email: "Robert_Considine@yahoo.com",
    verified: false,
  },
  {
    name: "Orlo.Bogan35",
    email: "Garth_Von88@hotmail.com",
    verified: false,
  },
  {
    name: "Bart_Greenfelder",
    email: "Zackery.Labadie@yahoo.com",
    verified: true,
  },
  {
    name: "Jefferey.Wilkinson",
    email: "London1@gmail.com",
    verified: false,
  },
  {
    name: "Meda.Rutherford",
    email: "Tess_Romaguera61@yahoo.com",
    verified: true,
  },
  {
    name: "Clovis.Rosenbaum96",
    email: "Hazle.Davis51@gmail.com",
    verified: false,
  },
  {
    name: "Quinn_Reichert22",
    email: "Emmalee_Gerhold18@hotmail.com",
    verified: false,
  },
  {
    name: "Merl57",
    email: "Ulises_Prosacco68@yahoo.com",
    verified: false,
  },
  {
    name: "Janis66",
    email: "Rosa_Orn@gmail.com",
    verified: true,
  },
  {
    name: "Humberto.Gutmann99",
    email: "Rosetta_Monahan20@gmail.com",
    verified: true,
  },
  {
    name: "Florian.McDermott62",
    email: "Kurtis.Strosin93@gmail.com",
    verified: false,
  },
  {
    name: "Chandler.Bins",
    email: "Jesus_Yundt40@gmail.com",
    verified: false,
  },
  {
    name: "Darrin5",
    email: "Caleb.Walsh@yahoo.com",
    verified: true,
  },
  {
    name: "Jeffry.Pouros15",
    email: "Gerardo.Labadie@yahoo.com",
    verified: true,
  },
  {
    name: "Lester.Gulgowski",
    email: "Gerry_Dickinson@hotmail.com",
    verified: true,
  },
  {
    name: "Lourdes93",
    email: "Karolann_Labadie@yahoo.com",
    verified: false,
  },
  {
    name: "Damian.Hirthe",
    email: "Claud2@gmail.com",
    verified: false,
  },
  {
    name: "Tess.Nolan",
    email: "Mireya79@hotmail.com",
    verified: false,
  },
  {
    name: "Sean42",
    email: "Danika.Olson46@hotmail.com",
    verified: true,
  },
  {
    name: "Patsy_Ortiz",
    email: "Zita_Watsica@yahoo.com",
    verified: true,
  },
  {
    name: "Zella_Schiller36",
    email: "Vincent.Rice@hotmail.com",
    verified: true,
  },
  {
    name: "Richmond.Haag89",
    email: "Alvah_Frami@hotmail.com",
    verified: true,
  },
  {
    name: "Emile2",
    email: "Kennith30@gmail.com",
    verified: true,
  },
  {
    name: "Lee_Yost78",
    email: "Maximus_Lind12@hotmail.com",
    verified: true,
  },
  {
    name: "Amara.Cartwright58",
    email: "Norberto33@yahoo.com",
    verified: false,
  },
  {
    name: "Joy.Mohr47",
    email: "Jon41@hotmail.com",
    verified: true,
  },
  {
    name: "Ebony81",
    email: "Nikko.Quigley@gmail.com",
    verified: false,
  },
  {
    name: "Brooklyn75",
    email: "Carmela.Homenick95@gmail.com",
    verified: true,
  },
  {
    name: "Juvenal70",
    email: "Adrian_Hudson@gmail.com",
    verified: false,
  },
  {
    name: "Josh87",
    email: "Allan_Bayer@yahoo.com",
    verified: true,
  },
  {
    name: "Sabrina_Hintz",
    email: "Chase.Friesen93@hotmail.com",
    verified: false,
  },
  {
    name: "Pierre.Senger",
    email: "Eva_Daniel82@yahoo.com",
    verified: true,
  },
  {
    name: "Christa64",
    email: "Rosanna17@hotmail.com",
    verified: true,
  },
  {
    name: "Angelina_Greenholt48",
    email: "Janelle.Ernser56@gmail.com",
    verified: false,
  },
  {
    name: "Cortney_Kuvalis33",
    email: "Samara0@hotmail.com",
    verified: true,
  },
  {
    name: "Lilyan.Runolfsdottir30",
    email: "Kennedi_Rowe@yahoo.com",
    verified: true,
  },
  {
    name: "Rodrick_Lueilwitz75",
    email: "Macy.Russel@hotmail.com",
    verified: true,
  },
  {
    name: "Marcos38",
    email: "Thaddeus17@yahoo.com",
    verified: false,
  },
  {
    name: "Savanah.Connelly",
    email: "Lourdes_Cartwright99@hotmail.com",
    verified: false,
  },
  {
    name: "Clarissa_Donnelly",
    email: "Alvina_Ankunding@yahoo.com",
    verified: true,
  },
  {
    name: "Mellie39",
    email: "Martin_Rowe@yahoo.com",
    verified: true,
  },
  {
    name: "Saul.Rath",
    email: "Ned.Nienow8@gmail.com",
    verified: false,
  },
  {
    name: "Kaylah10",
    email: "Lilliana12@yahoo.com",
    verified: true,
  },
  {
    name: "Terry.Collins",
    email: "Leola.Fay@yahoo.com",
    verified: true,
  },
  {
    name: "Else_Wilkinson",
    email: "Esteban.Cronin@yahoo.com",
    verified: false,
  },
  {
    name: "Kaleb53",
    email: "Wilmer_Skiles94@hotmail.com",
    verified: true,
  },
  {
    name: "Meaghan.Rolfson46",
    email: "Francis_Brekke69@gmail.com",
    verified: false,
  },
  {
    name: "Reid.Jacobson72",
    email: "Irwin.Sawayn@yahoo.com",
    verified: false,
  },
  {
    name: "Nathen_Parisian20",
    email: "Dillan.Haag58@gmail.com",
    verified: false,
  },
  {
    name: "Yoshiko97",
    email: "Larue.Braun@yahoo.com",
    verified: false,
  },
  {
    name: "Ruth59",
    email: "Lexi43@yahoo.com",
    verified: true,
  },
  {
    name: "Megane62",
    email: "Alexandrine_Cummings@yahoo.com",
    verified: true,
  },
  {
    name: "Tamia89",
    email: "Ambrose.Walker@gmail.com",
    verified: false,
  },
  {
    name: "Karlie_Herman",
    email: "Orval_Carter@yahoo.com",
    verified: true,
  },
  {
    name: "Samson_Miller22",
    email: "Deshawn39@yahoo.com",
    verified: true,
  },
  {
    name: "Stevie.Zieme",
    email: "Adalberto_Satterfield@hotmail.com",
    verified: false,
  },
  {
    name: "Wallace35",
    email: "Opal12@gmail.com",
    verified: false,
  },
]);
</script>