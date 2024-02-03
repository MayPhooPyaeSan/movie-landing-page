import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Beauty = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.WFW-QSHJrrqecPd-eBYCQAHaLH&pid=Api"
              alt="beauty"
              className="review-img"
              style={{
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            />
          </div>
          <div className="about-review">
            <h1>Beauty and the Beast 1991 Film</h1>
            <h4>Synopsis</h4>
            <p>
              Beauty and the Beast" (1991) is a classic animated film produced
              by Walt Disney Animation Studios. The story is a fairy tale
              adaptation inspired by Jeanne-Marie Leprince de Beaumont's French
              fairy tale of the same name. The film revolves around a young
              woman named Belle who lives in a small provincial town. Belle is
              known for her love of reading and her independent spirit. She
              finds herself at odds with the self-absorbed and arrogant Gaston,
              who is determined to marry her despite her disinterest.Beauty and
              the Beast" received critical acclaim for its animation, music, and
              storytelling. It became the first animated film to be nominated
              for the Academy Award for Best Picture. The film's success
              contributed to the revitalization of Disney animation during the
              '90s, establishing it as a timeless and beloved classic.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Beauty and the Beast 1991 Film</h1>
            <h4>Summary</h4>
            <p>
              In "Beauty and the Beast" (1991), Belle, a bookish and independent
              young woman, finds herself in an enchanted castle after offering
              to take her father's place as the prisoner of the Beast, a cursed
              prince. Despite their initial animosity, Belle and the Beast
              develop a deep bond as they discover each other's vulnerabilities
              and shared love for literature. As the enchanted objects in the
              castle strive to break the curse, the narrative unfolds with
              themes of inner beauty, kindness, and the transformative power of
              love. The story explores the contrast between the outwardly
              monstrous appearance of the Beast and the kindness within him,
              emphasizing that true beauty lies within.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/iurbZwxKFUE?si=st-_1gLI1J8544gp"
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
          More Pics From "Beauty and the Beast"
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
            src="https://tse3.mm.bing.net/th?id=OIP.w7WLAL7JUH68k5OLTRvp3QHaDl&pid=Api"
            alt="beauty"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.jQ8fuXXHYhaO5xNWXypPlAHaEK&pid=Api"
            alt="beauty"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.Iij3A9McGcbHqObPZoWhqgHaEI&pid=Api"
            alt="beauty"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.VrFbDecR4lv7LuatW9UL9QHaEU&pid=Api"
            alt="beauty"
            style={{ width: "300px", height: "auto", borderRadius: "4px" }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Beauty;
