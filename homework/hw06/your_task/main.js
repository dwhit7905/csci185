const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

function playTrack(trackId) {
    const template = `
        <iframe style="border-radius:12px" 
            src="https://open.spotify.com/embed/track/${trackId}?utm_source=generator" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowfullscreen="" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
        </iframe>`
    document.querySelector('#artist').innerHTML = template;
}

async function getTracks (term) {
    console.log(`
        get tracks from spotify based on the search term
        "${term}" and load them into the #tracks section 
        of the DOM...`);
        const url = `https://www.apitutor.org/spotify/simple/v1/search?type=track&q=${term}`;
        const response = await fetch(url);
        const trackData = await response.json();
        console.log(trackData);
        document.querySelector('#tracks').innerHTML = "";

       
        for (let i = 0; i < 5; i++) {
            const track = trackData[i];
            const template = `
                <section class="track-item preview" onclick="playTrack('${track.id}')">
                                <img src="${track.album.image_url}">
                                <i class="fas fa-play play-track" aria-hidden="true"></i>
                                <div class="label">
                                    <h2>${track.name}</h2>
                                    <p>${track.artist.name}</p>
                                </div>
                            </section>
            `; 
        document.querySelector('#tracks').innerHTML += template;
        }
}

async function getAlbums (term) {
    console.log(`
        get albums from spotify based on the search term
        "${term}" and load them into the #albums section 
        of the DOM...`);
        const url = `https://www.apitutor.org/spotify/simple/v1/search?type=album&q=${term}`;
        const response = await fetch(url);
        const albumsData = await response.json();
        const track = albumsData[0];
        console.log(albumsData);

        const template = `
                    <section class="album-card" id="${albums.id}">
                        <div>
                            <img src="${albums.image_url}">
                            <h2>${albums.name}</h2>
                            <div class="footer">
                                <a href="${albums.spotify_url}" target="_blank">
                                    view on spotify
                                </a>
                            </div>
                        </div>
                    </section>
                    `;
                    
        document.querySelector('#albums').innerHTML = template;
}

async function getArtist (term) {
    // go to spotify api with parameter term
    // q=term&type=artist&limit=1
    // insert it into the DOM
    const url = `https://www.apitutor.org/spotify/simple/v1/search?type=artist&q=${term}`;
    console.log(url);
    const request = await fetch(url);
    const data = await request.json();
    console.log(data[0].name);
    console.log(data[0].image_url);
    console.log(data[0].spotify_url);



    const template = `
    <section class="artist-card" id="${artist.id}">
                            <div>
                                <img src="${data[0].image_url}">
                                <h2>${data[0].name}</h2>
                                <div class="footer">
                                    <a href="${data[0].spotify_url}" target="_blank">
                                        view on spotify
                                    </a>
                                </div>
                            </div>
                        </section>`;

    document.querySelector('#artist').innerHTML = template;
};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}