import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const FindingNemo = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.OLfeCr55C4NRjivwx2TxxgHaLH&pid=Api"
              alt="finding-nemo"
              className="review-img"
              style={{
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            />
          </div>
          <div className="about-review">
            <h1>Find Nemo 2003 Film</h1>
            <h4>Synopsis</h4>
            <p>
              Two clownfish, Marlin (Albert Brooks) and his wife Coral
              (Elizabeth Perkins), admire the view from their new home within a
              sea anemone overlooking the drop off of a coral reef. Below them,
              their clutch of eggs lies hidden in a small hole. Excited to be
              first-time parents, they discuss names, Coral expressing her
              fondness for "Nemo." They flirt playfully with each other until
              Coral's attention is distracted by the appearance of a barracuda.
              Ignoring Marlin's order to hide, Coral moves to protect her eggs
              and the barracuda lunges. Marlin rushes in but the barracuda
              knocks him out with a flick of its tail, sending him back into the
              anemone. When he comes to that night, he discovers that Coral and
              the eggs are gone but manages to find a single surviving egg with
              a scratch on its right side. Vowing to protect it, he names the
              codling Nemo.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Find Nemo 2003 Film</h1>
            <h4>Summary</h4>
            <p>
              A clown fish named Marlin lives in the Great Barrier Reef and
              loses his son, Nemo, after he ventures into the open sea, despite
              his father's constant warnings about many of the ocean's dangers.
              Nemo is abducted by a boat and netted up and sent to a dentist's
              office in Sydney. While Marlin ventures off to try to retrieve
              Nemo, Marlin meets a fish named Dory, a blue tang suffering from
              short-term memory loss. The companions travel a great distance,
              encountering various dangerous sea creatures such as sharks,
              anglerfish and jellyfish, in order to rescue Nemo from the
              dentist's office, which is situated by Sydney Harbour. While the
              two are searching the ocean far and wide, Nemo and the other sea
              animals in the dentist's fish tank plot a way to return to the sea
              to live their lives free again.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/SPHfeNgogVs?si=eCOkkrtL-qSc8EZI"
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
          More Pics From "Finding Nemo"
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
            src="https://tse3.mm.bing.net/th?id=OIP.f6MedWG9Dk8Lp0k9oB1_ewHaEI&pid=Api"
            alt="findinnemo"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.D35MjMnkDrDs8-BxnYJZUgHaEK&pid=Api"
            alt="findinnemo"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.E3xdj6hfmHYfSDoQDzhy4gHaEK&pid=Api"
            alt="findinnemo"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.Rd8QXpzOqGnlIn16nUWMzwHaEK&pid=Api"
            alt="findinnemo"
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

export default FindingNemo;
