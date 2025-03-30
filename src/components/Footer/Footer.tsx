import LogoCinelibLg from "../../assets/Logos/cinelib-logo-large.png";
import LogoGitHub from "../../assets/github-logo.png";
import LogoLinkedIn from "../../assets/linkedin-logo.png";
import { FooterPage } from "./style";

const Footer = () => {
  return (
    <FooterPage>
      <img src={LogoCinelibLg} alt="Logo-CineLib" className="Logo-CineLib" />
      <div className="contact">
        <h3>Contact</h3>
        <div className="profiles">
          <div className="GitHub-profile">
            <img
              src={LogoGitHub}
              alt="Logo-GitHub"
              className="Logo-GitHub"
            />
            <a
              target="blank"
              href="https://github.com/RaulRodriguesdeOliveira"
              className="GitHub-link"
            >
              https://github.com/RaulRodriguesdeOliveira
            </a>
          </div>
          <div className="LinkedIn-profile">
            <img
              src={LogoLinkedIn}
              alt="Logo-LinkedIn"
              className="Logo-LinkedIn"
            />
            <a
              className="linkedIn-link"
              target="blank"
              href="https://www.linkedin.com/in/raul-rodrigues-b57402250"
            >
              https://www.linkedin.com/in/raul-rodrigues-b57402250
            </a>
          </div>
        </div>
      </div>
    </FooterPage>
  );
};

export default Footer;
