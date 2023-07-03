import { styled } from "styled-components";

export const StoreProfileOptionsContainer = styled.div`
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-evenly;
`;

export const FollowContainer = styled.div`
  gap: 8px;
  align-items: center;
  display: flex;
  font-size: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-direction: column;

  @media (max-width: 400px) {
    img {
      position: static;
      width: 28px;
      height: 28px;
    }
  }
`;
