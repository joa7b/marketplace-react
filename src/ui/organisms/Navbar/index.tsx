import { FooterNavbar } from "../../molecules/FooterNavbar";
import { StoreProfileOptions } from "../../molecules/StoreProfileOptions";
import { Textarea } from "../../atoms/Textarea";

import ShareIcon from "../../atoms/Icons/share.svg";
import StarFillIcon from "../../atoms/Icons/star-fill.svg";

import {
  Aside,
  ProfilePicContainer,
  StoreTitle,
  TitleContainer,
  Share,
  RatingContainer,
  CloseNavbar,
} from "./styles.ts";

export const Navbar = () => {

  const handleClose = () => {
    console.log("close");
  };




  const textareaContent =
    " Lorem ipsum dolor sit amet, consectetur qadipiscing elit. Integer vestibulum maximus quam, et hendrerit ipsum tempus sed. Phasellus faucibus diam vestibulum pulvinar rutrum. Curabitur a ipsum ut ipsum rutrum faucibus. Nullam mattis justo in feugiat lobortis.";
  return (
    <Aside>
      <ProfilePicContainer>
        <img src="" alt="" />
      </ProfilePicContainer>
      <CloseNavbar onClick={handleClose}>X</CloseNavbar>
      <TitleContainer>
        <StoreTitle>Título da loja</StoreTitle>
        <Share src={ShareIcon} alt="Share icon" />
      </TitleContainer>
      <RatingContainer>
        <img src={StarFillIcon} alt="rating star" />
        <img src={StarFillIcon} alt="rating star" />
        <img src={StarFillIcon} alt="rating star" />
        <img src={StarFillIcon} alt="rating star" />
        <img src={StarFillIcon} alt="rating star" />
      </RatingContainer>
      <StoreProfileOptions />
      <Textarea label={"Biografia"} content={textareaContent} />
      <FooterNavbar />
    </Aside>
  );
};
