import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Monster = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://m.media-amazon.com/images/M/MV5BMDY0YzNlZWQtOTZkOS00NGQ5LTkzYTYtOTg2OWJkYWJiMTVlXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UY1561_.jpg"
              alt="monster"
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
            <h1>Monster 2023 Film</h1>
            <h4>Synopsis</h4>
            <p>
              “Monster” is a 2023 Japanese drama film directed and edited by
              Hirokazu Kore-eda from a screenplay written by Yuji Sakamoto. The
              movie stars Sakura Andō, Eita Nagayama, Soya Kurokawa, and Hinata
              Hiiragi. The story revolves around Saori Mugino, a single mother
              raising her fifth-grade son, Minato. Minato begins exhibiting
              strange behavior such as cutting his own hair and coming home with
              only one shoe.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Monster 2023 Film</h1>
            <h4>Summary</h4>
            <p>
              At first, the Japanese juvie drama “Monster” seems to be a tragedy
              about a troubled, maybe dangerous, pre-teen. Little things about
              Minato Mugino (Soya Kurokawa) stand out to his single mom, Saori
              (Sakura Ando), like a new haircut and a cut over Minato’s right
              ear. Some of these might be read as signs of a problem, like when
              Minato asks his mom if she thinks a person would still be human if
              they received a pig brain transplant. Minato also sings to himself
              a phrase that hangs over the rest of the movie like a
              slow-breaking raincloud: “Who’s the monster?”
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/cOpWDxxiwoE?si=yCTF8YaNKoywZBre"
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
          More Pics From "Monster"
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
            src="https://tse2.mm.bing.net/th?id=OIP.hMAyOurRwr5jAcNiRw_9-wAAAA&pid=Api"
            alt="monster"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.pK-lMagdYyCB20JsD3qY4QHaFj&pid=Api"
            alt="monster"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.2--McZQICRNEHhvxNnQ90QHaE8&pid=Api"
            alt="monster"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.ygyA-wXb7Ax6-rvdPKwTzwHaDa&pid=Api"
            alt="monster"
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

export default Monster;
