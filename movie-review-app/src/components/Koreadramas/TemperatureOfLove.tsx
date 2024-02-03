import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const TemperatureOfLove = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.p8ZNXwjA2JcNO_o2YGaegQHaLE&pid=Api"
              alt="Temperature of Love"
              className="review-img"
              style={{
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
                cursor: "pointer",
              }}
            />
          </div>
          <div className="about-review">
            <h1>Temperature of Love 2017</h1>
            <h4>Synopsis</h4>
            <p>
              "Temperature of Love" is a South Korean television series that
              explores the journey of individuals in the competitive and
              demanding world of the culinary industry. The story revolves
              around the lives of ambitious individuals who pursue their dreams,
              facing challenges both in their professional and personal lives.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Temperature of Love 2017</h1>
            <h4>Summary</h4>
            <p>
              "Temperature of Love" follows the intertwining lives of Hyun Soo
              and Jung Sun in the competitive realm of the culinary industry.
              Hyun Soo, an aspiring chef with a passion for creating heartfelt
              dishes, crosses paths with Jung Sun, a successful and meticulous
              restaurant owner. As they navigate the challenges of their
              culinary careers, a romantic connection blossoms between them.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/e3tY-YtTL7M?si=-_au68coy_u7hy5F"
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
              style={{
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            ></iframe>
          </div>
        </div>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          More Pics From "Temperature of Love"
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            cursor: "pointer",
            marginBottom: "2rem",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
          }}
        >
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.CzLlwW0yRhUlSKmXOUspqQHaEN&pid=Api"
            alt="Temperature of Love"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.TfsFCo7spCz8TF5B-hJvPgHaEN&pid=Api"
            alt="Temperature of Love"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP._2IIpFN1HmdyTXUOyeSdagHaEK&pid=Api"
            alt="Temperature of Love"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.Msf45l-8z4naP29GfStIKgHaEN&pid=Api"
            alt="Temperature of Love"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TemperatureOfLove;
