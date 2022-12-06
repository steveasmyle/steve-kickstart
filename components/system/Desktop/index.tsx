import StyledDesktop from "components/system/Desktop/StyledDesktop";
import { useRef } from "react";

type DesktopProps = {
  children?: React.ReactNode;
};

const Desktop = ({ children }: DesktopProps): JSX.Element => {
  const desktopRef = useRef<HTMLElement | null>(null);

  return (
    <StyledDesktop ref={desktopRef}>
      <p>Hello World</p>
      {children}
    </StyledDesktop>
  );
};

export default Desktop;
