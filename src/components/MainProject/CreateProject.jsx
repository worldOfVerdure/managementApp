import { styled } from "styled-components";

const FORM_CANCELSAVE_WIDTH = "85%";

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
        <label htmlFor="title" >TITLE</label>
        <input id="title" />

        <label htmlFor="description" >DESCRIPTION</label>
        <textarea
          cols="30"
          id="description"
          rows="5"
        >
        </textarea>

        <label htmlFor="date" >DUE DATE</label>
        <input id="date" type="date" />
      </CreationForm>
    </MainCreation>
  );
}

const CancelBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #1A1A1A;
  font-weight: 550;
`;

const CancelSave = styled.div`
  display: flex;
  gap: .8rem;
  justify-content: end;
  width: ${FORM_CANCELSAVE_WIDTH};

  & button {
    border-radius: .8rem;
    flex: 1 1 8rem;
    font-size: clamp(1.6rem, calc(1.2rem + 1.1vw), 2rem);
    padding: .3rem .2rem;
    max-width: 9rem;
  }
`;

const CreationForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  width: ${FORM_CANCELSAVE_WIDTH};

  & input, textarea {
    background-color: rgb(228, 228, 228);
    border: none;
    border-bottom: solid .2rem #1A1A1A;
    font-size: clamp(1.6rem, calc(1.2rem + 1.1vw), 2rem);
    margin-bottom: 1rem;
  }

  & input {
    height: 3rem;
  }
`;

const MainCreation = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  position: absolute;
  top: 20%;
  width: 100%;
`;

const SaveBtn = styled.button`
  background-color: #1A1A1A;
  color: #fff;
`;
