import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    language: 'sv', // Default to Swedish
  }),
  actions: {
    toggleLanguage() {
      this.language = this.language === 'sv' ? 'en' : 'sv'
    },
    setLanguage(lang: 'en' | 'sv') {
      this.language = lang
    }
  },
  persist: true
})
