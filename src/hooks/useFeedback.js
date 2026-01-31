import { useState, useEffect, useRef } from "react";

export function useFeedback() {
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

  return {
    good,
    neutral,
    bad,
    total,
    positive,
    add,
    goodBtnRef,
  };
}
