import styles from "./StartPage.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { decrementTime } from "../../store/action";
import { useEffect, useState } from "react";

const Start = () => {
  const questionId = useSelector((state) => state.questionId);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/quiz`);
  };

  return (
    <div className={styles.startPage}>
      <h2>Inizia il quiz!</h2>
      <p className={styles.text}>
        Rispondi alle domande entro 30 secondi e accumula più punti che puoi!
      </p>
      <button className={styles.startButton} onClick={handleClick}>
        Start
      </button>
    </div>
  );
};

export default Start;
