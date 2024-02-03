import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Frozen = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.X9pVQPZs8CQuLc3XjQFDFgHaLH&pid=Api"
              alt="frozen"
              className="review-img"
              style={{
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            />
          </div>
          <div className="about-review">
            <h1>Frozen 2013 Film</h1>
            <h4>Synopsis</h4>
            <p>
              In the animated film "Frozen" (2013), two royal sisters, Elsa and
              Anna, reside in the kingdom of Arendelle. Elsa possesses magical
              ice powers, which she struggles to control. During her coronation
              as queen, Elsa accidentally reveals her abilities, causing her to
              flee to the mountains to live in isolation. Anna, determined to
              bring her sister back, embarks on a perilous journey accompanied
              by an ice vendor named Kristoff, his loyal reindeer Sven, and a
              comical snowman named Olaf, brought to life by Elsa's magic. The
              group faces challenges and encounters mystical elements as they
              seek to reverse the eternal winter Elsa unintentionally unleashed
              on Arendelle.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Frozen 2013 Film</h1>
            <h4>Summary</h4>
            <p>
              In "Frozen" (2013), the kingdom of Arendelle is plunged into
              eternal winter when Queen Elsa accidentally reveals her magical
              ice powers during her coronation. Elsa isolates herself in a
              mountain palace, and her sister Anna sets out on a journey to
              bring her back. Accompanied by an ice vendor named Kristoff, his
              reindeer Sven, and a living snowman named Olaf, Anna faces
              challenges and discovers the true nature of Elsa's powers.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/FLzfXQSPBOg?si=0Cjxhqki1JYl_6Xl"
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
          More Pics From "Frozen"
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
            src="https://tse1.mm.bing.net/th?id=OIP.I-HXT9kOHHmswQrYJTWm_gHaDs&pid=Api"
            alt="frozen"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.6lUsMPEYfL2pkaCkxbXLpwHaEO&pid=Api"
            alt="frozen"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.y65tCw0uYks2gxRFDr1GtwHaE0&pid=Api"
            alt="frozen"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.Rc6Rmm0nUAzU4s5totTPYwHaDT&pid=Api"
            alt="frozen"
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

export default Frozen;
