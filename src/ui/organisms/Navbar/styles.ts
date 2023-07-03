import { styled, keyframes } from "styled-components";

export const Aside = styled.div`
  background-color: #fff;
  width: 300px;
  height: 70vh;
  position: relative;
  left: 0;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const HeaderAside = styled.div``;

export const ProfilePicContainer = styled.div<{
  isNavbarOpen: boolean;
}>`
  height: 100px;
  width: 100px;
  background-color: #aaaaaa;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: ${(props) => (props.isNavbarOpen ? "50%" : "-25%")};
  transition: left 0.5s ease-in-out;
  transform: translate(-50%, -50%);
  border-right: 1px solid #ebebeb;

  @media (max-width: 400px) {
    left: ${(props) => (props.isNavbarOpen ? "50%" : "16%")};
  }
`;

export const CloseNavbar = styled.span<{
  isNavbarOpen: boolean;
}>`
  position: absolute;
  top: -50px;
  font-size: 20px;
  left: ${(props) => (props.isNavbarOpen ? "85%" : "0")};
  transition: left 0.5s ease-in-out;

  @media (max-width: 400px) {
    left: 85%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  margin: 16px 0 8px 0;
  position: relative;
`;

export const Share = styled.img`
  width: 12px;
  height: 12px;
  position: absolute;
  right: -24px;
`;

export const StoreTitle = styled.h1`
  margin: 0;
  font-size: 24px;
`;

export const RatingContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 16px;
  img {
    width: 16px;
    height: 16px;
  }
`;

export const InfoWapper = styled.div<{
  isNavbarOpen: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  left: ${(props) => (props.isNavbarOpen ? "0%" : "-100%")};
  transition: left 0.5s ease-in-out;
`;
