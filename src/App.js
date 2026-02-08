import React, { useMemo } from "react";
import "./styles.css";
import Section from "./Section";
import { FeedbackContext } from "./FeedbackContext";
import { useFeedback } from "./hooks/useFeedback";

export default function App() {
  const { good, neutral, bad, total, positive, add, goodBtnRef } =
    useFeedback();

  const contextValue = useMemo(() => {
    return { add, goodBtnRef };
  }, [add]);

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
    <FeedbackContext.Provider value={contextValue}>
      <Section title="Please leave feedback" type="buttons" />
      <Section title="Statistics">{statisticsBlock}</Section>
    </FeedbackContext.Provider>
  );
}
