import ExitIcon from "../../atoms/Icons/exit.svg";

import {
  FooterNavbarContainer,
  UserInfoContainer,
  UserPictureContainer,
  ExitIconContainer,
} from "./styles";

export const FooterNavbar = () => {
  return (
    <FooterNavbarContainer>
      <UserInfoContainer>
        <UserPictureContainer>
          <img src="" alt="" />
        </UserPictureContainer>
        <div>
          <h2>João Pedro</h2>
          <h3>Comprador</h3>
        </div>
      </UserInfoContainer>
      <ExitIconContainer>
        <img src={ExitIcon} alt="" />
      </ExitIconContainer>
    </FooterNavbarContainer>
  );
};
