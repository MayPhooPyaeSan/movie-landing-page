import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const WhyWomenLove = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.ZIvT_gI7AiP4gA88W722yAHaNK&pid=Api"
              alt="Why Women Love"
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
            <h1>Why Women Love (2022)</h1>
            <h4>Synopsis</h4>
            <p>
              Why Women Love is a Chinese drama series that premiered in 2022.
              The story follows Zhao Jiang Yue, a no-nonsense tech firm head who
              is known for her strict approach to business and employees. The
              firm releases a dating app that promises to match users with a
              partner in just three months. However, Zhao Jiang Yue is clueless
              when it comes to affairs of the heart. When Gu Jia Xin, the heir
              to the business group that owns the company, joins as Zhao Jiang
              Yue’s temporary assistant, things start to get uncomfortable at
              work. Gu Jia Xin is a successful pro racing driver and is wildly
              popular with his female fans. He would rather compete on the
              motorcycle track than spend time in the boardroom. At first, the
              duo gets off on the wrong foot, but when Zhao Jiang Yue enlists Gu
              Jia Xin’s help to try to capture Xu Ning Yuan’s heart, he suddenly
              starts to realize that he is developing feelings for her, and that
              the feeling just might be mutual.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Why Women Love (2022)</h1>
            <h4>Summary</h4>
            <p>
              Zhao Jiang Yue is the somewhat tyrannical head of a tech firm. She
              is known for her no-nonsense approach to business - and her
              employees. The firm releases a dating app that promises to match
              users with a partner in the space of just three months. She is
              also somewhat clueless in affairs of the heart herself. But things
              start to get uncomfortable at work when the family who own the
              company make arrangements for Gu Jia Xin, the heir to the business
              group that owns the company, to join as Zhao Jiang Yue's temporary
              assistant.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/xEyJJkXkzvc?si=tD26PXFWG_H1rBqS"
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
          More Pics From "Why Women Love"
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
            src="https://tse2.mm.bing.net/th?id=OIP.8vOG5tEWPAFG1Zg3PE-PqwHaEK&pid=Api"
            alt="Why Women Love"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.O6INPYeWyPbE78XzjKQOAwHaEJ&pid=Api"
            alt="Why Women Love"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.SQBwtWbJTlr6__xe2_l7aAHaEK&pid=Api"
            alt="Why Women Love"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.mJqTchZvJy6knCJ3ZPj6HwHaEI&pid=Api"
            alt="Why Women Love"
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

export default WhyWomenLove;
