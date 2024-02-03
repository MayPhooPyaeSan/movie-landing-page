import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Devilsister = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.eJ8f3x3EzlkcJ4yTAc7D-wHaJk&pid=Api"
              alt="DevilSister"
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
            <h1>Devil Sister 2022</h1>
            <h4>Synopsis</h4>
            <p>
              Irin (Min Pechaya) is the director of Bannasorn Publishing House
              and is known as “The Devil” for her fierce and fearless attitude.
              However, it’s all an act to build up her younger sister, Inn, by
              contrast. Her young vet and neighbor Namcha has loved her since
              they were students, but Irin broke things off without any
              explanation. Despite Irin’s catty behavior, Namcha’s love
              persists, and he makes it his mission to prove it to her. Love
              should come easy for the two, but family, work, and even friends
              all seem primed to tear them apart.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Devil Sister 2022</h1>
            <h4>Summary</h4>
            <p>
              Irin is said to be hot-tempered and fearless — "The Devil". It's
              all an act, though; she puts up a mean front to build up her
              younger sister, Inn, by contrast. However, her young vet and
              neighbour Namcha couldn't care less. No matter how catty she
              behaves, his love persists. He's loved her ever since they were
              students and has no plans of changing his heart. In fact, they
              used to date until Irin broke things off without any explanation.
              Namcha has never forgotten his first love, but Irin doesn't
              believe his feelings are unchanged; Namcha makes it his mission to
              prove it to her. Love should come easy for the two, but family,
              work, and even friends all seem primed to tear them apart.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/99UwV7c9MtQ?si=jPXJVWLjO_w_cqlA"
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
          More Pics From "Devil Sister"
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
            src="https://tse1.explicit.bing.net/th?id=OIP.SLhkUHPqFE6Ow896xexRuQHaEK&pid=Api"
            alt="DevilSister"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.o9Az8XoRVWIrZ1IKNflxlAHaE7&pid=Api"
            alt="DevilSister"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.shrD2n-D5vtpIu6IEm_tXQHaE8&pid=Api"
            alt="DevilSister"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.OzNIH5rI1B1vbKnoDI-RwgHaEK&pid=Api"
            alt="DevilSister"
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

export default Devilsister;
