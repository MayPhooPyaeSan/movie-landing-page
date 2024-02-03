import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const OurBelovedSummer = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.aWNGi3GetqoXErhLJG8bHgHaKn&pid=Api"
              alt="Our Beloved Summer"
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
            <h1>Our Beloved Summer 2021</h1>
            <h4>Synopsis</h4>
            <p>
              Years after filming a viral documentary in high school, two
              bickering ex-lovers get pulled back in front of the camera — and
              into each other's lives. Choi Woong seems naive and a
              free-spirited man, but he wants to have something for the first
              time in his life. For that, he shows what he holds in his mind.
              Kook Yeon Soo aimed to become the top student at her school, but
              she is now an adult who lives fiercely, adapting to her reality.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Our Beloved Summer 2021</h1>
            <h4>Summary</h4>
            <p>
              A coming of age romantic comedy that revolves around Choi Woong
              (Choi Woo-shik) and Kook Yeon-soo (Kim Da-mi), ex-lovers who broke
              up with a promise to never meet again. As luck would have it, the
              documentary they filmed ten years ago in high school went viral
              and they are forced to face the cameras together again. The series
              depicts their complicated feelings and growth.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/wpW6aVWgvMc?si=n5agK6vYWXrWtHyu"
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
          More Pics From "Our Beloved Summer"
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
            src="https://tse4.mm.bing.net/th?id=OIP._s7HymCWGYgrAj9rvASzkAHaEK&pid=Api"
            alt="Our Beloved Summerr"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.uP8LsPdrIzvfLmeXMSGsIwHaD4&pid=Api"
            alt="Our Beloved Summerr"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP._niGHiOlMz1n5o7I2tE6DgHaEJ&pid=Api"
            alt="Our Beloved Summerr"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.dmsjgbU5jVRCTubzReMB2AHaEL&pid=Api"
            alt="Our Beloved Summerr"
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

export default OurBelovedSummer;
