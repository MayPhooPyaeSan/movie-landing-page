import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Melancholia = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.b17IQYmDgm_Qu4J5RQ5JrwHaKg&pid=Api"
              alt="Melanchlida"
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
            <h1>Melancholia (2021)</h1>
            <h4>Synopsis</h4>
            <p>
              A sexual scandal between a math teacher and a student in a
              prestigious high school ends in tragedy. Four years later, they
              meet again, now both adults, to reveal the corruption in school
              and to regain one's reputation as a teacher.The show revolves
              around Ji Yoon-soo (played by Lim Soo-jung), a high school math
              teacher who is passionate about mathematics and encourages her
              students to find their own answers to solve every question. She
              has a bright smile and a positive impression of others. Baek
              Seung-yoo (played by Lee Do-hyun) is a math genius who appeared on
              a quiz program at the age of five and surprised the world by
              solving college-level math problems.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Melancholia (2021)</h1>
            <h4>Summary</h4>
            <p>
              Ji Yoon Soo is a high school math teacher with a bright smile and
              a positive impression of others. She is a hard-nosed and stubborn
              person who has to push ahead with the decisions she has made. She
              is a math geek who loves solving difficult problems and teaches
              students to purely love math. Baek Seung Yoo is emotionless and
              has no light in his eyes. He used to be a math genius who appeared
              on a quiz program at the age of five and surprised the world by
              solving college-level math problems. He was admitted to MIT at the
              age of 10 but dropped out at the age of 12, and suddenly
              disappeared.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Lxu0dlFpm_I?si=c0icBdMNwfkYeIZ9"
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
          More Pics From "Melancholia"
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
            src="https://tse1.explicit.bing.net/th?id=OIP.1autUphS3BE4eiK5KyNvwQHaEo&pid=Api"
            alt="Melancholia"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.bJyGlIzF5VVGeGB5UO2HyQHaEK&pid=Api"
            alt="Melancholia"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.BJFl_qOADr2tA2R8Fzb0MgHaEK&pid=Api"
            alt="Melancholia"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.iTDQ2LiaQSubv1eA4psI0gHaEA&pid=Api"
            alt="Melancholia"
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

export default Melancholia;
