import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const RomanceBook = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.explicit.bing.net/th?id=OIP.BNoZZN3ofd0Hnv_iZ7ZZ7wHaKl&pid=Api"
              alt="RomanceBook"
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
            <h1>Romance Is a Bonus Book 2019</h1>
            <h4>Synopsis</h4>
            <p>
              "Romance Is a Bonus Book" is a South Korean romantic comedy
              television series that revolves around the lives of individuals
              working in the competitive world of publishing. The story follows
              Kang Dan-i, a talented and experienced copywriter who faces
              challenges after a career hiatus. As she seeks to re-enter the
              workforce, Dan-i navigates professional and personal
              relationships, leading to unexpected developments.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Romance Is a Bonus Book 2019</h1>
            <h4>Summary</h4>
            <p>
              "Romance Is a Bonus Book" unfolds as a heartwarming and humorous
              tale set against the backdrop of the publishing world. Kang
              Dan-i's journey to re-establish herself in her career and Cha
              Eun-ho's unwavering support form the foundation of the series. The
              story not only highlights the professional challenges faced by
              individuals in the workplace but also delves into the complexities
              of relationships and personal growth. As the characters navigate
              the intricacies of the publishing industry, the series
              incorporates elements of romance, comedy, and drama.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/zjeXZEtEI2A?si=GHlKqe65r5y6GgyT"
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
          More Pics From "Romance Is a Bonus Book"
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
            src="https://tse1.mm.bing.net/th?id=OIP.Z5MVXa7aZWcVN5qsLm6vSgHaD4&pid=Api"
            alt="RomanceBook"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.tr9PsTg-wf79yaQQwrFFjgHaD_&pid=Api"
            alt="RomanceBook"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.GykRg-1KkCLeogX3WUpAdwHaD4&pid=Api"
            alt="RomanceBook"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.2GdZ3v5CjzwV52AXkGxplAHaE8&pid=Api"
            alt="RomanceBook"
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

export default RomanceBook;
