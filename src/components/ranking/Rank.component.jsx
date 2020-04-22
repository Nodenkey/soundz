import React from "react";
import CustomButton from "../button/CustomButton.component";
import "./Rank.component.css"
import Cover from "../../assets/images/home_image.jpg";

const Rank = ({id, image, song, artiste, release_date}) => {
    return (
        <>
            <div className="container-fluid">
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
                    <CustomButton content="Listen" className="col-xs-12 col-sm-12 col-md-12 col-lg-2"/>
                </div>
            </div>
        </>
    )
}

export default Rank;