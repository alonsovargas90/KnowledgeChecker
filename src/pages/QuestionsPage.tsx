import React, { useEffect, useContext, useState } from 'react';
import { MyContext } from '../context';
import { Question } from '../types/Question';


interface QuestionPageProps extends Question{
  onAnswerSelected: Function,
}

const QuestionsPage: React.FC<QuestionPageProps> = ({ question, options, correctAnswerIndex, solutionText, onAnswerSelected }) => {
  // const { setMyState } = useContext(MyContext);

  // useEffect(() => {
  //   // Load your list of questions here and set it in the context
  //   const questions = ['Question 1', 'Question 2', 'Question 3'];
  //   setMyState(questions);
  // }, [setMyState]); 

  // TODO move all the logic to a Question Component instead
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(event.target.value);
  };

  const handleAnswerButtonClick = () => {
    onAnswerSelected(selectedOption);
  };

  const handleNextButtonClick = () => {
    setSelectedOption('');
    onAnswerSelected(null);
  };

 return (
    <div className="max-w-sm mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{question}</h2>
      <div className="grid grid-cols-1 gap-4">
        {options.map((option) => (
          <label key={option} className="flex items-center">
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
              className="form-radio h-5 w-5 text-gray-600"
            />
            <span className="ml-2 text-gray-700">{option}</span>
          </label>
        ))}
      </div>
      <div className="mt-8">
        <button
          onClick={handleNextButtonClick}
          className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded mr-4"
        >
          Next
        </button>
        <button
          onClick={handleAnswerButtonClick}
          disabled={!selectedOption}
          className={`${
            selectedOption === options[correctAnswerIndex]
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-red-500 hover:bg-red-600'
          } text-white font-semibold py-2 px-4 rounded`}
        >
          solutionText
        </button>
      </div>
    </div>
  );
};

export default QuestionsPage;