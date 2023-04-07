function fetchplaylist(URL) {
    document.getElementById("epikestshows").innerHTML = "";

    fetch(URL)
          .then((res) => {return res.json();})
          .then((data) => 
                    data.epikestshows.forEach(items => {
                        let gameList = document.getElementById("epikestshows");
                        let btn = document.createElement("button");
                        gamename = "<h4>" + items.name + "</h4>";
                        publish = "<p class='publisher'>" + items.publisher + "</p>";
                        desc = "<p class='desc'>" + (items.description ? items.description : "This music has no description!") + "</p>";
                        btn.innerHTML = "<div>" + gamename + publish + desc +  "</div>";
                        btn.id = "game";
                        let banner = items.bg;
                        btn.style.backgroundImage = "url(" + banner + ")";
                        btn.onclick = function () {
                            document.getElementById('songtitle').innerText = items.name;
                            document.getElementById("player").src = items.audio;
                            document.getElementById('audioinfo').style.display = "block"
                        };
                        gameList.appendChild(btn);
                    })
                        );
}

fetchplaylist("shows.json")

function promptplaylist() {
    url = prompt("Enter Playlist URL")
    fetchplaylist(url)
    document.getElementById('Playlisttitle').innerText = 'Playlist from ' + url;
}

function about() {
    window.alert("Brotify v3.0\nBy Arsyad&Bagus Studios")
}