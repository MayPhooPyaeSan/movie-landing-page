import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const MeetMeAfterSchool = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.XgD09rpYuyhsNqzUTJmu2wHaLH&pid=Api"
              alt="MeetMeAfterSchool"
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
            <h1>Meet Me After School 2018</h1>
            <h4>Synopsis</h4>
            <p>
              This is a love story between Akira Kuroiwa, a 15-year-old boy who
              knows nothing of love, and Hijiri Suenaga, his new 25-year-old
              homeroom teacher. One fated summer, Akira begins to realize he has
              feelings for Hijiri, but Hijiri has a long distance fiancee. The
              story follows the pair over the course of several years.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Meet Me After School 2018</h1>
            <h4>Summary</h4>
            <p>
              Hijiri (Kasumi Arimura) dreamed of becoming a teacher. She then
              begins work as a middle school teacher in a remote village. Her
              fiance Katsutaro works for a big company. They have dated since
              Hijiri was in college. Now, they must maintain a long distance
              relationship, but Hijiri becomes attracted to one of her students.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/3wv7Y4KizDE?si=FJfQZg0Of7H268oj"
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
          More Pics From "Meet Me After School"
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
            src="https://tse2.mm.bing.net/th?id=OIP.L7BVsq6WNbe5BoLiYhJrbwHaEK&pid=Api"
            alt="MeetMeAfterSchool"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.NqOuJXiW1jMH4APo_7jt7wHaE8&pid=Api"
            alt="MeetMeAfterSchool"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.wW2jtcCMon9g2FA1AgoXXwHaE6&pid=Api"
            alt="MeetMeAfterSchool"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.YzU_97di-_wp2kEBB-PomAHaE2&pid=Api"
            alt="MeetMeAfterSchool"
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

export default MeetMeAfterSchool;
