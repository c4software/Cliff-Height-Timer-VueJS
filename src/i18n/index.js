import VueI18n from 'vue-i18n'
import Vue from 'vue'
Vue.use(VueI18n);

const messages = {
  en: {
    title: 'Cliff Height Timer',
    openMenu: 'Open Menu',
    drawer: {
      home: "Home",
      about: "About"
    },
    see_on_github: "See On Github"
  },
  fr: {
    title: "Cliff Height Timer",
    openMenu: 'Ouvrir le Menu',
    drawer: {
      home: "Accueil",
      about: "À propos"
    },
    see_on_github: "Voir sur Github"
  }
};


export const i18n = new VueI18n({
  locale: getLanguage(),
  fallbackLocale: 'en',
  messages,
});

function getLanguage() {
  try {
    let l = navigator.language.split("-");
    return l[0];
  }catch(err){
    console.log(err);
    return navigator.language;
  }
}
