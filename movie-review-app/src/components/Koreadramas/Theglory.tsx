import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Theglory = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.IxXbCWUPkLTZIvkNDMWO8QHaK-&pid=Api"
              alt="Theglory"
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
            <h1>The Glory 2022</h1>
            <h4>Synopsis</h4>
            <p>
              A high school student dreams of becoming an architect. However,
              she had to drop out of school after suffering from brutal school
              violence. Years later, the perpetrator gets married and has a kid.
              Once the kid is in elementary school, the former victim becomes
              her homeroom teacher and starts her thorough revenge towards the
              perpetrators and bystanders of her bullying days.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>The Glory 2022</h1>
            <h4>Summary</h4>
            <p>
              In her high-school days, Moon Dong Eun dreamed of becoming an
              architect. However, after suffering a brutally violent attack from
              her bullies, she is forced to drop out of school. Years later, one
              of the bullies gets married and has a child who attends the
              elementary school where Moon Dong Eun now teaches. After years of
              plotting, Moon Don Eun begins her plan of revenge against her
              former bullies--and the students who stood by and let the attack
              happen.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/tqVVrTvrI8U?si=fWbX3h0vbE-35EXx"
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
          More Pics From "The Glory"
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
            src="https://tse2.mm.bing.net/th?id=OIP.N182pWVhFV7I2tNyqNW9vQAAAA&pid=Api"
            alt="Theglory"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.fI9esT_bypGmDvwsLaqrtwHaE8&pid=Api"
            alt="Theglory"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.kjg2DBr86iiJdvwfLKDJygHaE8&pid=Api"
            alt="Theglory"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.5p7iMhvOJT9bLbT7gJ90sQHaE7&pid=Api"
            alt="Theglory"
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

export default Theglory;
