import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const MyAmbulance = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.g2OjNP4PfM0Eja2L38Hi-QHaK5&pid=Api"
              alt="My Ambulance"
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
            <h1>My Ambulance 2019</h1>
            <h4>Synopsis</h4>
            <p>
              "My Ambulance" revolves around the life of Pun, a medical student,
              who unexpectedly gains the ability to see ghosts after an
              accident. This newfound ability leads to various comedic and
              supernatural encounters as Pun tries to navigate his personal and
              professional life. The drama takes a light-hearted and humorous
              approach to the challenges Pun faces as he juggles medical
              studies, relationships, and his interactions with spirits. Along
              the way, Pun discovers the significance of his gift and its
              potential impact on the lives of those around him. The series
              combines elements of romance, comedy, and fantasy, offering an
              entertaining and unique viewing experience.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>My Ambulance 2019</h1>
            <h4>Summary</h4>
            <p>
              Pun, a medical student, experiences a life-altering event that
              grants him the unusual ability to see ghosts. This newfound skill
              adds a comedic twist to his daily life as he tries to balance the
              challenges of medical school with his interactions with spirits.
              Throughout the series, Pun encounters various supernatural
              situations, leading to both humorous and heartwarming moments. As
              he navigates this unique journey, Pun discovers the true purpose
              of his gift and its impact on the people around him. "My
              Ambulance" offers a blend of romance, comedy, and fantasy,
              creating an engaging and entertaining narrative.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/JOCIPuwL5AE?si=07meV1o64P3Kkt3T"
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
          More Pics From "My Ambulance"
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
            src="https://tse2.mm.bing.net/th?id=OIP.YotXnBJoHyD6D0QbF6FUKgHaEK&pid=Api"
            alt="My Ambulance"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.vk6xHSDJ1s3FbeHRc6Jw6QHaE8&pid=Api"
            alt="My Ambulance"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.ZRjKYWqbrnFyPGqOgw7O2QHaEK&pid=Api"
            alt="My Ambulance"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.qrsTtSGFL8lQEP3atpZxowHaE8&pid=Api"
            alt="My Ambulance"
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

export default MyAmbulance;
