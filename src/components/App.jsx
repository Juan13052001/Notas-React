import React, { useState } from "react";
import Anecdota from "./Anecdota";
import Buttons from "./Buttons";
import Header from "./Header";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShuffle } from "@fortawesome/free-solid-svg-icons";

const App = ({ anecdotes }) => {
    const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

    const [selected, setSelected] = useState(0);

    const numeroAleatorio = () => {
        const num = Math.floor(Math.random() * anecdotes.length);
        setSelected(num);
    };

    const votos = (e) => {
        const copyVotes = [...votes];

        copyVotes[selected] += 1;

        setVotes(copyVotes);
    };

    const maxVoto = Math.max(...votes);
    const winningAnecdote = anecdotes[votes.indexOf(maxVoto)];

    return (
        <div className="container">
            <Header title="Anécdota random" />
            <Anecdota text={anecdotes[selected]} votos={votes[selected]} />
            <div className="card w-1/4 h-24 flex flex-row justify-between">
                <Buttons
                    text="Anécdota"
                    handleClick={numeroAleatorio}
                    icon={
                        <FontAwesomeIcon
                            style={{ fontSize: "15px" }}
                            icon={faShuffle}
                        />
                    }
                />
                <Buttons
                    text="Votar"
                    handleClick={votos}
                    icon={<FontAwesomeIcon icon={faHeart} />}
                />
            </div>
            <Header title="Anécdota con mas votos" />

            <Anecdota text={winningAnecdote} votos={votes[selected]} />
        </div>
    );
};

export default App;
