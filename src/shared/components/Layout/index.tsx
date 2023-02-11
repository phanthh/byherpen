import React, { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { NavBar } from "./NavBar";
import { SiteBanner } from "./SiteBanner";

type LayoutProps = {};

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
  children,
}) => {
  return (
    <>
      <SiteBanner />
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

// @styles
