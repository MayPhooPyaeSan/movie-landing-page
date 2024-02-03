import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Holidate = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.MjFchelaWLILXQ5n6MHGuwHaLH&pid=Api"
              alt="Holidate"
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
            <h1>Holidate 2020 Film</h1>
            <h4>Synopsis</h4>
            <p>
              "Holidate" (2020) is a romantic comedy film directed by John
              Whitesell. The story follows the characters Sloane (Emma Roberts)
              and Jackson (Luke Bracey), who decide to be each other's
              "holidate" — a companion for various holidays throughout the year,
              with no romantic commitment. Sloane and Jackson meet in a store
              while shopping for holiday decorations and, both tired of being
              single during festive occasions, agree to be each other's platonic
              dates for upcoming holidays. The arrangement begins with Christmas
              and continues through New Year's Eve, Easter, Independence Day,
              and various other celebrations.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Holidate 2020 Film</h1>
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
              src="https://www.youtube.com/embed/hxaaAoI57fk?si=sKW8NGZiUmL3CZPr"
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
          More Pics From "Holidate"
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
            src="https://tse4.mm.bing.net/th?id=OIP.zC7r9iO9PpazNtGmwl9QAwHaE7&pid=Api"
            alt="Holidate"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.KyHfeJlo7-hbCc7HGwArFwHaE7&pid=Api"
            alt="Holidate"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.CuIUgibqDfAYfvDY64tihgHaEr&pid=Api"
            alt="Holidate"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.2cv_7Dv3z7Sh7p3VIOcizgHaE8&pid=Api"
            alt="Holidate"
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

export default Holidate;
