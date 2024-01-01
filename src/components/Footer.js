import { Container } from "react-bootstrap";
import linkedinIcon from "../assets/img/logos/linkedin-icon.svg";
import ghIcon from "../assets/img/logos/github-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/lokhei-wong/"><img src={linkedinIcon} alt="Icon" /></a>
            <a href="https://github.com/lokhei"><img src={ghIcon} alt="Icon" /></a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
