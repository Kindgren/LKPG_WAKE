<template>
  <section class="about-page">
    <div class="container">
      <h1 class="title">Om Oss</h1>
      <p class="paragraph">
        Vi är ett gäng entusiaster som älskar vattensport och som tillsammans driver wakeparken i Linköping. Parken ligger naturskönt vid vattnet och är en mötesplats för både nybörjare och erfarna åkare.
      </p>

      <p class="paragraph">
        Allt började som ett hobbyprojekt med några entusiaster och en vision om att göra wakeboard mer tillgängligt i regionen. Genom mycket ideellt arbete och stöd från lokala åkare kunde vi bygga upp en kabelpark som idag är en självklar del av sommaren i Linköping.
      </p>

      <p class="paragraph">
        Hos oss handlar det inte bara om att åka – det handlar om gemenskap, spontanitet och att ha kul tillsammans. Vi hoppas du vill vara en del av det!
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed
</script>

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
