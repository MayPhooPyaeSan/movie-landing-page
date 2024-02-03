import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Snowdrop = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.sYPsb-KMMAdEyDZRrQTj8QHaKn&pid=Api"
              alt="Snowdrop"
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
            <h1>Snowdrop 2021</h1>
            <h4>Synopsis</h4>
            <p>
              Set in 1987, when South Korea was governed by a dictatorial
              government. Graduate student Lim Soo-Ho (Jung Hae-In) is covered
              in blood and he jumps into the female dormitory at Hosu Women’s
              University. Eun Yeong-Ro (Kim Ji-Soo) finds him and helps to hide
              him. They develop a romantic relationship. Lim Soo-Ho is graduate
              student at a prestigious university. He is Korean-German. He has
              charisma and he is also mysterious. Eun Yeong-Ro is in the first
              grade of Hosu Women’s University. She is a major in English
              literature. She first met Im Soo-Ho on a blind date and fell in
              love with him at first sight. Gye Bun-Ok (Kim Hye-Yoon) gave up
              entering university due to her poor family background. She now
              works as a telephone operator at a women’s dormitory. Pretending
              to be a university student, she attends a blind date with Eun
              Young-Ro. Gye Bun-Ok later gets involved in a case. Lee Gang-Mu
              (Jang Seung-Jo) is the leader of team 1 at NSP (National Security
              Planning). He is a man of principle, who doesn't compromise in any
              situation.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Snowdrop 2021</h1>
            <h4>Summary</h4>
            <p>
              In 1987, Im Soo Ho and Eun Young Ro are students at a prestigious
              university in Seoul. Im Soo Ho, who grew up in Germany, has a
              gentle charm but gives off an air of secrecy. Eun Young Ro, who is
              lively, lovable, and cheerful, fell in love with him at first
              sight at a social gathering. One day, Soo Ho suddenly rushes into
              a female dormitory covered in blood, and Eun Young Ro hides him
              and tends to his wounds despite facing danger under close
              surveillance.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/ZV-DzpDR_x0?si=HfCTHbSmPRGblsEw"
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
          More Pics From "Snowdrop"
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
            src="https://tse1.mm.bing.net/th?id=OIP.7hXJeQ2WN6U4jWTvtJrI7QHaFj&pid=Api"
            alt="Snowdrop"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.jMdo7jUWRjMwpxudSX0nqwHaE_&pid=Api"
            alt="Snowdrop"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.nsQ_BnY1RCEq_O784SSPewHaD-&pid=Api"
            alt="Snowdrop"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.Elesh74ZbV0FRTCFpcFuAAHaEU&pid=Api"
            alt="Snowdrop"
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

export default Snowdrop;
