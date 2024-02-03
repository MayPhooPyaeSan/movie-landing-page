import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const YouAreMySpring = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.explicit.bing.net/th?id=OIP.xRkayjfzrbHllAkpyhrHJwHaJ4&pid=Api"
              alt="YouAreMySpring"
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
            <h1>You Are My Spring 2021</h1>
            <h4>Synopsis</h4>
            <p>
              "You Are My Spring" is a South Korean television series that
              intricately weaves together romance, mystery, and drama. The story
              revolves around a group of people living in a luxurious apartment
              complex named "The Most" and explores the theme of finding
              emotional healing and a fresh start.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>You Are My Spring 2021</h1>
            <h4>Summary</h4>
            <p>
              "You Are My Spring" unfolds as a captivating South Korean drama
              set in the upscale apartment complex, "The Most." Kang Da-Jung, a
              hotel concierge portrayed by Seo Hyun-Jin, and Joo Young-Do, a
              psychiatrist played by Kim Dong-Wook, find their lives intertwined
              amidst the challenges they face. The narrative takes an unexpected
              twist when a murder occurs in the building, adding an element of
              mystery.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/UVPtpoF27vI?si=JSaf8O2bHNhHLRh5"
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
          More Pics From "You Are My Spring"
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
            src="https://tse1.mm.bing.net/th?id=OIP._4yvDr8OMxy-13LAkJZg-QHaEK&pid=Api"
            alt="YouAreMySpring"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.ijFFEOkuurl8qSZGRgjgSgHaFB&pid=Api"
            alt="YouAreMySpring"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.O6NvlbdDpIVYtQ_WxTXk3gHaE3&pid=Api"
            alt="YouAreMySpring"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.xiaVE-uDqslieUtT5NEoMwHaFB&pid=Api"
            alt="YouAreMySpring"
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

export default YouAreMySpring;
