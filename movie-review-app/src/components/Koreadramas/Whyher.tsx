import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Whyher = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.Oq2SjmwR3jrCOQy6AZlaGwHaKd&pid=Api"
              alt="Whyher"
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
            <h1>Why Her 2022</h1>
            <h4>Synopsis</h4>
            <p>
              “Why Her?” directed by Park Soo-jin. The show premiered on June 3,
              2022, and aired every Friday and Saturday at 22:00 till July 23.
              The series is available for streaming on Viu in selected regions.
              The show follows the story of Oh Soo-jae (played by Seo Hyun-jin),
              a talented lawyer and the youngest partner at TK Law Firm, the
              best law firm in South Korea. Oh Soo-jae is driven by her desire
              to win cases and also her self-righteous principles. She has lived
              her life to achieve success, but she gets involved in an
              unexpected case and she gets demoted to work as an adjunct
              professor at Seojung University law school.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Why Her 2022</h1>
            <h4>Summary</h4>
            <p>
              The youngest partner at one of the nation’s most prestigious law
              offices, Oh Soo Jae has already proven she has what it takes to be
              one of the country’s best lawyers. Driven by her self-righteous
              principles and a never-ending desire to win, Soo Jae is well on
              her way to becoming one of TK Law Firm’s top attorneys. But when
              one of her cases takes an unexpected turn, Soo Jae is forced to
              watch as all of her hard work comes crumbling down around her.
              Demoted at work, Soo Jae is forced to take on the role of adjunct
              professor at a local law school. Determined to win back her
              position within the firm, Soo Jae does her best to settle into her
              new role but the sting of demotion still lingers.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/oYWCCNuu3ss?si=5W2pGsOv_-TKroWI"
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
          More Pics From "Why Her"
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
            src="https://tse2.mm.bing.net/th?id=OIP.Z70ORJCE3WBOu6bcDw7UTAHaE4&pid=Api"
            alt="Whyher"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.fWptW9oCXkpX8pb_gHRkzQHaEc&pid=Api"
            alt="Whyher"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.qs0TESJI8zN8zPb84NPk5QHaEK&pid=Api"
            alt="Whyher"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.Y7UlBav1o_mNahosWzBVYQHaEJ&pid=Api"
            alt="Whyher"
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

export default Whyher;
