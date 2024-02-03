import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Byemama = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.pUWOxNSN2yXxH9WxRkbtrQHaKf&pid=Api"
              alt="Byemama"
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
            <h1>Hi Bye, Mama! 2020</h1>
            <h4>Synopsis</h4>
            <p>
              The story revolves around Cha Yu-ri, who was once a promising
              competitive figure skater. Unfortunately, she loses her life in an
              accident. However, she is given a second chance at life as a
              ghost. Cha Yu-ri is granted 49 days to return to the human world
              and reunite with her family. She discovers that her husband has
              remarried, and her daughter has grown up without her. As Yu-ri
              attempts to navigate the challenges of being a ghost and reconnect
              with her loved ones, she experiences various emotions and learns
              valuable lessons about life, love, and family.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Hi Bye, Mama! 2020</h1>
            <h4>Summary</h4>
            <p>
              "Hi Bye, Mama!" is a heartfelt and emotional drama that explores
              themes of loss, grief, and the importance of family bonds. The
              series combines elements of fantasy, comedy, and drama to tell a
              unique and touching story. Throughout the narrative, viewers
              witness Cha Yu-ri's journey as she comes to terms with her death
              and tries to make amends with her family. The show is known for
              its engaging storytelling, compelling characters, and the
              emotional impact of its narrative.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/1EWJt4L58UM?si=AEKsTXw7dRptt_gW"
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
          More Pics From "Hi Bye, Mama!"
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
            src="https://tse2.mm.bing.net/th?id=OIP.uXaqYx7BoMn5mlhHHrQOBAHaE7&pid=Api"
            alt="Byemama"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.5xrr17s6X4rvgzVFKPS74wHaE7&pid=Api"
            alt="Byemama"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.u2i8nOepKTPGq-IYiPmGTgHaE7&pid=Api"
            alt="Byemama"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.G4cIUlqtDR51xiCzVDKgCgHaE8&pid=Api"
            alt="Byemama"
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

export default Byemama;
