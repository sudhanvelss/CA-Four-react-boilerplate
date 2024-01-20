import React, {useState} from 'react'
import Result from './Result';
import MimicQuestLogosBlack from "./../Assests/MimicQuest-logos_black.png";
import questions from '../questions';
import MimicQuestLogoswhite from "./../Assests/MimicQuest-logos_white.png"
function QuestionBox() {
  const [question, setQuestion] = useState(0);
  const [noOfCorrect, setnoOfCorrect] = useState(0);
  const [isHighlighted, setisHighlighted] = useState(false);
  const [isDark, setisDark] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  

  const handleOptional = (isCorrect) => {
    if (isCorrect) {
      setnoOfCorrect(noOfCorrect + 1);
    }

    const newQuestion = question + 1;
    if (newQuestion < questions.length) {
      setQuestion(newQuestion);
    } else {
      setQuestion(0);
      setGameOver(true);
    }
  };

  if (gameOver) {
    return (
      <Result
        noOfCorrect={noOfCorrect}
        restartGame={() => {
          setGameOver(false);
          setnoOfCorrect(0);
        }}
      />
    );
  }

  const darkMode = () => {
    setisDark(!isDark);
  };

  const colorChange = () => {
    setisHighlighted(true);
  };

  const remove = () => {
    setisHighlighted(false);
  };

  return (
    <div className={`overall ${isDark ? "dark" : ""}`}>
      <div className="firstName">
        <img src={`${isDark ? MimicQuestLogoswhite:MimicQuestLogosBlack}`} alt="Logo" />
        <span style={{ borderTop: "4px solid" }}>MimicQuest</span>
        <span>
          <button
            style={{ backgroundColor: "#FFFFFF", color: "#151212" }}
            className="btn"
            onClick={darkMode}
          >
            {isDark ? "Light" : "Dark"}
          </button>
        </span>
      </div>
      <div className="mid">
        <div className="secondDiv">
          <div className="Text">
            <p
              className="display"
              style={{ color: isHighlighted ? "#0000FF" : "#D9D9D9" }}
            >
              {questions[question].text}
            </p>
          </div>
          {questions[question].options.map((Option, index) => (
            <button
              className={`optionBox ${
                isHighlighted && Option.isCorrect ? "highlighted" : ""
              }`}
              key={index}
              onClick={() => handleOptional(Option.isCorrect)}
            >
              {Option.text}
            </button>
          ))}
        </div>
        <div className="thirdDiv">
          <p className="aboveButton2">{question + 1} of out 5 questions</p>
          <button onClick={colorChange} className="button2">
            Highlight
          </button>
          <button onClick={remove} className="button3">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionBox