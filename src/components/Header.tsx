import React from "react";
import slideshare from ".//slideshare.png"

export const Header = () => {
    return (
        <div className={"header"}>

            <img
                className={"logo"}
                src={slideshare}
                alt=""/>
        </div>
    );
};
