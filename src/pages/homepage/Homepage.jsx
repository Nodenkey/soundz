import React from "react";
import Cover from "../../assets/images/cover.jpg"
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
import Creator1 from "../../assets/images/creator1.png";
import Creator2 from "../../assets/images/creator2.png";
import Contact from "../../assets/images/contact.jpg";
import Line from "../../components/line/Line.component";
import AllRanks from "../../components/ranking/AllRanks.container";
import FeaturedAlbum from "../../components/featured_album/FeaturedAlbum.component";
import Footer from "../../components/footer/Footer.component";

const Home = () => {
    return (
        <>
            <Navbar/>
            <audio id="audio-player1"/>
            <div className="cover main-cover" style={{backgroundImage: `url(${Cover})`}}>
                <h1>All your music of choice <br/> at one place</h1>
                <h3>Available on</h3>
                <div className="main-buttons">
                    <CustomButton content="Google play" img={Playstore} alt="playstore logo"/>
                    <CustomButton content="Apple store" img={Apple} alt="apple logo"/>
                </div>
            </div>
            <section className="cover about"  style={{backgroundImage: `url(${Music2})`}}>
                <h1 data-aos="fade-up">We make access to music very seamless</h1>
                <p data-aos="fade-up">Soundz is your one stop site to all things song. We are a Ghanaian brand that seeks to
                    provide at a very low rate, music of all genres
                </p>
                <a href="#" data-aos="fade-up">Read more</a>
            </section>
            <section className="container-fluid section-color second-section">
                <div className="row second-section">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" data-aos="fade-right">
                        <h1>Discover the newest albums and singles from the best of artistes</h1>
                        <Line inputWidth="20%" inputMargin="50px"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 latest" >
                        <a href="#">View the latest releases</a>
                        <i className="fas fa-arrow-right animated infinite heartBeat slow"/>
                    </div>
                </div>
                <div className="row my-row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <p data-aos="fade-up">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            A alias aperiam at beatae consectetur culpa debitis dicta dolore eaque ex incidunt,
                            laudantium nemo numquam qui reiciendis saepe sint sit temporibus!
                        </p>
                        <img src={Musician2} alt="musician" width="50%" style={{marginTop: "20px"}} className="first" data-aos="fade-in"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" data-aos="fade-in">
                        <img src={Musician1} alt="musician"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4" data-aos="fade-in">
                        <img src={Musician3} alt="musician"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 but-one" data-aos="fade-in">
                        <img src={Musician4} alt="musician" data-aos="fade-in"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 last">
                        <img src={Musician5} alt="musician" data-aos="fade-in"/>
                    </div>
                </div>
                <h1 style={{textAlign: "center"}} data-aos="fade-up">Highest Ranking Songs</h1>
                <p style={{textAlign: "center", marginBottom: "60px"}} data-aos="fade-up">List of top ranking songs of the week</p>
                <AllRanks/>
                <FeaturedAlbum/>
                <div className="row second-section" style={{marginTop: 100}}>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" data-aos="fade-right">
                        <h1>Meet the designers of the soundz web application</h1>
                        <Line inputWidth="15%" inputMargin="50px"/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 latest" data-aos="fade-in">
                        <p>Unfortunately, we do not like showing our faces <span role="img">😜</span>. But feel free to associate us with our
                            favourite images. You can find these images as our profile pictures on all social
                            media platforms and other platforms such as github and gmail.
                        </p>
                    </div>
                </div>
                <div className="row creators-row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div style={{backgroundImage: `url(${Creator2})`}} data-aos="zoom-in">

                        </div>

                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                        <div style={{backgroundImage: `url(${Creator1})`}} data-aos="zoom-in" data-aos-delay="800">
                        </div>
                    </div>
                </div>
            </section>
            <section style={{backgroundImage: `url(${Contact})`}} className="container-fluid contact-section">
                <div className="contact-filter">
                </div>
                <div className="contact-text">
                    <div>
                        <h2>Contact Us</h2>
                        <p>Reach us via mail <i className="fas fa-arrow-right animated infinite heartBeat slow"/>
                        </p>
                    </div>
                    <i className="fas fa-handshake"/>
                    <a href="#"><i className="fas fa-envelope-open-text" data-aos="flip-up"/></a>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Home;