import AddProject from "./components/MainProject/AddProject.jsx";
import { createGlobalStyle } from "styled-components";
import SideBar from "./components/SideBar/SideBar.jsx";
import { useState } from "react";

export default function App() {
  /*
    setState to add projects buttons, one on sidebar and the other on AddProject. Both share state.
  */
  /*
    setState for save button here. Have it so sidebar can add project. Create project page goes
      back to main page 
  */
  /*
    setState for clicking a project in the nav side bar. On mobile, make sidebar slide off screen,
      while changing. Might be easiest to elevate the state of SideBar to App. On larger viewports,
      the sidebar will always be rendered.

  */
 //~https://react.dev/learn/updating-arrays-in-state
  // const [saveProject, setSaveProject] = useState([]); //Use for when saving
  const [projectCreation, setProjectCreation] = useState(false);
  function handleProjectCreation () {
    setProjectCreation(() => !projectCreation);
  }

  const [toggleSideBar, setToggleSideBar] = useState(false);
  function handleSidebarBtnClick () {
    setToggleSideBar(() => !toggleSideBar);
  }

  // const [addProject, setAddProject] = useState(false);
  // function handleAddClick() {
  //   setAddProject(() => !addProject);

  //   if (toggleSideBar)
  //     handleSidebarBtnClick();
  // }
  return (
    <>
      <GlobalStyles />
      <SideBar
        handleProjectCreationClick={handleProjectCreation}
        handleSideClick={handleSidebarBtnClick}
        toggleStatus={toggleSideBar}
      />
      {/* //TODO:zzz Look up "react Conflicting event handlers".
          //!zzz Make a fine ass redit post, also look up two components sharing same handler?
*/}
      {!projectCreation && <AddProject handleProjectCreationClick={handleProjectCreation} /> }
      {/* {projectCreation && <CreateProject /> } */}
    </>
  );
}

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-size: 1.6rem;
    margin: 0;
    position: relative;
    overflow: hidden;
  }

  html {
    font-size: 62.5%;
  }
`;
