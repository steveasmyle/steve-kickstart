import styled from "styled-components";

const StyledDesktop = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;

  div {
    height: 100vh;
  }
`;

export default StyledDesktop;
