import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Sunset = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.6KqctszxfE1IOjxriLo1wQAAAA&pid=Api"
              alt="sunset"
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
            <h1>I Told Sunset About You 2020</h1>
            <h4>Synopsis</h4>
            <p>
              "I Told Sunset About You" is a Thai television series that
              explores the complexities of teenage relationships and
              self-discovery. The story revolves around Teh, a high school
              student who is known for his aloof and indifferent demeanor. When
              Oh-aew, a cheerful and outgoing student, enters Teh's life, it
              marks the beginning of a transformative journey for both of them.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>I Told Sunset About You 2020</h1>
            <h4>Summary</h4>
            <p>
              "I Told Sunset About You" follows the journey of Teh and Oh-aew,
              two high school students with contrasting personalities. Teh, who
              is reserved and stoic, finds his world turned upside down when the
              vibrant and outgoing Oh-aew enters his life. Their friendship
              evolves into a complex and profound relationship, leading both
              characters to confront their feelings and the challenges of
              growing up.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/KIylNdQuR-w?si=TV7uYb1pC8dwlhGJ"
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
          More Pics From "I Told Sunset About You"
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
            src="https://tse4.mm.bing.net/th?id=OIP.eMjeZ26rQBCXZpefx-fttgHaEK&pid=Api"
            alt="sunset"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.cU-o-0NDOmVWjLCUOU8H-AHaE7&pid=Api"
            alt="sunset"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.khOsvpNN0ooOsO5k4VL0xgHaEk&pid=Api"
            alt="sunset"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.5IyleaGjE6anWuwTPvucggHaEK&pid=Api"
            alt="sunset"
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

export default Sunset;
