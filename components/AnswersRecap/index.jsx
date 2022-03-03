import styles from "./AnswersRecap.module.scss";

const AnswersRecap = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.column}>
        <h3 className={styles.title}>Le tue risposte:</h3>
        <ul>
          <li>570 a.C.</li>
        </ul>
        {/* <ul>
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
    </div>
  );
};

export default AnswersRecap;
