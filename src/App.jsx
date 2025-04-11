import AddProject from "./components/MainProject/AddProject.jsx";
import { createGlobalStyle } from "styled-components";
import CreateProject from "./components/MainProject/CreateProject.jsx";
import Modal from "./components/ReuseableComponents/Modal.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import { useState } from "react";

export default function App() { 
  const [projectCreation, setProjectCreation] = useState(false);
  const [modalDisplayStatus, setModalDisplayStatus] = useState(false);
  function handleProjectCreation () {
    // If the project creation page is open, then clicking "+ Add Project" button will open a modal.
    if (projectCreation)
      setModalDisplayStatus(() => !modalDisplayStatus);
    else
      setProjectCreation(() => !projectCreation);

    // if (modalDisplayStatus)
      

    // Close sidebar when clicking "+ Add Project" button.
    if (toggleSideBar)
      setToggleSideBar(() => !toggleSideBar);
  }
  //&Probablly will need a handleModal handler.
  function handleModalDisplay () {
    setModalDisplayStatus(() => !modalDisplayStatus);
  }

  const [toggleSideBar, setToggleSideBar] = useState(false);
  function handleSidebarBtnClick () {
    setToggleSideBar(() => !toggleSideBar);
  }

  return (
    <>
      <GlobalStyles />
      <SideBar
        handleProjectCreationClick={handleProjectCreation}
        handleSideClick={handleSidebarBtnClick}
        toggleStatus={toggleSideBar}
      />
      { !projectCreation && <AddProject handleProjectCreationClick={handleProjectCreation} /> }
      { projectCreation &&
        <CreateProject 
          
        />
      }
      <Modal 
        displayStatus={modalDisplayStatus}
        handleModalDisplayClick={handleModalDisplay}
      />
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    height: 100vh;
    margin: 0;
    position: relative;
    overflow: hidden;
  }

  button:hover {
    cursor: pointer;
  }

  html {
    font-size: 62.5%;
  }
`;
