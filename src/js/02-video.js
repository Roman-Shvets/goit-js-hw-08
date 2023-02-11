import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));

player.on('play', function() {
    console.log('played the video!');
});

player.on('timeupdate', throttle(timeSaving, 1000));

function timeSaving (event) {
    //console.log('timeupdate:', event.seconds);
    localStorage.setItem("videoplayer-current-time", event.seconds);
}


player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

