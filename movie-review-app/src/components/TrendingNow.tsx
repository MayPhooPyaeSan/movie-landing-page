import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Best = () => {
  const navigate = useNavigate();

  const handleCardClick = (route: any) => {
    navigate(route);
  };

  return (
    <div id="trendingNow">
      <div className="title">
        <h1>Trending Right Now</h1>
      </div>
      <div className="card-holder" style={{ margin: "0 0 20px 10px" }}>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/meetmeafterschool")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.4FlFMO2tWC_sZcXYxn4KJgHaFL&pid=Api"
            alt="MeetMeAfterSchool"
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
          onClick={() => handleCardClick("/stangerthings")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.-XEP0FKs-t7MOVSY4LzRZQHaEK&pid=Api"
            alt="StangerThings"
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
          onClick={() => handleCardClick("/dickinson")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.MeOyjgCINpMJ_Yqpvo8kSgHaEK&pid=Api"
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
          onClick={() => handleCardClick("/exchange")}
        >
          <Card.Img
            variant="top"
            src="https://tse2.mm.bing.net/th?id=OIP.yhOQTK4EuioT7Xr7mjX7cAHaEK&pid=Api"
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
          onClick={() => handleCardClick("/moving")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.Pf7L83M-bokDDtAONzxL9QHaEo&pid=Api"
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
          onClick={() => handleCardClick("/fallenleaf")}
        >
          <Card.Img
            variant="top"
            src="https://tse2.mm.bing.net/th?id=OIP.l5-zDIq0hWfCEsakk-3q5AHaEK&pid=Api"
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
          onClick={() => handleCardClick("/mebeforeyou")}
        >
          <Card.Img
            variant="top"
            src="https://tse2.mm.bing.net/th?id=OIP.TJzNHUzLwyElDP2zftoDPQHaEK&pid=Api"
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
          onClick={() => handleCardClick("/snowdrop")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.mPCd2YIOXhJZcjmVdrkfMgAAAA&pid=Api"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>
      </div>
    </div>
  );
};

export default Best;
