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
        <h2>Thursday May 12th, 2022 - 5:30pm (NZT) - ONLINE</h2>

        <h1 className={styles.title}>
        End-to-end DevOps in the Cloud with GitHub
        </h1>

        <div className={styles.grid}>
        <p>Join Zoom Meeting:</p>
        <p>https://zoom.us/j/92640688839?pwd=SEt3NTM5OE9LWDV2YTdzWG1hcVJhdz09</p>

        <p>Meeting ID: 926 4068 8839</p>
        <p>Passcode: mate.dev</p>
        </div>

        <p><img src="/banners/banner_600x300.png" alt="Damian Brady - connecta.dev" />{" "}</p>

        <p className={styles.description}>
          GitHub is more than just a place to keep your code. There are features that cover your whole DevOps lifecycle from idea to code and all the way into production. <br /> This session will take you through an end-to-end software lifecycle, from planning with Issues, coding in the cloud with Codespaces, mature CI/CD with GitHub Actions, and much more.
        </p>
     
        <h3 className={styles.subtitle}>
        Damian Brady - Senior Developer Advocate at GitHub
        </h3>

        <p  className={styles.description}>
           Damian is a Senior Developer Advocate at GitHub and loves all things DevOps and MLOps. <br />
           Formerly a Cloud Advocate at Microsoft for 4 years, and prior to that a dev at Octopus Deploy and a Microsoft MVP, Damian has a 20+ year background in software development and consulting in a broad range of industries.
        </p>

      </main>

      <footer className={styles.footer}>      
        <a
          href="https://connecta.dev/codeofconduct"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code of Conduct
        </a>
        {' '} - {' '}
        <a
          href="https://discord.com/invite/xT9cMSy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join our Community in Discord!
        </a>
        {' '} - {' '}        
        <a
          href="https://mate.dev/chris"
          target="_blank"
          rel="noopener noreferrer"
        >
         Brought to you by...
        </a>
      </footer>
    </div>
  )
}
