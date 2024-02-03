import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const BlueSmurfs = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.EbRsTjE1Vw9qcJ4u8CENRQHaLH&pid=Api"
              alt="smurfs"
              className="review-img"
              style={{
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            />
          </div>
          <div className="about-review">
            <h1>The Smurfs 2011 Film</h1>
            <h4>Synopsis</h4>
            <p>
              In "The Smurfs," the tiny blue creatures find themselves
              transported from their magical village to the bustling city of New
              York City through a magical portal. Trying to find their way back
              home, the Smurfs must outsmart the evil wizard Gargamel, who also
              ends up in New York. The Smurfs befriend a human couple, Patrick
              and Grace Winslow, who help them navigate the challenges of the
              big city while eluding Gargamel's attempts to capture them.
              Throughout the film, the Smurfs' optimistic and communal spirit
              adds humor and heart to their fish-out-of-water adventure. The
              movie combines live-action with animation, creating a
              family-friendly and entertaining experience.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>The Smurfs 2011 Film</h1>
            <h4>Summary</h4>
            <p>
              In "The Smurfs" (2011), the beloved blue creatures find themselves
              in a fish-out-of-water scenario when they are accidentally
              transported from their magical village to the bustling metropolis
              of New York City. Pursued by the evil wizard Gargamel, the Smurfs
              must navigate the challenges of the human world and enlist the
              help of a couple, Patrick and Grace Winslow, to find a way back
              home. As they embark on their adventure, the Smurfs bring their
              unique charm and camaraderie to the big city, creating a
              delightful blend of animation and live-action that entertains
              audiences of all ages.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/xQeKlKcLBOk?si=JJ0K2uPpFAj7n8ox"
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
          More Pics From "The Smurfs"
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
            src="https://tse3.mm.bing.net/th?id=OIP.24RGHP9-GRTi5q504y_C1gHaEA&pid=Api"
            alt="smurfs"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.eWCO-tVDtmyabUnY3BZbpwHaEK&pid=Api"
            alt="smurfs"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.rcWZ-ocz3UJf1MeCe8rWYwHaEo&pid=Api"
            alt="smurfs"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.MC6vmItY18L2t5efknwikgHaEK&pid=Api"
            alt="smurfs"
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

export default BlueSmurfs;
