import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Sowayree = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.-z1eugOgssL8_IYp4cmQUQHaJM&pid=Api"
              alt="The Notebook"
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
            <h1>So Wayree (2020)</h1>
            <h4>Synopsis</h4>
            <p>
              "So Wayree" follows the story of twins, Pimsuwan and Pimnipa.
              Pimsuwan, who was separated from her family at birth, grows up in
              a well-off household, unaware of her twin sister's existence. On
              the other hand, Pimnipa faces a more challenging life and has a
              strained relationship with her stepmother. Fate brings the two
              sisters together, leading to a tale of love, secrets, and family
              bonds. As they navigate their intertwined destinies, they must
              confront the truths of their past and find a way to reconcile with
              each other.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>So Wayree (2020)</h1>
            <h4>Summary</h4>
            <p>
              The drama unfolds as the lives of twin sisters, Pimsuwan and
              Pimnipa, take unexpected turns. Pimsuwan, growing up in a
              privileged environment, remains unaware of her twin sister's
              existence, while Pimnipa faces challenges in a less fortunate
              setting. The narrative weaves together their separate journeys,
              exploring themes of love, familial bonds, and the impact of hidden
              truths. As the sisters cross paths and confront the secrets of
              their past, they must navigate the complexities of their
              relationships and work towards reconciliation. The series offers a
              compelling mix of drama, romance, and the exploration of identity.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/rHDJRM2gj8I?si=Wy8zeRz94-RcxiqL"
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
          More Pics From "So Wayree"
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
            src="https://tse2.mm.bing.net/th?id=OIP.AaeEBs6_gdKUe3jK5X_w1QHaEV&pid=Api"
            alt="The Notebook"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.9AjUoUwa-_Pf6AbUprZILgHaEK&pid=Api"
            alt="The Notebook"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.vF7VUh9R-ePsIQNbNgsb7QHaEL&pid=Api"
            alt="The Notebook"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.R994bdbCS55OhzxE_EdLcQHaEK&pid=Api"
            alt="The Notebook"
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

export default Sowayree;
