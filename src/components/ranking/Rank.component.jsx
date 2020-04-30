import React from "react";
import CustomButton from "../button/CustomButton.component";
import "./Rank.component.css"

const Rank = ({id, image, song, artiste, release_date}) => {
    return (
        <>
            <div className="container-fluid" data-aos="fade-up">
                <div className="row top-list-row">
                    <h3 className="col-xs-12 col-sm-12 col-md-12 col-lg-1">0{id}</h3>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
                        <div className="song-img" style={{backgroundImage: `url(${image})`}}>
                        </div>
                        <h5>{song}</h5>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 icon-text">
                        <i className="fas fa-microphone"/>
                        <p>{artiste}</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 icon-text">
                        <i className="fas fa-upload"/>
                        <p>{release_date}</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-2">
                        <CustomButton content="Listen" width="140px" height="42px"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rank;