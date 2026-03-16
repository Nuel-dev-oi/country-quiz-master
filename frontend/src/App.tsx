import { type JSX } from "react";
import Layout from "./components/Layout";
import ScoreBoard from "./components/ScoreBoard";
import QuestionTab from "./components/QuestionTab";

function App(): JSX.Element {
  return (
    <Layout>
      <ScoreBoard />
      <QuestionTab />
    </Layout>
  );
}

export default App;
