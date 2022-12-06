import type { SessionContextState } from "contexts/session/types";
import { useState } from "react";

const useSessionContextState = (): SessionContextState => {
  const [themeName, setThemeName] = useState("defaultTheme");

  return {
    setThemeName,
    themeName,
  };
};

export default useSessionContextState;
