import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Cassiopeia = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.9fVT5DmGwUrM9TG_on_atAHaKn&pid=Api"
              alt="Cassiopeia"
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
            <h1>Cassiopeia 2022 Film</h1>
            <h4>Synopsis</h4>
            <p>
              “Cassiopeia” is a 2022 South Korean drama film directed by Shin
              Yeon-shick. The movie stars Ahn Sung-ki, Seo Hyun-jin, and Joo
              Ye-rim. The story revolves around Su-jin, a successful lawyer and
              single mother who is preparing to send her daughter Gina to study
              in the United States. However, after a car accident, Su-jin is
              diagnosed with Alzheimer’s disease. As she gradually loses her
              memory and turns into a young child, her father In-woo takes care
              of her and helps her live a new life. The film explores the themes
              of family, love, and the importance of memories.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Cassiopeia 2022 Film</h1>
            <h4>Summary</h4>
            <p>
              Su Jin is a successful lawyer. After her divorce, she is having a
              perfect life as a lawyer and mother. She is preparing her
              daughter, Gina, to study in the United States. Her father In Woo
              lives with them and takes care of her granddaughter. Su Jin is
              suddenly diagnosed with Alzheimer's after a car accident. Her
              father protects her staying by her side as she starts gradually
              turning into a young child due to loss of memory and a loving
              accompaniment begins.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Ur_DIHs92NM?si=XH-sp05Ylrx6WIMy"
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
          More Pics From "Cassiopeia"
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
            src="https://tse4.mm.bing.net/th?id=OIP.MZGggxmgAdjW8Wrijxv-9wHaE8&pid=Api"
            alt="Cassiopeia"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.lZGZFyl7Yuo7YWxFAnbkjQHaEK&pid=Api"
            alt="Cassiopeia"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.vziFoTeWMElKk1tpWG6SpAHaE8&pid=Api"
            alt="Cassiopeia"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.d4jqc4S9wumY3wZRCE2eqwHaE7&pid=Api"
            alt="Cassiopeia"
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

export default Cassiopeia;
