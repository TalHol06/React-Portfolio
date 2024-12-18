import "../css/contact.css";
import "../css/general.css";
import { useState } from "react";

export default function Contact(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [thankYouMessage, setThankYou] = useState("");
  const [errMessage, setErrMessage] = useState("");

  function onSubmit(event){
  // Checks to see if the name, email, and message are valid
    if (name === ""){
      setErrMessage(`Your name is invalid.`);
      return;
    } else if (email === "" || !(email === `${email.substring(0, email.indexOf('@gmail.com'))}@gmail.com` || email === `${email.substring(0, email.indexOf('@yahoo.com'))}@yahoo.com` || email === `${email.substring(0, email.indexOf('@outlook.com'))}@outlook.com`)){
      setErrMessage(`Your email is invalid.`);
      return;
    } else if (message === ""){
      setErrMessage(`A message is required.`);
      return;
    }

    event.preventDefault();
    setThankYou(`Thank you for your submission ${name}! I will get back to you as soon as possible`);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div>
      <section>
        <form>
          <h2>Contact</h2>
          <label>Name:</label>
          <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label>Email:</label>
          <input 
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Message:</label>
          <textarea 
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {errMessage ?(
            <p>{errMessage}</p>
          ) : 
            (<p>{thankYouMessage}</p>)
          }

          <button type="submit" onClick={onSubmit}>Submit</button>
        </form>
      </section>
    </div>
  )
}