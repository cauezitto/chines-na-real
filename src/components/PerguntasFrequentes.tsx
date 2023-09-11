type DoubtProps = {
  ask: string;
  answer: string;
};

import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

export function PerguntasFrequentes(props: DoubtProps) {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div
      className="duvidasFrequentes"
      onClick={() => setShowAnswer(!showAnswer)}
    >
      <div className="ask-container">
        <span>{props.ask}</span>

        <MdKeyboardArrowDown />
      </div>

      {showAnswer && (
        <div className="answer-container">
          <span>{props.answer}</span>
        </div>
      )}
    </div>
  );
}
