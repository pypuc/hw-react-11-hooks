import React, { useContext, memo } from "react";
import { FeedbackContext } from "./FeedbackContext";

function Section({ title, children, type }) {
  const context = useContext(FeedbackContext);

  let content;

  if (type === "buttons") {
    content = (
      <>
        <button
          className="button"
          ref={context.goodBtnRef}
          onClick={() => context.add("good")}
        >
          Good
        </button>
        <button className="button" onClick={() => context.add("neutral")}>
          Neutral
        </button>
        <button className="button" onClick={() => context.add("bad")}>
          Bad
        </button>
      </>
    );
  } else {
    content = children;
  }

  return (
    <section>
      <h2>{title}</h2>
      {content}
    </section>
  );
}

export default memo(Section);
