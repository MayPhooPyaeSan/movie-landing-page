import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        marginTop: "4rem",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
      className="footer-div"
    >
      <div style={{ marginBottom: "1rem" }}>
        <h6>Dialog Review</h6>
        <p>Terms and Services</p>
        <p>Get To Know Us</p>
        <p>FQA</p>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <p>Home</p>
        <p>About</p>
        <p>Privacy</p>
        <p>Copyright</p>
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <p>Contact Us</p>
        <p>
          <a href="http://" style={{ textDecoration: "none" }}>
            <FaFacebookSquare color="black" />
          </a>
          <a
            href="http://"
            style={{ textDecoration: "none", marginLeft: "1rem" }}
          >
            <FaInstagram color="black" />
          </a>
          <a
            href="http://"
            style={{ textDecoration: "none", marginLeft: "1rem" }}
          >
            <FaLinkedin color="black" />
          </a>
        </p>
        <p>Follow us on social</p>
      </div>
    </div>
  );
};

export default Footer;
