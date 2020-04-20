import React from "react";
import "./CustomButton.style.css";


const CustomButton = ({content, img, alt}) => {
    return (
            <button type="button" className="btn btn-primary">
                {
                    img !== undefined ?
                        <img src={img} alt={alt}/> : console.log()
                }
                {content}
            </button>
    )
}
export default CustomButton;