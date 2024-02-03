import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Startup = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.KpbM0ktEdin0rFHRmMWFiAHaKl&pid=Api"
              alt="Start-Up"
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
            <h1>Start-Up 2020</h1>
            <h4>Synopsis</h4>
            <p>
              "Start-Up" is a South Korean television series that revolves
              around the world of start-up companies and the dreams, challenges,
              and relationships of young entrepreneurs. The story follows Seo
              Dal-Mi, a young woman with a passion for creating her own
              business, and Nam Do-San, a talented yet struggling entrepreneur.
              The series explores themes of ambition, love, and the pursuit of
              success in the competitive world of technology start-ups.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Start-Up 2020</h1>
            <h4>Summary</h4>
            <p>
              "Start-Up" offers a compelling story of young individuals striving
              to make their mark in the competitive and dynamic world of
              start-up companies. The series combines elements of romance,
              drama, and comedy as it portrays the characters' journeys in
              pursuing their entrepreneurial dreams."Start-Up" not only provides
              insights into the start-up ecosystem but also delivers a
              heartwarming tale of friendship, love, and the pursuit of one's
              aspirations.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/BemKyzbLDDc?si=aRaidWjsyuOSWmQO"
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
          More Pics From "Start-Up"
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
            src="https://tse2.mm.bing.net/th?id=OIP.a3T1b8AhMtRCHLIVcr8B4AHaE8&pid=Api"
            alt="Start-Up"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://kdramaclicks.com/wp-content/uploads/2019/11/startup3.jpeg"
            alt="Start-Up"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.6l7chpZfkv4PObw4901HhwHaEk&pid=Api"
            alt="Start-Up"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.ocHM3Pflv11Tmq3bn8cPDQHaE3&pid=Api"
            alt="Start-Up"
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

export default Startup;
