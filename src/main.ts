import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura/";
import "./style.css";
import { router } from "./router";
import "primeicons/primeicons.css";

import Button from "primevue/button";
import Card from "primevue/card";
import Drawer from "primevue/drawer";
import Menu from "primevue/menu";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persistedstate";

const pinia = createPinia();
pinia.use(piniaPersist);

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});

app.component("Button", Button);
app.component("Card", Card);
app.component("Drawer", Drawer);
app.component("Menu", Menu);

app.mount("#app");
