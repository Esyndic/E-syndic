
















import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import the emailjs module
import { Link } from "react-router-dom";
import SNavBar from "../Scomp/SNavBar.jsx";

function Reply() {
  const [emailData, setEmailData] = useState({
    to: "",
    subject: "",
    text: "",
  });

  // Initialize Email.js with your user ID
  emailjs.init("wVY5xFbq2rkGeyXS6");

  const sendEmail = (e) => {
    e.preventDefault();

    // Define the email parameters
    const emailParams = {
      to_email: emailData.to,
      subject: emailData.subject,
      message: emailData.text,
    };

    // Send the email
    emailjs
      .send("service_4ftlmcm", "template_lnszbak", emailParams)
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
        },
        (error) => {
          console.error("Email sending failed:", error);
        }
      );
  };

  return (
    <div>
      <SNavBar />
      <div />

      <section class="section-2">
        <p class="parag">
          This page empowers Syncic by providing them with a convenient platform
          to communicate their concerns and feedback effectively. Syndic can use
          this page to reply claims, share valuable insights, or report any
          issues related to tenants' property.
          <br />
          <br />
          <br />
          <div id="adten">
            <div className="container2">
              <div className="heading">Reply</div>
              <form onSubmit={(e) => sendEmail(e)} className="form">
                <input
                  required
                  className="inputs"
                  type="email"
                  id="name"
                  placeholder="Email"
                  onChange={(e) =>
                    setEmailData({ ...emailData, to: e.target.value })
                  }
                />
                <input
                  required
                  className="inputs"
                  type="text"
                  id="name"
                  placeholder="Subject"
                  onChange={(e) =>
                    setEmailData({ ...emailData, subject: e.target.value })
                  }
                />
                <textarea
                  className="inputs"
                  placeholder="Message"
                  id="name"
                  value={emailData.text}
                  onChange={(e) =>
                    setEmailData({ ...emailData, text: e.target.value })
                  }
                />

                <button className="addbutton" type="submit">
                  Send e-mail
                </button>
              </form>
            </div>
          </div>
        </p>
        <br />
        <footer class="footer">
          <div class="footer-div">
            <button type="button" class="social-button">
              <a class="footer-link" href="https://www.facebook.com">
                <img
                  class="icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
                />
              </a>
            </button>
            <button type="button" class="social-button">
              <a class="footer-link" href="https://www.instagram.com">
                <img
                  class="icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
                />
              </a>
            </button>
            <button type="button" class="social-button">
              <a class="footer-link" href="https://www.youtube.com">
                <img
                  class="icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
                />
              </a>
            </button>
          </div>
          <div class="text-center">© 2023 - All rights reserved</div>
        </footer>
      </section>
    </div>
  );
}

export default Reply;























// import React, { useState } from "react";

// import axios from "axios";
// import { Link } from "react-router-dom";
// import SNavBar from "../Scomp/SNavBar.jsx";

// function Reply() {
//   const [emailData, setEmailData] = useState({
//     to: "",
//     subject: "",
//     text: "",
//   });

//   const sendEmail = () => {
    
//     console.log(emailData);
//     axios
//       .post("http://localhost:3000/send-email", emailData)
//       .then((response) => {
//         console.log(response.data.message);
//       })
//       .catch((error) => {
//         console.error(error.response.data.error);
//       });
//   };
//   return (
//     <div>
//       <SNavBar />
//       <div />

//       <section class="section-2">
//         <p class="parag">
//           This page empowers Syncic by providing them with a convenient platform
//           to communicate their concerns and feedback effectively. Syndic can use
//           this page to reply claims, share valuable insights, or report any
//           issues related to tenants property .<br></br>
//           <br></br>
//           <br></br>
//           <div id="adten">
//             <div className="container2">
//               <div className="heading">Reply</div>
//               <form onSubmit={(e) => sendEmail()} className="form">
//                 <input
//                   required
//                   className="inputs"
//                   type="email"
//                   id="name"
//                   placeholder="Email"
//                   onChange={(e) =>
//                     setEmailData({ ...emailData, to: e.target.value })
//                   }
//                 />
//                 <input
//                   required
//                   className="inputs"
//                   type="text"
//                   id="name"
//                   placeholder="Subject"
//                   onChange={(e) =>
//                     setEmailData({ ...emailData, subject: e.target.value })
//                   }
//                 />
//                 <textarea
//                   className="inputs"
//                   placeholder="Message"
//                   id="name"
//                   value={emailData.text}
//                   onChange={(e) =>
//                     setEmailData({ ...emailData, text: e.target.value })
//                   }
//                 />

//                 <Link to="/feedback">
//                   <input
//                     className="addbutton"
//                     type="submit"
//                     value="Send e-mail"
//                   />
//                 </Link>
//               </form>
//             </div>
//           </div>
//         </p>
//         <br></br>
//         <footer class="footer">
//           <div class="footer-div">
//             <button type="button" class="social-button">
//               <a class="footer-link" href="https://www.facebook.com">
//                 <img
//                   class="icon"
//                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
//                 />
//               </a>
//             </button>
//             <button type="button" class="social-button">
//               <a class="footer-link" href="https://www.instagram.com">
//                 <img
//                   class="icon"
//                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
//                 />
//               </a>
//             </button>
//             <button type="button" class="social-button">
//               <a class="footer-link" href="https://www.youtube.com">
//                 <img
//                   class="icon"
//                   src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
//                 />
//               </a>
//             </button>
//           </div>
//           <div class="text-center">© 2023 - All rights reserved</div>
//         </footer>
//       </section>
//     </div>
//   );
// }

// export default Reply;
