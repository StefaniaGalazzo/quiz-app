import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import styles from "./AnswersRecap.module.scss";


const AnswersRecap = () => {
  const dispatch = useDispatch();
  const punti = useSelector((state) => state.point);
  const router = useRouter();

  const handleClickRestart = () => {
    router.push(`/`);
  };

  return (
    <div className={styles.main}>
      <div className={styles.column}>
        <h3 className={styles.title}>Le tue risposte:</h3>
        <h2>{punti}/8</h2>
        {/* <ul>
          <li>570 a.C.</li>
        </ul>
        <ul>
        {data.map((data) => (
            <li
            key={data.id}
            styles={correct ? { color: "#53DBAB" } : { color: "#D43E2A" }}
            >
            {props.text}
            </li>
            ))}
        </ul> */}
      </div>
      <button onClick={handleClickRestart}>Gioca Ancora</button>
    </div>
  );
};

export default AnswersRecap;
