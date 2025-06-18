<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

function submitForm() {
  const subject = encodeURIComponent('Kontakt från hemsidan')
  const body = encodeURIComponent(
    `Namn: ${name.value}\nE-post: ${email.value}\n\n${message.value}`
  )
  const mailtoLink = `mailto:lkpg.kabelsport@gmail.com?subject=${subject}&body=${body}`

  window.location.href = mailtoLink
}

</script>

<template>
  <section class="contact-page">
    <h1>Kontakta oss</h1>

    <p>Har du frågor, funderingar eller vill du bara säga hej? Fyll i formuläret nedan eller kontakta oss via våra sociala medier.</p>

    <form @submit.prevent="submitForm" v-if="!submitted" class="contact-form">
      <label>
        Namn
        <input v-model="name" type="text" required />
      </label>

      <label>
        E-post
        <input v-model="email" type="email" required />
      </label>

      <label>
        Meddelande
        <textarea v-model="message" required></textarea>
      </label>

      <button type="submit">Skicka</button>
    </form>

    <div v-else class="confirmation">
      <h2>Tack för ditt meddelande!</h2>
      <p>Vi hör av oss så snart vi kan.</p>
    </div>

    <div class="contact-info">
      <h2>Övriga kontaktvägar</h2>
      <ul>
        <li><strong>Email: lkpg.kabelsport@gmail.com</strong> </li>
        <li><strong>Facebook:</strong> <a href="https://web.facebook.com/lkpgwakepark" target="_blank">Vår Facebook-grupp</a></li>
        <li><strong>Instagram:</strong> <a href="https://instagram.com/lkpgwakepark" target="_blank">@lkpgwakepark</a></li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  max-width: 600px;
  margin: 0rem auto;
  padding: 0rem, 1rem;
  font-family: sans-serif;
  color: #1a3e2a;
}

.contact-form label {
  display: block;
  margin-bottom: 1rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.3rem;
  border: 1px solid #cce3d1;
  border-radius: 4px;
}

button {
  background-color: #38a169;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2f855a;
}

.contact-info {
  margin-top: 2rem;
}

a {
  color: #2b6cb0;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
