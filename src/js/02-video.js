import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

if (localStorage.getItem(STORAGE_KEY)) {
    player.setCurrentTime(localStorage.getItem(STORAGE_KEY));
}

player.on('play', function() {
    console.log('played the video!');
});

player.on('timeupdate', throttle(timeSaving, 1000));

function timeSaving (event) {
    localStorage.setItem(STORAGE_KEY, event.seconds);
}


player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});