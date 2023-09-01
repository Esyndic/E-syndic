import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Reply() {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    text: "",
  });

  const sendEmail = () => {
    console.log(emailData);
    axios
      .post("http://localhost:3000/send-email", emailData)
      .then((response) => {
        console.log(response.data.message);
      })
      .catch((error) => {
        console.error(error.response.data.error);
      });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="To"
        value={emailData.to}
        onChange={(e) => setEmailData({ ...emailData, to: e.target.value })}
      />
      <input
        type="text"
        placeholder="Subject"
        value={emailData.subject}
        onChange={(e) =>
          setEmailData({ ...emailData, subject: e.target.value })
        }
      />
      <textarea
        placeholder="Message"
        value={emailData.text}
        onChange={(e) => setEmailData({ ...emailData, text: e.target.value })}
      />
      <Link to="">
        <button onClick={sendEmail}>Send Email</button>
      </Link>
    </div>
  );
}

export default Reply;
