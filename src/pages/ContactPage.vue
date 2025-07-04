<script setup lang="ts">
import { useLanguageStore } from "../stores/languageStore";

const languageStore = useLanguageStore();
</script>

<template>
  <section class="contact-page">
    <h1 class="title">
      {{ languageStore.language === "sv" ? "Välkommen!" : "Welcome!" }}
    </h1>
    <p class="intro-text">
      {{
        languageStore.language === "sv"
          ? "Vi finns på sociala medier och är alltid glada att prata. Häng med oss där!"
          : "Find us on social media and we’re always happy to chat. Join us there!"
      }}
    </p>

    <div class="social-buttons">
      <a
        href="https://web.facebook.com/lkpgwakepark"
        target="_blank"
        rel="noopener"
        class="btn facebook"
      >
        <svg
          class="icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M22.675 0h-21.35C.592 0 0 .593 0 1.326v21.348C0 23.408.592 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.466.099 2.798.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.592 1.324-1.326V1.326C24 .593 23.408 0 22.675 0z"
          />
        </svg>
        Facebook
      </a>
      <a
        href="https://instagram.com/lkpgwakepark"
        target="_blank"
        rel="noopener"
        class="btn instagram"
      >
        <svg
          class="icon"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M7.75 2C4.679 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5c3.07 0 5.75-2.678 5.75-5.75v-8.5C22 4.678 19.322 2 16.25 2h-8.5zM12 7.33A4.67 4.67 0 1 1 7.33 12 4.67 4.67 0 0 1 12 7.33zm5.48-.33a1.09 1.09 0 1 1-1.09-1.09 1.09 1.09 0 0 1 1.09 1.09zM12 9.78a2.22 2.22 0 1 0 2.22 2.22A2.22 2.22 0 0 0 12 9.78z"
          />
        </svg>
        Instagram
      </a>
    </div>

    <section class="faq-section">
      <h2>{{ languageStore.language === "sv" ? "Vanliga frågor" : "FAQ" }}</h2>
      <dl>
        <dt>
          {{
            languageStore.language === "sv"
              ? "Kan man boka hela parken för event?"
              : "Can you book the entire park for an event?"
          }}
        </dt>
        <dd>
          {{
            languageStore.language === "sv"
              ? "Ja, hör av dig till oss för att boka hela parken."
              : "Yes, contact us to book the entire park."
          }}
        </dd>

        <dt>
          {{
            languageStore.language === "sv"
              ? "Måste man vara över 18 år för att köra?"
              : "Do you have to be over 18 to ride?"
          }}
        </dt>
        <dd>
          {{
            languageStore.language === "sv"
              ? "Om du är under 18 behöver du målsmans tillåtelse för att köra."
              : "If you are under 18, you need a guardian’s permission to ride."
          }}
        </dd>

        <dt>
          {{
            languageStore.language === "sv"
              ? "Hur fungerar det att vara säsongsåkare?"
              : "How does it work to be a season rider?"
          }}
        </dt>
        <dd>
          {{
            languageStore.language === "sv"
              ? "Om du är intresserad, hör av dig till oss så berättar vi mer."
              : "If you are interested, contact us and we’ll tell you more."
          }}
        </dd>
      </dl>
      <div style="text-align: center">lkpg.kabelsport@gmail.com</div>
    </section>
  </section>
</template>

<style scoped>
.contact-page {
  max-width: 480px;
  margin: 3rem auto;
  margin-top: 25px;
  padding: 1rem 1.2rem;
  font-family: "Inter", sans-serif;
  color: #1a3e2a;
  background: white;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(20, 100, 50, 0.15);
  text-align: center;
}

.intro-text {
  font-size: 1rem;
  margin-bottom: 2.2rem;
  color: #3a5a35;
}

.title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  text-align: center;
  color: #2d6a4f;
  margin-bottom: 2rem;
  position: relative;
  font-weight: 700;
  font-size: 2rem;
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

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  margin-bottom: 3rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.15rem;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  box-shadow: 0 6px 14px rgba(56, 161, 105, 0.4);
  transition: background-color 0.3s ease;
  user-select: none;
}

.btn svg.icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.facebook {
  background-color: #1877f2;
}

.facebook:hover {
  background-color: #145dbf;
  box-shadow: 0 8px 16px rgba(20, 90, 190, 0.6);
}

.instagram {
  background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4);
}

.instagram:hover {
  filter: brightness(1.15);
  box-shadow: 0 8px 16px rgba(130, 60, 190, 0.7);
}

.faq-section {
  text-align: left;
  background: #e6f0e9;
  padding: 1.6rem 2rem;
  border-radius: 10px;
  box-shadow: inset 0 0 10px #c4d6c2;
}

.faq-section h2 {
  font-weight: 700;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #2c5234;
}

dl dt {
  font-weight: 700;
  margin-top: 1rem;
  color: #2f855a;
  cursor: pointer;
}

dl dd {
  margin-left: 1rem;
  margin-top: 0.3rem;
  color: #3a5a35;
  font-size: 1rem;
  line-height: 1.3;
}
</style>
