import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const messages = {
    en: {
        title: 'Cliff Height Timer',
        openMenu: 'Open Menu',
        drawer: {
            home: "Home",
            about: "About",
            history: "History"
        },
        see_on_github: "See On Github",
        about: {
          title: "About this app",
          p1: "This is a very simple app that uses basic physics to tell you the height of a cliff or the depth of a well. All you do is time how long it takes for the object to hit the ground and let science do the rest. You can even measure the height of a cliff from the ground if you throw a rock right up to the top and start timing at the apex.",
          p2: "This app was inspired by Science/Design/Creativity YouTuber Mark Rober."
        },
        history: {
          title: "History",
          noHistory: "No History"
        }
    },
    fr: {
        title: "Cliff Height Timer",
        openMenu: 'Ouvrir le Menu',
        drawer: {
            home: "Accueil",
            about: "À propos",
            history: "Historique"
        },
        see_on_github: "Voir sur Github",
        about: {
            title: "À Propos",
            p1: "Il s'agit d'une application très simple qui utilise la physique de base pour vous dire la hauteur d'une falaise ou la profondeur d'un puits. Tout ce que vous avez à faire, c'est de compter le temps qu’il faut pour que l'objet frappe le sol et laisser la science faire le reste.",
            p2: "Cette application a été inspirée par le YouTuber Mark Rober."
        },
        history: {
            title: "Historique",
            noHistory: "Aucun historique"
        }
    }
};


export const i18n = new VueI18n({
    locale: getLanguage(),
    fallbackLocale: 'en',
    messages
})

function getLanguage() {
    try {
        let l = navigator.language.split('-')
        return l[0]
    } catch (err) {
        return navigator.language
    }
}
