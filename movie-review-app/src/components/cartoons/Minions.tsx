import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Minions = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.w1PonV4jiydE-KGnlN5ZjAHaLH&pid=Api"
              alt="minions"
              className="review-img"
              style={{
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            />
          </div>
          <div className="about-review">
            <h1>Minions: The Rise of Gru 2022 Film</h1>
            <h4>Synopsis</h4>
            <p>
              The film begins with the origin of the Minions, small yellow
              creatures with one purpose – to serve the most despicable master
              they can find. However, their well-intentioned but clumsy nature
              often leads to the accidental demise of their masters throughout
              history, from a T-Rex to a caveman and beyond. As the Minions find
              themselves without a master to serve, three Minions named Kevin,
              Stuart, and Bob embark on a journey to find a new supervillain to
              follow. Their quest leads them to New York City in the 1960s,
              where they discover Villain-Con, a convention for villains.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Minions: The Rise of Gru 2022 Film</h1>
            <h4>Summary</h4>
            <p>
              "Minions" takes audiences on a delightful and hilarious journey
              through the origins of the lovable yellow creatures known as
              Minions. These small, banana-loving beings have existed since the
              dawn of time, always seeking to serve the most despicable master.
              However, their good-hearted but accident-prone nature leads to a
              series of comical misadventures, resulting in the unintentional
              demise of their masters.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/6DxjJzmYsXo?si=yH-kfbMw1Q5tiCNZ"
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
          More Pics From "Minions"
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
            src="https://tse4.mm.bing.net/th?id=OIP.nCt6OoZCA-VNrN2XpWvNlAHaEK&pid=Api"
            alt="minions"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.7oBpbZGndDbD3O9wV3dDfQHaEK&pid=Api"
            alt="minions"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.Vf5XnGM5mEYW63hskY4bJQHaDw&pid=Api"
            alt="minions"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.hgvIiA8-JUyC84i_T6_TVQHaD9&pid=Api"
            alt="minions"
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

export default Minions;
