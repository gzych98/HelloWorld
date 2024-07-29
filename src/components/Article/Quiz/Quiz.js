import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle, faRedo } from '@fortawesome/free-solid-svg-icons';
import './styles_quiz.css';

const Quiz = ({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [showAnswers, setShowAnswers] = useState(false);
    const [answers, setAnswers] = useState([]);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleNextQuestion = () => {
        const isCorrect = selectedOption === questions[currentQuestion].answer;
        setAnswers([...answers, { question: questions[currentQuestion], selectedOption, isCorrect }]);
        if (isCorrect) {
            setScore(score + 1);
        }
        setSelectedOption("");
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handleShowAnswers = () => {
        setShowAnswers(true);
    };

    const handleRetry = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
        setSelectedOption("");
        setShowAnswers(false);
        setAnswers([]);
    };

    return (
        <div className="quiz-container">
            {showScore ? (
                <>
                    <div className="score-section">
                        Twój wynik: {score} na {questions.length}
                    </div>
                    <div className="buttons-container">
                        <button className="quiz-show-answers-button" onClick={handleShowAnswers}>
                            Pokaż odpowiedzi
                        </button>
                        <button className="quiz-retry-button" onClick={handleRetry}>
                            <FontAwesomeIcon icon={faRedo} />
                        </button>
                    </div>
                    {showAnswers && (
                        <div className="answers-section">
                            {answers.map((answer, index) => (
                                <div key={index} className="answer-item">
                                    <div className="question-text">{answer.question.question}</div>
                                    <div className="answer-text">
                                        <strong>Twoja odpowiedź:</strong> {answer.selectedOption}{" "}
                                        {answer.isCorrect ? (
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} />
                                        ) : (
                                            <FontAwesomeIcon icon={faTimesCircle} style={{ color: 'red' }} />
                                        )}
                                    </div>
                                    <div className="answer-text">
                                        <strong>Poprawna odpowiedź:</strong> {answer.question.answer}
                                    </div>
                                    <div className="explanation-text">
                                        <strong>Wyjaśnienie:</strong> {answer.question.explanation}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Pytanie {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className="question-text">{questions[currentQuestion].question}</div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                className={`quiz-option-button ${selectedOption === option ? 'selected' : ''}`}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button className="quiz-next-button" onClick={handleNextQuestion} disabled={!selectedOption}>
                        Następne pytanie
                    </button>
                </>
            )}
        </div>
    );
};

export default Quiz;
