import React, {useState} from "react";
import "./FeaturedAlbum.style.css"
import Album1 from "../../assets/images/album1.jpg";
import Album2 from "../../assets/images/album2.jpg";
import CustomButton from "../button/CustomButton.component";
import Apple from "../../assets/images/apple.png";
import AlbumList from "./AlbumList.container";
import {featuredAlbum} from "../../utils/albumList";



const FeaturedAlbum = () => {

    const [player, setPlayer] = useState({
        play: "inline-block",
        pause: "none",
    })
    const pausePlay = (event) =>{
        if (event.target.id === "play"){
            setPlayer({...player, play: "none", pause: "inline-block"});
        }else if(event.target.id === "pause"){
            setPlayer({...player, pause: "none", play: "inline-block"});
        }
    }

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
                            <div className="trace"/>
                        </div>
                        <div className="player-bottom">
                            <div>
                                <p>playing</p>
                                <h6>Subzero</h6>
                            </div>
                            <div className="player-buttons">
                                <i className="fas fa-step-backward"/>
                                <i className="far fa-play-circle" style={{display: player.play}} id="play" onClick={pausePlay}/>
                                <i className="far fa-pause-circle" style={{display: player.pause}} id="pause" onClick={pausePlay}/>
                                <i className="fas fa-step-forward"/>
                            </div>
                            <p>2:30/3:30</p>
                        </div>

                    </div>
                    <div className="color-overlay2"/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedAlbum;