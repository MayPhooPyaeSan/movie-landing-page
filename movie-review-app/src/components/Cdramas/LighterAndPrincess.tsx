import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const LighterAndPrincess = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.9RwhcxrnW-X_3uFL_iT4UAHaKk&pid=Api"
              alt="lighterandprincess"
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
            <h1>Lighter & Princess 2022</h1>
            <h4>Synopsis</h4>
            <p>
              Lighter & Princess is a Chinese drama series that premiered in
              2022. The story revolves around Li Xun, a computer programming
              genius who is not interested in participating in regular college
              activities, and Zhu Yun, a friendly and innocent young lady who
              has just begun her college life. They meet each other in college
              and start cherishing their time together. However, when a
              life-altering incident threatens to separate them, their affection
              is about to undergo the ultimate test!
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Lighter & Princess 2022</h1>
            <h4>Summary</h4>
            <p>
              Li Xun is a cold, calculating computer programming ace who entered
              college as the top scorer of the national college entrance exams,
              earning him the admiration of all his classmates. However, he is
              not interested in participating in your regular college activities
              with his fellow classmates and has his own plans for his future.
              This mindset brings him into conflict with many of his batch mates
              as he often refuses to cooperate with them. Zhu Yun, meanwhile, is
              a friendly and innocent young lady who has just begun her college
              life after doing everything her parents and society expected of
              her to the best of her ability.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/sr4TxUqSbDY?si=N2C-jgKgrPRp0wPA"
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
          More Pics From "Lighter & Princess"
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
            src="https://tse3.mm.bing.net/th?id=OIP.HOnO3KmEP9fiMpqUrfzM0QHaEK&pid=Api"
            alt="lighterandprincess"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.LoaCYTRW0E3KtdwI1x1g4gHaEK&pid=Api"
            alt="lighterandprincess"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.G_PlQ9zl9dfRC0lGltDFrQHaD_&pid=Api"
            alt="lighterandprincess"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.LniRsqA_3OutUhDAmw8lIwHaEK&pid=Api"
            alt="lighterandprincess"
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

export default LighterAndPrincess;
