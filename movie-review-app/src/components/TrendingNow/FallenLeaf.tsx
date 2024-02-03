import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const FallenLeaf = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.W9gdGh-FV8ABJrjPJ5wK8wAAAA&pid=Api"
              alt="FallenLeaf"
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
            <h1>The Fallen Leaf (2019)</h1>
            <h4>Synopsis</h4>
            <p>
              Nira is like a young leaf, which is always there beside the
              flowers but will never be one of them. Her name, Nira, derives
              from Niranam which means the anonymous one. The story of a boy who
              is a little girl at heart, he is shattered from not being accepted
              by anyone but his mother who wholeheartedly loves him. His father
              is not a very good man, as he loathes him and mistreats his
              mother. Nira wants his father to be like his uncle-in-law
              Chatchavee, the only one aside from his mother who is a warm man
              and cares for him and understands him.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>The Fallen Leaf (2019)</h1>
            <h4>Summary</h4>
            <p>
              Nira, deeply crushed and traumatised by this rejection, decides
              with his mother's support to do something that changes the rest of
              his life. He undergoes a sex reassignment surgery which completely
              transforms him into a gorgeous woman. Unfortunately, her mother
              dies during the operation. Devastated, she runs away from the
              hospital. The one who finds her and helps her is doctor Benjang,
              who takes her home. She starts living as his sister. One day, Nira
              coincidentally meets Chatchavee. Due to her beauty, he starts to
              fall for her and also Nira's father.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/hKbJ31sssZ4?si=gJmR_WVar3ptY5w4"
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
          More Pics From "The Fallen Leaf"
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
            src="https://tse3.mm.bing.net/th?id=OIP.EzxPuO_d7a3vrja5khSaFQHaEo&pid=Api"
            alt="FallenLeaf"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.qcA3HSGcIdhkTXESnRcLkwHaEK&pid=Api"
            alt="FallenLeaf"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.i-Lwt42n0kASK8anZyWi8wHaEK&pid=Api"
            alt="FallenLeaf"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.YyaVM92zimcpt4gKzuDO4gHaEP&pid=Api"
            alt="FallenLeaf"
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

export default FallenLeaf;
