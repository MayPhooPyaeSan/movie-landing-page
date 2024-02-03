import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Zootopia = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.explicit.bing.net/th?id=OIP.7GP1-HqRQwLGYSc4HHw_cgHaKj&pid=Api"
              alt="Zootopia"
              className="review-img"
              style={{
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            />
          </div>
          <div className="about-review">
            <h1>Zootopia 2016 Film</h1>
            <h4>Synopsis</h4>
            <p>
              In "Zootopia" (2016), a bustling metropolis is divided into
              distinct neighborhoods that cater to different animal species.
              Judy Hopps, an optimistic and ambitious bunny, fulfills her dream
              of becoming the first rabbit police officer in Zootopia. Teaming
              up with a slick con artist fox named Nick Wilde, Judy discovers a
              conspiracy that threatens the harmony between predator and prey in
              the city. As they unravel the mystery, Judy and Nick navigate
              through various environments, uncovering the complexities of
              prejudice, stereotypes, and the pursuit of justice. "Zootopia" is
              a heartwarming and thought-provoking animated film that explores
              themes of diversity, tolerance, and friendship.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Zootopia 2016 Film</h1>
            <h4>Summary</h4>
            <p>
              In "Zootopia" (2016), Judy Hopps, a determined bunny, becomes the
              first rabbit police officer in the city of Zootopia. Despite
              facing prejudice and skepticism, Judy teams up with a sly fox,
              Nick Wilde, to solve a mysterious case involving missing mammals.
              As they delve into the investigation, they uncover a conspiracy
              that challenges the harmony between predator and prey. Throughout
              their adventure, Judy and Nick learn valuable lessons about
              acceptance, breaking down stereotypes, and the importance of
              understanding one another. The film delivers a powerful message
              about overcoming biases and working together for a more inclusive
              and harmonious society.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/jWM0ct-OLsM?si=M9GBdkrgborG2gwO"
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
          More Pics From "Zootopia"
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
            src="https://tse1.mm.bing.net/th?id=OIP.vNYf-arxseLaGhoEBnTOLgHaEK&pid=Api"
            alt="Zootopia"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.nUixmD5WBBNIw2B-XlMeIwHaEK&pid=Api"
            alt="Zootopia"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.wZ7VgpXyPBR1lbdPzW9DeAAAAA&pid=Api"
            alt="Zootopia"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.ulo-0eDCM35T7xeRdFHXnwHaEK&pid=Api"
            alt="Zootopia"
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

export default Zootopia;
