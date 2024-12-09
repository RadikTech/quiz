import React from "react";
import { useNavigate } from "react-router-dom";

const ScoreSummary = ({ score }) => {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto py-10 text-center">
            <h1 className="text-3xl font-bold mb-6">Quiz Completed!</h1>
            <p className="text-xl mb-4">Your score: <span className="font-bold">{score}</span></p>
            <button
                onClick={() => navigate("/")}
                className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
                Back to Home
            </button>
        </div>
    );
};

export default ScoreSummary;
