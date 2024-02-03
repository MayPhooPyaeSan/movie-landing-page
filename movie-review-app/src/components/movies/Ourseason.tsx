import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Ourseason = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.rhImlRlqFFzLbcX_3WmveQHaKl&pid=Api"
              alt="ourseason"
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
            <h1>Our Season 2023 Film</h1>
            <h4>Synopsis</h4>
            <p>
              “Our Season” is a 2023 South Korean fantasy drama film directed by
              Yook Sang-hyo. The movie stars Kim Hae-sook, Shin Min-a, Kang
              Ki-young, and Hwang Bo-ra. The story is about a miraculous moment
              shared by a mother and daughter who are visited by the mother from
              heaven. Bok-ja, who has received three vacations on Earth, spends
              three days with her daughter, Jin-joo, accompanied by a guide from
              heaven. During this time, Bok-ja takes care of her daughter
              Jin-joo, and feels the presence of her mother Bok-ja everywhere,
              even though she cannot be seen. The two women have a new
              opportunity to talk and share fantastic moments from the past and
              present.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Our Season 2023 Film</h1>
            <h4>Summary</h4>
            <p>
              Park Bok Ja is granted a special vacation after her death, which
              allows her to go see her daughter, Bang Jin Joo, a university
              professor living abroad. Unlike her expectation, Bok Ja finds Jin
              Joo living in her old house running a local diner and becomes
              frustrated with questions that she is unable to ask. After
              spending time alongside Jin Joo, Bok Ja realizes that her daughter
              is struggling with the unresolved feelings about her, and tries to
              find a way to show her sincere feelings that she had never shared
              before.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/fBF6WD82J4E?si=ma48YLh8O2zeamZy"
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
          More Pics From "Our Season"
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
            src="https://tse1.mm.bing.net/th?id=OIP.Pd6J8zNGAcfTxT-xexafOwHaE8&pid=Api"
            alt="ourseason"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.tN3IyldIAtbsNkKu938AJgHaE8&pid=Api"
            alt="ourseason"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.F6H-ljHO_VzG-jsom2TgiwHaE7&pid=Api"
            alt="ourseason"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.Jmm2yUBsDaYzoH5hhBnuZwHaE8&pid=Api"
            alt="ourseason"
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

export default Ourseason;
