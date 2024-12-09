import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const sampleQuestions = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: "Paris",
        category: "General Knowledge",
    },
    {
        id: 2,
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        category: "Math",
    },
    {
        id: 3,
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
        category: "Science",
    },
    {
        id: 4,
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O",
        category: "Science",
    },
    {
        id: 5,
        question: "Who discovered gravity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        answer: "Isaac Newton",
        category: "General Knowledge",
    },
];


const QuizPage = ({ selectedQuiz, setScore }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    // Filter questions based on the selected category
    const filteredQuestions = sampleQuestions.filter(
        (question) => question.category === selectedQuiz?.category
    );
    const currentQuestion = filteredQuestions[currentQuestionIndex];

    const handleAnswerSelect = (option) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        const userAnswersAll = [...userAnswers, { questionId: currentQuestion.id, selected: selectedOption }];
        setUserAnswers(userAnswersAll);
        setSelectedOption(null);

        if (currentQuestionIndex === filteredQuestions.length - 1) {
            calculateScore(userAnswersAll);
            navigate("/score-summary");
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const calculateScore = (userAnswersAll) => {
        const correctAnswers = filteredQuestions.filter(
            (q, index) => q.answer === userAnswersAll[index]?.selected
        ).length;
        setScore(correctAnswers);
    };

    if (!selectedQuiz) {
        return <p className="text-center mt-10">No quiz selected. Please go back to the home page.</p>;
    }

    if (!currentQuestion) {
        return <p className="text-center mt-10">No questions available for this category.</p>;
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-6">{selectedQuiz.title}</h1>
            <div className="p-4 border rounded-lg shadow">
                <h2 className="text-xl mb-4">{currentQuestion.question}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentQuestion.options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleAnswerSelect(option)}
                            className={`p-2 rounded-lg ${selectedOption === option
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-300 text-white hover:bg-blue-600"
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="mt-6 text-right">
                    <button
                        onClick={handleNext}
                        disabled={!selectedOption}
                        className={`p-2 px-6 rounded-lg ${selectedOption
                                ? "bg-green-500 text-white hover:bg-green-600"
                                : "bg-gray-400 text-gray-700 cursor-not-allowed"
                            }`}
                    >
                        {currentQuestionIndex === filteredQuestions.length - 1 ? "Finish" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
