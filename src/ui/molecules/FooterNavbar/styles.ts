import { styled } from "styled-components";

export const FooterNavbarContainer = styled.div`
  background-color: #fff;
  width: 300px;
  max-width: 300px;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
  display: flex;
  align-items: center;
  padding: 16px 0 16px 0;
  justify-content: space-between;

  h2,
  h3 {
    margin: 0;
    font-size: 16px;
  }

  h3 {
    font-size: 12px;
  }

  img {
    width: 16px;
    height: 16px;
  }

  @media (max-width: 400px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
`;

export const UserPictureContainer = styled.div`
  width: 32px;
  height: 32px;
  background-color: #aaaaaa;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
`;

export const ExitIconContainer = styled.div`
  margin-right: 16px;
`;
