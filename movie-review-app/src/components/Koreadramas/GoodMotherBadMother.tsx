import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const GoodMotherBadMother = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.UD-w-axKLfLYZozWfQLYOQHaKm&pid=Api"
              alt="GoodMotherBadMother"
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
            <h1>The Good Bad Mother 2023</h1>
            <h4>Synopsis</h4>
            <p>
              Young Soon is a single mother and pig farmer who raised her son
              Kang Ho alone. Despite her love for him, her strict parenting
              caused Kang Ho to view her as a bad mother. As an adult, Kang Ho
              became a cold-hearted prosecutor and kept his distance from his
              mother. However, an unexpected accident caused him to return to
              his hometown and start over with Young Soon. Kang Ho's childhood
              friend Mi Joo, known for her warm heart and strong sense of
              justice, also reconnected with him after his accident, leading to
              a transformative experience for her.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>The Good Bad Mother 2023</h1>
            <h4>Summary</h4>
            <p>
              Ra Mi Ran portrays Jin Youngsoon, a poor mother who has worked
              tirelessly to safeguard her son, whom she raised alone while
              managing a pig farm. Lee Do Hyun played Choi Kang Ho, the son of a
              prosecutor who ended up being a child in an unforeseen event. Kang
              Ho, who had no option but to let his mother's ambitions take over
              his life, evolved into a cold-blooded prosecutor who holds his own
              secrets. After an unanticipated incident, he becomes a child and
              has a fresh start with a terrible mother after walking away from
              her and striving for success.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/CzVi_hIZ3mc?si=I2P6Y3OLnZU4fbyW"
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
          More Pics From "The Good Bad Mother"
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
            src="https://tse2.mm.bing.net/th?id=OIP.N6kLN29YBCWa0TO-3c2f3QHaE5&pid=Api"
            alt="GoodMotherBadMother"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.1n9BUPXr6o1OlVIDOfyFfQHaE7&pid=Api"
            alt="GoodMotherBadMother"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.JpUlcTViwzqCYAlr7nYnuAHaEt&pid=Api"
            alt="GoodMotherBadMother"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.ZDUqA_8vVhQio3ktv8nXIQHaDn&pid=Api"
            alt="GoodMotherBadMother"
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

export default GoodMotherBadMother;
