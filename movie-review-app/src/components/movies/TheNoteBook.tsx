import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const TheNoteBook = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.CJDOUwnRxSSSX0Wxbp5mzAHaKi&pid=Api"
              alt="The Notebook"
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
            <h1>The Notebook 2004 Film</h1>
            <h4>Synopsis</h4>
            <p>
              The film unfolds as an elderly man named Duke (played by James
              Garner) reads a love story from a notebook to an elderly woman
              named Allie (played by Gena Rowlands) who is suffering from
              Alzheimer's disease in a nursing home. The main narrative is a
              flashback to the 1940s. Noah Calhoun (played by Ryan Gosling) and
              Allie Hamilton (played by Rachel McAdams) are two young people who
              fall deeply in love during a summer in Seabrook Island, South
              Carolina. However, their love faces challenges due to societal
              expectations, class differences, and Allie's disapproving parents.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>The Notebook 2004 Film</h1>
            <h4>Summary</h4>
            <p>
              An elderly man reads to a woman with dementia the story of two
              young lovers whose romance is threatened by the difference in
              their respective social classes. With almost religious devotion,
              Duke, a kind octogenarian inmate of a peaceful nursing home, reads
              daily a captivating story from the worn-out pages of his
              leather-bound notebook to a fellow female patient. To keep her
              company, Duke recounts the fascinating love affair between
              impecunious but poetic country boy Noah and Allie, an affluent
              city girl. And little by little, Duke unfolds a Southern,
              lumber-scented summer romance beneath the tall trees of late 1930s
              North Carolina.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/BjJcYdEOI0k?si=Y7k5MdyOtbp-bq-t"
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
          More Pics From "The Notebook"
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
            src="https://tse2.mm.bing.net/th?id=OIP.qWJiiKVtiMZJST5d1A6sMgHaE7&pid=Api"
            alt="The Notebook"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.PVKMW6o1y3d--d4BBZOanwHaEK&pid=Api"
            alt="The Notebook"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.k0X2IT2T_tRJkZLL6_M6PwHaHa&pid=Api"
            alt="The Notebook"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.gkyHIrU79CN-knxq1UdTYgHaE8&pid=Api"
            alt="The Notebook"
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

export default TheNoteBook;
