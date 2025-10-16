function episodioRandom() {
    const episodi = [
        {
            titolo: "episodio01",
            descrizione: "descrizione01",
            immagine: "Media/episodio1.png",
            link: "#"
        },
        {
            titolo: "episodio02",
            descrizione: "descrizione02",
            immagine: "Media/episodio2.png",
            link: "#"
        },
        {
            titolo: "episodio03",
            descrizione: "descrizione03",
            immagine: "Media/episodio3.png",
            link: "#"
        },
        {
            titolo: "episodio04",
            descrizione: "descrizione04",
            immagine: "Media/episodio4.png",
            link: "#"
        },
        {
            titolo: "episodio05",
            descrizione: "descrizione05",
            immagine: "Media/episodio5.png",
            link: "#"
        },
    ];

    let episodioCasuale = episodi[Math.floor(Math.random() * episodi.length)];
    
    // Aggiorniamo il contenuto degli elementi usando le classi corrette
    document.querySelector(".titoloRandom").textContent = episodioCasuale.titolo;
    document.querySelector(".descrizioneRandom").textContent = episodioCasuale.descrizione;
    document.querySelector(".copertinaRandom").src = episodioCasuale.immagine;
    document.querySelector(".linkRandom").href = episodioCasuale.link;
}

document.addEventListener("DOMContentLoaded", episodioRandom);