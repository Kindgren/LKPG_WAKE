<script setup lang="ts">
import { useLanguageStore } from "../stores/languageStore";
import flipPicture from "../assets/flip.png";
import { computed } from "vue";

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
      { name: "Thur", time: "5 PM – 8 PM", isOpen: true },
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
  | "wakeboard";

const translations: Record<"sv" | "en", Record<LangKey, string>> = {
  sv: {
    howItWorks: "Så funkar det",
    descriptionLine1:
      "Vi har instruktörer på plats som hjälper dig igång. Alla är välkomna, oavsett tidigare erfarenhet",
    descriptionLine2:
      "Dyk upp minst 15 minuter innan du vill börja åka",
    descriptionLine3: "All nödvändig utrustning finns att låna.",
    helmet: "Hjälm",
    lifeVest: "Flytväst",
    wetsuit: "Våtdräkt",
    wakeboard: "Wakeboard",
  },
  en: {
    howItWorks: "How It Works",
    descriptionLine1:
      "We have instructors on site to help you get started. Everyone is welcome, regardless of prior experience.",
    descriptionLine2:
      "Show up at least 15 minutes before you want to start riding",
    descriptionLine3: "All necessary equipment is available to borrow.",
    helmet: "Helmet",
    lifeVest: "Life Vest",
    wetsuit: "Wet suit",
    wakeboard: "Wakeboard",
  },
};

function t(key: LangKey): string {
  return translations[languageStore.language as "sv" | "en"][key];
}

const gearItems: { icon: string; key: LangKey }[] = [
  { icon: "pi-verified", key: "helmet" },
  { icon: "pi-heart-fill", key: "lifeVest" },
  { icon: "pi-sun", key: "wetsuit" },
  { icon: "pi-bolt", key: "wakeboard" },
];
</script>

<template>
  <div class="home-container">
    <section class="hero-section">
      <div class="hero-image-wrapper">
        <img :src="flipPicture" alt="Team photo" class="hero-image" />
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="glass-card welcome-card">
          <h1 class="welcome-sign">
            {{
              languageStore.language === "sv"
                ? "VÄLKOMMEN TILL LKPG WAKEPARK"
                : "WELCOME TO LKPG WAKEPARK"
            }}
          </h1>
        </div>
      </div>
    </section>

    <section class="details-section">
      <div class="glass-card opening-card">
        <h2 class="section-title">
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

        <div class="fb-info">
          <p class="description-text">
            {{
              languageStore.language === "sv"
                ? "Ibland är parken öppen utanför ordinarie tider"
                : "Sometimes we also have unofficial sessions"
            }}
          </p>
          <Button
            icon="pi pi-external-link"
            :label="
              languageStore.language === 'sv' ? 'Se mer här' : 'Open Facebook'
            "
            class="p-button-outlined p-button-secondary fb-btn"
            @click="openFacebookGroup"
          />
        </div>
      </div>

      <div class="glass-card how-it-works-card">
        <h2 class="section-title">
          {{ t("howItWorks") }}
        </h2>

        <div class="info-text-group">
          <p class="description-text">
            {{ t("descriptionLine1") }}
          </p>
          <p class="description-text">
            {{ t("descriptionLine2") }}
          </p>
          <p class="description-text">
            {{ t("descriptionLine3") }}
          </p>
        </div>

        <!-- Gear icons -->
        <div class="gear-icons">
          <div class="gear-item" v-for="item in gearItems" :key="item.key">
            <div class="gear-icon-box">
              <i :class="['pi', item.icon]"></i>
            </div>
            <span class="gear-label">{{ t(item.key) }}</span>
          </div>
        </div>
      </div>
    </section>

    <div class="map-section">
      <div class="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2121.3530499632753!2d15.63136917711871!3d58.414767081354106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46596f28ec8a1499%3A0x5097405966fc29c5!2sLKPG%20Wake%20Park!5e0!3m2!1ssv!2sse!4v1718630803203!5m2!1ssv!2sse"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 2rem;
  background-color: #051c2c; /* Deep professional navy background */
  min-height: 100vh;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 70vh;
  min-height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-image-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: blur(15px) brightness(0.7);
  transform: scale(1.1); /* Prevents white edges from the blur */
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(10, 61, 98, 0.8) 0%,
    rgba(60, 99, 130, 0.6) 50%,
    rgba(130, 204, 221, 0.4) 100%
  );
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 90%;
  max-width: 1200px;
  display: flex;
  justify-content: center;
}

/* Glassmorphism Base */
.glass-card {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1.25rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  padding: 2.5rem;
  transition: all 0.4s ease;
  color: #f8fafc; /* Crisp off-white for best readability */
}

.glass-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(130, 204, 221, 0.4); /* Glow effect on hover */
}

/* Welcome Card */
.welcome-card {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.welcome-sign {
  font-size: clamp(1.5rem, 7vw, 4rem);
  font-weight: 900;
  color: #fff;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  margin: 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  font-style: italic;
  white-space: normal;
  word-break: break-word;
  text-align: center; /* Explicit centering */
  width: 100%;
}

@media (max-width: 768px) {
  .welcome-card {
    padding: 1.5rem 1rem;
    max-width: 95%;
  }
}

@media (max-width: 480px) {
  .welcome-sign {
    font-size: clamp(1.2rem, 10vw, 2rem); /* Dynamic scaling for small phones */
    text-align: center;
  }
}

/* Details Section */
.details-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  width: 95%;
  max-width: 1300px;
  margin: -5rem auto 0; /* Overlap the hero section slightly */
  position: relative;
  z-index: 10;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 900;
  color: #82ccdd; /* Electric Blue accent */
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-align: left;
  border-left: 4px solid #82ccdd;
  padding-left: 1rem;
}

/* Calendar Grid - Modernized */
.calendar-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.calendar-day {
  display: grid;
  grid-template-columns: 80px 1fr auto;
  align-items: center;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.4);
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.calendar-day.open {
  background: rgba(130, 204, 221, 0.15);
  color: #fff;
  border: 1px solid rgba(130, 204, 221, 0.3);
}

.day-label {
  font-size: 0.85rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.day-time {
  font-size: 1rem;
  font-weight: 600;
}

/* FB Info */
.fb-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.fb-info .description-text {
  margin: 0;
  font-style: italic;
  opacity: 0.7;
}

/* How It Works Card */
.description-text {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
}

/* Gear Icons - Technical Spec Style */
.gear-icons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 1rem;
}

.gear-item {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.gear-icon-box {
  width: 50px;
  height: 50px;
  background: rgba(130, 204, 221, 0.2);
  border: 1px solid rgba(130, 204, 221, 0.3);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.gear-icon-box i {
  font-size: 1.5rem;
  color: #82ccdd;
}

.gear-label {
  font-size: 0.9rem;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Map Section */
.map-section {
  width: 95%;
  max-width: 1300px;
  margin: 4rem auto;
}

.map-wrapper {
  height: 500px;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .hero-section {
    height: 60vh;
  }

  .welcome-card {
    padding: 1.5rem;
    width: 95%;
  }

  .details-section {
    grid-template-columns: 1fr;
    width: 95%;
  }

  .calendar-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .map-section {
    width: 95%;
  }

  .map-wrapper {
    height: 350px;
  }
}
</style>
