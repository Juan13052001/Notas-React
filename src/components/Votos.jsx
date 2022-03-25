import React from "react";

const Votos = ({ votos }) => {
    return (
        <p className="ml-10 my-10 text-center">
            Tiene <span className="font-bold">{votos}</span> votos
        </p>
    );
};

export default Votos;
