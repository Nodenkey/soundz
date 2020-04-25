import React from "react";
import "./CustomButton.style.css";


const CustomButton = ({content, img, alt, width, height}) => {
    return (
            <button type="button" className="my-btn" style={{width: width, height: height}}>
                {
                    img !== undefined ?
                        <img src={img} alt={alt}/> : console.log()
                }
                {content}
            </button>
    )
}
export default CustomButton;