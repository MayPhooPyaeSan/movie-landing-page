import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Playbook = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.mcbJYy8fuMLAQg3S3jK3CQHaKf&pid=Api"
              alt="Playbook"
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
            <h1>Prison Playbook 2017</h1>
            <h4>Synopsis</h4>
            <p>
              "Prison Playbook," also known as "Wise Prison Life," is a South
              Korean television series that blends comedy and drama in a unique
              narrative set within the confines of a prison. The story revolves
              around Kim Je-hyuk, a professional baseball player who ends up in
              prison after being convicted of a crime. As he adjusts to life
              behind bars, he encounters a diverse group of inmates, each with
              their own stories, struggles, and relationships.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Prison Playbook 2017</h1>
            <h4>Summary</h4>
            <p>
              "Prison Playbook" follows the journey of Kim Je-hyuk, played by
              Park Hae-soo, as he navigates the unfamiliar and often humorous
              aspects of prison life. Initially an outsider, Je-hyuk becomes
              entwined with the lives of fellow inmates, prison staff, and
              visitors. The series introduces various characters, each with
              their own quirks and backgrounds, contributing to the vibrant and
              interconnected community within the prison.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/vo9z0olabwM?si=pqEKvSl2gM0-7eDu"
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
          More Pics From "Prison Playbook"
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
            src="https://tse4.mm.bing.net/th?id=OIP.qVKJVC2z-0DTNuQ7WHtQhQHaE7&pid=Api"
            alt="Playbook"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.F26oTbmOJyT5wENFXdxOKAHaE7&pid=Api"
            alt="Playbook"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.92sm9Gip_G5o9F88hVJEggHaE8&pid=Api"
            alt="Playbook"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.IZPsEwsm9QC6ZdkbzzuHegHaE8&pid=Api"
            alt="Playbook"
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

export default Playbook;
