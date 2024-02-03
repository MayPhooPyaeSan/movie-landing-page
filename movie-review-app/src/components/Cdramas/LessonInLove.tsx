import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const LessonInLove = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://i.mydramalist.com/ryBpy_4c.jpg?v=1"
              alt="Lesson in Love"
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
            <h1>Lesson in Love (2022)</h1>
            <h4>Synopsis</h4>
            <p>
              Lesson in Love, a Chinese television drama series that aired in
              2022-2023. The drama stars Wei-Ning Hsu, Edward Chen, and Hsueh
              Shih-ling. The story follows a Chinese teacher in a private school
              who seeks revenge against the head of the parent association, who
              destroyed her family. She approaches the woman’s high school son,
              but they fall into an irresistible forbidden love.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Lesson in Love (2022)</h1>
            <h4>Summary</h4>
            <p>
              A new female teacher named Meng Jun becomes the target of a
              trouble-making gifted student’s bullying. But their confrontations
              soon develop a romantic undertone and they begin to have a secret
              affair that plays fast and loose with their feelings. The drama is
              part thriller, mystery, and melodrama. The main leads have
              sizzling chemistry and both are sympathetic characters. At first,
              the male lead is beyond insufferable, but if you give it a couple
              of episodes, you’ll see a big transformation in his behavior.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/43AljZBqBR4?si=9dEYnQ9Pn_ofiVZx"
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
          More Pics From "Lesson in Love"
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
            src="https://tse3.mm.bing.net/th?id=OIP.wwFbnzGEmj8MKIAgNgm6VgHaEK&pid=Api"
            alt="Lesson in Love"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.x521DhoIw9VwWHq7h_vsTwHaE8&pid=Api"
            alt="Lesson in Love"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.QbfR66_eKbJMpuFhABWl4QHaE8&pid=Api"
            alt="Lesson in Love"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.CDNaXixMp5NoSUzkhFRntQHaEK&pid=Api"
            alt="Lesson in Love"
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

export default LessonInLove;
