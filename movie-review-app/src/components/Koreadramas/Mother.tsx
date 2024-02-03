import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Mother = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.WVZTlPWUJDnczymrb_1wzAHaKt&pid=Api"
              alt="Mother"
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
            <h1>Mother 2018</h1>
            <h4>Synopsis</h4>
            <p>
              "Mother" is a gripping South Korean drama that delves into the
              complexities of motherhood, sacrifice, and the pursuit of justice.
              The story revolves around Soo-Jin, a temporary teacher played by
              Lee Bo-Young, who becomes deeply invested in the life of a young
              girl named Hye-Na. Hye-Na, portrayed by Heo Yool, is subjected to
              abuse and neglect by her own mother.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Mother 2018</h1>
            <h4>Summary</h4>
            <p>
              "Mother" unfolds as a heart-wrenching drama that follows Soo-Jin's
              journey from a temporary teacher to a surrogate mother determined
              to rescue Hye-Na from a life of abuse. The narrative skillfully
              navigates the complexities of maternal love and ethical dilemmas,
              keeping viewers on the edge of their seats. As Soo-Jin fights
              against the odds to provide Hye-Na with a chance at a better life,
              "Mother" delivers a powerful and emotionally charged story that
              resonates with themes of compassion, sacrifice, and the unwavering
              bond between a caregiver and a child.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/yJ5mP43xl0E?si=6HK8PJnnrsH9rK8T"
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
          More Pics From "Mother"
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
            src="https://tse2.mm.bing.net/th?id=OIP.CfdBQeDoqSPvVQbOoA0h5QHaE5&pid=Api"
            alt="Mother"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.explicit.bing.net/th?id=OIP.4Lof_lNJlXTxXAhAxl32_gHaFO&pid=Api"
            alt="Mother"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.waVonr5TdccgsWp7_liVcwHaDW&pid=Api"
            alt="Mother"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP._yS1RSIK7KEzsYx7gG0hhwHaEF&pid=Api"
            alt="Mother"
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

export default Mother;
