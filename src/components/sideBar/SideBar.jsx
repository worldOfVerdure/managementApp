import clipboard from "../../assets/images/clipboard.svg";
import SidebarProjects from "./SidebarProjects.jsx";
import MEDIA_SIZES from "../../auxiliary/mediaSizes.js";
import { styled } from "styled-components";
// import { useState } from "react";

export default function SideBar ({ handleProjectCreationClick, handleSideClick, toggleStatus }) {
  return (
    <SideBarContainer>
      <ClipboardBtn
        $isActive={toggleStatus}
        onClick={handleSideClick}
        type="button"
      >
        <img alt="A clipboard icon" src={clipboard} />
      </ClipboardBtn>
      <SidebarProjects
        handleBtnClick = {handleProjectCreationClick}
        toggled={toggleStatus}
      />
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
  top: 3%;
  width: 5rem;

  @media (min-width: ${MEDIA_SIZES.tablet}) {
    display: none;
  }
`;

const SideBarContainer = styled.section`
  height: 100vh;
  position: absolute;
  width: 80%;
`;
