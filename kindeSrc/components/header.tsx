"use server";

import { getKindeLoginUrl, getKindeRegisterUrl } from "@kinde/infrastructure";
import React from "react";

export const Header = (props: { page: "login" | "register" }) => {
  const isLogin = props.page === "login";

  return (
    <header className="ico-header">
      <a className="ico-brand" href="#" aria-label="ICONTEC">
        <img
          className="ico-brand-logo"
          src="https://raw.githubusercontent.com/achilaIcontec/kindeIcontecTemplate/main/kindeSrc/assets/logoPNG.png"
          alt="Logo ICONTEC"
        />
      </a>
      {isLogin ? (
        <a href={getKindeRegisterUrl()} className="ico-switch-link">
          Crear cuenta
        </a>
      ) : (
        <a href={getKindeLoginUrl()} className="ico-switch-link">
          Iniciar sesion
        </a>
      )}
    </header>
  );
};
