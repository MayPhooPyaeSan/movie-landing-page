import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Findyourself = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.JrafIka6EMh3A_h6Mp29zgHaKY&pid=Api"
              alt="Find Yourself"
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
            <h1>Find Yourself 2020</h1>
            <h4>Synopsis</h4>
            <p>
              A love story between an accomplished career woman and a younger
              man. He Fan Xing's company is at risk of being acquired while her
              relationship with Yuan Song faces societal pressures due to their
              age difference. The consecutive blows in her work and love life
              push her to an emotional quagmire and it is during this time that
              Ye Lu Ming enters her life. Being older in age, he is mature,
              stable and knowledgeable. He becomes He Fan Xing's life coach and
              the source of conflict between the couple. For He Fan Xing, it's
              not merely a matter of choosing the man that she loves but
              considering the contradictions of adopting the traditional mindset
              on marriage.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Find Yourself 2020</h1>
            <h4>Summary</h4>
            <p>
              The drama follows the story of He Fan Xing, an accomplished career
              woman, and Yuan Song, a younger man. He Fan Xing’s company is at
              risk of being acquired while her relationship with Yuan Song faces
              societal pressures due to their age difference. The consecutive
              blows in her work and love life push her to an emotional quagmire
              and it is during this time that Ye Lu Ming enters her life. Being
              older in age, he is mature, stable and knowledgeable. He becomes
              He Fan Xing’s life coach and the source of conflict between the
              couple.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/323Er03eKMw?si=FLtJI4Hb_3sDDY9G"
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
          More Pics From "Find Yourself"
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
            src="https://tse1.mm.bing.net/th?id=OIP.AkkVBgGgBUkTc2cWLRsj4QHaEu&pid=Api"
            alt="Find Yourself"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.explicit.bing.net/th?id=OIP.UzBIsHGZTktEJePtLeYdlAHaE8&pid=Api"
            alt="Find Yourself"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.4A3PISZ9WbfIgczb2hSmigHaEK&pid=Api"
            alt="Find Yourself"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.DzI3d7OvgtO0dxd-fVwgwwHaEK&pid=Api"
            alt="Find Yourself"
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

export default Findyourself;
