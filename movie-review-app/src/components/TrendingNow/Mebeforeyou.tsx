import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Mebeforeyou = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.qBAk1qNEV4fAQGwOlDa1ZgHaLH&pid=Api"
              alt="Mebeforeyou"
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
            <h1>Me Before You 2016 Film</h1>
            <h4>Synopsis</h4>
            <p>
              "Me Before You" is a romantic drama film released in 2016,
              directed by Thea Sharrock. The story revolves around the
              relationship between Louisa "Lou" Clark, a quirky and optimistic
              young woman, and Will Traynor, a wealthy and successful banker who
              becomes paralyzed in a motorcycle accident.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Me Before You 2016 Film</h1>
            <h4>Summary</h4>
            <p>
              "Me Before You" is a heartfelt and emotionally charged film that
              explores themes of love, disability, and the importance of living
              life to the fullest. The chemistry between the lead characters,
              portrayed by Emilia Clarke and Sam Claflin, brings to life the
              adaptation of Jojo Moyes' bestselling novel. The film invites
              viewers to contemplate the complexities of life-altering decisions
              and the impact of genuine human connections.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/T0MmkG_nG1U?si=aAqfsSBrVcC_RN3z"
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
          More Pics From "Me Before You"
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
            src="https://tse1.explicit.bing.net/th?id=OIP.qkvXFTbPNFt7FIqdHlRIeAHaE7&pid=Api"
            alt="Mebeforeyou"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.ovFzHETyO1UrVUMFDve3jgHaE7&pid=Api"
            alt="Mebeforeyou"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.qdkZ89w6rSXIWvmh78x-ewHaEu&pid=Api"
            alt="Mebeforeyou"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.76_5-CCV15ff-V0dP3qydwHaEU&pid=Api"
            alt="Mebeforeyou"
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

export default Mebeforeyou;
