function readFile(files) {
    var fileReader = new FileReader();
    fileReader.readAsArrayBuffer(files[0]);
    fileReader.onload = function (e) {
        document.getElementById('songtitle').innerText = files[0].name;

        const blob = new Blob([e.target.result], { type: "audio/wav" });
        document.getElementById('audioinfo').style.display = "block";
        document.getElementById("player").src = window.URL.createObjectURL(blob);
        console.log(("Filename: '" + files[0].name + "'"), ("(" + ((Math.floor(files[0].size / 1024 / 1024 * 100)) / 100) + " MB)"));
    }
}

function dropHandler(ev) {
    ev.preventDefault();

    if (ev.dataTransfer.items) {
        [...ev.dataTransfer.items].forEach((item, i) => {
            if (item.kind === "file") {
                const file = item.getAsFile();
                const blob = new Blob([file], { type: "audio/wav" });
                document.getElementById('audioinfo').style.display = "block";
                document.getElementById("player").src = window.URL.createObjectURL(blob);
                document.getElementById('songtitle').innerText = file.name;
            }
        });
    } else {
        [...ev.dataTransfer.files].forEach((file, i) => {
            console.log(`… file[${i}].name = ${file.name}`);
        });
    }
}

function dragOverHandler(ev) {
    ev.preventDefault();
}