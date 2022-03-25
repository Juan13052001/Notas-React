import React from "react";
import Votos from "./Votos";

const Anecdota = ({ text, votos }) => {
    return (
        <div className="border-4 w-3/4 flex flex-col justify-center card bg-minionYellow border-SeaGreenCrayola rounded-lg dark:bg-ametista dark:border-minionYellow">
            <p className="text-xl text-center ml-10 my-10 font-bold">{text}</p>
            <Votos votos={votos} />
        </div>
    );
};

export default Anecdota;
