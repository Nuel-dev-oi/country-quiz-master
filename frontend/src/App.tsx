import { useState, type JSX } from "react";
import Layout from "./components/Layout";
import ScoreBoard from "./components/ScoreBoard";
import QuestionTab from "./components/QuestionTab";
import QuestionContext from "./components/QuestionContext";
import { countryQuizData } from "./utils/countryQuizData";

function App(): JSX.Element {
  const [score, setScore] = useState(0);

  

  return (
    <QuestionContext value={countryQuizData}>
      <Layout>
        <ScoreBoard score={score} />
        <QuestionTab setScore={setScore} />
      </Layout>
    </QuestionContext>
  );
}

export default App;
