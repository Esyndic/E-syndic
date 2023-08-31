import React, { useState } from "react";
import cookie from "js-cookie";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar.jsx";
function LoginAsTenant(props) {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [pwd, setpwd] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/api/tenant/login", {
        email: email,
        password: pwd,
      })
      .then((result) => {
        if (result.data.token) {
          cookie.set("jwt", result.data.token);
          navigate("/thome");
        } else {
          alert("wrong credential");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <NavBar />
      <div />
      <br></br>
      <section class="section-2">
        <div class="sheet">
          <img
            id="img2"
            src="https://www.coprolib.com/wp-content/uploads/2019/08/visuel-devenir-coprolib.svg"
          />
        </div>
        <p class="parag">
          Manage your co-ownership in complete freedom! For more than 10 years,
          E-SYNDIC makes life easier for co-owners. A clear platform and
          effective, for the volunteer trustee. The support of a team experts to
          meet your needs. Together, let's build a sustainable condominium
          project!
          <MDBContainer fluid className="p-4">
            <MDBRow>
              <MDBCol
                md="6"
                className="text-center text-md-start d-flex flex-column justify-content-center"
              >
                <h1 className="my-5 display-3 fw-bold ls-tight px-3">
                  The best offer <br />
                  <span className="text-primary">for your business</span>
                </h1>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="my-5">
                  <MDBCardBody className="p-5">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      id="form1"
                      type="email"
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      id="form1"
                      type="password"
                      onChange={(e) => {
                        setpwd(e.target.value);
                      }}
                    />

                    <div className="d-flex justify-content-center mb-4">
                      <MDBCheckbox
                        name="flexCheck"
                        value=""
                        id="flexCheckDefault"
                        label="Subscribe to our newsletter"
                      />
                    </div>

                    <MDBBtn
                      className="w-100 mb-4"
                      size="md"
                      onClick={(e) => {
                        handleSubmit(e);
                      }}
                    >
                      <Link to="/Thome"> sign in</Link>
                    </MDBBtn>

                    <div className="text-center">
                      <MDBBtn
                        tag="a"
                        color="none"
                        className="mx-3"
                        style={{ color: "#1266f1" }}
                      >
                        <MDBIcon fab icon="facebook-f" size="sm" />
                      </MDBBtn>

                      <MDBBtn
                        tag="a"
                        color="none"
                        className="mx-3"
                        style={{ color: "#1266f1" }}
                      >
                        <MDBIcon fab icon="twitter" size="sm" />
                      </MDBBtn>

                      <MDBBtn
                        tag="a"
                        color="none"
                        className="mx-3"
                        style={{ color: "#1266f1" }}
                      >
                        <MDBIcon fab icon="google" size="sm" />
                      </MDBBtn>

                      <MDBBtn
                        tag="a"
                        color="none"
                        className="mx-3"
                        style={{ color: "#1266f1" }}
                      >
                        <MDBIcon fab icon="github" size="sm" />
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </p>
        <br></br>
      </section>
    </div>
  );
}
export default LoginAsTenant;
