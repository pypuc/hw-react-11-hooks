import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import Section from "./Section";
import { FeedbackContext } from "./FeedbackContext";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const goodBtnRef = useRef(null);

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

    if (goodBtnRef.current) {
      console.log(goodBtnRef.current);
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
    <FeedbackContext.Provider value={{ add, goodBtnRef }}>
      <Section title="Please leave feedback" type="buttons" />
      <Section title="Statistics">{statisticsBlock}</Section>
    </FeedbackContext.Provider>
  );
}
