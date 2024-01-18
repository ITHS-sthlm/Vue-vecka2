/* Lektionsvecka 2 */
const message = Vue.createApp({
    data() {
        return {
            message: 'Lektionsvecka 2 med Vue'
        };
    }
});
message.mount('#message');

/* Props utan v-bind */
const app = Vue.createApp({});

app.component('counter-button', {
    data() {
        return {
            counter: this.start
        };
    },
    methods: {
        onClick() {
            this.counter = this.counter + 1;
        }
    },
    /* props: ['start']: anger en egenskap ('start) för komponenten.
    Denna egensap används för att initialisera värdet på 'counter', det är också namnet på vår props  */
    props: ['start'],
    template: `
    <input :value="counter" @click="onClick" type="button" id="button1">
    `
});

app.mount('#app');

/* Prop med v-bind och nummervärde */
const app2 = Vue.createApp({});

app2.component('counter-button', {
    data() {
        return {
            counter: this.start
        };
    },
    methods: {
        onClick() {
            this.counter = this.counter + 1;
        }
    },
    /* props: ['start']: anger en egenskap ('start) för komponenten.
    Denna egensap används för att initialisera värdet på 'counter', det är också namnet på vår props  */
    props: ['start'],
    template: `
    <input :value="counter" @click="onClick" type="button" id="button1">
    `
});

app2.mount('#app2');

/* 3 olika prop värden med v-bind och nummervärde och samma funktionalitet */
const app3 = Vue.createApp({});

app3.component('counter-button', {
    data() {
        return {
            counter: this.start
        };
    },
    methods: {
        onClick() {
            this.counter = this.counter + 1;
        }
    },
    /* props: ['start']: anger en egenskap ('start) för komponenten.
    Denna egensap används för att initialisera värdet på 'counter', det är också namnet på vår props  */
    props: ['start'],
    template: `
    <input :value="counter" @click="onClick" type="button" id="button1">
    `
});

app3.mount('#app3');

/* 4 olika prop värden med v-bind och nummervärde och samma funktionalitet och typsäkerhet */
const app4 = Vue.createApp({});

app4.component('counter-button', {
    data() {
        return {
            counter: this.initialValue
        };
    },
    methods: {
        onClick2() {
            this.counter = this.counter + 1;
        }
    },
    /* props: ['start']: anger en egenskap ('start) för komponenten.
    Denna egensap används för att initialisera värdet på 'counter', det är också namnet på vår props  */
    props: {
        initialValue: Boolean //Definierar datatypen
    },
    template: `
    <input :value="counter" @click="onClick2" type="button" id="button1">
    `
});

app4.mount('#app4');

/* Här arbetar vi utan props i komponent */

const app5 = Vue.createApp({});

app5.component('name-example', {
    data() {
        return {
            detailsAreVisible: false,
            person: {
                id: 'Richard',
                name: 'Richard Carlsson',
                phone: '0123456789',
                email: 'richard.carlsson@iths.se'
            }
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
    template: `
<div class="center">
    <li>
        <h2>{{person.name}}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Dölj' : 'Visa '}} Detailjer</button>
    </li>
    <ul v-if="detailsAreVisible">
        <li>
            <strong>Telefon: {{ person.phone }}</strong>
        </li>
        <li>
            <strong>Email: {{ person.email }}</strong>
        </li>
    </ul>
</div>
`
});

app5.mount('#app5');

/* Här arbetar vi med props i komponent samt typsäkert */

const app6 = Vue.createApp({});

app6.component('name-example', {
    data() {
        return {
            detailsAreVisible: false,

        };
    },
    props:{
        name:String, phoneNumber: String, email:String
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    },
    template: `
<div class="center">
    <li>
        <h2>{{name}}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Dölj' : 'Visa '}} Detailjer</button>
    </li>
    <ul v-if="detailsAreVisible">
        <li>
            <strong>Telefon: {{ phoneNumber }}</strong>
        </li>
        <li>
            <strong>Email: {{ email }}</strong>
        </li>
    </ul>
</div>
`
});

app6.mount('#app6');

/* Custom events, tar den ursprungliga komponenten counter button och skickar med
extrainformation */
const app7 = Vue.createApp({
    methods:{
        onValueIncremented(counter){
            console.log(`Hej, tack för värdet som kommer från komponenten counter-button, det värdet
            du skickade är: ${counter} och nu skickar jag tillbaka en logg med text till dig`)
        }
    }
})

app7.component('counter-button', {
    data(){
        return {
            counter:0
        }
    },
    methods: {
        onClick(){
            this.counter = this.counter + 1
            this.$emit('value-incremented', this.counter)
        }
    },
    template: `
    <input :value="counter" @click="onClick" type="button" id="button1">
    `

})



app7.mount('#app7')
