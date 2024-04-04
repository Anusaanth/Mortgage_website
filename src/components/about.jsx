import React from "react";
import "./about.css";

export const About = (props) => {
  return (
    <div>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img
                src="img/about.jpg"
                className="contact-info-image"
                alt=""
              />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Siva</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="section-title text-center">
          <h2>yes</h2>
          <p className="paragraph-width">
            This is a paragraph under the h2 tagasdfkaksdfbkasdjfkasbjfkabklfbak
            aksfjksajdjb fkbasdk fbasdk fbkas bfkasb kds n a;skn k;a k kdan kan
            fkn ;n kj fkl; nafn l;a l;a nfl n adfadsfb k k bkbkfdk abkas bs
            bksadfbkfbksb fkb kbfksb ksb kabjf ksdb fksadbf k bks bfk
            bksabfkabfkasb.
          </p>
          <img src="img/about1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
