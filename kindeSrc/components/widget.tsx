"use server";

import { getKindeWidget } from "@kinde/infrastructure";
import React from "react";

type WidgetProps = {
  heading: string;
};

export const Widget: React.FC<WidgetProps> = ({ heading }) => {
  return (
    <section className="ico-widget-wrap" aria-label="Autenticacion ICONTEC">
      <aside className="ico-sidepanel">
        <img
          className="ico-sidepanel-logo"
          src="http://portalafiliados.icontec.org/wp-content/uploads/2026/10/logoAnimated.gif"
          alt=""
          aria-hidden="true"
        />
      </aside>

      <main className="ico-form-card">
        <h1 style={{ margin: "0 0 1rem", fontSize: "1.6rem", lineHeight: 1.2 }}>
          {heading}
        </h1>
        {getKindeWidget()}
      </main>
    </section>
  );
};
