import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const ToSamdalri = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.M2SpHw45tVvGK9TXU9-YuAHaKm&pid=Api"
              alt="ToSamdalri"
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
            <h1>Welcome to Samdal-ri (2023)</h1>
            <h4>Synopsis</h4>
            <p>
              After losing his mother—who worked as a haenyeo (female diver who
              harvests sea life)—at a young age due to a mistaken weather
              report, Cho Yong Pil makes up his mind to become a weather
              forecaster and protect the elders of his hometown. However, his
              passion and refusal to let misinformation slide earns him a
              reputation at work as a stubborn troublemaker who isn’t afraid to
              argue with his boss.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Welcome to Samdal-ri (2023)</h1>
            <h4>Summary</h4>
            <p>
              Cho Sam Dal grew up with Cho Yong Pil. Unlike Cho Yong Pil,
              content to remain in his hometown of Samdalri, Cho Sam Dal makes
              it her mission to get out of their small town and move to Seoul.
              After years of toiling away as an assistant in the fashion
              photography industry, Cho Sam Dal—who changes her name to Cho Eun
              Hye in Seoul—finally succeeds and makes it to the top. However,
              when everything she’s worked so hard to build comes crashing down
              in the blink of an eye, she returns to Samdalri, where people
              still know her as Sam Dal and not Eun Hye.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/aY8QmExZrlY?si=4BWKgyC2fHKv3hIS"
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
          More Pics From "Welcome to Samdal-ri"
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
            src="https://tse3.mm.bing.net/th?id=OIP.MZ4Mi8RSMd_y4lOHymRgdwGQD6&pid=Api"
            alt="ToSamdalri"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.lPf0JqcE0VquDlHtAOuBngHaER&pid=Api"
            alt="ToSamdalri"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.TenuizJkzb1Gjy7C3_fzQQHaFK&pid=Api"
            alt="ToSamdalri"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.oAidAYEOtpQpCeW0rDKerAHaE8&pid=Api"
            alt="ToSamdalri"
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

export default ToSamdalri;
