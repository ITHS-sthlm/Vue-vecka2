# Vue-vecka2
Lektionsvecka 2


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
