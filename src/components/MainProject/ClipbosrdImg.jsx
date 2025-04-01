import headerClipboard1x from "../../assets/images/headerClipboard/headerClipboard1x.png";
import headerClipboard2x from "../../assets/images/headerClipboard/headerClipboard2x.png";
import headerClipboard3x from "../../assets/images/headerClipboard/headerClipboard3x.png";
import headerClipboard4x from "../../assets/images/headerClipboard/headerClipboard4x.png";
import { styled } from "styled-components";

export default function ClipboardImg () {
  return (
    <ClipBImg
      alt="Picture of a clipboard."
      src={headerClipboard1x}
      srcSet={`
        ${headerClipboard1x},
        ${headerClipboard2x},
        ${headerClipboard3x},
        ${headerClipboard4x}
      `}
    /> 
  );
}

const ClipBImg = styled.img`
  width: 9rem;
`;
