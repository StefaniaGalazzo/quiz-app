import styles from "./QuestionsCard.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import {
  decrementTime,
  incrementPoint,
  changeQuestion,
} from "../../store/action";

export default function QuestionsCard() {
  const data = useSelector((state) => state.data);
  // const time = useSelector((state) => state.time);
  const [time, setTime] = useState(30);
  const questionNum = useSelector((state) => state.questionId);
  const dispatch = useDispatch();
  const ref = useRef(null);

  const clear = () => {
    window.clearInterval(ref.current);
  };

  const resetTime = () => {
    setTime(30);
  };

  //  const [intervalState, setIntervalState] = useState(30);

  // const [questionNum, setQuestionNum] = useState(0);

  // setIntervalState(
  //   setInterval(() => {
  //     timer--;
  //     dispatch(decrementTime(timer));
  //     console.log(timer);
  //     if (timer === 0) {
  //       timer = 30;
  //     }
  //   }, 1000)
  // );

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTime(time-1);

  //     if (time === 0)  {
  //       // dispatch(decrementTime(time));
  //       dispatch(changeQuestion(questionNum + 1));
  //       resetTime();
  //     }
  //   }, 1000)
  //   console.log(time);
  // }, [time]);

  useEffect(() => {
    ref.current = window.setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  useEffect(() => {
    if (time === 0) {
      dispatch(changeQuestion(questionNum + 1));
      resetTime();
    }
  }, [time]);

  // dispatch(decrementTime(time));

  function isCorrect() {
    dispatch(changeQuestion(questionNum + 1));
    dispatch(incrementPoint);
    // dispatch(decrementTime(time));
    resetTime();
  }
  function isWrong() {
    dispatch(changeQuestion(questionNum + 1));
    // dispatch(decrementTime(time));
    resetTime();
  }

  return (
    <div className={styles.QuestionsCard}>
      <div className={styles.question}>
        <h1>Domanda n° {questionNum + 1}/8</h1>
        {data[questionNum].question ? <p>{data[questionNum].question}</p> : ""}
      </div>
      <div className={styles.answers}>
        {data[questionNum].answers.map((answer, id) => (
          <button onClick={answer.correct ? isCorrect : isWrong} key={id}>
            {answer.text}
          </button>
        ))}
      </div>
      {time}
    </div>
  );
}
