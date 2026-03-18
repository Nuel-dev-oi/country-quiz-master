import { type JSX } from "react";
import Layout from "./components/Layout";
import ScoreBoard from "./components/ScoreBoard";
import QuestionTab from "./components/QuestionTab";
import QuestionContext from "./components/QuestionContext";
import { countryQuizData } from "./utils/countryQuizData";

function App(): JSX.Element {
  return (
    <QuestionContext value={countryQuizData}>
      <Layout>
        <ScoreBoard />
        <QuestionTab />
      </Layout>
    </QuestionContext>
  );
}

export default App;
