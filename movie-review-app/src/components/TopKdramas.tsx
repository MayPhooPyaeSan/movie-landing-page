import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const TopKdramas = () => {
  const navigate = useNavigate();

  const handleCardClick = (route: any) => {
    navigate(route);
  };

  return (
    <div id="kdramas">
      <div className="title">
        <h1>Korea Dramas Section</h1>
      </div>
      <div className="card-holder" style={{ margin: "0 0 20px 10px" }}>
        <Card
          style={{
            width: "18rem",
            height: "180px",
            margin: "0 10px 20px 0",
            border: "none",
          }}
          onClick={() => handleCardClick("/whyher")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.j3QSlUHiWUdBSoDsv21NjgHaEa&pid=Api"
            alt="whyher"
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
          onClick={() => handleCardClick("/ourbelovedsummmer")}
        >
          <Card.Img
            variant="top"
            src="https://tse1.mm.bing.net/th?id=OIP.hdkQ7T59iVWWCHfJ0zCFvwHaEK&pid=Api"
            alt="ourbelovedsummer"
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
          onClick={() => handleCardClick("/somethingintherain")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.O-2Eh5t1IZzE5aXEQW7R7AHaDf&pid=Api"
            alt="somethinginthrain"
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
          onClick={() => handleCardClick("/watermelon")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.A0PsGrPVsKgJrrkHh9DpvQHaEK&pid=Api"
            alt="watermelon"
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
          onClick={() => handleCardClick("/temperatureoflove")}
        >
          <Card.Img
            variant="top"
            alt="temperatureoflove"
            src="https://tse4.mm.bing.net/th?id=OIP.A7N4RL6f8VvUfz9UuK4KdwHaEP&pid=Api"
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
          onClick={() => handleCardClick("/theglory")}
        >
          <Card.Img
            variant="top"
            src="https://tse2.mm.bing.net/th?id=OIP.Ezq5JQCwF_oZ3A06aAnJxQAAAA&pid=Api"
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
          onClick={() => handleCardClick("/youaremyspring")}
        >
          <Card.Img
            variant="top"
            src="https://tse2.mm.bing.net/th?id=OIP.3msddOM4kX1GXJVXZTkE2QAAAA&pid=Api"
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
          onClick={() => handleCardClick("/mother")}
        >
          <Card.Img
            variant="top"
            src="https://tse1.mm.bing.net/th?id=OIP.VCs0CVzEejT50TK-VBDpOwHaEP&pid=Api"
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
          onClick={() => handleCardClick("/mylovefromstar")}
        >
          <Card.Img
            variant="top"
            src="https://tse1.mm.bing.net/th?id=OIP.PUv6oef-wTE5cWUsXMRkggHaEK&pid=Api"
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
          onClick={() => handleCardClick("/startup")}
        >
          <Card.Img
            variant="top"
            src="https://tse2.mm.bing.net/th?id=OIP.5KBrcceWp6oKL-KG34SOPAHaE4&pid=Api"
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
          onClick={() => handleCardClick("/samdalri")}
        >
          <Card.Img
            variant="top"
            src="https://tse2.mm.bing.net/th?id=OIP.kATOrfb5H0sdc77ueHTOyQHaE8&pid=Api"
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
          onClick={() => handleCardClick("/romancebook")}
        >
          <Card.Img
            variant="top"
            src="https://tse1.explicit.bing.net/th?id=OIP.G4Bn-qZcSAq9cl3syZgN0wHaEK&pid=Api"
            alt="holidate"
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
          onClick={() => handleCardClick("/itsokay")}
        >
          <Card.Img
            variant="top"
            src="https://tse2.mm.bing.net/th?id=OIP.dRV-rPUd3fcdUK7XPkVrcgHaD4&pid=Api"
            alt="holidate"
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
          onClick={() => handleCardClick("/chachacha")}
        >
          <Card.Img
            variant="top"
            src="https://tse1.mm.bing.net/th?id=OIP.WICjlcV8TvHdK8yeX79H7gHaDt&pid=Api"
            alt="holidate"
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
          onClick={() => handleCardClick("/anglemission")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.Kc5hwhMmXuudGM6hexCc1gHaEK&pid=Api"
            alt="holidate"
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
          onClick={() => handleCardClick("/playbook")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.sTPdFs4faEPpIe4rOpfbIQHaE0&pid=Api"
            alt="holidate"
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
          onClick={() => handleCardClick("/melancholida")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.vDoansHJoZCLj1RbipHHaAHaEi&pid=Api"
            alt="holidate"
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
          onClick={() => handleCardClick("/2521")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.lMmbHFjWpiD_-PnY5x5zawHaEK&pid=Api"
            alt="holidate"
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
          onClick={() => handleCardClick("/goodmotherbadmother")}
        >
          <Card.Img
            variant="top"
            src="https://tse3.mm.bing.net/th?id=OIP.hzIzEraPpVFDK3zMTWuTFwHaFT&pid=Api"
            alt="holidate"
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
          onClick={() => handleCardClick("/byemama")}
        >
          <Card.Img
            variant="top"
            src="https://tse4.mm.bing.net/th?id=OIP.0AoaPxhyfB2mSGp8dOB8RgHaEj&pid=Api"
            alt="holidate"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
            className="card-img"
          />
        </Card>
      </div>
    </div>
  );
};

export default TopKdramas;
