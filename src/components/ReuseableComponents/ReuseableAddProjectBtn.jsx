import { styled } from "styled-components";

export default function ReuseableAddProjectBtn ({ btnColor, handleBtnClick, children }) {
  return (
    <ReuseableAddBtn
      $btnColor={btnColor}
      onClick={handleBtnClick}
      type="button"
    >
      {children}
    </ReuseableAddBtn>
  );
}

const ReuseableAddBtn = styled.button`
  align-items: center;
  background-color: ${props => props.$btnColor};
  border-radius: .8rem;
  color: rgb(233, 233, 233);
  display: flex;
  font-size: clamp(1.6rem, calc(1.4rem + 1.3vw), 2.4rem);
  justify-content: center;
  padding: .8rem;
  width: fit-content;
`;
