import Head from 'next/head'
import Image from 'next/image'
import Newsletter from "../components/newsletter";
import Register from "../components/register";
import styles from '../styles/Home.module.css'


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
        End-to-end DevOps in the Cloud with GitHub
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>GitHub is more than just a place to keep your code. There are features that cover your whole DevOps lifecycle from idea to code and all the way into production. <br /> This session will take you through an end-to-end software lifecycle, from planning with Issues, coding in the cloud with Codespaces, mature CI/CD with GitHub Actions, and much more.</code>
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
