import Head from 'next/head'
import Start from '../components/StartPage/start'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Quiz App</title>
        <meta name="description" content="Quiz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* <iframe src='https://www.youtube.com/watch?v=NNiTxUEnmKI' 
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
/> */}
      <main className={styles.main}>
        <Start />
      </main>

    </div>
  );
}
