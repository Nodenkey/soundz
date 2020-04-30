import React from "react";
import AlbumPlayer from "./AlbumPlayer.component";
import {featuredAlbum} from "../../utils/albumList";
import {playMusic} from "../../utils/playMusic";

const AlbumList = () => {
    let trackList = [];


    trackList = featuredAlbum.songs.map((songName, i) => {
            return <AlbumPlayer songTitle={songName} key={i+1000} id={songName} playSong={playMusic}/>
        }
    );
    return (
        <>
            {trackList}
        </>
    )
};


export default AlbumList;