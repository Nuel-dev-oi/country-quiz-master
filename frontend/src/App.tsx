import { useCallback, useEffect, useState, type JSX } from "react";
import Layout from "./components/Layout";
import ScoreBoard from "./components/ScoreBoard";
import QuestionTab from "./components/QuestionTab";
import QuestionContext from "./components/QuestionContext";
import ResetButton from "./components/ResetButton";
import { countryQuizData, type QuizQuestions } from "./utils/countryQuizData";

function App(): JSX.Element {
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState<QuizQuestions>(countryQuizData);
  const [number, setNumber] = useState<number>(1);
  const [answer, setAnswer] = useState<string>("");
  const [reset, setReset] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const onSetIsFinished = useCallback((value: boolean) => {
    setIsFinished(value);
  }, []);

  const onSetQuiz = (value: QuizQuestions) => {
    setQuiz(value);
    setNumber(1);
    setAnswer("");
    setScore(0);
    setReset(true);
    setIsFinished(false);
  };

  useEffect(() => {
    const handleIsFinised = () => {
      if (isFinished) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflowY = "scroll";
      }
    };
    handleIsFinised();
  }, [isFinished]);

  return (
    <QuestionContext value={quiz}>
      <Layout isFinished={isFinished} score={score}>
        <ScoreBoard score={score} isFinished={isFinished} />
        <QuestionTab
          isFinished={isFinished}
          onSetIsFinished={onSetIsFinished}
          setReset={setReset}
          reset={reset}
          setScore={setScore}
          number={number}
          setNumber={setNumber}
          answer={answer}
          setAnswer={setAnswer}
        />
        <ResetButton onSetQuiz={onSetQuiz} />
      </Layout>
    </QuestionContext>
  );
}

export default App;
