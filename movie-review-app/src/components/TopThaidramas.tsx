import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const TopThaidramas = () => {
  const navigate = useNavigate();

  const handleCardClick = (route: any) => {
    navigate(route);
  };

  return (
    <div id="thaiDramas">
      <div className="title">
        <h1>Thai Dramas Section</h1>
      </div>
      <div className="card-holder" style={{ margin: "0 0 20px 10px" }}>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/sowayree")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.BbDS-bgkmG3lVjobE_xaNwHaEK&pid=Api"
            alt="sowayree"
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
          onClick={() => handleCardClick("/myambulance")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.7bHgFGpslIelgYLbf7gBiQHaER&pid=Api"
            alt="myambulance"
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
          onClick={() => handleCardClick("/myhusbandinlaws")}
        >
          <Card.Img
            variant="top"
            src="https://tse2.mm.bing.net/th?id=OIP.Ot38m3Qmo8ecFQuuT5s9JwHaEK&pid=Api"
            alt="therationallife"
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
          onClick={() => handleCardClick("/Krachao")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.uCqgfDpvXyHoqpYl3GTVMAHaEK&pid=Api"
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
          onClick={() => handleCardClick("/myforeversunshine")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.UBmFMzs4-hTa2FnZ1n2W0QHaEK&pid=Api"
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
          onClick={() => handleCardClick("/devilsister")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.rpZCim4WyZq9NVscr9dhggHaEK&pid=Api"
            alt="sheandherperfecthusband"
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
          onClick={() => handleCardClick("/GameSanaeha")}
        >
          <Card.Img
            variant="top"
            src="https://tse2.mm.bing.net/th?id=OIP.P89cD-rWF4qhsBu8FsYUCAHaD6&pid=Api"
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
          onClick={() => handleCardClick("/sunset")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.pAfjX29HM1f6-WoaIvrt9AHaEK&pid=Api"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>
      </div>
    </div>
  );
};

export default TopThaidramas;
