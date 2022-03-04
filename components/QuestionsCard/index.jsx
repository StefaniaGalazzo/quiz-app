import styles from "./QuestionsCard.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import {
  decrementTime,
  incrementPoint,
  changeQuestion,
} from "../../store/action";
import { useRouter } from "next/router";


export default function QuestionsCard() {
  const data = useSelector((state) => state.data);
  // const time = useSelector((state) => state.time);
  const [time, setTime] = useState(30);
  const questionNum = useSelector((state) => state.questionId);
  const dispatch = useDispatch();
 const ref = useRef(null);
 const router = useRouter();


 const clear = () => {
   window.clearInterval(ref.current);
 }

  const resetTime = () => {
    setTime(30)
  }


  useEffect(()=>{
    ref.current=window.setInterval(()=>{
     setTime((time)=>time-1)
   },1000)
   return ()=>clear();
 },[])

 useEffect(()=>{
   if(time===0){
     dispatch(changeQuestion(questionNum + 1));
     resetTime()
   }

 },[time])
  

    // dispatch(decrementTime(time));
    
  function isCorrect() {
    if (questionNum < 7) {
    dispatch(changeQuestion(questionNum + 1));
    dispatch(incrementPoint);
    // dispatch(decrementTime(time));
    resetTime();
  } 
  else {
    dispatch(incrementPoint);

    router.push(`/answersrecap`);

  }
    
  }
  function isWrong() {
    if (questionNum < 7) {
    dispatch(changeQuestion(questionNum + 1));
    // dispatch(decrementTime(time));
    resetTime();
    } 
    else {
      router.push(`/answersrecap`);
    }
  }

  return (
    <div className={styles.QuestionsCard}>
      <div className={styles.question}>
        <h1>Domanda n° { questionNum + 1 }/8</h1>
        <p>data[questionNum].question</p>
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
