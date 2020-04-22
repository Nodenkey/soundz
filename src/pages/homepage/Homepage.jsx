import React from "react";
import Cover from "../../assets/images/home_image.jpg"
import Navbar from "../../components/navbar/navbar.component";
import Playstore from "../../assets/images/playstore.png";
import Apple from "../../assets/images/apple.png";
import "./Homepage.css"
import CustomButton from "../../components/button/CustomButton.component";
import Music2 from "../../assets/images/music2.jpg";
import Musician1 from "../../assets/images/musician1.jpg";
import Musician2 from "../../assets/images/musician2.jpg";
import Musician3 from "../../assets/images/musician3.jpg";
import Musician4 from "../../assets/images/musician4.jpg";
import Musician5 from "../../assets/images/musician5.jpg";
import Creator1 from "../../assets/images/creator1.jpg";
import Creator2 from "../../assets/images/creator2.jpg";


import Line from "../../components/line/Line.component";
import AllRanks from "../../components/ranking/AllRanks.container";
import FeaturedAlbum from "../../components/featured_album/FeaturedAlbum.component";

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
            <section className="container-fluid section-color second-section">
                <div className="row second-section">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h1>Discover the newest albums and singles from the best of artistes</h1>
                        <Line inputWidth="20%" inputMargin="50px"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 latest">
                        <a href="#">View the latest releases</a>
                        <i className="fas fa-arrow-right animated infinite heartBeat slow"/>
                    </div>
                </div>
                <div className="row my-row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A alias aperiam at beatae consectetur culpa debitis dicta dolore eaque ex incidunt,
                            laudantium nemo numquam qui reiciendis saepe sint sit temporibus!
                        </p>
                        <img src={Musician2} alt="musician" width="50%" style={{marginTop: "20px"}} className="first"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <img src={Musician1} alt="musician"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <img src={Musician3} alt="musician"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 but-one">
                        <img src={Musician4} alt="musician"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 last">
                        <img src={Musician5} alt="musician"/>
                    </div>
                </div>
                <h1 style={{textAlign: "center"}}>Highest Ranking Songs</h1>
                <p style={{textAlign: "center", marginBottom: "60px"}}>List of top ranking songs of the week</p>
                <AllRanks/>
                <FeaturedAlbum/>
                <div className="row second-section" style={{marginTop: 100}}>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <h1>Meet the designers of the soundz web application</h1>
                        <Line inputWidth="15%" inputMargin="50px"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 latest">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, aliquid beatae cum ex
                            expedita ipsa labore, molestias mollitia nihil perspiciatis quas quasi quis vel veritatis
                            vitae. Aut esse quisquam soluta.</p>
                    </div>
                </div>
                <div className="row creators-row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div style={{backgroundImage: `url(${Creator1})`}}>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div style={{backgroundImage: `url(${Creator2})`}}>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;