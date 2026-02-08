import { useState, useEffect, useRef, useCallback, useMemo } from "react";

export function useFeedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodBtnRef = useRef(null);

  const add = useCallback((type) => {
    if (type === "good") setGood((prev) => prev + 1);
    if (type === "neutral") setNeutral((prev) => prev + 1);
    if (type === "bad") setBad((prev) => prev + 1);
  }, []);

  const total = useMemo(() => {
    return good + neutral + bad;
  }, [good, neutral, bad]);

  const positive = useMemo(() => {
    if (total === 0) return 0;
    return Math.round((good / total) * 100);
  }, [good, total]);

  useEffect(() => {
    if (goodBtnRef.current) {
      console.log(goodBtnRef.current);
    }
  }, [good]);

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
