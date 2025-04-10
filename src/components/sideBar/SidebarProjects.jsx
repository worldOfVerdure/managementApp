import ReuseableAddProjectBtn from "../ReuseableComponents/ReuseableAddProjectBtn.jsx";
import { styled } from "styled-components";

export default function Projects ({ handleBtnClick ,toggled }) {
  return (
    <ProjectContainer $toggleProjectContainer={toggled}>
      <ProjectContentContainer>
        <h2>Your Projects</h2>
        <ReuseableAddProjectBtn 
          btnColor="rgb(65, 60, 60)"
          handleBtnClick={handleBtnClick}
        >
          + Add Project
        </ReuseableAddProjectBtn>
        {/* Add included projects here */}
      </ProjectContentContainer>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  background-color: #1A1A1A;
  border-top-right-radius: .8rem;
  height: 100vh;
  position: absolute;
  top: 13%;
  transform: ${props => props.$toggleProjectContainer ? "translateX(0)" : "translateX(-105%)"};
  transition: transform 1.1s ease-out;
  width: 100%;
`;

const ProjectContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  justify-content: start;
  margin: 4rem 0 4rem 4rem;

  & h2 {
    color:rgb(233, 233, 233);
    font-size: clamp(2rem, calc(1.8rem + 1.5vw), 3rem);
    margin: 0;
  }
`;

{/* const SideBarNavContainer = styled.nav`
  
`; */}
