import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Itsokay = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.pmBYUlskZIuUB81viXrBZAHaKg&pid=Api"
              alt="Itsokay"
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
            <h1>It's Okay to Not Be Okay 2020 </h1>
            <h4>Synopsis</h4>
            <p>
              "It's Okay to Not Be Okay" is a South Korean television series
              that combines elements of romance, drama, and psychological
              thriller. The story revolves around Moon Gang-tae, a psychiatric
              ward caregiver, and Ko Moon-young, a popular children's book
              author with antisocial personality disorder. As their lives become
              intertwined, the series explores themes of mental health, trauma,
              and the healing power of love.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>It's Okay to Not Be Okay 2020 </h1>
            <h4>Summary</h4>
            <p>
              "It's Okay to Not Be Okay" unfolds as a poignant and visually
              striking drama that addresses the complexities of mental health
              and human emotions. The series not only portrays the challenges
              faced by those dealing with psychological disorders but also
              emphasizes the importance of empathy, understanding, and
              self-acceptance.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/1H__LNPCc80?si=KRnTM7zjk4Xwfz-p"
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
          More Pics From "It's Okay to Not Be Okay"
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
            src="https://tse1.mm.bing.net/th?id=OIP.AU0qIxX0wDcfiOSfHS_dZgHaE8&pid=Api"
            alt="Itsokay"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.rSD7FYkDJqbHndkAjseixgHaEo&pid=Api"
            alt="Itsokay"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.eIrGJOK-UIjjsKoJngdx1wHaEK&pid=Api"
            alt="Itsokay"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.CfSqEwAfKQa4REvINhFaWgHaE7&pid=Api"
            alt="Itsokay"
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

export default Itsokay;
