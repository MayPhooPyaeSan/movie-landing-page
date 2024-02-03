import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const TheReader = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.lSRE4DTWb-p7T6LyWUDx8AHaKe&pid=Api"
              alt="The Reader"
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
            <h1>The Reader 2009 Film</h1>
            <h4>Synopsis</h4>
            <p>
              "The Reader" is a 2008 romantic drama film directed by Stephen
              Daldry, based on the 1995 German novel of the same name by
              Bernhard Schlink. The film is set in post-World War II Germany and
              spans several decades. The story revolves around the complex
              relationship between Michael Berg and Hanna Schmitz. Michael,
              played by David Kross as a young man and Ralph Fiennes as an
              adult, is a teenage boy who becomes romantically involved with
              Hanna, portrayed by Kate Winslet. Hanna, a tram conductor, is
              significantly older than Michael.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>The Reader 2009 Film</h1>
            <h4>Summary</h4>
            <p>
              "The Reader" is a poignant exploration of a complicated romance
              set against the backdrop of post-World War II Germany. Michael
              Berg, a young man, embarks on a passionate affair with Hanna
              Schmitz, an older woman. However, Hanna mysteriously disappears,
              leaving Michael to grapple with the unresolved emotions of their
              relationship.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/UxUzaZv24Zs?si=RgxIrHwYvEVH0JBT"
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
          More Pics From "The Reader"
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
            src="https://tse3.mm.bing.net/th?id=OIP.gtO2psFT4on_X-2qZ4qEHAAAAA&pid=Api"
            alt="The Reader"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.yAtCgUJa_Khm39MBVnxzTQHaE7&pid=Api"
            alt="The Reader"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.HxwbqLdYAjO6np0QHcOlYQHaE8&pid=Api"
            alt="The Reader"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.explicit.bing.net/th?id=OIP.s1K_u5VH8okZkfyjzbXfrAHaE8&pid=Api"
            alt="The Reader"
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

export default TheReader;
