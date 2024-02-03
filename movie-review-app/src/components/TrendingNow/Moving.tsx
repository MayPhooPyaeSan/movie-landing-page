import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Moving = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.O8EXYN8mgX7_Tgc2bZqINgHaJQ&pid=Api"
              alt="Moving"
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
            <h1>Moving 2023</h1>
            <h4>Synopsis</h4>
            <p>
              Kim Bong-Seok, Jang Hui-Soo and Lee Gang-Hoon attend the same high
              school. They look like ordinary students, but they have special
              abilities that they inherited from their parents. Kim Bong-Seok
              has the ability to fly. Jang Hui-Soo has excellent athletic
              abilities and she is able to rapidly recover from injuries, like
              being shot or stabbed. Lee Gang-Hoon has uncanny power and speed.
              These three students try to hide their special abilities from
              other people, while their parents struggle to protect them from
              being used by other people.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Moving 2023</h1>
            <h4>Summary</h4>
            <p>
              Moving sets itself apart from it all and joins the ranks of a
              series that just cannot be missed. You will love each and every
              one of the characters, who have all been presented with their
              complexities in a way that makes them more than just heroes and
              villains. Our favorite is Jang Juwon, and we want a lot more for
              him than to just keep getting hit, as he did in season 1. Until
              there is more of this drama, we might just keep going back to some
              of our favorite episodes, which are the ones with the love story
              of Mihyun and Doosik. Do not miss out on Moving, and we hope
              season 2 comes soon.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/SZFRw7MSPog?si=LctswRSCXHVqX5-A"
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
          More Pics From "Moving"
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
            src="https://tse4.mm.bing.net/th?id=OIP.jqusvSzDoj8-W4v9BkSqNAHaEK&pid=Api"
            alt="Moving"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.GudTP-9WwcAvBDh-Ikf4TAAAAA&pid=Api"
            alt="Moving"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.rPX89r-j3fT40Yac40Py8AHaEK&pid=Api"
            alt="Moving"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.kt9xWlUghgFaqDtU3AmZkQHaE7&pid=Api"
            alt="Moving"
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

export default Moving;
