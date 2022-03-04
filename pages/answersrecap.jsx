import AnswersRecap from "./../components/AnswersRecap/index"
import style from "../styles/quiz.module.scss"

export default function Quiz() {

  return (
    <div className={style.container}>
      <AnswersRecap/>
    </div>
  )
}