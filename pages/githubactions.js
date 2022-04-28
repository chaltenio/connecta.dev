import Head from 'next/head'
import Image from 'next/image'
import Newsletter from "../components/newsletter";
import Newsletter from "../components/register";
import styles from '../styles/Home.module.css'
import Register from './api/register';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>connecta.dev</title>
        <meta name="description" content="mate.dev community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to connecta.dev!
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Connecting the DEV Community in the APAC & LATAM regions</code>
        </p>

        <div className={styles.grid}>
          <Register />
        </div>
        
      </main>

      <footer className={styles.footer}>      
        <a
          href="https://twitter.com/matedotdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          @matedotdev
        </a>
        {' '} - {' '}
        <a
          href="https://mate.dev/chris"
          target="_blank"
          rel="noopener noreferrer"
        >
         Contact
        </a>
      </footer>
    </div>
  )
}
