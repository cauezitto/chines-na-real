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
    <div>
      <a className="button" href="">
        INSCREVER-SE AGORA POR 12X <h4>R$130</h4>
      </a>

      <h3>
        Ou à vista com desconto por <strong>R$1200</strong>
      </h3>
    </div>
  );
}
