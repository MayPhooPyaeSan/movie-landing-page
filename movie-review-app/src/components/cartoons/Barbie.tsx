import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Barbie = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.d_hrgOs6tsvU-3YYvDyodwHaLH&pid=Api"
              alt="barbie"
              className="review-img"
              style={{
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            />
          </div>
          <div className="about-review">
            <h1>Barbie: A Fashion Fairytale 2010 Film</h1>
            <h4>Synopsis</h4>
            <p>
              This animated release follows Barbie on an adventure to Paris,
              where she is visiting her aunt - an important fashion designer.
              Unfortunately, upon arriving, she learns that her aunt's fashion
              business is in trouble, but when she discovers three Flairies with
              magical powers, Barbie comes up with a plan to save the day. Join
              Barbie in a colourful, modern-day fairytale filled with fashion,
              friends and fun! Barbie and her dog Sequin jet off to visit her
              Aunt's amazing fashion house in Paris, and much to her surprise
              it's about to be shut down forever. After she discovers three
              enchanting Flairies with sparkle-magic powers, Barbie comes up
              with a brilliant idea to save the business. She even inspires
              Alice, a shy fashion designer, and together they create a dazzling
              runway fashion show. Barbie shows that magic happens when you
              believe in yourself.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Barbie: A Fashion Fairytale 2010 Film</h1>
            <h4>Summary</h4>
            <p>
              Barbie's modern adventure takes her to Paris, where she makes new
              friends and meets magical characters that discover their true
              designer talents and use their inner sparkle to save the day!
              Because Barbie got fired from her job she went to Paris and met
              her aunt Millicent which was going to close her fashion house...
              but Barbie and aunt Millicent's assistant Alice would help aunt
              Millicent save her fashion house! Would they do it? Will they
              defeat the evil copy cat? Read the story or watch the film to know
              what happens next!
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Ph094YzC9-A?si=197BWuzTK10uKS6O"
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
          More Pics From "Barbie: A Fashion Fairytale"
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
            src="https://tse2.mm.bing.net/th?id=OIP.w5erV9KfIRnSUpS8x0emaAHaD-&pid=Api"
            alt="barbie"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.8g09tV0GEy0LR12sax_tMwHaEK&pid=Api"
            alt="barbie"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.-HuSlrtXOoMd_VjkO7uBUgHaFC&pid=Api"
            alt="barbie"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.H11dWis9ZYXmEoBtbihKYgHaEJ&pid=Api"
            alt="barbie"
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

export default Barbie;
