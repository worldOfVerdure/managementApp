import { styled } from "styled-components";
import { useRef } from "react";

export default function Modal ({ displayStatus, handleProjectResetClick, handleModalDisplayClick }) {
  const ModalRef = useRef();

  if (displayStatus)
    ModalRef.current?.showModal();
  else
    ModalRef.current?.close();

  return (
    <ReuseableModal
      ref={ModalRef}
    >
      <p>Cancel current project being added?</p>
      <NayYayBtnContainer>
        <button
          onClick={handleModalDisplayClick}
          type="button"
        >
          No
        </button>
        <button
          onClick={handleProjectResetClick}
          type="button"
        >
          Yes
        </button>
      </NayYayBtnContainer>
    </ReuseableModal>
  );
}

const NayYayBtnContainer = styled.div`
  display: flex;
  gap: 2rem;
  height: fit-content;
  justify-content: end;
  width: 100%;

  & button {
    background-color: #1A1A1A;
    border-radius: .6rem;
    color: #fff;
    flex: 1 1 5rem;
    max-width: 6rem;
    padding: 1rem;
  }
`;

const ReuseableModal = styled.dialog`
  margin: 0 auto;
  position: absolute;
  top: 30%;
`;
