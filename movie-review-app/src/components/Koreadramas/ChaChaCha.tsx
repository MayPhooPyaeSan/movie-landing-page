import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const ChaChaCha = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.RF48aSYsgedEoa-MMxixtgHaLH&pid=Api"
              alt="ChaChaCha"
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
            <h1>Hometown Cha-Cha-Cha 2021</h1>
            <h4>Synopsis</h4>
            <p>
              "Hometown Cha-Cha-Cha" is a South Korean romantic comedy-drama
              series that tells the story of Yoon Hye-jin, a pragmatic dentist,
              and Hong Du-sik, a mysterious and easygoing man who goes by the
              nickname "Chief Hong." The series unfolds in the picturesque
              coastal village of Gongjin, where the two characters cross paths
              and embark on a journey of self-discovery, healing, and love.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Hometown Cha-Cha-Cha 2021</h1>
            <h4>Summary</h4>
            <p>
              "Hometown Cha-Cha-Cha" is a heartwarming and delightful series
              that captures the essence of small-town life, community bonds, and
              the magic of unexpected connections. Yoon Hye-jin and Chief Hong's
              relationship evolves from initial misunderstandings to a deep and
              meaningful connection, providing moments of humor, warmth, and
              romance.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/DsodZLGmpIQ?si=Y6YKcEN6WyUhnm5Y"
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
          More Pics From "Hometown Cha-Cha-Cha"
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
            src="https://tse3.mm.bing.net/th?id=OIP.zII3lElqvYQKlnEOKvIVQgHaE8&pid=Api"
            alt="ChaChaCha"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.2fGy4oAgTdp1TcLKfCfc3QHaEC&pid=Api"
            alt="ChaChaCha"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.Is5g_-Jir3qDV15GR92W9QHaER&pid=Api"
            alt="ChaChaCha"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.FtnqyDnkveWzLxem8LvCCgHaEK&pid=Api"
            alt="ChaChaCha"
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

export default ChaChaCha;
