import React from "react";
import Layout from "../Layout";
import Footer from "../Footer";

const WALLE = () => {
  return (
    <div>
      <div>
        <Layout />
        <div className="review-container">
          <div className="review-img">
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.-x69YSBt0FIdqXaCXGM0bQHaKj&pid=Api"
              alt="WALL·E"
              className="review-img"
              style={{
                borderRadius: "4px",
                boxShadow:
                  "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
              }}
            />
          </div>
          <div className="about-review">
            <h1>WALL·E 2008 Film</h1>
            <h4>Synopsis</h4>
            <p>
              Approximately seven hundred years in the future, the Earth is
              over-run with garbage and devoid of plant and animal life, the
              consequence of years of environmental degradation and thoughtless
              consumerism. The surviving humans are living on the spaceship
              Axiom after vacating Earth centuries earlier. Axiom is operated by
              a large corporation called Buy N Large, whose BnL logo appears
              even on the artificial sun visible from the ship's main concourse.
              The original plan was for humans to live in outer space for 5
              years while cleaning robots ("WALL-Es" invented by Professor
              Simon) prepared Earth for recolonization. However, after seven
              hundred years, only one WALL-E (voice: Ben Burtt) remains.
            </p>
          </div>
        </div>
        <div className="review-container sec-container">
          <div className="about-review ">
            <h1>Elemental 2023 Film</h1>
            <h4>Summary</h4>
            <p>
              In a distant, but not so unrealistic, future where mankind has
              abandoned earth because it has become covered with trash from
              products sold by the powerful multi-national Buy N Large
              corporation, WALL-E, a garbage collecting robot has been left to
              clean up the mess. Mesmerized with trinkets of Earth's history and
              show tunes, WALL-E is alone on Earth except for a sprightly pet
              cockroach. One day, EVE, a sleek (and dangerous) reconnaissance
              robot, is sent to Earth to find proof that life is once again
              sustainable. WALL-E falls in love with EVE. WALL-E rescues EVE
              from a dust storm and shows her a living plant he found amongst
              the rubble. Consistent with her "directive", EVE takes the plant
              and automatically enters a deactivated state except for a blinking
              green beacon.
            </p>
          </div>
          <div className="review-img" style={{ marginBottom: "2rem" }}>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/CZ1CATNbXg0?si=NFZ9_3pOb56PSxG7"
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
          More Pics From "WALL·E"
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
            src="https://tse4.mm.bing.net/th?id=OIP.JQx350sH2i2oA5w50JNMbwHaEK&pid=Api"
            alt="WALL·E"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.IQ9vG0z94Gi8FG3yv6xsUgHaEK&pid=Api"
            alt="WALL·E"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.1ynCTKQJbGlArEQLMFp6DgHaEH&pid=Api"
            alt="WALL·E"
            style={{
              width: "300px",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.TdRiDeVmgCRfzWfcHY9IDAHaEI&pid=Api"
            alt="WALL·E"
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

export default WALLE;
