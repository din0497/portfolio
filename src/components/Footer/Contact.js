import { VscGithubAlt } from "react-icons/vsc";
import {FiFacebook} from 'react-icons/fi'
import {TiSocialLinkedin} from 'react-icons/ti'
import {RiTelegramLine} from 'react-icons/ri'
import { IconContainer } from "./style";

const Contact = () => {
  return (
    <IconContainer >
      <VscGithubAlt />
      <TiSocialLinkedin />
      <FiFacebook />
      <RiTelegramLine/>
    </IconContainer>
  );
};

export default Contact;
