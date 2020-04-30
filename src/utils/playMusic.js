import {featuredAlbum} from "./albumList";
import {timeCalculator} from "./duration";

const myDiv = document.querySelector("div");


export const playMusic = (event) => {
    if (myDiv.childElementCount > 0) {
        //get main audio player
        const musicPlayer = myDiv.querySelector("audio");
        console.log("P-TAG", myDiv.querySelectorAll(`p`));
        // select p tag with song name as id
        const song_name = myDiv.querySelector(`p#${event.target.id}`);
        // select duration tag
        const song_duration = myDiv.querySelector(`p#durationEl${event.target.id}`);
        // select all songs for boldening to be removed
        const all_songs = myDiv.querySelectorAll(".featured-song");
        for (let i = 0; i < all_songs.length; i++) {
            all_songs[i].classList.remove("bolden");
        }
        console.log(all_songs[0].classList);
        // bolden selected song
        song_name.classList.add("bolden");
        // bolden selected song duration
        song_duration.classList.add("bolden");
        // get musicplayer to play song based on id(song)
        musicPlayer.src = require(`../assets/audio/${event.target.id}.mp3`);
        // play song
        musicPlayer.play();
    }
}
export const mainMusicController = (event) => {
    // only play when components have been mounted
    if (myDiv.childElementCount > 0) {
        const musicPlayer = myDiv.querySelector("audio");
        if (event.target.id === "pause") {
            musicPlayer.pause();
        } else {
            if (musicPlayer.src === "") {
                musicPlayer.src = require(`../assets/audio/${featuredAlbum.songs[0]}.mp3`)
            }
            musicPlayer.play();
        }
    }
}

export const playNextOrPrevious = (event, activeSong) => {
    let activeIndex = featuredAlbum.songs.indexOf(activeSong);
    console.log("activeIndex", activeIndex);
    if (myDiv.childElementCount > 0) {
        const musicPlayer = myDiv.querySelector("audio");
        if (event.target.id === "next" && activeSong !== "") {
            const songToPlay = featuredAlbum.songs[activeIndex + 1];
            musicPlayer.src = require(`../assets/audio/${songToPlay}.mp3`);
        } else if (event.target.id === "previous" && activeSong !== "" && activeSong !== featuredAlbum.songs[0]) {
            const songToPlay = featuredAlbum.songs[activeIndex - 1];
            musicPlayer.src = require(`../assets/audio/${songToPlay}.mp3`);
        }
        musicPlayer.play();
    }
}
export const seeker = (activeSong) =>{
    let activeIndex = featuredAlbum.songs.indexOf(activeSong);
    // element import
    const seekerDiv = myDiv.querySelector("div#seeker");
    const playedTime = myDiv.querySelector("span#playedTime");
    const totalTime = myDiv.querySelector("span#totalTime");
    const musicPlayer = myDiv.querySelector("audio");

    musicPlayer.addEventListener("timeupdate", function () {
        const position = musicPlayer.currentTime / musicPlayer.duration;
        seekerDiv.style.width = position * 100 + "%";
        playedTime.innerHTML = timeCalculator(musicPlayer.currentTime);
        totalTime.innerHTML = timeCalculator(musicPlayer.duration);
        if (position === 1 && featuredAlbum.songs[-1] !== activeSong){
            console.log("ACTIVE SONG", activeSong)
            const songToPlay = featuredAlbum.songs[activeIndex + 1];
            console.log("SONG TO PLAY", songToPlay);
            musicPlayer.src = require(`../assets/audio/${songToPlay}.mp3`)
            musicPlayer.play()
        }
    })
}

