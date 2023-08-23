import StyledDesktop from "components/system/Desktop/StyledDesktop";
import BIRDS from "public/vanta.birds.min.js";
import React, { useEffect, useRef, useState } from "react";

type DesktopProps = {
  children?: React.ReactNode;
};

const Desktop = ({ children }: DesktopProps): JSX.Element => {
  const desktopRef = useRef<HTMLElement | null>(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: vantaRef.current,
          birdSize: 2,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <StyledDesktop ref={desktopRef}>
      {/* <Script src="/public/three.min.js" /> */}
      <div ref={vantaRef}>Foreground content goes here</div>
      {children}
    </StyledDesktop>
  );
};

export default Desktop;
