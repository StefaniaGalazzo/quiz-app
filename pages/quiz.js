import QuestionsCard from "../components/QuestionsCard"
import TimeScrollBar from "../components/timescrollbar"
import style from "../styles/quiz.module.scss"

export default function Quiz() {

  return (
    <div className={style.container}>
      <QuestionsCard />
      {/* <TimeScrollBar /> */}
    </div>
  )
}