"use server";

import React from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

type DefaultLayoutProps = {
  children: React.ReactNode;
  isRegisterPage?: boolean;
};

export const DefaultLayout = ({
  children,
  isRegisterPage = false,
}: DefaultLayoutProps): React.JSX.Element => {
  return (
    <div className="ico-shell">
      <Header page={isRegisterPage ? "register" : "login"} />
      <main className="ico-main" id="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};
