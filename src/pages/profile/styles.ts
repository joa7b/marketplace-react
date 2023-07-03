import { styled } from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 200px;
  background-color: #ebebeb;
`;

export const ContentProfileContainer = styled.div`
  display: flex;
  padding: 0 300px 0 0;

  @media (max-width: 400px) {
    padding: 0;
  }
`;

export const Content = styled.div`
  position: absolute;
  padding: 78px 16px;
`;
