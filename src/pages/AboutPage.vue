<script setup lang="ts">
import { useLanguageStore } from '../stores/languageStore'
const languageStore = useLanguageStore()

</script>

<template>
  <section class="about-page">
    <div class="container">
      <h1 class="title">
        {{ languageStore.language === 'sv' ? 'Om Oss' : 'About Us' }}
      </h1>

      <p class="paragraph">
        {{
          languageStore.language === 'sv'
            ? 'Vi är ett gäng entusiaster som älskar vattensport och som tillsammans driver wakeparken i Linköping. Parken ligger naturskönt vid vattnet och är en mötesplats för både nybörjare och erfarna åkare.'
            : 'We are a group of enthusiasts who love water sports and together run the wake park in Linköping. The park is beautifully located by the water and serves as a meeting place for both beginners and experienced riders.'
        }}
      </p>

      <p class="paragraph">
        {{
          languageStore.language === 'sv'
            ? 'Allt började som ett hobbyprojekt med några entusiaster och en vision om att göra wakeboard mer tillgängligt i regionen. Genom mycket ideellt arbete och stöd från lokala åkare kunde vi bygga upp en kabelpark som idag är en självklar del av sommaren i Linköping.'
            : 'It all started as a hobby project with a few enthusiasts and a vision to make wakeboarding more accessible in the region. Through a lot of volunteer work and support from local riders, we built a cable park that is now a natural part of summer in Linköping.'
        }}
      </p>

      <p class="paragraph">
        {{
          languageStore.language === 'sv'
            ? 'Hos oss handlar det inte bara om att åka – det handlar om gemenskap, spontanitet och att ha kul tillsammans. Vi hoppas du vill vara en del av det!'
            : 'For us, it’s not just about riding – it’s about community, spontaneity, and having fun together. We hope you want to be a part of it!'
        }}
      </p>
    </div>
  </section>
</template>




<style scoped>
.about-page {
  padding: 0rem 1rem;
 
  color: #1b4332;
  font-family: sans-serif;
}

.container {
  max-width: 700px;
  margin: 0 auto;
}

.title {
  font-size: 2.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
}

.paragraph {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.2rem;
}
</style>
