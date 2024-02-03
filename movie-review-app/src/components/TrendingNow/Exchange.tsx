import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Exchange = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.gvdUYsz-R5MYIKVyhya6IQHaKm&pid=Api"
              alt="EXchange"
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
            <h1>Exchange (TV program)</h1>
            <h4>Synopsis</h4>
            <p>
              Bringing together ten single men and women to live together in a
              sharehouse for three weeks, the show provides opportunities for
              them to make friends, go on dates, and find love. What sets
              EXchange apart, though, is that each participant is also living
              under the same roof as their ex. Furthermore, the ex-couples must
              act like strangers and do their best to not let the others catch
              on to their past relationships. While there’s an abundance of
              cute, heart-fluttering moments as the housemates open up their
              hearts to those they’re interested in, having to watch their ex
              flirt and get closer to others brings about a complex mix of
              emotions for the participants. As the course of the show goes on,
              they must sort out the feelings and decide whether to pursue new
              love or get back together with their ex.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Exchange (TV program)</h1>
            <h4>Summary</h4>
            <p>
              EXchange is back with its second season, and the participants’
              stories are more intriguing than ever. Four pairs of ex-couples
              must live under one roof and decide whether to reunite with their
              ex or find new love. Exes living under one roof brings plenty of
              tension and emotional moments. Will they be able to overcome the
              past struggles and reunite, or will they move on and find new
              love?.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/_uwpwTdzk90?si=lmWxLm5ai-gtz-Pes"
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
          More Pics From "Exchange"
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
            src="https://tse2.mm.bing.net/th?id=OIP.WdcAxptu-4fYp7TN-yBDTAHaES&pid=Api"
            alt="EXchange"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.iE1RjSSj5AcgPihg_EandAHaEK&pid=Api"
            alt="EXchange"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.FedFQg1-hQS30uLfn3dyLQHaE8&pid=Api"
            alt="EXchange"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.izeNCcVzDBARL4hyc1oXhQHaEI&pid=Api"
            alt="EXchange"
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

export default Exchange;
