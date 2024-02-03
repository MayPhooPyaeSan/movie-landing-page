import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const NottingHill = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.fbH9ugrOB-Gb2E1MrWgolgHaLH&pid=Api"
              alt="NottingHill"
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
            <h1>Notting Hill 1999 Film</h1>
            <h4>Synopsis</h4>
            <p>
              "Notting Hill" (1999) is a romantic comedy film directed by Roger
              Michell. The story revolves around the unlikely romance between a
              London bookseller, William Thacker (Hugh Grant), and a famous
              American actress, Anna Scott (Julia Roberts). William Thacker's
              life takes an unexpected turn when Anna Scott enters his bookstore
              in the Notting Hill neighborhood of London. Despite their
              different backgrounds, the two develop a connection that grows
              into a romantic relationship. The film explores the challenges and
              complexities of a relationship between an ordinary man and a
              celebrity, as well as the impact of fame on personal connections.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Notting Hill 1999 Film</h1>
            <h4>Summary</h4>
            <p>
              "Notting Hill" (1999) follows the enchanting journey of William
              Thacker, a modest London bookstore owner, and Anna Scott, a
              glamorous Hollywood actress. Their worlds collide when Anna steps
              into William's bookstore, setting the stage for an unexpected
              romance. As their relationship blossoms, the couple grapples with
              the challenges of fame, media intrusion, and the stark differences
              between their lives. The film beautifully captures the essence of
              love's ability to transcend societal norms and the hurdles posed
              by external pressures.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/4RI0QvaGoiI?si=jCo0I_zePlQ4qlUf"
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
          More Pics From "Notting Hill"
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
            src="https://tse4.mm.bing.net/th?id=OIP.6qp_b5hpRwn8ZHAp9G40dgHaEy&pid=Api"
            alt="NottingHill"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.zRo4gPo7Z0c32tuC5BMB0wHaEK&pid=Api"
            alt="NottingHill"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.H5kfYA0Mdp9e1cyQpbi3vQHaEK&pid=Api"
            alt="NottingHill"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.5Cqw2dBzdroryZwAW7oPFwHaEd&pid=Api"
            alt="NottingHill"
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

export default NottingHill;
