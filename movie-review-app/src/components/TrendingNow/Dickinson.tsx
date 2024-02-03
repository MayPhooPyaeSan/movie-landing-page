import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Dickinson = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.5KuCz_jXXngUkRfR5sQpYwHaLH&pid=Api"
              alt="Dickinson"
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
            <h1>Dickinson</h1>
            <h4>Synopsis</h4>
            <p>
              "Dickinson" follows the life of Emily Dickinson (played by Hailee
              Steinfeld), one of America's most celebrated poets, but with a
              contemporary and unconventional approach. The series is set in the
              19th century, capturing the societal constraints and expectations
              of the time, but it infuses modern language, music, and
              sensibilities.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Dickinson</h1>
            <h4>Summary</h4>
            <p>
              "Dickinson" is a bold and imaginative take on the life of Emily
              Dickinson, blending historical accuracy with modern storytelling
              techniques. The series captures the essence of Dickinson's poetry
              while presenting her as a complex and relatable character. Viewers
              are taken on a journey through Emily's struggles, triumphs, and
              her unapologetic pursuit of artistic expression.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/_Yr25gzgSSY?si=y5vGuG3LaCEoR0IZ"
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
          More Pics From "Dickinson"
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
            src="https://tse1.mm.bing.net/th?id=OIP.NmPoG8EmrrBdAZlr8xrLTAHaEK&pid=Api"
            alt="Dickinson"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.KyCMcoyGkCFnecRkQpemPAHaEK&pid=Api"
            alt="Dickinson"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.explicit.bing.net/th?id=OIP.hvXQqhK1CLc2DDYl_YtglgHaEK&pid=Api"
            alt="Dickinson"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.laXcTRxXLG9_mahIxCdJ6wHaEP&pid=Api"
            alt="Dickinson"
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

export default Dickinson;
