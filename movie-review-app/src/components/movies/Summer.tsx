import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Summer = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.RdXQBvPOevHMB7UWfH4PDgHaKj&pid=Api"
              alt="500 Days of Summer"
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
            <h1>500 Days of Summer 2009 Film</h1>
            <h4>Synopsis</h4>
            <p>
              "500 Days of Summer" (2009) is a unique romantic drama that
              explores the nonlinear journey of a young man named Tom Hansen and
              his tumultuous relationship with Summer Finn. The film is
              presented in a non-chronological order, jumping back and forth
              through the 500 days of their interaction. "500 Days of Summer" is
              known for its fresh take on the romantic comedy genre, providing a
              realistic portrayal of the challenges and uncertainties that often
              accompany modern relationships. The film's non-linear structure
              and the authentic performances of its leads, Joseph Gordon-Levitt
              and Zooey Deschanel, contribute to its critical acclaim and
              popularity among audiences.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>500 Days of Summer 2009 Film</h1>
            <h4>Summary</h4>
            <p>
              The film revolves around Tom Hansen, a greeting card writer with a
              romanticized view of love, who becomes infatuated with his
              co-worker, Summer Finn. Although Tom believes in destiny and
              soulmates, Summer is upfront about her commitment issues and
              reluctance to embrace conventional romantic notions. Despite their
              differences, Tom and Summer develop a close friendship, and Tom
              hopes that it will eventually blossom into a romantic
              relationship. The story unfolds over 500 days, presented in a
              non-chronological order, showcasing the various stages of their
              connection.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/PsD0NpFSADM?si=227zTIiilvSoWU4R"
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
          More Pics From "500 Days of Summer"
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
            src="https://tse3.mm.bing.net/th?id=OIP.VbhqpvmjuTQiHlwTuEzqVAHaE8&pid=Api"
            alt="500 Days of Summer"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.O5rQt_UPj87Yaa-Jy7Iz2QHaE8&pid=Api"
            alt="500 Days of Summer"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.ECzFEr7hSU3licyLjH-21QHaE7&pid=Api"
            alt="500 Days of Summer"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.N3d_2elm1T0Vdp9BxSlJigHaE8&pid=Api"
            alt="500 Days of Summer"
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

export default Summer;
