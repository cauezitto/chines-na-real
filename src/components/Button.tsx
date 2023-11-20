import React from "react";

export function Button() {
  return (
    <div className="button_wrapper">
      {/* <a className="button" href="">
        INSCREVER-SE AGORA POR 12X &nbsp; <span>R$130</span>
      </a> */}

      <a className="button" href="/mentoria/trilhas">
        ESCOLHA AGORA A TRILHA PARA O SEU <br /> PLANO DE ESTUDOS!
      </a>

      {/* <h3>
        Ou à vista com desconto <br /> por <strong>R$1200</strong>
      </h3> */}
    </div>
  );
}
