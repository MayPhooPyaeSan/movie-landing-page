import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const TwentyFiveTwentyOne = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.0hw2-bM-gB4g_IyE6YAJrwHaKn&pid=Api"
              alt="TwentyFiveTwentyOne"
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
            <h1>Twenty Five Twenty One 2022</h1>
            <h4>Synopsis</h4>
            <p>
              In a time when dreams seem out of reach, a teen fencer pursues big
              ambitions and meets a hardworking young man who seeks to rebuild
              his life. Na Hee Do is a member of her high school fencing team.
              Due to the South Korean financial crisis, the high school fencing
              team gets disbanded. Getting through all the difficulties, she
              becomes a member of the national fencing team. The South Korean
              financial crisis also causes Baek Yi Jin’s father's business to go
              bankrupt. This leads to a life change for Baek Yi Jin, from living
              the life of a wealthy person to a poor person. While studying, he
              works part-time jobs like delivering newspapers. Later, he becomes
              a sports reporter for a broadcasting network.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Twenty Five Twenty One 2022</h1>
            <h4>Summary</h4>
            <p>
              “Twenty-Five Twenty-One” is a South Korean television series that
              aired on tvN from February 12 to April 3, 2022, every Saturday and
              Sunday at 21:10 (KST) for 16 episodes 1234. The show is directed
              by Jung Ji-hyun and stars Kim Tae-ri, Nam Joo-hyuk, Kim Ji-yeon,
              Choi Hyun-wook, and Lee Joo-myung 1. The series follows the lives
              of five characters, Na Hee-do (played by Kim Tae-ri), Baek Yi-jin
              (played by Nam Joo-hyuk), Ko Yu-rim (played by Kim Ji-yeon), Moon
              Ji-woong (played by Choi Hyun-wook), and Ji Seung-wan (played by
              Lee Joo-myung), as they navigate their way through life and love
              in South Korea from 1998 to 2021
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/gYp4cKumTwU?si=IJowudB0Rxh3ovkM"
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
          More Pics From "Twenty Five Twenty One"
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
            src="https://tse4.mm.bing.net/th?id=OIP.XLwMHVx5RM51v6EFOAUIMgHaE8&pid=Api"
            alt="TwentyFiveTwentyOne"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.yDGImgMQHL6PSpvbd_f6CgHaE7&pid=Api"
            alt="TwentyFiveTwentyOne"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.DA9ozWj4gIhgnCplIQlO5AHaD6&pid=Api"
            alt="TwentyFiveTwentyOne"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.vIVZJ9NHOWWtBrW9W-uPYwHaE8&pid=Api"
            alt="TwentyFiveTwentyOne"
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

export default TwentyFiveTwentyOne;
