<script setup lang="ts">
import { useLanguageStore } from "../stores/languageStore";
import flipPicture from "../assets/flip.png";
import { computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const languageStore = useLanguageStore();
const openFacebookGroup = () => {
  window.open(
    "https://web.facebook.com/groups/110119166277276",
    "_blank",
    "noopener"
  );
};

const days = computed(() => {
  if (languageStore.language === "sv") {
    return [
      { name: "Mån", time: "", isOpen: false },
      { name: "Tis", time: "", isOpen: false },
      { name: "Ons", time: "", isOpen: false },
      { name: "Tor", time: "17 – 20", isOpen: true },
      { name: "Fre", time: "", isOpen: false },
      { name: "Lör", time: "", isOpen: false },
      { name: "Sön", time: "12 – 18", isOpen: true },
    ];
  } else {
    return [
      { name: "Mon", time: "", isOpen: false },
      { name: "Tue", time: "", isOpen: false },
      { name: "Wed", time: "", isOpen: false },
      { name: "Thu", time: "5 PM – 8 PM", isOpen: true },
      { name: "Fri", time: "", isOpen: false },
      { name: "Sat", time: "", isOpen: false },
      { name: "Sun", time: "12 PM – 6 PM", isOpen: true },
    ];
  }
});

type LangKey =
  | "howItWorks"
  | "descriptionLine1"
  | "descriptionLine2"
  | "descriptionLine3"
  | "helmet"
  | "lifeVest"
  | "wetsuit"
  | "wakeboard"
  | "bookButton";

const translations: Record<"sv" | "en", Record<LangKey, string>> = {
  sv: {
    howItWorks: "Så funkar det",
    descriptionLine1:
      "Vi har instruktörer på plats som hjälper dig igång. Alla är välkomna, oavsett tidigare erfarenhet",
    descriptionLine2:
      "Förboka gärna din plats via Wakeque för att vara säker på att få åka. Dyk upp minst 15 minuter innan din bokade tid",
    descriptionLine3: "All nödvändig utrustning finns att låna.",
    helmet: "Hjälm",
    lifeVest: "Flytväst",
    wetsuit: "Våtdräkt",
    wakeboard: "Wakeboard",
    bookButton: "Boka via Wakeque",
  },
  en: {
    howItWorks: "How It Works",
    descriptionLine1:
      "We have instructors on site to help you get started. Everyone is welcome, regardless of prior experience.",
    descriptionLine2:
      "We recommend booking via Wakeque to ensure your spot. Show up at least 15 minutes before your schedueled time",
    descriptionLine3: "All necessary equipment is available to borrow.",
    helmet: "Helmet",
    lifeVest: "Life Vest",
    wetsuit: "Wet suit",
    wakeboard: "Wakeboard",
    bookButton: "Book via Wakeque",
  },
};

function t(key: LangKey): string {
  return translations[languageStore.language as "sv" | "en"][key];
}

function goToWakeque(): void {
  router.push("/booking");
}

const gearItems: { icon: string; key: LangKey }[] = [
  { icon: "🪖", key: "helmet" },
  { icon: "🦺", key: "lifeVest" },
  { icon: "🥶", key: "wetsuit" },
  { icon: "🏄🏼‍♂️", key: "wakeboard" },
];
</script>

<template>
  <section class="club-info">
    <div class="club-image">
      <img :src="flipPicture" alt="Team photo" />
    </div>

    <div class="club-details">
      <h2 class="welcome-sign">
        {{
          languageStore.language === "sv"
            ? "VÄLKOMMEN TILL LKPG WAKEPARK"
            : "WELCOME TO LKPG WAKEPARK"
        }}
      </h2>
      <div class="opening-calendar-card dropin">
        <h2 class="opening-title">
          {{
            languageStore.language === "sv"
              ? "Drop-in Öppettider"
              : "Open for Drop-in"
          }}
        </h2>

        <div class="calendar-grid">
          <div
            v-for="day in days"
            :key="day.name"
            class="calendar-day"
            :class="{ open: day.isOpen }"
          >
            <div class="day-label">{{ day.name }}</div>
            <div class="day-time">
              {{ day.time }}
            </div>
          </div>
        </div>
        <div class="fb-button-container">
          <span class="description-text" style="margin-right: 10px">
            {{
              languageStore.language === "sv"
                ? "Ibland är parken öppen utanför ordinarie tider"
                : "Sometimes we also have unofficial sessions"
            }}
          </span>
          <Button
            icon="pi pi-external-link"
            :label="
              languageStore.language === 'sv' ? 'Se mer här' : 'Open Facebook'
            "
            class="ml-2"
            @click="openFacebookGroup"
          />
        </div>
      </div>
      <div class="opening-calendar-card">
        <h3 class="how-title">
          {{ t("howItWorks") }}
        </h3>

        <p class="description-text">
          {{ t("descriptionLine1") }}
        </p>
        <p class="description-text">
          {{ t("descriptionLine2") }}
        </p>
        <p class="description-text">
          {{ t("descriptionLine3") }}
        </p>

        <!-- Gear icons -->
        <div class="gear-icons">
          <div class="gear-item" v-for="item in gearItems" :key="item.key">
            <i>{{ item.icon }}</i>
            <span>{{ t(item.key) }}</span>
          </div>
        </div>

        <!-- Booking Button -->
        <Button
          icon="pi pi-external-link"
          :label="t('bookButton')"
          @click="goToWakeque"
        />
      </div>
    </div>
  </section>

  <div class="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2121.3530499632753!2d15.63136917711871!3d58.414767081354106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46596f28ec8a1499%3A0x5097405966fc29c5!2sLKPG%20Wake%20Park!5e0!3m2!1ssv!2sse!4v1718630803203!5m2!1ssv!2sse"
      width="100%"
      height="350"
      style="border: 0"
      allowfullscreen="true"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<style scoped>
.opening-calendar-card {
  max-width: 600px;
  margin: 1rem auto;
  background: #fff;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.opening-title {
  font-size: 1.5rem;
  margin-top: 0px;
  margin-bottom: 1.5rem;
  text-align: center;
}

.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}

.calendar-day {
  text-align: center;
  padding: 1rem 0.5rem;
  border-radius: 0.75rem;
  background: #f4f4f4;
  color: #aaa;
  font-size: 0.9rem;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.calendar-day.open {
  background: #d1f5d3;
  color: #1a5f2e;
  font-weight: bold;
  box-shadow: 0 0 0 2px #5ec576 inset;
}

.day-label {
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
}

.day-time {
  font-size: 0.85rem;
}

.gear-icons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1.5rem;
}

.gear-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--p-primary-800);
}

.how-title {
  font-size: 2rem;
  font-weight: 900;
  color: var(--p-primary-800);
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

.how-it-works {
  list-style-type: none;
  padding-left: 1.5em;
  margin-bottom: 2rem;
  color: #333;
  font-size: 1.5rem;
}

.description-text {
  font-size: 1.5rem;
  line-height: 1.8;
  margin-bottom: 1rem;
}
.club-container {
  width: 80%;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 0px;
}

i {
  font-style: normal;
  font-size: 4rem;
}

.intro {
  text-align: center;
}

.intro-title {
  font-size: 2rem;
  font-weight: 800;
  color: var(--p-primary-800);
}

.intro-text {
  font-size: 1.125rem;
}

.map-container {
  width: 100%;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2 2px 8px rgba(0, 0, 0, 0.1);
}

.club-info {
  display: flex;
  width: 100%;
}

.club-image {
  flex: 1 1 45%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
}

.club-image img {
  height: 90vh;
  object-fit: cover; /* or cover, depending on your needs */
  object-position: right;
}

.club-details {
  display: flex;
  flex-direction: column;
  padding-left: 5%;
  padding-right: 5%;
  max-width: 800px;
  border-radius: 4px;
}

.opening-title {
  font-size: 2rem;
  margin: 1rem;
  color: var(--p-primary-800);
}

.opening-hours {
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
  text-align: left;
}

.opening-hours li {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
}

.fb-button-container {
  margin-top: 25px;
  font-size: large;
  justify-content: center;
}

.welcome-sign {
  text-align: right;
  font-style: italic;
  color: var(--p-primary-700);
}

.dropin {
  margin-bottom: 120px;
}

/* Stack vertically on narrow screens */
@media (max-width: 1200px) {
  .club-info {
    flex-direction: column;
  }

  .dropin {
    margin: 1rem auto;
  }

  .club-image img {
    height: 300px;
    width: 100%;
    object-fit: cover; /* or cover, depending on your needs */
    object-position: center 40%;
  }

  .club-image {
    height: 100px; /* or any height you prefer for mobile */
    overflow: hidden;
  }

  .club-details {
    flex-grow: 1;
    margin: auto;
    display: flex;
    padding: 2rem;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  .welcome-sign {
    text-align: right;
    font-style: italic;
    color: var(--p-primary-700);
  }
}
</style>
