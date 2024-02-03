import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const ToAllTheBrightPlaces = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.GY4hDwveTYcFRABGbb2z-gHaK_&pid=Api"
              alt="ToAllTheBrightPlaces"
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
            <h1>All the Bright Places 2020 Film</h1>
            <h4>Synopsis</h4>
            <p>
              "All the Bright Places" (2020) is a romantic drama film based on
              the novel of the same name by Jennifer Niven. The story revolves
              around Violet Markey, a high school student dealing with the
              emotional aftermath of her sister's death. Theodore Finch, another
              student known for his eccentric behavior, crosses paths with
              Violet on the ledge of the school's bell tower, where they form an
              unexpected connection."All the Bright Places" explores the healing
              power of human connection and the significance of reaching out to
              others in times of need.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>All the Bright Places 2020 Film</h1>
            <h4>Summary</h4>
            <p>
              "All the Bright Places" (2020) is a heartfelt and emotional
              romantic drama that follows the story of Violet Markey and
              Theodore Finch. Violet is grappling with the emotional aftermath
              of her sister's death, while Finch, known for his eccentric
              behavior, meets Violet on the ledge of the school's bell tower.
              Their unexpected connection leads to a journey of exploration and
              self-discovery as they work on a school project together.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/zfQXKVCudec?si=dHBQMnq5BJbCDPHP"
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
          More Pics From "All the Bright Places"
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
            src="https://tse2.mm.bing.net/th?id=OIP.-CFBOHRYXqkJfcDiceDCzAHaE7&pid=Api"
            alt="ToAllTheBrightPlaces"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.vnSgLhGGL6_fWSv_X8bv3AHaEK&pid=Api"
            alt="ToAllTheBrightPlaces"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.tLCPrchHsH-qMHDwT0ewfAAAAA&pid=Api"
            alt="ToAllTheBrightPlaces"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.L_KNagnN3sDQo6lkHAkpygHaEK&pid=Api"
            alt="ToAllTheBrightPlaces"
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

export default ToAllTheBrightPlaces;
