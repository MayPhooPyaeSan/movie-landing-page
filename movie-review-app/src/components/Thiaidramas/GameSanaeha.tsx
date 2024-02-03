import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const GameSanaeha = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.TQ2syMGJN9ARCp95WqE1jwHaJO&pid=Api"
              alt="GameSanaeha"
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
            <h1>Game Sanaeha 2018</h1>
            <h4>Synopsis</h4>
            <p>
              Within two years so much happened: Muanchanok studied abroad, her
              parents got divorced, and her father is getting remarried to a
              much younger former beauty queen. This broken family transformed
              Nok into a jealous, ill-tempered woman fixated on reuniting her
              parents at all costs. Meanwhile, Lakkhanai began to live at Nok's
              house. He had grown from Nok's childhood acquaintance to a
              successful, upper-level manager in her father's company. His
              cohabitation infuriated Nok. Upon being challenged by Lakkhanai,
              Nok started a game of love with him. However, Nai's feelings for
              her were sincere all along. Will Nok win and break Lakkhanai? Or
              will she give in and accept his feelings?
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Game Sanaeha 2018</h1>
            <h4>Summary</h4>
            <p>
              It has a cute ending. Everyone was partnered off. Thawit and Khae
              got married and had a baby daughter. Nai and Nok finally cleared
              their many games and misunderstandings. They also have a baby boy,
              they both love. As to Visaka, Nok’s mother, she had the best
              fortune. She ended up having a romantic relationship with a
              doctor, yep the gorgeous Wongwet became her toyboy! As to the
              horrid grandma, she had changed her tune and loved Nok and Nai
              after they presented her with a great-grandson, Non.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/HNi3Jw3dqn0?si=oZxBNiTAlc6sQvi_"
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
          More Pics From "Game Sanaeha"
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
            src="https://tse2.mm.bing.net/th?id=OIP.Mj01Jcjd95RFYMwWoeLx1wHaE8&pid=Api"
            alt="GameSanaeha"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.Q4muqja8HCBKeo6LLD5iWwHaEM&pid=Api"
            alt="GameSanaeha"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.vpjkz-0HYowy6UKj5IIl8wHaE8&pid=Api"
            alt="GameSanaeha"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.T1m_HOvf1YGmeVJckxPz0wHaE8&pid=Api"
            alt="GameSanaeha"
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

export default GameSanaeha;
