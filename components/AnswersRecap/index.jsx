import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import styles from "./AnswersRecap.module.scss";

const AnswersRecap = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const questionId = useSelector((state) => state.questionId);
  const punti = useSelector((state) => state.point);
  const router = useRouter();

  const handleClickRestart = () => {
    router.push(`/`);
  };

  return (
    <div className={styles.main}>
      <div className={styles.column}>
        <h3 className={styles.title}>Il tuo punteggio:</h3>
        <h2>{punti}/8</h2>

        {/* <div>
          {data[questionId].answers.map((answer, id) => (
            <div key={id}>
              {answer.correct === true ? (
                <p className={styles.correct}>
                  {answer.text}
                  {console.log(punti)}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div> */}
      </div>
      <button className={styles.restartBtn} onClick={handleClickRestart}>
        Gioca Ancora
      </button>
    </div>
  );
};

export default AnswersRecap;
