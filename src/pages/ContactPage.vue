<script setup lang="ts">
import { ref } from 'vue'
import { useLanguageStore } from '../stores/languageStore'

const languageStore = useLanguageStore()

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

function submitForm() {
  const subject = encodeURIComponent(
    languageStore.language === 'sv' ? 'Kontakt från hemsidan' : 'Contact from website'
  )
  const body = encodeURIComponent(
    `${languageStore.language === 'sv' ? 'Namn' : 'Name'}: ${name.value}\n` +
    `${languageStore.language === 'sv' ? 'E-post' : 'Email'}: ${email.value}\n\n${message.value}`
  )
  const mailtoLink = `mailto:lkpg.kabelsport@gmail.com?subject=${subject}&body=${body}`

  window.location.href = mailtoLink
}
</script>

<template>
  <section class="contact-page">
    <h1>{{ languageStore.language === 'sv' ? 'Kontakta oss' : 'Contact Us' }}</h1>

    <p>
      {{
        languageStore.language === 'sv'
          ? 'Har du frågor, funderingar eller vill du bara säga hej? Fyll i formuläret nedan eller kontakta oss via våra sociala medier.'
          : 'Have questions, thoughts, or just want to say hi? Fill out the form below or reach out through our social media channels.'
      }}
    </p>

    <form @submit.prevent="submitForm" v-if="!submitted" class="contact-form">
      <label>
        {{ languageStore.language === 'sv' ? 'Namn' : 'Name' }}
        <input v-model="name" type="text" required />
      </label>

      <label>
        {{ languageStore.language === 'sv' ? 'E-post' : 'Email' }}
        <input v-model="email" type="email" required />
      </label>

      <label>
        {{ languageStore.language === 'sv' ? 'Meddelande' : 'Message' }}
        <textarea v-model="message" required></textarea>
      </label>

      <button type="submit">
        {{ languageStore.language === 'sv' ? 'Skicka' : 'Send' }}
      </button>
    </form>

    <div v-else class="confirmation">
      <h2>
        {{ languageStore.language === 'sv' ? 'Tack för ditt meddelande!' : 'Thank you for your message!' }}
      </h2>
      <p>
        {{ languageStore.language === 'sv' ? 'Vi hör av oss så snart vi kan.' : 'We’ll get back to you as soon as we can.' }}
      </p>
    </div>

    <div class="contact-info">
      <h2>
        {{ languageStore.language === 'sv' ? 'Övriga kontaktvägar' : 'Other contact options' }}
      </h2>
      <ul>
        <li><strong>Email:</strong> lkpg.kabelsport@gmail.com</li>
        <li>
          <strong>Facebook:</strong>
          <a href="https://web.facebook.com/lkpgwakepark" target="_blank">
            {{ languageStore.language === 'sv' ? 'Vår Facebook-grupp' : 'Our Facebook Group' }}
          </a>
        </li>
        <li>
          <strong>Instagram:</strong>
          <a href="https://instagram.com/lkpgwakepark" target="_blank">@lkpgwakepark</a>
        </li>
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
