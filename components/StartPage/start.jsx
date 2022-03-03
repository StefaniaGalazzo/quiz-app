import styles from "./StartPage.module.scss";


const Start = () => {

  const handleClick = () => {
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
}

export default Start;