import React, { useState } from "react";
import ReactDOM from "react-dom";

// 💬 COMPONENT - Button
const Button = ({ handleClick, text }) => {
    return <button onClick={handleClick}>{text}</button>;
};

// 💬 COMPONENT - Single Statistics
const Statistics = ({ good, neutral, bad }) => {
    if (good || neutral || bad) {
        // 💬 Calculate total
        const total = good + neutral + bad;

        // 💬 Calculate average
        const average = (good - bad) / total || 0;

        // 💬 Calculate percentage
        const percentage = (100 * good) / total || 0;

        return (
            <div>
                <h2>statistics</h2>
                <table>
                    <tbody>
                        <Statistic text="good" value={good} />
                        <Statistic text="neutral" value={neutral} />
                        <Statistic text="bad" value={bad} />
                        <Statistic text="all" value={total} />
                        <Statistic text="average" value={average} />
                        <Statistic text="positive" value={percentage} />
                    </tbody>
                </table>
            </div>
        );
    } else {
        return <p>No feedback given</p>;
    }
};

// 💬 COMPONENT - Multiple Statistic
const Statistic = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>
                {value} {text === "positive" ? "%" : ""}
            </td>
        </tr>
    );
};

// 💬 COMPONENT - App
const App = () => {
    // 💬 STATES
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGood = () => {
        setGood(good + 1);
    };

    const handleNeutral = () => {
        setNeutral(neutral + 1);
    };

    const handleBad = () => {
        setBad(bad + 1);
    };

    return (
        <div>
            <h2>give feedback</h2>
            <Button handleClick={handleGood} text={"good"} />
            <Button handleClick={handleNeutral} text={"neutral"} />
            <Button handleClick={handleBad} text={"bad"} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
