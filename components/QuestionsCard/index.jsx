import styles from './QuestionsCard.module.scss'

export default function QuestionsCard({
    questionID = 0, 
    question = 'Di che colore era il cavallo bianco di Napoleone?', 
    answers = [
        {
            text: "570 a.C.",
            correct: true
        },
{
            text: "470 a.C.",
            correct: false,
        },
{
            text: "530 d.C",
            correct: false,
        },
{
            text: "530 a.C",
            correct: false,
        },
    ],
}){
    return(
        <div className={styles.QuestionsCard}>
            <div className={styles.question}>
                <h1>Domanda n° {questionID}/8</h1>
                <p>{question}</p>
            </div>
            <div className={styles.answers}>
                {answers.map(answer => <button key={questionID}>{answer.text}</button>)}
            </div>
        </div>
    )
}