import React, { useState } from "react";
import ReactDOM from "react-dom";

// 💬 COMPONENT - App
const App = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0);
    const [vote, setVote] = useState(Array(anecdotes.length).fill(0));
    const [largest, setLargest] = useState(0);

    // 💬 Generate a random anecdote
    const handleRandom = () => {
        const random = Math.floor(Math.random() * anecdotes.length);
        setSelected(random);
    };

    // 💬 Update vote and check the biggest
    const handleVote = () => {
        // 💬 Update 1 value in 'vote' array
        const copy = [...vote];
        copy[selected] += 1;
        setVote(copy);

        // 💬 Get the index of the greatest value in 'vote' array
        const max = Math.max(...copy);
        const indexValue = copy.findIndex(number => number === max);
        setLargest(indexValue);
    };

    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{anecdotes[selected]}</p>
            <p>has {vote[selected]} votes</p>
            <button onClick={handleVote}>vote</button>
            <button onClick={handleRandom}>next anecdote</button>
            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[largest]}</p>
            <p>has {vote[largest]} votes</p>
        </div>
    );
};

// 💬 Array of strings
const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
