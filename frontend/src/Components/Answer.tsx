import React from "react";
import { Answer } from "../types/Answer";

interface AnswerProps extends Answer {}

const QuestionWrapper: React.FC<AnswerProps> = ({ answer, isCorrect }) => {
  return (
    <div className="bg-Emerald-400">
      <i className="">Check</i>
      <div className="">
        <h2 className="">Good job!</h2>
        <div className="">
          That's correct! You define how objects (which are instantiated based
          on classes) should look like.
        </div>
      </div>
    </div>
  );
};

export default QuestionWrapper;
