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
          <h2>Siva's Journey: From Humble Beginnings to Mortgage Expert</h2>
          <p className="paragraph-width">
            Siva, born in Eelam in 1964, originally from Vanuiya. At 18, he
            ventured to Germany, and in his early 20s, he settled in Canada. His
            career spanned various roles from factory work to owning his own
            store. However, it was in the early 90s that he discovered his
            passion for mortgages, leading him to obtain his license. With
            determination and vision, he founded his own brokerage, which grew
            to employ over 20 individuals. Along his journey to success, Siva's
            expertise and knowledge were recognized through numerous prestigious
            awards.
          </p>
          <img
            src="img/old.jpg"
            alt=""
            style={{ marginTop: "40px", marginBottom: "40px" }}
          />
        </div>
      </div>
      <div>
        <div className="section-title text-center">
          <h2>Commitment to Community: VUCFK Charity Work</h2>
          <p className="paragraph-width">
            Siva is an active member of V United Care for Kids (VUCFK), a
            Canadian charity dedicated to supporting families in Sri Lanka. As
            part of VUCFK's mission to create a socially and economically strong
            society through education, Siva passionately contributes to
            initiatives aimed at transforming lives and shaping a brighter
            future for generations to come. Through his involvement with VUCFK,
            Siva strives to make a meaningful impact on child education,
            ensuring that every child has access to quality learning
            opportunities, regardless of their socio-economic background.
          </p>
          <img src="img/vcare.png" alt="" style={{ marginTop: "40px" }} />
        </div>
      </div>
    </div>
  );
};
