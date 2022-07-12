/** @jsxImportSource @emotion/react */
import React from "react";
import { layoutAtoms, layoutStyles } from "modules/shared";
import { useRecoilValue } from "recoil";

interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const isDarkMode = useRecoilValue(layoutAtoms.darkMode);
  return (
    <main
      css={
        isDarkMode
          ? layoutStyles.backgroundSecondary
          : layoutStyles.backgroundPrimary
      }
    >
      {children}
    </main>
  );
};
