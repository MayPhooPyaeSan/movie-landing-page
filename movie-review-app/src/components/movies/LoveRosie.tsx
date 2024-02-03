import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const LoveRosie = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.explicit.bing.net/th?id=OIP.ZFtAYY7ttakFYvqEhm-_LwHaK_&pid=Api"
              alt="LoveRosie"
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
            <h1>Love, Rosie 2014 Film</h1>
            <h4>Synopsis</h4>
            <p>
              "Love, Rosie" (2014) is a romantic comedy-drama film based on the
              novel "Where Rainbows End" by Cecelia Ahern. The story revolves
              around the long-time friendship and evolving romance between Rosie
              Dunne and Alex Stewart. Rosie and Alex have been best friends
              since childhood, growing up together in Dublin. As they navigate
              the challenges of adolescence and early adulthood, it becomes
              increasingly clear that there might be deeper feelings between
              them. However, circumstances and misunderstandings always seem to
              conspire to keep them apart.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Love, Rosie 2014 Film</h1>
            <h4>Summary</h4>
            <p>
              "Love, Rosie" is a heartfelt exploration of love and friendship,
              capturing the humor and poignancy of life's unpredictable journey.
              The film depicts the challenges and joys of maintaining a deep
              connection with someone over the years and the realization that
              true love may be closer than one thinks.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dOMTh9Jd81w?si=qrZ5EZWz44bo3FYb"
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
          More Pics From "Love Rosie"
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
            src="https://tse2.mm.bing.net/th?id=OIP.Smt00yUlcEa5b3E2cHHYMwHaEU&pid=Api"
            alt="LoveRosie"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.q0MrvIxSXC8-PXPySyG-PgHaEc&pid=Api"
            alt="LoveRosie"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.FuHRY5A15EOptBMHAJOyvgHaE8&pid=Api"
            alt="LoveRosie"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.BKdgPoRLNToT7Oy9QGqcyQHaE8&pid=Api"
            alt="LoveRosie"
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

export default LoveRosie;
