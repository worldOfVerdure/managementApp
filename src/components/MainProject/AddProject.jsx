import ClipboardImg from "./ClipbosrdImg.jsx";
import { styled } from "styled-components";

export default function AddProject () {
  return (
    <MainPage>
      <ClipboardImg />
      <h1>No Project Selected</h1>
    </MainPage>
  );
}

const MainPage = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 60vh;
  justify-content: center;
  width: 100%;

  & h1 {
    font-size: clamp(2.3rem, calc(2rem + 1.5vw), 3.3rem);
  }
`;
