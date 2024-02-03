import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const BeginAgain = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.WwshjUVW26c1ANlaaxu3BwHaLW&pid=Api"
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
            <h1>Begin Again 2020</h1>
            <h4>Synopsis</h4>
            <p>
              This drama centers around a commanding female CEO and a
              compassionate doctor who, for practical reasons, transform their
              pretend relationship into a genuine love story. After saying their
              vows, they embark on a new journey of discovery. Meet Lu Fang
              Ning, the capable general manager of Luning Group, a prominent
              home furniture corporation. With her abundant talents, beauty, and
              wealth, she approaches her thirties under familial pressure,
              feeling the need for a husband and children. Enter surgeon Ling
              Rui, a man graced with both good looks and a kind heart, making
              him an ideal candidate in Lu Fang Ning's eyes.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Begin Again 2020</h1>
            <h4>Summary</h4>
            <p>
              It tells the story of a domineering female CEO and a warm doctor
              who turn a fake relationship into reality due to practical
              reasons. Having exchanged their 'I do's', they start on a new
              chapter of their lives as they learn to fall in love. Lu Fangning
              is the general manager of Luning Group, a large corporation in the
              business of home furniture. Lu Fangning is a woman who has it all
              - talented, beautiful and rich. Nearing her thirties, Lu Fangning
              succumbs to family pressures and decides that she urgently needs a
              husband with whom she will have a child. Coincidentally, surgeon
              Ling Rui appears in front of her.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/93ZJIfuNf_4?si=2ByDVqob-c0jkIbj"
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
          More Pics From "Begin Again"
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
            src="https://tse2.mm.bing.net/th?id=OIP.uIs_00Afi4IpXGl5BbkN4gHaE8&pid=Api"
            alt="Find Yourself"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.explicit.bing.net/th?id=OIP.6GbVue16PMZsDNpL0QHHeAHaE7&pid=Api"
            alt="Find Yourself"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.oz5ZIoauKh6No0NxH5GxCAHaEq&pid=Api"
            alt="Find Yourself"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.lC0JcLqgC9INzKyDvgNs7gHaE6&pid=Api"
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

export default BeginAgain;
