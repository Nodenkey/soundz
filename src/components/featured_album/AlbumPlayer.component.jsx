import React, {useState} from "react";
import "./AlbumPlayer.style.css";

const AlbumPlayer = ({songTitle, id, clickSong}) => {
    const [player, setPlayer] = useState({
        duration: "",
    })
    const song = new Audio();
    song.src = require(`../../assets/audio/${songTitle}.mp3`);
    song.onloadedmetadata = function () {
        let time = song.duration;
        let minutes = Math.floor(time / 60);
        let mod = time % 60
        let seconds = Math.floor(mod);
        const splitTime = mod.toString().split(".");
        if (Number(splitTime[1][0]) > 5) {
            seconds = seconds + 1;
        }
        if (seconds.toString().length < 2) {
            seconds = "0" + seconds.toString();
        }
        if (seconds === 60) {
            minutes = minutes + 1;
            seconds = "00";
        }
        const eachDuration = minutes.toString() + ":" + seconds.toString();
        setPlayer({...player, duration: eachDuration})
    }

    return (
        <>
            <div className="list-item">
                <div className="list-left">
                    <i onClick={clickSong} className="fas fa-play" id={id}/>
                    <p onClick={clickSong} id={id}>{songTitle}</p>
                </div>
                <p>{player.duration}</p>
            </div>
        </>
    )
}

export default AlbumPlayer;