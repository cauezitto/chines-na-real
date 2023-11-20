import React from "react";

type ButtonProps = {
  price: number;
  link: string;
};

const parcelas = 6;

export default function Button({ price = 0, link }: ButtonProps) {
  const calcularMontanteParcelado = (
    principal: number,
    taxaDeJurosMensal: number,
    meses: number
  ) => {
    const r = taxaDeJurosMensal / 100; // Convertendo a taxa de porcentagem para decimal
    const montante = principal * Math.pow(1 + r, meses);
    return montante.toFixed(2); // Arredonda para 2 casas decimais
  };
  return (
    <div className="button_wrapper">
      <a className="button" href={link}>
        INSCREVER-SE AGORA POR ATÉ {parcelas}X &nbsp;{" "}
        <span>
          {(
            Number(calcularMontanteParcelado(price, 1.674, parcelas)) / parcelas
          ).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </a>

      {/* <a className="button" href="/trilhas">
        ESCOLHA AGORA A TRILHA PARA O SEU <br /> NÍVEL DE DIFICULDADE!
      </a> */}

      <h3>
        Ou à vista com desconto <br /> por{" "}
        <strong>
          {price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </strong>
      </h3>
    </div>
  );
}
