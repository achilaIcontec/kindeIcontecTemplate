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
        <h2>Ingreso corporativo</h2>
        <p>
          Accede a tus servicios y gestiona tus operaciones con una experiencia
          de autenticacion clara, segura y consistente.
        </p>
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
