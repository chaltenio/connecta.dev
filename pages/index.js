import Head from 'next/head'
import Image from 'next/image'
import Newsletter from "../components/newsletter";
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
          Welcome to connecta.dev!
        </h1>

        <p className={styles.description}>
          <code className={styles.code}>Connecta.DEV is an Initiative to connect the Development Community in the Asia-Pacific Region</code>
        </p>

        <div className={styles.grid}>
          <Newsletter />
        </div>
        
      </main>

      <footer className={styles.footer}>      
        <a
          href="https://twitter.com/connectadev"
          target="_blank"
          rel="noopener noreferrer"
        >
          @connectadev
        </a>
        {' '} - {' '}
        <a
          href="https://discord.com/invite/xT9cMSy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Our Discord Channel. Join us!
        </a>
        {' '} - {' '}        
        <a
          href="https://mate.dev/chris"
          target="_blank"
          rel="noopener noreferrer"
        >
         brought to you by
        </a>
      </footer>
    </div>
  )
}
