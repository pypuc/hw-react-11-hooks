import React, { useState, useEffect } from "react";
import "./styles.css";
import Section from "./Section";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const add = (type) => {
    if (type === "good") {
      setGood((prev) => prev + 1);
    }
    if (type === "neutral") {
      setNeutral((prev) => prev + 1);
    }
    if (type === "bad") {
      setBad((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const sum = good + neutral + bad;
    setTotal(sum);

    if (sum === 0) {
      setPositive(0);
    } else {
      setPositive(Math.round((good / sum) * 100));
    }
  }, [good, neutral, bad]);

  let statisticsBlock;

  if (total === 0) {
    statisticsBlock = <p>No feedback yet</p>;
  } else {
    statisticsBlock = (
      <>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {positive}%</p>
      </>
    );
  }

  return (
    <>
      <Section title="Please leave feedback">
        <button className="button" onClick={() => add("good")}>
          Good
        </button>
        <button className="button" onClick={() => add("neutral")}>
          Neutral
        </button>
        <button className="button" onClick={() => add("bad")}>
          Bad
        </button>
      </Section>

      <Section title="Statistics">
        {statisticsBlock}
      </Section>
    </>
  );
}
