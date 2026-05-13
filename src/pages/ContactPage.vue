<script setup lang="ts">
import { useLanguageStore } from "../stores/languageStore";

const languageStore = useLanguageStore();
</script>

<template>
  <div class="page-container">
    <section class="contact-page glass-card">
      <h1 class="title">
        {{ languageStore.language === "sv" ? "Kontakt" : "Contact" }}
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
          <i class="pi pi-facebook icon"></i>
          Facebook
        </a>
        <a
          href="https://instagram.com/lkpgwakepark"
          target="_blank"
          rel="noopener"
          class="btn instagram"
        >
          <i class="pi pi-instagram icon"></i>
          Instagram
        </a>
      </div>

      <section class="faq-section">
        <h2 class="faq-title">
          {{ languageStore.language === "sv" ? "Vanliga frågor" : "FAQ" }}
        </h2>
        <dl class="faq-list">
          <div class="faq-item">
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
          </div>

          <div class="faq-item">
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
          </div>

          <div class="faq-item">
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
          </div>
        </dl>
        <div class="email-info">
          <i class="pi pi-envelope"></i>
          <span>lkpg.kabelsport@gmail.com</span>
        </div>
      </section>
    </section>
  </div>
</template>

<style scoped>
.page-container {
  background-color: #051c2c;
  min-height: 100vh;
  padding: 4rem 1rem;
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
  color: #f8fafc;
  max-width: 600px;
  width: 100%;
  text-align: center;
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

.intro-text {
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  color: rgba(248, 250, 252, 0.8);
  text-align: left;
}

.social-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 800;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
}

.btn i {
  font-size: 1.25rem;
}

.facebook {
  background-color: #1877f2;
  box-shadow: 0 4px 14px rgba(24, 119, 242, 0.4);
}

.facebook:hover {
  background-color: #145dbf;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(24, 119, 242, 0.6);
}

.instagram {
  background: linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4);
  box-shadow: 0 4px 14px rgba(221, 42, 123, 0.4);
}

.instagram:hover {
  filter: brightness(1.1);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(221, 42, 123, 0.6);
}

.faq-section {
  text-align: left;
  background: rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.faq-title {
  font-weight: 900;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: #82ccdd;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.faq-item dt {
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.25rem;
  font-size: 1rem;
}

.faq-item dd {
  margin: 0;
  color: rgba(248, 250, 252, 0.6);
  font-size: 0.95rem;
  line-height: 1.5;
}

.email-info {
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-weight: 700;
  color: rgba(130, 204, 221, 0.8);
  font-size: 0.9rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

@media (max-width: 768px) {
  .page-container {
    padding: 2rem 1rem;
  }

  .glass-card {
    padding: 2rem;
  }

  .social-buttons {
    flex-direction: column;
    gap: 1rem;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
