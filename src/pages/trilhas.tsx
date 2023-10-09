import React from "react";
import Image from "next/image";
import logoPrincipal from "../../public/lofoprincipal.svg";
// import { Container } from './styles';
import ConvertButton from "../components/ConvertButton";

const Trilhas = () => {
  return (
    <main id="trilhas">
      <Image src={logoPrincipal} alt="logotipo chines na real" width={160} />
      <h1>
        Escolha a trilha com o plano de estudos <br /> adequado para você!
      </h1>

      <div className="modules">
        <div className="module-box module1">
          <span className="disclaimer red">Sem acesso às aulas ao vivo!</span>
          <h2>
            Trilha <br /> &quot;Do Comunicador Proativo&quot;
          </h2>
          <p>
            Quer destravar suas habilidades de comunicação em mandarim?
            Apresentamos a "Trilha do Comunicador Pró-ativo"! <br /> Com aulas
            gravadas e assistência diária, esta trilha é perfeita para você que
            busca aprimorar suas habilidades linguísticas. Imagine-se confiante,
            fluente e capaz de se comunicar em chinês. Não espere mais! Comece
            sua jornada de crescimento no mandarim agora mesmo. Escolha a
            "Trilha do Comunicador Pró-ativo" e destrave seu potencial
            linguístico.
          </p>

          {/* <a href="">
            Desbloquear <br /> Acesso Agora
          </a> */}
          <ConvertButton price={965} />
        </div>
        <div className="module-box module2">
          <span className="disclaimer green">Com acesso às aulas ao vivo!</span>
          <h2>
            Trilha <br /> &quot;Domínio do mandarim&quot;
          </h2>
          <p>
            Você deseja atingir um domínio sólido do mandarim? A "Trilha Domínio
            do Mandarim" é sua resposta! Com aulas ao vivo e suporte contínuo,
            esta trilha é ideal para estudantes ambiciosos que buscam
            aperfeiçoar suas habilidades. Visualize-se dominando o mandarim,
            participando de conversas fluentes e compreendendo profundamente a
            língua e cultura chinesa. A hora de avançar é agora! Escolha a
            "Trilha Domínio do Mandarim" e comece sua jornada em direção ao
            domínio do mandarim.
          </p>

          {/* <a href="">
            Desbloquear <br /> Acesso Agora
          </a> */}
          <ConvertButton price={1365} />
        </div>
        <div className="module-box module3">
          <span className="disclaimer green">Com acesso às aulas ao vivo!</span>
          <h2>
            Trilha <br /> &quot;Mestre da Pronúncia&quot;
          </h2>
          <p>
            Procurando aprimorar sua pronúncia em mandarim? Apresentamos a
            "Trilha Mestre da Pronúncia." Este pacote exclusivo oferece aulas ao
            vivo e um curso extra focado na perfeição da pronúncia chinesa.
            Imagine-se falando mandarim com confiança e clareza, impressionando
            todos com sua pronúncia impecável. Não perca a chance de se tornar
            um mestre da pronúncia em chinês. Escolha a "Trilha Mestre da
            Pronúncia" e comece sua jornada hoje mesmo!
          </p>

          {/* <a href="">
            Desbloquear <br /> Acesso Agora
          </a> */}
          <ConvertButton price={1420} />
        </div>
      </div>
    </main>
  );
};

export default Trilhas;
