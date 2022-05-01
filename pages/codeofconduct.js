import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

function Chris() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chris Mazur - mate.dev</title>
        <meta name="description" content="mate.dev community" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Manaakitanga      
        </h1>
        
        <p className={styles.description}>
        Connecta.DEV is committed to creating a community space that is as inclusive as possible, where ideas are exchanged, old friends get together, new friends meet and... harassment is not tolerated. We expect speakers, organizers, members and sponsor representatives to be professional and courteous to each other. 				
        </p>


        <p>We are dedicated to providing a harassment-free experience for everyone, regardless of gender, race, sexual orientation, disability, religion, or any other protected classification. </p>
        <p>Everyone attending our events is expected to follow this Anti-Harassment Policy. This includes but is not limited to: Attendees, Speakers, Partners, Exhibitors, Volunteers and Connecta.dev staff. All attendees are expected to follow the Anti-Harassment Policy in any situation in which they are interacting with one another during this event on or offsite. Harassment in any form, will not be tolerated. </p>
        <br />
        <h2>Participant Behavior</h2>
        <p>Harassment includes, but is not limited to, offensive verbal comments related to gender, race, sexual orientation, disability, religion, or any other protected classification directed toward an individual or group. Intimidation, threats, stalking, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome attention will also be considered harassment. Similarly, sexual, racist, derogatory, threatening, or other inappropriate language and imagery are not appropriate for any of our events.</p>
        <br />
        <h2>Recourse</h2>
        <p>If a participant violates this Anti-Harassment Policy, the event organizers may take any action they deem appropriate, including warning the offender or expelling the offender from this and/or future events organized by them.</p>
        <br />
        <h2>Reporting</h2>
        <p>If you are being harassed, witness harassment, or have any other concerns, please contact Chris Mazur ( Direct Messages on Twitter / @chmazur or7by email at chris@chalten.io )</p>
        <p>If anyone is in physical danger or requires an immediate response, they are encouraged to notify appropriate law enforcement first.</p>
        <p>If you have any questions or comments about this Anti-Harassment Policy, please contact chris@chalten.io. Thanks!</p>
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
          Join our Discord Channel!
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

export default Chris