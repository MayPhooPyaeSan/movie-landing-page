import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const Hotel = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.explicit.bing.net/th?id=OIP.v6DNAM07tZXsGQozxzO22gHaKj&pid=Api"
              alt="hotel-transylvania"
              className="review-img"
              style={{
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            />
          </div>
          <div className="about-review">
            <h1>Hotel Transylvania 2012 Film</h1>
            <h4>Synopsis</h4>
            <p>
              "Hotel Transylvania" is an animated comedy film that revolves
              around Count Dracula, who operates a lavish resort for monsters
              away from the human world. The hotel serves as a safe haven for
              creatures like Frankenstein, the Mummy, the Invisible Man, and
              many others. Dracula, overprotective of his daughter Mavis, plans
              a special 118th birthday celebration for her at the hotel. "Hotel
              Transylvania" is an animated comedy film that revolves around
              Count Dracula, who operates a lavish resort for monsters away from
              the human world. The hotel serves as a safe haven for creatures
              like Frankenstein, the Mummy, the Invisible Man, and many others.
              Dracula, overprotective of his daughter Mavis, plans a special
              118th birthday celebration for her at the hotel. However, things
              take an unexpected turn when a human named Jonathan stumbles upon
              the hotel. Dracula must now find a way to deal with the human
              guest while trying to keep the other monsters from discovering
              Jonathan's true identity.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Hotel Transylvania 2012 Film</h1>
            <h4>Summary</h4>
            <p>
              In "Hotel Transylvania," Count Dracula runs a luxurious resort
              where monsters can relax and be themselves. Dracula's
              overprotective nature intensifies when a human named Jonathan
              accidentally discovers the hotel. Dracula must keep Jonathan's
              human identity a secret while dealing with the comedic chaos that
              ensues. Amidst the humor, the film conveys a message of acceptance
              and friendship, emphasizing that appearances can be deceiving.
              "Hotel Transylvania" offers an entertaining and heartwarming story
              suitable for family audiences.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/q4RK3jY7AVk?si=8jV17FaQ2ocqsCEx"
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
          More Pics From "Hotel Transylvania"
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
            src="https://tse3.mm.bing.net/th?id=OIP.gHeGhJJTdlg1yaFPi3_vvwHaEK&pid=Api"
            alt="hotel-transylvania"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.1dPfVRaLsDsEs045p6aaxwHaEA&pid=Api"
            alt="hotel-transylvania"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.iNwuJZN39tnwvzO33ZpVZwHaEA&pid=Api"
            alt="hotel-transylvania"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.VY2xr7xNe2W7vPpm7G5ABgHaD9&pid=Api"
            alt="hotel-transylvania"
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

export default Hotel;
