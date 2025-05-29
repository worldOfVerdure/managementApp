import clipboard from "../../assets/images/clipboard.svg";
import SidebarProjects from "./SidebarProjects.jsx";
import MEDIA_SIZES from "../../auxiliary/mediaSizes.js";
import { styled } from "styled-components";
// import { useState } from "react";

export default function SideBar ({ handleProjectCreationClick, handleSideClick, toggleStatus }) {
  return (
    <>
      <ClipboardBtn
        $isActive={toggleStatus}
        onClick={handleSideClick}
        type="button"
      >
        <img alt="A clipboard icon" src={clipboard} />
      </ClipboardBtn>
      <SideBarContainer $toggled={toggleStatus} >
        <SidebarProjects handleBtnClick = {handleProjectCreationClick} />
      </SideBarContainer>
    </>
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
  top: 3%;
  width: 5rem;

  @media (min-width: ${MEDIA_SIZES.tablet}) {
    display: none;
  }
`;

const SideBarContainer = styled.section`
  bottom: 0%;
  height: 90vh;
  position: absolute;
  transform: ${props => props.$toggled ? "translateX(0)" : "translateX(-105%)"};
  transition: transform 1s ease-out;
  width: 80%;
  z-index: 1;
`;
