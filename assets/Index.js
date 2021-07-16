import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'
const video = document.querySelector("video");
const player = new MediaPlayer({
    videoElement: video,
    plugins: [new AutoPlay()]
 });

const button = document.querySelector(".play");
button.onclick = () => player.togglePlay();

const buttonMute = document.querySelector(".mute");
buttonMute.onclick = () =>{
    player.toggleMute();
    buttonMute.textContent= player.MuteText();
    
} 