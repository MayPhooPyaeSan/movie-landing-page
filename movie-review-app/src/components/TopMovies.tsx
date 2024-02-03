import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const TopMovies = () => {
  const navigate = useNavigate();

  const handleCardClick = (route: any) => {
    navigate(route);
  };

  return (
    <div id="movies">
      <div className="title">
        <h1>Movies Section</h1>
      </div>
      <div className="card-holder" style={{ margin: "0 0 20px 10px" }}>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/nottingHill")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.TkEE86wuEw4l4bx7G2b8-gHaFk&pid=Api"
            alt="notting-hill "
            style={{
              objectFit: "cover",
              height: "100%",
              width: "100%",
            }}
            className="card-img"
          />
        </Card>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/ToAllTheBrightPlaces")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.0Mn-1zlHpAubUF6NhCCyBgHaD4&pid=Api"
            alt="toallthebrightplaces"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/loverosie")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.HHauf-pz2icpm7sYE4WbkgHaEK&pid=Api"
            alt="loverosie"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>

        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/500Summer")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.9PqhjGD8jt-BkcFhzbj9WwHaEK&pid=Api"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/prideandprejudice")}
        >
          <Card.Img
            variant="top"
            src="https://tse1.explicit.bing.net/th?id=OIP.ZpEu7DL5x3UIAyFRxGxk9wHaEK&pid=Api"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/Cassiopeia")}
        >
          <Card.Img
            variant="top"
            src="https://tse1.mm.bing.net/th?id=OIP.pm99NFaT46ObqFzne_eNygHaEK&pid=Api"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/handmaiden")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.7ZHhl99cVDtRrYIzBGdKEAE5DH&pid=Api"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/thenotebook")}
        >
          <Card.Img
            variant="top"
            src="https://tse2.mm.bing.net/th?id=OIP.goDWtR88YKAm814TjWYUpAHaEK&pid=Api"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/monster")}
        >
          <Card.Img
            variant="top"
            src="https://tse2.mm.bing.net/th?id=OIP.3U2Q-EXQGp0_w2-3sdwhMgHaE8&pid=Api"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/ourseason")}
        >
          <Card.Img
            variant="top"
            src="https://tse2.mm.bing.net/th?id=OIP.1mzyhpE7Ig04MyhfQr-q4gHaFS&pid=Api"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/theReader")}
        >
          <Card.Img
            variant="top"
            src="https://tse1.mm.bing.net/th?id=OIP.s_eiUDODgAeTG5dgKolzFAHaEK&pid=Api"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/holidate")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.ewKrFE2W22LuH8Hf-GfopwHaEK&pid=Api"
            alt="holidate"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>
      </div>
    </div>
  );
};

export default TopMovies;
