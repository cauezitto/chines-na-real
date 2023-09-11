import React from "react";

type ModuleProps = {
  title: string;
  children: React.ReactNode;
};

export function ModulosMentoriaQuadrado(props: ModuleProps) {
  return (
    <div className="modulosmentorias">
      <h2>{props.title}</h2>

      <div className="h2modulomentoria boxtitle">{props.children}</div>
    </div>
  );
}
