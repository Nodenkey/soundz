import React from "react";
import "./FeaturedAlbum.style.css"
import Album1 from "../../assets/images/album1.jpg";
import Album2 from "../../assets/images/album2.jpg";

const FeaturedAlbum = () => {
    return(
        <div className="container-fluid">
            <div className="row album-row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-5 sect-one" style={{backgroundImage: `url(${Album1})`}}>
                    <div className="album-details">
                        <p>Kakashi Hatake</p>
                        <h1>Chidori</h1>
                        <p>02.2018</p>
                    </div>
                    <div className="color-overlay1"/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-7 sect-two" style={{backgroundImage: `url(${Album2})`}}>
                    <div className="color-overlay2"/>
                </div>
            </div>
        </div>
    )
}

export default FeaturedAlbum;