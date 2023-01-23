const audioplayerelement = document.getElementById('player')

function play() {
 if (audioplayerelement.paused) {
    audioplayerelement.play()
 } else {
    audioplayerelement.pause()
 }
}