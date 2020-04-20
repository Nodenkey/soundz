import React from "react";
import Cover from "../../assets/images/home_image.jpg"
import Navbar from "../../components/navbar/navbar.component";

const Home = () => {
    return (
        <>
            <Navbar/>
            <img src={Cover} alt="cover image" width="100%"/>
            <div className="cover-text">
                <button type="button" className="btn btn-primary">Playstore</button>
            </div>
        </>
    )
}

export default Home;