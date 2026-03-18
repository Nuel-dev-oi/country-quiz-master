import React, { useEffect, useRef, useState } from "react";
import type { QuizQuestions } from "../utils/countryQuizData";

const Question: React.FC<{
  number: number;
  questions: QuizQuestions;
  onSetOptions: (value: string[]) => void;
}> = ({ number, questions, onSetOptions }): React.JSX.Element => {
  const [question, setQuestion] = useState<string>("");
  const filteredQuestions = useRef<QuizQuestions>([]);

  useEffect(() => {
    const handleSetOptions = () => {
      const filteredQuestion = filteredQuestions.current.find((quest) => {
        if (!question) return;
        return quest.question === question;
      });
      if (filteredQuestion) {
        onSetOptions(filteredQuestion.options);
      }
    };
    handleSetOptions();
  }, [onSetOptions, question]);

  useEffect(() => {
    if (!questions || questions.length === 0) return;

    const selected: QuizQuestions = [];
    const targetLength = Math.min(10, questions.length);

    while (selected.length < targetLength) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      const candidate = questions[randomIndex];

      if (!selected.some((q) => q.question === candidate.question)) {
        selected.push(candidate);
      }
    }

    filteredQuestions.current = selected;
  }, [questions]);

  useEffect(() => {
    const setQuizQuestion = () => {
      if (!questions) return;
      const quiz = filteredQuestions.current.find((_, index) => {
        return index === number - 1;
      });
      const quizQuestion = quiz?.question;

      if (quizQuestion) {
        setQuestion(quizQuestion);
      }
    };
    setQuizQuestion();
  }, [number, questions]);

  return (
    <div className="shrink w-full gap-3 flex-wrap flex justify-center items-center p-2 whitespace-wrap text-[13px] md:text-xl bg-transparent h-[20%] max-[400px]:h-[15%]">
      <span className="text-center">{question}</span>
    </div>
  );
};

export default Question;
