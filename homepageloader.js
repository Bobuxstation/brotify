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
                        btn.innerHTML = "<div>" + gamename + publish + "</div>";
                        btn.id = "game";
                        let banner = items.bg;
                        btn.style.backgroundImage = "url(" + banner + ")";
                        btn.onclick = function () {
                            document.getElementById("player").src = items.audio;
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
    window.alert("Brotify v1.0\nBy Arsyad&Bagus Studios")
}