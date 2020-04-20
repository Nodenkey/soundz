import React from "react";
import Cover from "../../assets/images/home_image.jpg"
import Navbar from "../../components/navbar/navbar.component";
import Playstore from "../../assets/images/playstore.png";
import Apple from "../../assets/images/apple.png";
import "./Homepage.css"
import CustomButton from "../../components/button/CustomButton.component";
import Music2 from "../../assets/images/music2.jpg";
import Line from "../../components/line/Line.component";

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="cover main-cover" style={{backgroundImage: `url(${Cover})`}}>
                <h1>All your music of choice <br/> at one place</h1>
                <h3>Available on</h3>
                <div className="main-buttons">
                    <CustomButton content="Google play" img={Playstore} alt="playstore logo"/>
                    <CustomButton content="Apple store" img={Apple} alt="apple logo"/>
                </div>
            </div>
            <section className="cover about" style={{backgroundImage: `url(${Music2})`}}>
                <h1>We make access to music very seamless</h1>
                <p>Soundz is your one stop site to all things song. We are a Ghanaian brand that seeks to
                    provide at a very low rate, music of all genres
                </p>
                <a href="#">Read more</a>
            </section>
            <section className="container-fluid section-color">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h1>Discover the newest albums and singles from the best of artistes</h1>
                        <Line inputWidth="20%"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 latest">
                        <a href="#">View the latest releases</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;