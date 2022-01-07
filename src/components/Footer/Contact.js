import { VscGithubAlt } from "react-icons/vsc";
import { FiFacebook } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiTelegramLine } from "react-icons/ri";
import { ContactContainer, IconContainer } from "./style";

const Contact = () => {
  return (
    <ContactContainer>
        <p>© {new Date().getFullYear()} Abdunazarov Rivojiddin</p>
      <IconContainer>
        <VscGithubAlt size={25} />
        <TiSocialLinkedin size={35} />
        <FiFacebook size={25} />
        <RiTelegramLine size={25} />
      </IconContainer>
    </ContactContainer>
  );
};

export default Contact;
