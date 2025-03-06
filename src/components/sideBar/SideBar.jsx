import clipboard from "../../assets/clipboard.svg";
import Projects from "./Projects.jsx";
import MEDIA_SIZES from "../../auxiliary/mediaSizes.js";
import { styled } from "styled-components";
import { useState } from "react";

export default function SideBar () {
  const [toggleSideBar, setToggleSideBar] = useState(false);
  function handleClick () {
    setToggleSideBar(() => !toggleSideBar);
  }

  return (
    <SideBarContainer>
      <ClipboardBtn
        $isActive={toggleSideBar}
        onClick={handleClick}
        type="button"
      >
        <img alt="A clipboard icon" src={clipboard} />
      </ClipboardBtn>
      {toggleSideBar ? <Projects /> : null}
    </SideBarContainer>
  );
}

const ClipboardBtn = styled.button`
  align-items: center;
  background-color: ${props => props.$isActive ? "rgb(11, 72, 133)" : "rgb(11, 42, 73)"};
  border-color: #000;
  border-radius: 50%;
  display: flex;
  height: 5rem;
  justify-content: center;
  left: 5%;
  position: absolute;
  width: 5rem;
  top: 3%;

  @media (min-width: ${MEDIA_SIZES.tablet}) {
    display: none;
  }
`;

const SideBarContainer = styled.section`
  height: 100vh;
  position: relative;
  width: 80%;
`;
