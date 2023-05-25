import { useState } from "react";
import axios from "axios";
import styles from '../styles/Home.module.css'

export default function newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div>
      <h3 className={styles.subtitle}>
        Connect / Share / Learn
      </h3>

      <p className={styles.descriptiontitle}>
        Join us our mailing list to hear about our latest events, news & more!
      </p>      

      <div className={styles.registerMailchimp}>
        <input className={styles.registerMailchimpInput}         
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" className={styles.registerMailchimpButton} disabled={state === "LOADING"} onClick={subscribe}>Subscribe</button>
      </div>

      {state === "ERROR" && (
        <p className={styles.description}>{errorMessage}</p>
      )}

      {state === "SUCCESS" && (
        <p className={styles.description}>Thanks! We'll be in touch shortly :) Chris & team.</p>
      )}

    </div>
  );
};


// Attributions:
// https://github.com/uriklar/uriklar-next/blob/master/components/newsletter.jsx