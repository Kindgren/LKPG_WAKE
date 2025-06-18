<script setup lang="ts">
import Card from 'primevue/card'

const openFacebookGroup = () => {
  window.open('https://web.facebook.com/groups/110119166277276', '_blank', 'noopener')
}


</script>

<template>
  <main class="club-container">
<section class="dropin-card">
  <Card>
    <template #title>
      <h3>Drop-in Öppettider</h3>
    </template>
    <template #content>
      <ul>
        <li>Torsdagar: 17:00 – 20:00</li>
        <li>Söndagar: 12:00 – 18:00</li>
        <Button
  label="Spontanöppet? Klicka här"
  icon="pi pi-external-link"
  style="margin-top: 10px;"
  @click="openFacebookGroup"
/>
      </ul>
  

    </template>
  </Card>
</section>

    <section class="map-section">
      <div class="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2121.3530499632753!2d15.63136917711871!3d58.414767081354106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46596f28ec8a1499%3A0x5097405966fc29c5!2sLKPG%20Wake%20Park!5e0!3m2!1ssv!2sse!4v1718630803203!5m2!1ssv!2sse"
          width="100%"
          height="350"
          style="border:0;"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </main>


</template>


<style scoped>
.club-container {
  max-width: 960px;
  margin: 0 auto;
  margin-top: 10px;
  border-radius: 0px; 
}

.intro {
  text-align: center;
}

.intro-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1e3a8a;
}

.intro-text {
  font-size: 1.125rem;
}

.dropin-card {
  margin-bottom: 1rem;
  border-radius: 8px;
}

.dropin-card h3 {
  font-size: 1.75rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
  margin-top: 0px;

}

.dropin-card ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
  font-size: 1.125rem;

}


.map-title {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;
  color: black;
}

.map-container {
  width: 100%;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2 2px 8px rgba(0,0,0,0.1);
}

</style>
