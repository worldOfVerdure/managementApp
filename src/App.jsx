import AddProject from "./components/MainProject/AddProject.jsx";
import { createGlobalStyle } from "styled-components";
import CreateProject from "./components/MainProject/CreateProject.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import { useState } from "react";

export default function App() {
  const [cancelModal, setCancelModal] = useState(false);
  function handleCancelModal () {
    setCancelModal(() => !cancelModal);
  }

  //const [cancelProjectCreation, setCancelProjectCreation] = useState([]); //empty array of objects

  const [projectCreation, setProjectCreation] = useState(false);
  const [overwriteAddProjectModal, setOverwriteAddProjectModal] = useState(false);
  function handleProjectCreation () {
    setProjectCreation(() => !projectCreation);
    // Close sidebar when clicking "+ Add Project" button.
    if (toggleSideBar)
      setToggleSideBar(() => !toggleSideBar);
    // If the project creation page is open, then clicking "+ Add Project" button will open a modal.
    if (projectCreation)
      setOverwriteAddProjectModal(() => !overwriteAddProjectModal);

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
          handleCancelClick={handleCancelModal}
        />
      }
      {/* zzzCreate a reuseable Modal component to warn user about overwriting their exisiting project */}
      {/* { overwriteAddProjectModal && <Modal /> } */}
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

  html {
    font-size: 62.5%;
  }
`;
