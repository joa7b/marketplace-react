import PencilIcon from "../../atoms/Icons/pencil.svg";

import { BioParagraph, BioContainer } from "./styles";

type TextareaProps = {
  content: string;
  label?: string;
};

export const Textarea = ({ content, label }: TextareaProps) => {
  return (
    <BioContainer>
      {label && (
        <span>
          {label}
          <img src={PencilIcon} alt="" />
        </span>
      )}
      <BioParagraph>{content}</BioParagraph>
    </BioContainer>
  );
};
