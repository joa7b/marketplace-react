import { styled, css } from "styled-components";

interface LineProps {
  $opened?: boolean;
  $line1?: boolean;
  $line2?: boolean;
  $line3?: boolean;
}

export const CloseButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  padding: 0;
`;

export const Line = styled.path<LineProps>`
  fill: none;
  stroke: black;
  stroke-width: 6;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  ${(props) =>
    props.$line1 && props.$opened
      ? Line1Opened
      : props.$line1
      ? Line1
      : props.$line2 && props.$opened
      ? Line2Opened
      : props.$line2
      ? Line2
      : props.$line3 && props.$opened
      ? Line3Opened
      : Line3}
`;

const Line1 = css`
  stroke-dasharray: 60 207;
`;

const Line2 = css`
  stroke-dasharray: 60 60;
`;

const Line3 = css`
  stroke-dasharray: 60 207;
`;

const Line1Opened = css`
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
`;

const Line2Opened = css`
  stroke-dasharray: 1 60;
  stroke-dashoffset: -30;
`;

const Line3Opened = css`
  stroke-dasharray: 90 207;
  stroke-dashoffset: -134;
`;
