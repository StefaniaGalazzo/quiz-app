import styles from "./QuestionsCard.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {
  decrementTime,
  incrementPoint,
  changeQuestion,
} from "../../store/action";

export default function QuestionsCard({
  questionID = 0,
  question = "Di che colore era il cavallo bianco di Napoleone?",
}) {
  const data = useSelector((state) => state.data);
  const time = useSelector((state) => state.time);
  const questionNum = useSelector((state) => state.questionId);
  const dispatch = useDispatch();
  //const [questionNum, setQuestionNum] = useState(0);

  useEffect(() => {
    if (time === 0) {
      dispatch(decrementTime(30));
      dispatch(changeQuestion(questionNum + 1));
    }
  }, [time]);

  function isCorrect() {
    dispatch(changeQuestion(questionNum + 1));
    dispatch(incrementPoint);
  }
  function isWrong() {
    dispatch(changeQuestion(questionNum + 1));
  }

  return (
    <div className={styles.QuestionsCard}>
      <div className={styles.question}>
        <h1>Domanda n° {questionNum + 1}/8</h1>
        <p>{data[questionNum].question}</p>
      </div>
      <div className={styles.answers}>
        {data[questionNum].answers.map((answer, id) => (
          <button onClick={answer.correct ? isCorrect : isWrong} key={id}>
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
