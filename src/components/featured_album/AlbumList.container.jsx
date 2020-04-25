import React, {useEffect, useRef, useState} from "react";
import AlbumPlayer from "./AlbumPlayer.component";
import {featuredAlbum} from "../../utils/albumList";

const AlbumList = () => {
    let trackList = [];
    const song = new Audio();
    song.preload = "metadata";

    const playSong = (event) => {
        const activeSong = event.target.id;
        song.src = require(`../../assets/audio/${activeSong}.mp3`);
        song.play();
    }


    trackList = featuredAlbum.songs.map((songName, i) => {
            return <AlbumPlayer songTitle={songName} key={i} id={songName} clickSong={playSong}/>
        }
    )
    return (
        <>
            {trackList}

        </>
    )
}

export default AlbumList;