import ClipboardImg from "./ClipbosrdImg.jsx";
import ReuseableAddProjectBtn from "../ReuseableComponents/ReuseableAddProjectBtn.jsx";
import { styled } from "styled-components";

export default function AddProject ( { handleProjectCreationClick } ) {
  return (
    <MainAddPage>
      <ClipboardImg />
      <h1>No Project Selected</h1>
      <p>Select a project or get started with a new one</p>
      <ReuseableAddProjectBtn
        btnColor="#1A1A1A"
        handleBtnClick={handleProjectCreationClick}
      >
        Create new project
      </ReuseableAddProjectBtn>
    </MainAddPage>
  );
}

const MainAddPage = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 65vh;
  justify-content: center;
  width: 100%;

  & h1 {
    font-size: clamp(2.3rem, calc(2rem + 1.5vw), 3.3rem);
  }

  & p {
    color:rgb(80, 80, 80);
    font-size: clamp(1.6rem, calc(1.5rem + 1vw), 2.2rem);
    font-weight: 300;
    margin: 0;
    text-align: center;
  }
`;
