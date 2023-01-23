var obj = {"epikestshows":[]};
var jsonStr

function createplaylist() {
    obj['epikestshows'].push({
        "name" : document.getElementById("title").value, 
        "publisher" : document.getElementById("publisher").value, 
        "bg" : document.getElementById("coverimg").value, 
        "audio" : document.getElementById("audiourl").value
    });

    var jsonStr = JSON.stringify(obj);
    document.getElementById("epikestshows").innerHTML = "";

    obj.epikestshows.forEach(items => {
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
}

function promptplaylist() {
    url = prompt("Enter Playlist URL")
    document.getElementById('Playlisttitle').innerText = 'Playlist from ' + url;
    fetch (url)
        .then(function(resp) {return resp.json();})
        .then(function(colorsArr) {
            obj = colorsArr;
            obj.epikestshows.forEach(items => {
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
        });
}

function download_txt() {
    var textToSave = JSON.stringify(obj);
    var hiddenElement = document.createElement('a');
  
    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'Playlist.json';
    hiddenElement.click();
}

function about() {
    window.alert("Brotify v1.0\nBy Arsyad&Bagus Studios")
}