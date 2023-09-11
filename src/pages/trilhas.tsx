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
          <h2>Tilha Start</h2>
          <p>
            Não sabe nada de chinês? Não se preocupe! Com a nossa mentoria
            "Starter," você aprenderá o básico de forma descomplicada. Este é o
            ponto de partida perfeito para quem deseja dominar o chinês, seja
            para trabalho ou viagens à China. Inicie sua jornada hoje e descubra
            como tornar-se fluente em chinês pode ser acessível e eficiente.
          </p>

          {/* <a href="">
            Desbloquear <br /> Acesso Agora
          </a> */}
          <ConvertButton />
        </div>
        <div className="module-box module2">
          <h2>Tilha Avançada</h2>
          <p>
            Já possui o conhecimento básico de chinês e deseja atingir a
            fluência? Nossa mentoria "Avançada" é projetada para levar suas
            habilidades de conversação a um nível superior. Com nosso método
            prático e foco na prática de conversação, você irá destravar suas
            habilidades de comunicação em chinês e alcançar a fluência desejada.
            Transforme seu conhecimento em habilidades práticas hoje mesmo.
          </p>

          {/* <a href="">
            Desbloquear <br /> Acesso Agora
          </a> */}
          <ConvertButton />
        </div>
        <div className="module-box module3">
          <h2> Combo Fluency </h2>
          <p>
            Quer passar de iniciante a fluente em chinês? Nossa mentoria "Zero à
            Fluência" é a escolha ideal para quem está comprometido em aprender
            chinês de maneira completa e eficaz. Não importa o seu ponto de
            partida, nossa abordagem cuidadosamente planejada irá guiá-lo de
            forma eficiente até a fluência. Comece sua jornada agora e descubra
            como o chinês pode ser dominado de maneira acessível e gratificante.
          </p>

          {/* <a href="">
            Desbloquear <br /> Acesso Agora
          </a> */}
          <ConvertButton />
        </div>
      </div>
    </main>
  );
};

export default Trilhas;
