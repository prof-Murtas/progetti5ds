



//////////////////////////////////////////////////////////////////////////////////////////////


function gestisciModalita() {
    const themeSwitch = document.getElementById("theme-switch");

    // Event listener per il cambio del tema
    themeSwitch.addEventListener("click", () => {
        let prefs = JSON.parse(localStorage.getItem('userPreferences')) || {
            language: 'it',
            font: 'sans-serif',
            darkMode: false
        };

        // Toggle darkMode
        prefs.darkMode = !prefs.darkMode;
        localStorage.setItem('userPreferences', JSON.stringify(prefs));
        applyPreferences(prefs);
    });
}


//////////////////////////////////////////////////////////////////////////////////////////////



// Funzione per ottenere le preferenze dal modulo
function getPreferencesFromForm() {
    return {
        language: document.getElementById('language').value,
        font: document.getElementById('font').value,
        darkMode: document.getElementById('darkMode').checked
    };
}

function previewPreferences() {
    const prefs = getPreferencesFromForm();
    applyPreferences(prefs);
    changeLanguage(prefs.language);
}

function loadPreferences() {
    const defaultPrefs = {
        language: 'it',
        font: 'sans-serif',
        darkMode: false
    };

    // Legge le preferenze salvate, se esistono, altrimenti usa i valori di default
    const saved = JSON.parse(localStorage.getItem('userPreferences')) || defaultPrefs;

    // Applica le preferenze caricate
    applyPreferences(saved);
}

function applyPreferences(prefs) {
    document.body.style.fontFamily = prefs.font;

    if (prefs.darkMode) {
        document.body.classList.add('darkMode');
        if (logo) logo.src = "../Media/logoModalitaScura.png";
        if (logoHome) logoHome.src = "Media/logoModalitaScura.png";
    } else {
        document.body.classList.remove('darkMode');
        if (logo) logo.src = "../Media/logoModalitaChiara.png";
        if (logoHome) logoHome.src = "Media/logoModalitaChiara.png";
    }

    changeLanguage(prefs.language);

    // Aggiorna il form
    document.getElementById('language').value = prefs.language;
    document.getElementById('font').value = prefs.font;
    document.getElementById('darkMode').checked = prefs.darkMode;
}

function savePreferences() {
    const prefs = getPreferencesFromForm();
    localStorage.setItem('userPreferences', JSON.stringify(prefs));
    applyPreferences(prefs);
    changeLanguage(prefs.language);
}

function resetPreferences() {
    localStorage.removeItem('userPreferences');

    const defaultPrefs = {
        language: 'it',
        font: 'sans-serif',
        darkMode: false
    };

    applyPreferences(defaultPrefs);
    changeLanguage(defaultPrefs.language);
    alert("Le preferenze sono state ripristinate.");
}


/////////////////////////////////////////////////////////////////////////////////////////////




// Funzione per cambiare la lingua
function changeLanguage(language) {
   // Ottieni tutti gli elementi che devono essere tradotti
   const translateElements = document.querySelectorAll("[data-translate]");

   for (let i = 0; i < translateElements.length; i++) {
       const element = translateElements[i];

       // Prendi la chiave della traduzione dall'attributo data-translate
       const key = element.getAttribute("data-translate");

       // Aggiorna il testo dell'elemento con la traduzione corretta
       element.textContent = translations[language][key];
   }
}


//traduzione da applicare in base alla lingua
const translations = {
    "it": {
        "sottotitolo1": "Podcast sulla pirateria digitale",
        "sottotitolo1.1":"Ultimo episodio",
        "descrizione1": "In questo episodio esploriamo la storia della pirateria digitale insieme ai tryardini",
        "sottotitolo1.2": "Episodio Random",
        "descrizione1.1": "In questo episodio ...",
        "ascolta": "ASCOLTA ORA",
        "titolo2": "Chi Siamo",
        "sottotitolo2": "Il Progetto",
        "descrizione2": "Un viaggio audio tra storie e idee. Il nostro podcast nasce dal desiderio di creare connessioni autentiche attraverso conversazioni profonde, interviste stimolanti e racconti sorprendenti. Ogni episodio è pensato per far riflettere, emozionare e ispirare.",
        "sottotitolo2.1": "Il nostro team",
        "descrizione2.1": "Ideatore del progetto e voce narrante. Appassionato di storytelling e comunicazione audio.",
        "descrizione2.2": "Regia e montaggio. Ama dare ritmo e colore ai contenuti audio.",
        "descrizione2.3": "Responsabile tecnico. Cura la qualità del suono e le pubblicazioni online.",
        "descrizione2.4": "Social media manager. Si occupa della promozione e del contatto con il pubblico.",
        "descrizione2.5": "Ricerca e contenuti. Scova storie interessanti e cura gli script degli episodi.",
        "descrizione2.6": "Dove ascoltarci",
        "titolo3" : "Episodi",
        "titolo4": "Social e contatti",
        "descrizione4": "Presto creeremo una pagina instagram. STAY TUNED!!!",
        "preferenzeTitolo": "Preferenze Utente",
        "labellingua": "Lingua:",
        "darkModeLabel": "Tema scuro:",
        "salvaPreferenze": "Salva preferenze"
    },
    "en": {
        "sottotitolo1": "Podcast about digital piracy",
        "sottotitolo1.1":"Last episode",
        "descrizione1": "In this episode, we explore the history of digital piracy together with the Tryardini",
        "sottotitolo1.2": "Random Episode",
        "descrizione1.1": "In this episode ...",
        "ascolta": "LISTEN NOW",
        "titolo2": "About Us",
        "sottotitolo2": "The Project",
        "descrizione2": "An audio journey through stories and ideas. Our podcast was born from the desire to create authentic connections through deep conversations, thought-provoking interviews, and surprising stories. Each episode is designed to make you reflect, feel, and be inspired.",
        "sottotitolo2.1": "Our team",
        "descrizione2.1": "Creator of the project and narrator. Passionate about storytelling and audio communication.",
        "descrizione2.2": "Direction and editing. Loves giving rhythm and color to audio content.",
        "descrizione2.3": "Technical manager. Oversees sound quality and online publishing.",
        "descrizione2.4": "Social media manager. Handles promotion and audience engagement.",
        "descrizione2.5": "Research and content. Finds compelling stories and crafts the scripts for each episode.",
        "descrizione2.6": "Find us here",
        "titolo3" : "Episodes",
        "titolo4": "Social and Contacts",
        "descrizione4": "We will soon create an Instagram page. STAY TUNED!!!",
        "preferenzeTitolo": "User Preferences",
        "labellingua": "Language:",
        "darkModeLabel": "Dark mode:",
        "salvaPreferenze": "Save preferences"
    }
};

//data-translate="ascolta"


let logoHome, logo;



document.addEventListener("DOMContentLoaded", () => {
    logoHome = document.getElementById("logoHome");
    logo = document.getElementById("logo");
    const language = document.getElementById("language");

    //gestisciModalita();
    //loadPreferences();
    //episodioRandom(); --> funziona solo se lo metto fuori


    // Event listener per il cambio della lingua
    language.addEventListener('change', (e) => {
        changeLanguage(e.target.value);
    });
}); 

document.addEventListener("DOMContentLoaded", gestisciModalita);
document.addEventListener("DOMContentLoaded", loadPreferences);





  






/*

//da aggiungere 

document.getElementById('linkUltimo').addEventListener('click', function(event) {
    event.preventDefault();  // Previene l'azione di default del link
    // Reindirizza alla pagina dell'episodio
    window.location.href = 'Pagine/Podcast.html?episode=5'; // Modifica con il link corretto
});


// Podcast Player Script
// Funzione per gestire il progresso del podcast
// Selezioniamo gli elementi
const audio = document.getElementById("audio");
const progressBar = document.getElementById("progress-bar");
const timeRemaining = document.getElementById("time-remaining");

// Funzione per aggiornare la barra di progresso e il tempo rimanente
audio.addEventListener("timeupdate", () => {
    // Calcola la percentuale di progresso
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;

    // Calcola il tempo rimanente in minuti e secondi
    const remainingTime = audio.duration - audio.currentTime;
    const minutes = Math.floor(remainingTime / 60);
    const seconds = Math.floor(remainingTime % 60);
    timeRemaining.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
});

// Funzione per aggiornare il tempo del podcast quando l'utente interagisce con la barra di progresso
progressBar.addEventListener("input", () => {
    const newTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = newTime;
});


*/