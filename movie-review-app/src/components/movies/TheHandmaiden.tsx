import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const TheHandmaiden = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.explicit.bing.net/th?id=OIP.mcWeLgufF5aV8SyWnjEMBAHaKi&pid=Api"
              alt="The Handmaiden"
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
            <h1>The Handmaiden 2017 Film</h1>
            <h4>Synopsis</h4>
            <p>
              Set in Korea during the 1930s, "The Handmaiden" tells the story of
              Sook-hee, a young pickpocket who is hired by a charming conman
              named Count Fujiwara to become the handmaiden of Lady Hideko, a
              Japanese heiress. The plan is for Sook-hee to help the Count
              seduce Lady Hideko, marry her, and then commit her to an asylum to
              steal her inheritance. However, as Sook-hee becomes intimately
              involved with Lady Hideko, the relationships and motivations of
              the characters become increasingly complex.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>The Handmaiden 2017 Film</h1>
            <h4>Summary</h4>
            <p>
              "The Handmaiden" is a tale of deception, desire, and betrayal set
              in 1930s Korea during the Japanese occupation. Sook-hee, a young
              pickpocket, is enlisted by the suave conman Count Fujiwara to
              serve as the handmaiden to Lady Hideko, a wealthy Japanese
              heiress. The Count's plan is to use Sook-hee to help him seduce
              Lady Hideko, marry her, and then swindle her out of her
              inheritance. However, as Sook-hee and Lady Hideko grow closer, the
              intricate web of schemes and secrets begins to unravel, revealing
              unexpected alliances and desires.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/whldChqCsYk?si=jkol81GyVO7hgsvM"
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
          More Pics From "The Handmaiden"
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
            src="https://tse3.mm.bing.net/th?id=OIP.E6aHQWKiULsxJaneT3BHGwHaEK&pid=Api"
            alt="The Handmaiden"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.xau3DorekuJyRnnA6T3CvgHaDF&pid=Api"
            alt="The Handmaiden"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.explicit.bing.net/th?id=OIP.kZJZcwqbPicOjLUZOLV2EAHaEK&pid=Api"
            alt="The Handmaiden"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.78aWf8AMcQkwdeJSK9Y-sAAAAA&pid=Api"
            alt="The Handmaiden"
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

export default TheHandmaiden;
