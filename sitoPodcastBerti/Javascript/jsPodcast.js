// Per pagina EpisodiPodcast


window.addEventListener('DOMContentLoaded', () => {
    const episodesContainer = document.getElementById('episodes-list');

    // Simulazione degli episodi (da sostituire con lettura dinamica)
    const episodes = [
        { id: 1, title: 'Episodio 1', cover: '../Media/episodio1.png' },
        { id: 2, title: 'Episodio 2', cover: '../Media/episodio2.png' },
        { id: 3, title: 'Episodio 3', cover: '../Media/episodio3.png' },
        { id: 4, title: 'Episodio 4', cover: '../Media/episodio4.png' },
        { id: 5, title: 'Episodio 5', cover: '../Media/episodio5.png' }
    ];

    episodes.forEach(episode => {
        const episodeElement = document.createElement('div');
        episodeElement.className = 'episode-item';
        episodeElement.innerHTML = `
            <img src="${episode.cover}" alt="${episode.title}" class="episode-cover">
            <h3>${episode.title}</h3>
            <button onclick="window.location.href='Podcast.html?episode=${episode.id}'"data-translate="ascolta">ASCOLTA ORA</button>
        `;
        episodesContainer.appendChild(episodeElement);

        // Debug per vedere se l'episodio è stato aggiunto correttamente
        console.log(`Aggiunto episodio: ${episode.title}`);
    });
});