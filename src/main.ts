import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura/'; 
import { router } from './router';
import 'primeicons/primeicons.css'


import Button from 'primevue/button'
import Card from 'primevue/card'
import Drawer from 'primevue/drawer'
import Menu from 'primevue/menu'
import { createPinia } from 'pinia'


const pinia = createPinia()
const app = createApp(App);

app.use(pinia) 
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.component('Button', Button);
app.component('Card', Card);
app.component('Drawer', Drawer);
app.component('Menu', Menu);


app.mount('#app');
