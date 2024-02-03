import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Pooh = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.xoOpkhBadK8uM4pXuW5K9QHaLH&pid=Api"
              alt="pooh"
              className="review-img"
              style={{
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            />
          </div>
          <div className="about-review">
            <h1>Winnie the Pooh 2011 Film</h1>
            <h4>Synopsis</h4>
            <p>
              The movie begins with the residents of the Hundred Acre Wood
              discovering that Eeyore's tail has gone missing. Believing it to
              be a calamity of great proportions, Winnie the Pooh and his
              friends set out on a quest to find a replacement tail for their
              gloomy friend. Along the way, they become entangled in a series of
              misadventures. As Pooh and his friends embark on their journey,
              they inadvertently find themselves caught up in a mistaken pursuit
              of a creature called the "Backson," whom they believe has
              kidnapped Christopher Robin. In their attempts to rescue their
              friend, the inhabitants of the Hundred Acre Wood stumble into
              various humorous and heartwarming escapades.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Winnie the Pooh 2011 Film</h1>
            <h4>Summary</h4>
            <p>
              Winnie the Pooh" (2011) is a heartwarming and whimsical animated
              film that follows the adventures of the beloved characters from
              A.A. Milne's classic stories. The film begins with the residents
              of the Hundred Acre Wood, including Winnie the Pooh, Piglet,
              Tigger, and Eeyore, discovering that Eeyore has lost his tail. In
              an effort to help their friend, the inhabitants of the Hundred
              Acre Wood embark on a quest to find a new tail for Eeyore.
              However, their simple mission takes a comical turn when they
              become entangled in a series of misadventures, including a
              mistaken pursuit of the mythical creature called the "Backson.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/QbFz--GCkOM?si=VHOeTNSdd4gIxsnS"
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
          More Pics From "Winnie the Pooh"
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
            src="https://tse3.mm.bing.net/th?id=OIP.D-zi2wfW7psEQCUgBH-OsgHaEo&pid=Api"
            alt="pooh"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.lmi0E-lCyVB4OOKQCyCxCAHaEo&pid=Api"
            alt="pooh"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.nbiidX3381qKJWviZO61kgHaEo&pid=Api"
            alt="pooh"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.xUeFy1LwYYirTFknvRKI_gHaEo&pid=Api"
            alt="pooh"
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

export default Pooh;
