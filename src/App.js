import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import QuizList from "./components/QuizList";
import QuizPage from "./components/QuizPage";
import ScoreSummary from "./components/ScoreSummary";
import Login from "./login";

const App = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [score, setScore] = useState(0);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">  
        <Routes>
          <Route path="/" element={<QuizList setSelectedQuiz={setSelectedQuiz} />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/quiz"
            element={<QuizPage selectedQuiz={selectedQuiz} setScore={setScore} />}
          />
          <Route path="/score-summary" element={<ScoreSummary score={score} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
