import React from "react";

const Line = ({inputWidth, inputMargin}) => {
    return(
        <div style={{width: inputWidth, backgroundColor: "#007EA7", height: "2px", margin: `${inputMargin} 0`}}>
        </div>
    )
}

export default Line;