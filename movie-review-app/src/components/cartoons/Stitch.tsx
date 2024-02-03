import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Stitch = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.DPklSMbpCsz7b8Ws8GObIQHaLH&pid=Api"
              alt="stitch"
              className="review-img"
              style={{
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            />
          </div>
          <div className="about-review">
            <h1>Lilo & Stitch 2002 Film</h1>
            <h4>Synopsis</h4>
            <p>
              Set in the lush and vibrant landscapes of Hawaii, "Lilo & Stitch"
              is a heartwarming animated film that follows the story of a young
              girl named Lilo and a mischievous, genetically engineered alien
              named Stitch. Lilo, who is dealing with the loss of her parents,
              adopts Stitch, thinking he's a dog, to help cope with her
              loneliness. Stitch, designed to be destructive, is one of Dr.
              Jumbaa Jookiba's creations and is engineered to cause chaos.
              However, as Lilo and Stitch form an unlikely bond, the little blue
              alien starts to change his ways. Together, they navigate the
              challenges of family, acceptance, and the importance of 'ohana'
              (family) in Hawaiian culture.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Lilo & Stitch 2002 Film</h1>
            <h4>Summary</h4>
            <p>
              In "Lilo & Stitch," a lonely Hawaiian girl named Lilo adopts an
              unusual pet, whom she believes is a dog. However, the pet is
              actually an alien experiment called Stitch, designed for
              destruction. Despite Stitch's initial destructive tendencies,
              Lilo's love and friendship begin to transform him. As they face
              challenges together, the film explores themes of family,
              acceptance, and the transformative power of genuine connections.
              The heartwarming story showcases the importance of 'ohana,' or
              family, in Hawaiian culture and delivers a powerful message about
              love and belonging.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/9OAC55UWAQs?si=moNnsKq_R-EU8kwB"
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
          More Pics From "Lilo & Stitch"
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
            src="https://tse2.mm.bing.net/th?id=OIP.WSeu-pEfDS61PvGFXOcMsQHaE7&pid=Api"
            alt="stitch"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.isNbqHzfQ3cHatSZwj7HZQHaEK&pid=Api"
            alt="stitch"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.5s4wligscgq2BJwpO2Mm4QHaEd&pid=Api"
            alt="stitch"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.wOGSMm2L0y7w1Hqz7JxEdAHaEa&pid=Api"
            alt="stitch"
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

export default Stitch;
