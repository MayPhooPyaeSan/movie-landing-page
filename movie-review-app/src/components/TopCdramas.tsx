import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const TopCdramas = () => {
  const navigate = useNavigate();

  const handleCardClick = (route: any) => {
    navigate(route);
  };

  return (
    <div id="chineseDramas">
      <div className="title">
        <h1>Chinese Dramas Section</h1>
      </div>
      <div className="card-holder" style={{ margin: "0 0 20px 10px" }}>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/lighterAndPrincess")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.1sk4vEO4BhnQluAe2xAzYwHaE7&pid=Api"
            alt="lighterandprincess"
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
          onClick={() => handleCardClick("/hiddenLove")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.qEUjIoPUg5WlaSUlOFtk9gHaFb&pid=Api"
            alt="hiddenlove"
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
          onClick={() => handleCardClick("/therationallife")}
        >
          <Card.Img
            variant="top"
            src="https://tse1.mm.bing.net/th?id=OIP.i5IR0pdO4-C1YxNNBiOYgAHaEK&pid=Api"
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
          onClick={() => handleCardClick("/whywomenlove")}
        >
          <Card.Img
            variant="top"
            src="https://tse1.explicit.bing.net/th?id=OIP.VIyQnXlCYsFwrFq91fjsBwHaEK&pid=Api"
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
          onClick={() => handleCardClick("/lessonInLove")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.wwFbnzGEmj8MKIAgNgm6VgHaEK&pid=Api"
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
          onClick={() => handleCardClick("/sheandherperfecthusband")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.ha4h7_FIzsHmhUuM0fol9AHaEK&pid=Api"
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
          onClick={() => handleCardClick("/findyourself")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.q-IkZWwKoooog1VdGw0foAHaEo&pid=Api"
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
          onClick={() => handleCardClick("/beginAgain")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.AT1xZRhqV9_INGa6kkyUQQHaEK&pid=Api"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>
      </div>
    </div>
  );
};

export default TopCdramas;
