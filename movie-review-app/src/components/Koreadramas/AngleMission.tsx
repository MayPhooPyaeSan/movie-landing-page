import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const AngleMisson = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.14dFQzHomb1Rgrjo9_Ps1AHaLH&pid=Api"
              alt="AngleMisson"
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
            <h1>Angel's Last Mission: Love 2019</h1>
            <h4>Synopsis</h4>
            <p>
              "Angel's Last Mission: Love" is a South Korean fantasy romance
              drama that revolves around the life of an accident-prone and
              optimistic ballerina named Lee Yeon-seo, played by Shin Hye-sun.
              Due to a tragic incident, Yeon-seo becomes blind and loses her
              will to dance. Kim Dan, portrayed by L, is an angel who is given a
              special mission: to help Yeon-seo find love in order to earn his
              own ticket to heaven.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Angel's Last Mission: Love 2019</h1>
            <h4>Summary</h4>
            <p>
              "Angel's Last Mission: Love" explores the themes of love, destiny,
              and the impact of genuine connections on the human soul. The drama
              skillfully combines elements of fantasy and romance, creating a
              heartwarming and emotionally charged narrative. The story follows
              the journey of Lee Yeon-seo, a talented ballerina who faces
              hardships and emotional barriers after a life-changing accident.
              Kim Dan, an angel with a playful and compassionate demeanor, is
              assigned to guide Yeon-seo on her path to rediscovering love. The
              celestial being's interaction with the human world introduces
              humor and poignant moments.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/2-DAxRaPPOE?si=lIY7GyR5qT7pfIRZ"
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
          More Pics From "Angel's Last Mission: Love"
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
            src="https://tse1.mm.bing.net/th?id=OIP.EISVUr_whDrPba5CdTfzLQHaE8&pid=Api"
            alt="AngleMisson"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.fvUr44ySplwHKR9MrXpongHaEK&pid=Api"
            alt="AngleMisson"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.HAFS5z7Bp_pK_q4gN3cfYgHaE7&pid=Api"
            alt="AngleMisson"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.7HGhXAN1Sc6E5D4a3XWBTAAAAA&pid=Api"
            alt="AngleMisson"
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

export default AngleMisson;
