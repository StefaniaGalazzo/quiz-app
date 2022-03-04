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
      <h1>Benvenuto a questo Quiz strano</h1>
      <div className={styles.start}>
        <h2>Premi Start per iniziare</h2>
        <button className={styles.startButton} onClick={handleClick}>
          Start
        </button>
      </div>
    </div>
  );
};

export default Start;
