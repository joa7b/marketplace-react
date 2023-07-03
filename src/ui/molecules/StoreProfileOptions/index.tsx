import HeartFollowIcon from "../../atoms/Icons/heart-fill.svg";

import { FollowContainer, StoreProfileOptionsContainer } from "./styles";

export const StoreProfileOptions = () => {
  return (
    <StoreProfileOptionsContainer>
      <FollowContainer>
        <img src={HeartFollowIcon} alt="Follow icon" />
        <span>1234 Seguidores</span>
      </FollowContainer>
    </StoreProfileOptionsContainer>
  );
};
