import React from "react";
import { useNavigate } from "react-router-dom";

const quizzes = [
    { id: 1, title: "General Knowledge", description: "Test your general knowledge.", category: "General Knowledge" },
    { id: 2, title: "Science Quiz", description: "Check your science knowledge!", category: "Science" },
    { id: 3, title: "Math Quiz", description: "Improve your math skills.", category: "Math" },
];

const QuizList = ({ setSelectedQuiz }) => {
    const navigate = useNavigate();

    const handleQuizSelect = (quiz) => {
        setSelectedQuiz(quiz);
        navigate("/quiz");
    };

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold text-center mb-6">Select a Quiz</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizzes.map((quiz) => (
                    <div
                        key={quiz.id}
                        className="p-4 border rounded-lg shadow hover:shadow-lg cursor-pointer"
                        onClick={() => handleQuizSelect(quiz)}
                    >
                        <h2 className="text-xl font-semibold">{quiz.title}</h2>
                        <p className="text-gray-600">{quiz.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuizList;
