var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");
icon.onclick = function () {
    if (mysong.paused) {
        mysong.play();
        icon.src = "https://raw.githubusercontent.com/gulshankumar143/Web_Design/main/Images_Used/pause.png";
    } else {
        mysong.pause();
        icon.src = "https://raw.githubusercontent.com/gulshankumar143/Web_Design/main/Images_Used/play.png"
    }
}