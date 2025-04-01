import { styled } from "styled-components";

export default function Projects ({ toggled }) {
  return (
    <ProjectContainer $toggleProjectContainer={toggled}>
      <ProjectContentContainer>
        <h2>Your Projects</h2>
        <AddProjectBtn>+ Add Project</AddProjectBtn>
        {/* Add included projects here */}
      </ProjectContentContainer>
    </ProjectContainer>
  );
}

const AddProjectBtn = styled.button`
  align-items: center;
  background-color:rgb(65, 60, 60);
  border-radius: .8rem;
  color:rgb(233, 233, 233);
  display: flex;
  font-size: clamp(1.6rem, calc(1.4rem + 1.3vw), 2.4rem);
  justify: center;
  padding: .8rem;
  width: fit-content;
`;

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
  align-items: space-around;
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
