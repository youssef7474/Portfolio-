import { Container, Row, Col } from "react-bootstrap";
import icon1 from "../../assets/imges/nav-icon1.svg"
import icon2 from "../../assets/imges/icons8-github.svg"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <h1 style={{ color: "transparent", textShadow: "-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white" }}>Youssef</h1>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={icon1} alt="Icon" /></a>
              <a href="#"><img src={icon2} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}