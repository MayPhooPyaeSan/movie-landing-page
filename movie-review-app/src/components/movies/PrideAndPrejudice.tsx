import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const PrideAndPrejudice = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.jhzIrJ8o166vaOAzX5C7mwHaK_&pid=Api"
              alt="Pride & Prejudice "
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
            <h1>Pride & Prejudice 2005 Film</h1>
            <h4>Synopsis</h4>
            <p>
              "Pride and Prejudice" is a classic romantic novel written by Jane
              Austen. The story is set in early 19th-century England and follows
              the life of Elizabeth Bennet, the second of five daughters of the
              Bennet family. The novel explores themes of love, class, and
              societal expectations. The Bennet family faces pressure to marry
              off their daughters, especially as the estate is entailed and will
              pass to a male heir. Mrs. Bennet is particularly eager to see her
              daughters well-married. The arrival of the wealthy and eligible
              Mr. Charles Bingley in the neighborhood sparks excitement,
              especially when he shows interest in the eldest Bennet daughter,
              Jane.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Pride & Prejudice 2005 Film</h1>
            <h4>Summary</h4>
            <p>
              The story revolves around the spirited Elizabeth Bennet, one of
              five daughters in a middle-class family. The Bennet family's
              primary concern is to find suitable husbands for their daughters,
              especially since the estate is entailed and will pass to a male
              heir. When the wealthy and amiable Mr. Bingley arrives in their
              neighborhood, he takes a liking to Jane Bennet, the eldest
              daughter. However, his close friend, the proud Mr. Darcy,
              initially dismisses Elizabeth and her family due to their lower
              social status.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Ur_DIHs92NM?si=XH-sp05Ylrx6WIMy"
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
          More Pics From "Pride & Prejudice"
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
            src="https://tse3.mm.bing.net/th?id=OIP.KTRr2R2vUb9kNvjkMRXlfQHaE3&pid=Api"
            alt="Pride & Prejudice "
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.yQlaa1-xefbD8d0oZFAFJQHaEm&pid=Api"
            alt="Pride & Prejudice "
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.explicit.bing.net/th?id=OIP.xYgcAh1tevIZ18fyo_jw_wHaEy&pid=Api"
            alt="Pride & Prejudice "
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.mAoR64RO-PUcRiUasbhYlwHaEx&pid=Api"
            alt="Pride & Prejudice "
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

export default PrideAndPrejudice;
