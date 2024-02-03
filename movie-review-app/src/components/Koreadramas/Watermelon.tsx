import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Watermelon = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.ra_hBijFgdomA521yNuGRAHaKd&pid=Api"
              alt="Twinkling Watermelon"
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
            <h1>Twinkling Watermelon 2023</h1>
            <h4>Synopsis</h4>
            <p>
              “Twinkling Watermelon” is a South Korean television series that
              aired on tvN from September 25 to November 14, 2023, every Monday
              and Tuesday at 20:50 (KST) for 16 episodes 1. The show is also
              available for streaming on Viu and Viki in selected regions. The
              series follows the story of Ha Eun-gyeol (played by Ryeoun), a
              CODA boy with a natural talent for music. He travels back in time
              to 1995 and joins a band with his childhood father. Together, they
              form a band called Watermelon Sugar with the suspicious youths he
              meets there, and communicate with them through music.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Twinkling Watermelon 2023</h1>
            <h4>Summary</h4>
            <p>
              In 2023, Eun Gyeol is a CODA (Child of Deaf Adults) high-school
              student with hearing-impaired parents, but he has a passion for
              music. During the day, he is a studious model pupil, but at night,
              he rocks out as a guitarist in a band. But when he stumbles across
              a strange yet alluring music store, he goes hurtling back in time
              to 1995. Here, he comes face to face with his father, Ha Yi Chan –
              as a high schooler! Yi Chan takes Eun Gyeol for a lunatic when the
              latter calls him “dad”. Worse still, it looks like Yi Chan has a
              crush on an icy cellist named Se Kyeong – not his future mother,
              Cheong Ah!
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/KbWi3VW6QuM?si=9XGYBYU3mGmzhUjB"
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
          More Pics From "Twinkling Watermelon"
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
            src="https://tse2.mm.bing.net/th?id=OIP.LcPNaknntHsCR0aq_1Lm4wHaE8&pid=Api"
            alt="Twinkling Watermelon"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.explicit.bing.net/th?id=OIP.sGeDMcaeFV8XOIAxktHoZwHaE8&pid=Api"
            alt="Twinkling Watermelon"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.meqTVqWR8l1pgCflYhyMTwHaE7&pid=Api"
            alt="Twinkling Watermelon"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.vG_V8aHwKwvczikOHc_IHQHaE8&pid=Api"
            alt="Twinkling Watermelon"
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

export default Watermelon;
