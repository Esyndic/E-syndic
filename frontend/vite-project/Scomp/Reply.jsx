import React, { useState } from 'react';
import axios from 'axios';

function Reply() {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const sendEmail = () => {
    axios.post('/send-email', emailData)
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
        onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
      />
      <textarea
        placeholder="Message"
        value={emailData.text}
        onChange={(e) => setEmailData({ ...emailData, text: e.target.value })}
      />
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
}

export default Reply;
