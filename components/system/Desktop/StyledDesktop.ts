import styled from "styled-components";

const StyledDesktop = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  background-position: center;
  height: 100vh;
  inset: 0;
  overflow: hidden;
  position: fixed;
  width: 100vw;
`;

export default StyledDesktop;
