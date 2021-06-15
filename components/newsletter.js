import { useState } from "react";
import axios from "axios";
import styles from '../styles/Home.module.css'

export default () => {
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
        Please register your interest...
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
        <p className={styles.description}>Thanks! I'll be in touch shortly :) Chris.-</p>
      )}

    </div>
  );
};
