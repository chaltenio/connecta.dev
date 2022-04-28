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
          Chris Mazur{"      "}
          <span role="img" aria-label="mate">
          
        </span>          
        </h1>
        
        <p className={styles.description}>
        Software Engineer + IT Consultant + Community Strategy as a Service | From #Patagonia.{" "}🇦🇷 🇳🇿 🧉 ♜
        </p>

        <div className={styles.grid}>
          <a href="https://twitter.com/chmazur" className={styles.cardSocial}>
            <h2>Twitter &rarr;</h2>
            <p><img src="/svgs/twitter.svg" alt="@chmazur" className={styles.logo} />{" "}@chmazur</p>
          </a>

          <a href="https://www.linkedin.com/in/cloud-native" className={styles.cardSocial}>          
            <h2>LinkedIn &rarr;</h2>
            <p><img src="/svgs/linkedin.svg" alt="cloud-native" className={styles.logo} />{" "}cloud-native</p>
          </a>

          <a href="https://github.com/chaltenio" className={styles.cardSocial}>
            <h2>Github &rarr;</h2>
            <p><img src="/svgs/github.svg" alt="chaltenio" className={styles.logo} />{" "}chaltenio</p>
          </a>
        </div>

        <div className={styles.grid}>  

          <a href="#" className={styles.cardSocial}>
            <h2>Blog?</h2>
            <p>Coming soon!</p>
          </a>

          <a href="https://discord.gg/xT9cMSy" className={styles.cardSocial}>
            <h2>Discord &rarr;</h2>
            <p>Join me!</p>
          </a>

          <a href="https://www.chess.com/member/chmazur" className={styles.cardSocial}>
            <h2>Chess.com &rarr;</h2>
            <p>Let's play?!</p>
          </a>  
        </div>        

        <div className={styles.grid}> 
          <div>
          <h2>Connecting the DEV Community in the APAC & LATAM regions since 2010:{' '} </h2>
          
          <div>
            <p>
            🧉{' '}Co-Founder Argentina PHP User Group  <br />
            🧉{' '}Co-Founder & Co-Organiser PHP Conference Argentina (Buenos Aires - <a href="https://twitter.com/phpconferencear" target="_blank">@phpconferencear</a>)<br />
            🧉{' '}Founder & Organiser PHP Conference New Zealand (Wellington - <a href="https://php.org.nz" target="_blank">php.org.nz</a>)<br />
            🧉{' '}Founder & Organiser ScaleConf New Zealand (Wellington - <a href="https://twitter.com/sconfnz" target="_blank">@sconfnz</a>)<br />
            🧉{' '}Founder & Organiser Cloud Native Summit (Wellington - {" "}<a href="https://cloudnativesummit.co/nz" target="_blank">cloudnativesummit.co)</a><br />
            🧉{' '}Founder & Organiser Service Mesh Day (San Francisco & Online - {" "}<a href="https://servicemeshday.com" target="_blank">servicemeshday.com</a>)<br />
            🧉{' '}Founder & Organiser FullStack Day (Auckland & Online - {" "}<a href="https://fullstackday.com" target="_blank">fullstackday.com</a>)<br />
            🧉{' '}Founder & Organiser <a href="https://www.meetup.com/Full-Stack-Dev-New-Zealand/" target="_blank">Full Stack Dev New Zealand - Meetup</a><br />
            🧉{' '}Founder & Organiser <a href="https://www.meetup.com/Wellington-Web-Dev/" target="_blank">Web Dev Meetup Wellington</a><br />
            🧉{' '}Organiser <a href="https://www.meetup.com/aucklandweb/" target="_blank">Web Dev Meetup Auckland</a><br />
            🧉{' '}Founder & Organiser <a href="https://www.meetup.com/Wellington-DevOps-Group/" target="_blank">Devops Meetup Wellington</a><br />
            🧉{' '}Founder & Organiser <a href="https://www.meetup.com/Cloud-Native-Auckland/" target="_blank">Cloud Native Meetup Auckland</a> <br />
            🧉{' '}Founder & Organiser <a href="https://connecta.dev" target="_blank">Connecta.DEV (online community)</a><br />
            🧉{' '}Member <a href="https://layer5.io/community/members/chris-mazur" target="_blank">Layer5 contributor (Service Mesh community)</a><br />
            </p>  
          </div>

          </div>
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
      </footer>
    </div>
  )
}

export default Chris