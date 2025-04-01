import AddProject from "./components/MainProject/AddProject.jsx";
import { createGlobalStyle } from "styled-components";
import SideBar from "./components/sideBar/SideBar.jsx";
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
        handleClick={handleSidebarBtnClick}
        toggleStatus={toggleSideBar}
      />
      <AddProject />
    </>
  );
}

//!zzzThe side bar is pushing down my main page. I liely need to see how I position the hidden
//!sidebar. It is likely I need to make the body position relative and the side bar absolute to
//!remove it from the normal document flow.

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
