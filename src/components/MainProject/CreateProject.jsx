import ReuseableAddProjectBtn from "../ReuseableComponents/ReuseableAddProjectBtn.jsx";
import { styled } from "styled-components";

export default function CreateProject () {
  return (
    <MainCreation >
      <CancelSave >
        <CancelBtn 
          type="button"
        >
          Cancel
        </CancelBtn>
        <SaveBtn 
          type="button"
        >
          Save
        </SaveBtn>
      </CancelSave>
      <CreationForm >

      </CreationForm>
    </MainCreation>
  );
}

const CancelBtn = styled.button`

`;

const CancelSave = styled.div`

`;

const CreationForm = styled.form`

`;

const MainCreation = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SaveBtn = styled(ReuseableAddProjectBtn)`
  font-size: clamp(1.6rem, calc(1.2rem + 1.1vw), 2rem);
`;
