import React from "react";
import { Question } from "../types/Question";
import Answer from "./Answer";

interface QuestionProps {
  selectedOption: number;
  showSolution: boolean;
  currQuestion: Question;
  handleOptionChange: Function;
}

const QuestionWrapper: React.FC<QuestionProps> = ({
  currQuestion,
  selectedOption,
  showSolution,
  handleOptionChange,
}) => {
  const { question, options, correctAnswerIndex, solutionText } = currQuestion;
  return (
    <>
      <Answer
        isCorrect={selectedOption === correctAnswerIndex}
        answer={solutionText}
      />
      <h2 className="text-3xl font-sans mt-32 md:mt-48 lg:mt-64 font-bold text-gray-800 dark:text-gray-300 text-center">
        {question}
        What's the core idea behind classes?
      </h2>
      {showSolution && <p>{solutionText}</p>}

      <div className="flex justify-center mt-16">
        <div className="bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded-2xl min-w-80  w-4/5">
          <div className="pt-6 pb-2">
            {options.map((option, index) => (
              <div
                key={`option-${option}-${index}`}
                className="bg-gray-100 dark:bg-gray-900 mx-6 h-16 w-auto mb-4 rounded-md flex items-center cursor-pointer"
                onClick={() => {
                  handleOptionChange(index);
                }}
              >
                <input
                  type="radio"
                  name="option"
                  value={option}
                  className="ml-5 dark:bg-gray-800 cursor-pointer"
                  checked={index === selectedOption}
                  onChange={() => {
                    handleOptionChange(index);
                  }}
                />
                <label
                  key={option}
                  className="text-gray-700 dark:text-gray-400 text-lg ml-4 cursor-pointer"
                >
                  <span className="ml-2 text-gray-700">{option}</span>
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionWrapper;
