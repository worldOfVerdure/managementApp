import { createGlobalStyle } from "styled-components";
import SideBar from "./components/sideBar/SideBar.jsx";

function App() {

  return (
    <>
      <GlobalStyles />
      <SideBar />
    </>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  * {
  box-sizing: border-box;
}

  body {
    font-size: 1.6rem;
    margin: 0;
    overflow: hidden;
  }

  html {
    font-size: 62.5%;
  }
`;
