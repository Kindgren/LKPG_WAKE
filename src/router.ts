import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import BookingPage from "./pages/BookingPage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ContactPage from "./pages/ContactPage.vue";
import QueuePage from "./pages/QueuePage.vue";
import { useLanguageStore } from "./stores/languageStore";
import LayoutWrapper from "./components/LayoutWrapper.vue";

const routes = [
  {
    path: "/:lang(sv|en)",
    component: LayoutWrapper, // ← use this instead of inline component
    children: [
      { path: "", redirect: "home" },
      { path: "home", component: HomePage },
      { path: "booking", component: BookingPage },
      { path: "about", component: AboutPage },
      { path: "contact", component: ContactPage },
      { path: "queue", component: QueuePage },
    ],
  },
  { path: "/", redirect: "/sv/home" },
  { path: "/:catchAll(.*)", redirect: "/sv/home" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Add the navigation guard here, after creating the router:
router.beforeEach((to, _from, next) => {
  const langStore = useLanguageStore();
  const langParam = to.params.lang;

  if (langParam && (langParam === "sv" || langParam === "en")) {
    if (langStore.language !== langParam) {
      langStore.setLanguage(langParam);
    }
    next();
  } else {
    next("/sv/home"); // default fallback
  }
});
