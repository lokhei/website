import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logos/logo.svg";
import linkedinIcon from "../assets/img/logos/linkedin-icon.svg";
import ghIcon from "../assets/img/logos/github-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lokhei-wong/"><img src={linkedinIcon} alt="Icon" /></a>
              <a href="https://github.com/lokhei"><img src={ghIcon} alt="Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
