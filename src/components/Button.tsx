/*import React, { ButtonHTMLAttributes } from "react";

export function Button(props: any) {
  return (
    <a className="button" href={props.href}>
      {props.children}
    </a>
  );
}
*/

import React, { ButtonHTMLAttributes } from "react";

export function Button() {
  return (
    <div className="button_wrapper">
      <a className="button" href="">
        INSCREVER-SE AGORA POR 12X &nbsp; <span>R$130</span>
      </a>

      <h3>
        Ou à vista com desconto <br /> por <strong>R$1200</strong>
      </h3>
    </div>
  );
}
