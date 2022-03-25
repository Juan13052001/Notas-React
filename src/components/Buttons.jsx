import React from "react";

const Buttons = ({ text, handleClick, icon }) => {
    return (
        <button
            className="text-white bg-ametista rounded-lg w-32 h-10 ml-10 my-10"
            onClick={handleClick}
        >
            <span className="mr-3">{icon}</span>
            {text}
        </button>
    );
};

export default Buttons;
