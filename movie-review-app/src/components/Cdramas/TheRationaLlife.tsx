import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const TheRationalLife = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.explicit.bing.net/th?id=OIP.Te-gPVgBGes-5hG_u_BGrQHaLH&pid=Api"
              alt="Rational Life"
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
            <h1>The Rational Life (2021)</h1>
            <h4>Synopsis</h4>
            <p>
              The Rational Life is a Chinese drama series that premiered in
              2021. The story follows Shen Ruo Xin, a professional career woman
              in her 30s, as she navigates through various challenges in her
              life. From dealing with office politics, familial pressure to
              settle down and marry, to handling suitors interested in her for
              their own selfish personal motives, she is one busy lady. However,
              she handles them all with great aplomb while managing to find
              romance in an unexpected place.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>The Rational Life (2021)</h1>
            <h4>Summary</h4>
            <p>
              Shen Ruo Xin is a professional career woman in her 30s and she has
              to navigate through many things in her life. From swimming through
              the cesspool of office politics with its nepotism, sabotage and
              company problems, to withstanding familial pressure to settle down
              and marry, to handling suitors interested in her for their own
              selfish personal motives, to being counsellor and mentor to her
              best friend and her juniors, she is one busy lady but watch as she
              handles them all with great aplomb while managing to find romance
              in an unexpected place.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/_eEb1NucGB0?si=RC0s4ekZUhCiF3xj"
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
          More Pics From "The Rational Life"
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
            src="https://tse2.mm.bing.net/th?id=OIP.RwjqSUv-dQZPEGjX7kxj4gHaE8&pid=Api"
            alt="Rational Life"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.pcc0J2oCj_R3MgFXpFgBbwHaE8&pid=Api"
            alt="Rational Life"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.xjq46UWgm1JJGmHm809y4QHaEK&pid=Api"
            alt="Rational Life"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.4eKfF0slV4A0FPPl4sd-0wHaE8&pid=Api"
            alt="Rational Life"
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

export default TheRationalLife;
