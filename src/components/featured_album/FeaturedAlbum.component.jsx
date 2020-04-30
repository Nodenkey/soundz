import React, {useEffect, useState} from "react";
import "./FeaturedAlbum.style.css"
import Album1 from "../../assets/images/album1.jpg";
import Album2 from "../../assets/images/album2.jpg";
import CustomButton from "../button/CustomButton.component";
import Apple from "../../assets/images/apple.png";
import AlbumList from "./AlbumList.component";
import {featuredAlbum} from "../../utils/albumList";
import {connect} from "react-redux";
import {mainMusicController, playNextOrPrevious, seeker} from "../../utils/playMusic";

const FeaturedAlbum = ({playing}) => {

    const [player, setPlayer] = useState({
        play: "inline-block",
        pause: "none",
    });

    useEffect(() => {
        if (playing !== "") {
            setPlayer({...player, play: "none", pause: "inline-block"});
        }
        seeker(playing);
    }, [playing])


    const pausePlay = (event) => {
        mainMusicController(event, playing);
        if (event.target.id === "play") {
            setPlayer({...player, play: "none", pause: "inline-block"});
        } else if (event.target.id === "pause") {
            setPlayer({...player, pause: "none", play: "inline-block"});
        }
    };

    const nextOrPrevious = (event) => {
        playNextOrPrevious(event, playing);
        // if (playing !== ""){
        //     setPlayer({...player, play: "none", pause: "inline-block"});
        // }
        setPlayer({...player, play: "none", pause: "inline-block"});

    }
    //TODO: reset playing in redux upon clicking next, previous and main play button

    return (
        <div className="container-fluid">
            <div className="row album-row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 sect-one"
                     style={{backgroundImage: `url(${Album1})`}}>
                    <div className="album-details">
                        <p>{featuredAlbum.artiste}</p>
                        <h1>{featuredAlbum.albumName}</h1>
                        <p>{featuredAlbum.dateReleased}</p>
                    </div>
                    <div className="color-overlay1"/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 sect-two"
                     style={{backgroundImage: `url(${Album2})`}}>
                    <div className="album-main">
                        <div className="album-title">
                            <div className="album-title-left">
                                <p>Featured Album</p>
                                <h2>{featuredAlbum.albumName}</h2>
                            </div>
                            <CustomButton content="buy on itunes" height="55px" alt="itunes button"
                                          img={Apple}/>
                        </div>
                    </div>
                    <div className="album-list">
                        <AlbumList/>
                    </div>
                    <div className="player">
                        <div className="audio-trace">
                            <div className="trace" id="seeker"/>
                        </div>
                        <div className="player-bottom">
                            <div className="playing">
                                <p>playing</p>
                                <h6>{playing}</h6>
                            </div>
                            <div className="player-buttons">
                                <i className="fas fa-step-backward" id="previous" onClick={nextOrPrevious}/>
                                <i className="far fa-play-circle" style={{display: player.play}} id="play"
                                   onClick={pausePlay}/>
                                <i className="far fa-pause-circle" style={{display: player.pause}} id="pause"
                                   onClick={pausePlay}/>
                                <i className="fas fa-step-forward" id="next" onClick={nextOrPrevious}/>
                            </div>
                            <p className="time"><span id="playedTime">0:00</span>/<span id="totalTime">0:00</span></p>
                        </div>
                    </div>
                    <div className="color-overlay2"/>
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = state => ({
    playing: state.playAlbum.playing
});

export default connect(mapStateToProps)(FeaturedAlbum);