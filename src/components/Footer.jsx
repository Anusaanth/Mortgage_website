import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./footer.css";

export const Footer = (props) => {
  return (
    <div>
      <footer className="footer">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon color="secondary" fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol
                md="3"
                lg="4"
                xl="3"
                className="mx-auto mb-4 d-flex flex-column align-items-center align-items-md-start"
              >
                <h6 className="text-uppercase fw-bold mb-4">
                  <MDBIcon color="secondary" icon="gem" className="me-3" />
                  Siva Ratnasingam
                </h6>
                <p>Your trusted mortgage agent</p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset custom-link">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset custom-link">
                    Contact
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset custom-link">
                    Calculator
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Help & Support</h6>
                <p>
                  <a href="#!" className="text-reset custom-link">
                    FAQ
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset custom-link">
                    Resources
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset custom-link">
                    Security & Privacy
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon color="secondary" icon="home" className="me-2" />
                  85 Dynamic DrToronto, ON M1V 4C9
                </p>
                <p>
                  <MDBIcon color="secondary" icon="envelope" className="me-3" />
                  siva.mtg@gmail.com
                </p>
                <p>
                  <MDBIcon color="secondary" icon="phone" className="me-3" /> +
                  01 416-520-1214
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © {new Date().getFullYear()} Siva Ratnasingam. All rights reserved.
        </div>
      </footer>
    </div>
  );
};
