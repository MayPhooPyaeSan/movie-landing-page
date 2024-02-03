import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const MyLoveFromStar = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.1oHofzkiV3BGjeJKxUoQJgHaJr&pid=Api"
              alt="MyLoveFromStar"
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
            <h1>My Love from Another Star 2013</h1>
            <h4>Synopsis</h4>
            <p>
              "My Love from Another Star" is a popular South Korean romantic
              fantasy television series that seamlessly blends elements of
              romance, comedy, and science fiction. The story revolves around Do
              Min-Joon, an extraterrestrial being who has been living on Earth
              for over 400 years. Due to unforeseen circumstances, he finds
              himself entangled with a top actress, Cheon Song-Yi.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>My Love from Another Star 2013</h1>
            <h4>Summary</h4>
            <p>
              "My Love from Another Star" is a captivating love story that
              unfolds as Do Min-Joon and Cheon Song-Yi navigate the complexities
              of their unusual relationship. The series beautifully captures the
              essence of love transcending time and space. Do Min-Joon's stoic
              and reserved demeanor contrasts with Cheon Song-Yi's lively and
              vibrant personality, creating a perfect blend of humor and
              heartfelt moments.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/AyQVdUxCA9E?si=T9-eRGdosNJC0bxD"
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
          More Pics From "My Love from Another Star"
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
            src="https://tse3.mm.bing.net/th?id=OIP.wYKZooHLel2iJg4ZK_H6FgHaEK&pid=Api"
            alt="MyLoveFromStar"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.GSLplcU33quf39e41jLSXgHaEK&pid=Api"
            alt="MyLoveFromStar"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.FILvp4HK_mqughcmCrrLHwEsCo&pid=Api"
            alt="MyLoveFromStar"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.Uceif7o7apLbUGjMftU2QAHaFM&pid=Api"
            alt="MyLoveFromStar"
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

export default MyLoveFromStar;
