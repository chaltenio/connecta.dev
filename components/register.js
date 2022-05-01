import { useState } from "react";
import axios from "axios";
import styles from '../styles/Home.module.css'

export default function register() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/register", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div>
      <p className={styles.descriptiontitle}>
        FREE REGISTRATION
      </p>      

      <div className={styles.registerMailchimp}>
        <input className={styles.registerMailchimpInput}         
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" className={styles.registerMailchimpButton} disabled={state === "LOADING"} onClick={subscribe}>Register</button>
      </div>

      {state === "ERROR" && (
        <p className={styles.description}>{errorMessage}</p>
      )}

      {state === "SUCCESS" && (
        <p className={styles.description}>Thank you! We will send you more information soon!</p>
      )}

    </div>
  );
};


// Attributions:
// https://github.com/uriklar/uriklar-next/blob/master/components/newsletter.jsx