import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Elemental = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.JxGihEGRCpF7NGqY-XhYZAHaK-&pid=Api"
              alt="Elemental"
              className="review-img"
              style={{
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            />
          </div>
          <div className="about-review">
            <h1>Elemental 2023 Film</h1>
            <h4>Synopsis</h4>
            <p>
              At one time, the elements on the periodic table only included
              earth, wind, fire, and water before scientists started to look
              into it further and separate those into the 118 that exist today.
              Imagine a film based on those original elements animated
              anthropomorphically to tell a story that has a deep social
              message—that’s… fundamentally… what Elemental is about. Ember
              Lumen and Wade Ripple are the central characters, the fire and
              water. Ember wants to run her father’s convenience store and Wade
              is a water element health inspector. Notice the apt names—Ember
              and Wade—as well as their careers, which make more sense when the
              story reveals that the convenience store is named the Fireplace.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Elemental 2023 Film</h1>
            <h4>Summary</h4>
            <p>
              Elemental is a new animated rom-com drama film by Disney Pixar
              that does set out with the same innocent touch one would expect of
              it but ends up saying much more. As is clear from the title
              itself, the story takes place in a world of natural elements and
              is centered around a fire person named Ember who goes through a
              series of self-realizations and life lessons. Despite being warm
              and colorful in its visuals and seeming like a kids’ film at first
              glance, Elemental does talk about real-world issues and struggles
              that many youngsters grow up around in this modern day.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/hXzcyx9V0xw?si=mrLQKy2IAiVdUcJ-"
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
          More Pics From "Elemental"
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
            src="https://tse2.mm.bing.net/th?id=OIP.2JTGjJg-mv7jVAdEU_24gwHaD_&pid=Api"
            alt="Elemental"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.-i8sySKhhighBs6URZMO1AHaEK&pid=Api"
            alt="Elemental"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.ciSoDD2H8eRUhdmU96jnUQHaDt&pid=Api"
            alt="Elemental"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.1punlKB579YOCwW2MQJLVAHaEK&pid=Api"
            alt="Elemental"
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

export default Elemental;
