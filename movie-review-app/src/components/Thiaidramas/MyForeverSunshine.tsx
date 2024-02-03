import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const MyForeverSunshine = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.eJ8f3x3EzlkcJ4yTAc7D-wHaJk&pid=Api"
              alt="MyForeverSunshine"
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
            <h1>My Forever Sunshine (2020)</h1>
            <h4>Synopsis</h4>
            <p>
              The story revolves around two main characters, Muey and Thien.
              Muey is a young woman who has a traumatic past involving her
              mother's death and her father's remarriage to a woman named
              Piengpen. Due to the events surrounding her mother's death, Muey
              becomes mute and struggles with communication. Meanwhile, Thien is
              a wealthy heir to a company but faces challenges in his romantic
              life. As their paths cross, they find themselves in a fake
              marriage due to unforeseen circumstances.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>My Forever Sunshine (2020)</h1>
            <h4>Summary</h4>
            <p>
              Muey, a young woman with a traumatic past that rendered her mute,
              and Thien, a wealthy heir facing his own romantic challenges, find
              themselves entangled in a fake marriage. Muey's struggle with
              communication and Thien's complex romantic life create a unique
              dynamic between the two. As they navigate the complexities of
              their unconventional marriage, secrets from the past come to
              light, leading to personal growth and a deeper understanding of
              each other.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/wriL5CFSh_E?si=qHAUmOMB1Yjn5ipI"
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
          More Pics From "My Forever Sunshine"
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
            src="https://tse1.mm.bing.net/th?id=OIP.oq_PsF826J0tRjccuJC8twHaEK&pid=Api"
            alt="MyForeverSunshine"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.jECgFljErWLxTRgGvI3aYgHaEK&pid=Api"
            alt="MyForeverSunshine"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.vzR1DyfSGyHBr2awGX2kMgHaEf&pid=Api"
            alt="MyForeverSunshine"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.o9p7yBFHWUFdsH0QOAQ7CgHaE7&pid=Api"
            alt="MyForeverSunshine"
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

export default MyForeverSunshine;
