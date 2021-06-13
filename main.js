const api = `https://finalspaceapi.com/api/v0/character`;
const char_container = document.getElementById('char_container');

const fetchData = async () => {
    const res = await fetch(api);
    const data = await res.json();
    console.log(data);

    data.forEach(element => {
        const characterEl = document.createElement('div');
        characterEl.classList.add('character');
        const characterHTML = `
            <div class = "img-container">
                <img src = "${element.img_url}" alt = ${element.name}/>
            </div>
            <div class = "info">
                <span class = "number">${element.id}</span>
                <h3 class = "name">${element.name}</h3>
                <span class = "species">${element.species}</span>
            </div>

        `;

        characterEl.innerHTML = characterHTML;
        char_container.appendChild(characterEl);
    });
}

fetchData();