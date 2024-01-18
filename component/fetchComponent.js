/* Vue med komponent */
/* Fetch (created, methods, funktioner för att hämta data och posta data) */

/* Vi skapar en VUE instans på sedvanligt sätt men ej något inom måsvingarna */
const componentexample = Vue.createApp({});

/* Här lägger vi till vår komponent med dess innehåll */
componentexample.component('component-example', {
    /* Created för att ladda innehållet i bakgrunden och så att det visas när sidan laddats klart */
    /* Funktionen kommer ligga under methods så jag inhämtar därför denna som ett objekt med this */
    created() {
        this.fetchCities();
    },
    /* Variabler som kan hantera all data */
    data() {
        return {
            cities: null,
            addName: '',
            addPopulation: ''
        };
    },
    methods: {
        /* Skapar fetchCities funktionen som tar emot cities med GET */
        async fetchCities() {
            const response = await fetch('https://avancera.app/cities');
            const result_1 = await response.json();
            this.cities = result_1;
        },
        /* Skapar addCity() för att kunna ta in värden från v-model i vårt template därefter en
fetch med POST  */
        addCity() {
            fetch('https://avancera.app/cities', {
                body: JSON.stringify({
                    /* POST behöver inget id för det skapas automatiskt i vår databas */
                    name: this.addName,
                    population: this.addPopulation
                    
                }),
                /* Vi skickar med header för att förklara för databas/server att "hej, vi vill skicka json till dig" */
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            })
                /* Nu måste hantera promises/errorhanteringar och annat med servern */
                /* Hantera responsen */
                .then((response) => response.json())
                /* Hantera resultatet, göra någonting med datan */
                .then((result) => {
                    this.cities = result;
                });
        }
    },
    /* Template (HTML kodningen som medföljer komponenten, glöm ej att installera VUE Inline Template extension) */
    template: `
    <div id="fetch">
    <label v-bind:style="{'font-size':'22px'}">
    Namn
    <input v-model="addName" placeholder="Namn" v-bind:style="{'font-size':'22px'}">
  </label>
  <label v-bind:style="{'font-size':'22px'}">
    Befolkning
    <input v-model="addPopulation" placeholder="Befolkning" type="number"v-bind:style="{'font-size':'22px'}">
  </label>
  <input v-bind:style="{ 'background-color': '#254034', 'color': 'white', 'font-size':'22px', 'border-radius': '10px' , 'border':'none' ,'padding': '5px 5px', 'margin-left':'20px'}" id="btn" @click="addCity()" type="button" value="Lägg till stad">
  <ul v-if="cities !== null" v-bind:style="{ 'font-size': '22px', 'margin-top': '5vh' }">
    <template v-for="city in cities" >
      <li>
        <template v-if="id !== city.id">
          {{ city.name }}   {{ city.population }}
        </template>
        <input placeholder="Namn" v-else v-model="editName">
      </li>
    </template>
  </ul>
  <!-- Här kan man lägga in helt annan komponent med annan info -->
  <p v-else>Laddar...</p>
  </div>
  `
});
/* Vi monterar VUE på sedvanligt vis */
componentexample.mount('#component');
