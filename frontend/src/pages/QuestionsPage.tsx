import React, { useState } from "react";
import { MyContext } from "../context";
import QuestionWrapper from "../Components/QuestionWrapper";
import { Question } from "../types/Question";

const QuestionsPage: React.FC = () => {
  // const { setMyState } = useContext(MyContext);

  // useEffect(() => {
  //   // Load your list of questions here and set it in the context
  //   const questions = ['Question 1', 'Question 2', 'Question 3'];
  //   setMyState(questions);
  // }, [setMyState]);

  // TODO move all the logic to a Question Component instead
  const [selectedOption, setSelectedOption] = useState(-1);
  const [currQuestion, setCurrQuestion] = useState<Question>({
    question: "What's the core idea behind classes?",
    options: [
      "Classes are the same as JavaScript objects - just a different syntax.",
      "Classes are blueprints for JavaScript objects.",
      "Classes are a TypeScript-only feature that does neither exist in JavaScript, nor in other programming languages.",
    ],
    correctAnswerIndex: 2,
    solutionText: "Oh you are dumb",
  });

  const handleAnswerButtonClick = () => {
    //TODO
    //onAnswerSelected(selectedOption);
  };

  const handleNextButtonClick = () => {
    //TODO
    //setSelectedOption("");
    //onAnswerSelected(null);
  };

  return (
    <div className=" mx-auto mt-8 w">
      <QuestionWrapper
        handleOptionChange={(option: number) => {
          setSelectedOption(option);
        }}
        currQuestion={currQuestion}
        selectedOption={selectedOption}
        showSolution={false}
      />
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleAnswerButtonClick}
          className="bg-blue-850 text-black-300 font-semibold py-2 px-4 rounded mr-4"
        >
          Check answer
        </button>
        <button
          onClick={handleNextButtonClick}
          className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded mr-4"
        >
          Next
        </button>
        {/* <button
          onClick={handleAnswerButtonClick}
          disabled={!selectedOption}
          className={`${
            selectedOption === currQuestion.correctAnswerIndex
              ? "bg-green-500 hover:bg-green-600" #add2cc
              : "bg-red-500 hover:bg-red-600" #fdaea0
          } text-white font-semibold py-2 px-4 rounded`}
        >
          solutionText
        </button> */}
      </div>
    </div>
  );
};

export default QuestionsPage;
