import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const SomethingInTheRain = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.rlM0LUMX0PYcb_PQlaGnkQHaNK&pid=Api"
              alt="SomethingInTheRain"
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
            <h1>Something in the Rain 2018</h1>
            <h4>Synopsis</h4>
            <p>
              "Something in the Rain," also known as "Pretty Noona Who Buys Me
              Food," is a South Korean television series that revolves around
              the complexities of love and societal expectations. The story
              follows Yoon Jin-ah (played by Son Ye-jin), a woman in her 30s who
              works as a supervisor at a coffee company. Her life takes an
              unexpected turn when her best friend's younger brother, Seo
              Joon-hee (played by Jung Hae-in), returns from overseas and the
              two find themselves drawn to each other.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Something in the Rain 2018</h1>
            <h4>Summary</h4>
            <p>
              "Something in the Rain" is a heartfelt romantic drama that delves
              into the intricacies of love, friendship, and the societal
              pressures that often complicate relationships. The main
              characters, Jin-ah and Joon-hee, navigate the ups and downs of
              their connection, challenging traditional norms and facing the
              judgment of those around them. The series beautifully captures the
              emotional journey of two individuals discovering love in
              unexpected places while dealing with the complexities of modern
              relationships.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/R6trkoH7lZg?si=tpOgwMJ_j7aDZlX9"
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
          More Pics From "Something In The Rain"
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
            src="https://tse3.mm.bing.net/th?id=OIP.B6EENWXnbFViHuEW71hqnwHaEW&pid=Api"
            alt="SomethingInTheRain"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.explicit.bing.net/th?id=OIP.AarMo3evwxvLBaSQJNlhJAHaE8&pid=Api"
            alt="SomethingInTheRain"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.pQ3iCBIsxnyJlIWyOhkXkwHaE7&pid=Api"
            alt="SomethingInTheRain"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.tTq1p39JVtLVni4wpE_8DwHaE8&pid=Api"
            alt="SomethingInTheRain"
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

export default SomethingInTheRain;
