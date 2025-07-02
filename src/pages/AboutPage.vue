<script setup lang="ts">
import { useLanguageStore } from "../stores/languageStore";
const languageStore = useLanguageStore();
</script>

<template>
  <section class="about-page">
    <div class="container">
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
</template>

<style scoped>
.about-page {
  padding: 2rem 1rem;
  color: #1b4332;
  font-family: "Inter", sans-serif;
  transition: background 0.3s ease-in-out;
  margin-bottom: 15vh;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  color: #2d6a4f;
  margin-bottom: 2rem;
  position: relative;
  font-weight: 700;
  font-size: 2.1rem;
  margin-bottom: 0.8rem;
  color: #2c5234;
}

.title::after {
  content: "";
  display: block;
  width: 60px;
  height: 4px;
  background-color: #2d6a4f;
  margin: 1rem auto 0;
  border-radius: 2px;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.8;
  color: #343a40;
}

@media (max-width: 600px) {
  .about-page {
    padding: 1.5rem 1rem;
  }

  .container {
    padding: 1rem;
  }

  .content {
    font-size: 1.05rem;
  }
}
</style>
