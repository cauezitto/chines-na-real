import React from "react";

type ModuleProps = {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
};

export function ModulosMentoriaQuadrado(props: ModuleProps) {
  return (
    <div className="modulosmentorias">
      {props.icon}
      <h2>{props.title}</h2>
      <br />
      <div className="h2modulomentoria boxtitle">{props.children}</div>
    </div>
  );
}
