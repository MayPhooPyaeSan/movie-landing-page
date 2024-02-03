import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const StrangerThings = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.GSc61zP3cFDKc4AOYa2E1gHaLH&pid=Api"
              alt="StrangerThings"
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
            <h1>Stranger Things</h1>
            <h4>Synopsis</h4>
            <p>
              "Stranger Things" is set in the 1980s in the fictional town of
              Hawkins, Indiana. The story begins with the disappearance of a
              young boy named Will Byers. As his friends and family search for
              him, they encounter a mysterious girl with supernatural abilities
              who goes by the name Eleven. The group discovers the existence of
              a parallel dimension called the Upside Down, which is linked to
              secret experiments conducted by the Hawkins National Laboratory.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Stranger Things</h1>
            <h4>Summary</h4>
            <p>
              "Stranger Things" is a nostalgic homage to 1980s pop culture,
              drawing inspiration from classic science fiction, horror, and
              adventure films of that era. The series combines elements of
              suspense, supernatural phenomena, and heartwarming friendships. It
              explores themes of government experimentation, the bond between
              friends, and the resilience of individuals against extraordinary
              threats.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/mVsJXiI60a0?si=lmo0TYZ0maXyR6Lp"
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
          More Pics From "Stranger Things"
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
            src="https://tse1.mm.bing.net/th?id=OIP.JzzoiEDUFje2NURmJzcASgHaDt&pid=Api"
            alt="StrangerThings"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.3xxXOfb39mIx9n46cRBbrgHaEK&pid=Api"
            alt="StrangerThings"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.0PrdbojyHL3S39Pixu9jygHaFA&pid=Api"
            alt="StrangerThings"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.090tbx2YA0QFVoJ6hje20wHaDt&pid=Api"
            alt="StrangerThings"
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

export default StrangerThings;
