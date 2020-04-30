import React from "react";

export const timeCalculator = (time) => {
    let minutes = Math.floor(time / 60);
    let mod = time % 60;
    let seconds = Math.floor(mod);
    const splitTime = mod.toString().split(".");
    if (splitTime[1] !== undefined){
        if (Number(splitTime[1][0]) > 5) {
            seconds = seconds + 1;
        }
    }else{
        return "00:00";
    }
    if (seconds.toString().length < 2) {
        seconds = "0" + seconds.toString();
    }
    if (seconds === 60) {
        minutes = minutes + 1;
        seconds = "00";
    }
    return minutes.toString() + ":" + seconds.toString();
}
export const duration = (songTitle) => {
    const durationEl = document.querySelector(`#durationEl${songTitle}`);
    const song = new Audio();
    song.src = require(`../assets/audio/${songTitle}.mp3`);
    song.preload = "metadata";
    song.onloadedmetadata = function () {
        let time = song.duration;
        durationEl.innerHTML = timeCalculator(time);
    }
}