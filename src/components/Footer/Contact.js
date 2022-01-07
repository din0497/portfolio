import { VscGithubAlt } from "react-icons/vsc";
import { FiFacebook } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiTelegramLine } from "react-icons/ri";
import { A, ContactContainer, IconContainer } from "./style";

const Contact = () => {
  return (
    <ContactContainer>
      <p>© {new Date().getFullYear()} Abdunazarov Rivojiddin</p>
      <IconContainer>
        <A href="https://github.com/din0497">
          <VscGithubAlt size={25} />
        </A>
        <A href="www.linkedin.com/in/rivojidin-din-abdunazarov-803570203">
          <TiSocialLinkedin size={35} />
        </A>
        <A href="https://www.facebook.com/rivojiddin.abdunazarov.3/">
          <FiFacebook size={25} />
        </A>
        <A href="https://t.me/Abdunazarov97">
          <RiTelegramLine size={25} />
        </A>
      </IconContainer>
    </ContactContainer>
  );
};

export default Contact;
