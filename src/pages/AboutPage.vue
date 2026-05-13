<script setup lang="ts">
import { useLanguageStore } from "../stores/languageStore";
const languageStore = useLanguageStore();
</script>

<template>
  <div class="page-container">
    <section class="about-page">
      <div class="glass-card container">
        <h1 class="title">
          {{ languageStore.language === "sv" ? "Om Oss" : "About Us" }}
        </h1>

        <div class="content">
          <p>
            {{
              languageStore.language === "sv"
                ? "Vi är ett gäng entusiaster som älskar vattensport och som tillsammans driver wakeparken i Linköping. Parken ligger naturskönt vid vattnet och är en mötesplats för både nybörjare och erfarna åkare."
                : "We are a group of enthusiasts who love water sports and together run the wake park in Linköping. The park is beautifully located by the water and serves as a meeting place for both beginners and experienced riders."
            }}
          </p>

          <p>
            {{
              languageStore.language === "sv"
                ? "Allt började som ett hobbyprojekt med några entusiaster och en vision om att göra wakeboard mer tillgängligt i regionen. Genom mycket ideellt arbete och stöd från lokala åkare kunde vi bygga upp en kabelpark som idag är en självklar del av sommaren i Linköping."
                : "It all started as a hobby project with a few enthusiasts and a vision to make wakeboarding more accessible in the region. Through a lot of volunteer work and support from local riders, we built a cable park that is now a natural part of summer in Linköping."
            }}
          </p>

          <p>
            {{
              languageStore.language === "sv"
                ? "Hos oss handlar det inte bara om att åka – det handlar om gemenskap, spontanitet och att ha kul tillsammans. Vi hoppas du vill vara en del av det!"
                : "For us, it’s not just about riding – it’s about community, spontaneity, and having fun together. We hope you want to be a part of it!"
            }}
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-container {
  background-color: #051c2c;
  min-height: 100vh;
  padding: 4rem 1rem;
}

.about-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.glass-card {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 1.25rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
  padding: 3rem;
  transition: all 0.4s ease;
  color: #f8fafc;
  max-width: 900px;
  width: 92%; /* Changed from 100% to allow for margins */
  box-sizing: border-box;
}

.title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #82ccdd;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: left;
  margin-bottom: 2rem;
  border-left: 5px solid #82ccdd;
  padding-left: 1.5rem;
  line-height: 1;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(248, 250, 252, 0.8);
}

@media (max-width: 768px) {
  .page-container {
    padding: 2rem 1rem;
  }

  .glass-card {
    padding: 2rem;
  }

  .title {
    font-size: 2rem;
  }
}
</style>
