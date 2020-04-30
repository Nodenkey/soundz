import React, {useEffect, useState} from "react";
import "./AlbumPlayer.style.css";
import {connect} from "react-redux";
import {setNowPlaying} from "../../redux/player/actions";
import {duration} from "../../utils/duration";


const AlbumPlayer = ({songTitle, id, clickSong, playSong}) => {

    const clickOnSong = (event) => {
        playSong(event);
        clickSong(event.target.id);
    }

    useEffect(()=>{
        duration(songTitle)
    },[])


    return (
        <>
            <div className="list-item">
                <div className="list-left">
                    <i onClick={clickOnSong} className="fas fa-play featured-song" id={id}/>
                    <p onClick={clickOnSong} id={id} className="featured-song">{songTitle}</p>
                </div>
                <p id={`durationEl${songTitle}`} className="featured-song"/>
            </div>
        </>
    )
};

const mapDispatchToProps = (dispatch) => ({
    clickSong: (songTitle) => dispatch(setNowPlaying(songTitle)),
});

export default connect(null, mapDispatchToProps)(AlbumPlayer);