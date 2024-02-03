import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Krachao = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.zm29N_zKiu5GP01DlxdxQQAAAA&pid=Api"
              alt="Krachao"
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
            <h1>Krachao Seeda 2021</h1>
            <h4>Synopsis</h4>
            <p>
              The story revolves around two main characters, Muey and Thien.
              Muey is a young woman who has a traumatic past involving her
              mother's death and her father's remarriage to a woman named
              Piengpen. Due to the events surrounding her mother's death, Muey
              becomes mute and struggles with communication. Meanwhile, Thien is
              a wealthy heir to a company but faces challenges in his romantic
              life. As their paths cross, they find themselves in a fake
              marriage due to unforeseen circumstances.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Krachao Seeda 2021</h1>
            <h4>Summary</h4>
            <p>
              Muey, a young woman with a traumatic past that rendered her mute,
              and Thien, a wealthy heir facing his own romantic challenges, find
              themselves entangled in a fake marriage. Muey's struggle with
              communication and Thien's complex romantic life create a unique
              dynamic between the two. As they navigate the complexities of
              their unconventional marriage, secrets from the past come to
              light, leading to personal growth and a deeper understanding of
              each other. The drama explores themes of love, family, and
              societal expectations, weaving a compelling narrative of romance
              and drama.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/1G1O6-U5Jlk?si=jj9b8RSIouK67iJT"
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
          More Pics From "Krachao Seeda"
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
            src="https://tse1.mm.bing.net/th?id=OIP.Sq6_OQ7B-zIJ9IMyO21qMAHaEK&pid=Api"
            alt="Krachao"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.lj31z4gZgdFWrO7gVnYHUAHaEK&pid=Api"
            alt="Krachao"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.Abv7z5DVBKQs7W_PceBPgAAAAA&pid=Api"
            alt="Krachao"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.oCakq6Y8pr_5tS4xZoDpEwAAAA&pid=Api"
            alt="Krachao"
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

export default Krachao;
