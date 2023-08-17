import logoPrincipal from "../../public/lofoPrincipal.svg";
import braianVira01 from "../../public/braianVira01.svg";
import braianVira04 from "../../public/braianVira04.svg";
import casaFaxadaVira02 from "../../public/casaChinesaVira02.svg";
import aulagratuita from "../../public/imgAulaGratuita.svg";
import youtubeLogo from "../../public/youtubeLogo.svg";
import r7Logo from "../../public/r7Logo.svg";
import globonewsLogo from "../../public/globoNewsLogo.svg";

import Image from "next/image";

import { Button } from "@/components/Button";
import { ModulosMentoriaQuadrado } from "@/components/ModulosMentoriaQuadrado";
import { AlunosDizendo } from "@/components/AlunosDizendo";
import { PerguntasFrequentes } from "@/components/PerguntasFrequentes";

export default function Home() {
  return (
    <>
      <div id="menu-cima">
        <aside>
          <Image
            src={logoPrincipal}
            alt="logotipo chines na real"
            width={160}
          />
          <h2>
            Destrave sua pronúncia e desperte seu potencial{" "}
            <strong>com um método ágil e eficiente</strong>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
            ligula semper, sagittis nulla at <br />
            tincidunt leo. Quisque finibus ipsum ut dui ultrices, ut sagittis
            justo tristique. Sed ac eleifend leo, ut fermentum ex.
          </p>
          <Button />
        </aside>
        <div className="imgBrainAjuste">
          <Image
            src={braianVira01}
            alt="foto braiam apontando para a esquerda em com uma cara de uau"
            height={900}
          />
        </div>
      </div>
      <div className="modulo_da_mentoria">
        <div className="textoEimmagem">
          <div className="textos_modulo_da_mentoria">
            <h1>Módulos da mentoria</h1>
            <h2>
              Oque você vai receber ao se <br></br> inscrever neste treinamento
            </h2>
          </div>
          <div className="imagem_modulo_da_mentoria">
            <Image
              src={casaFaxadaVira02}
              alt="Santuário Kanda Myojin parte frontal do santuário"
              width={1100}
            />
          </div>
        </div>

        <div className="tres_queadros_modulos_mentoria">
          <ModulosMentoriaQuadrado />
          <ModulosMentoriaQuadrado />
          <ModulosMentoriaQuadrado />
        </div>
      </div>
      <div className="oq_dizem_os_alunos">
        <Image src={aulagratuita} alt="" width={1100} />
        <div>
          <h1>Oque Dizem Os Alunos</h1>
          <div className="quadrados_alunos">
            <AlunosDizendo />
            <AlunosDizendo />
            <AlunosDizendo />
          </div>

          <div className="quadrados_alunos">
            <AlunosDizendo />
            <AlunosDizendo />
            <AlunosDizendo />
          </div>
        </div>
        <Button />

        <div className="quem_sera_seu_professor">
          <div className="quem_sera_seu_professor_textos">
            <h1> Quem será seu professor?</h1>
            <p>
              Olá! Me chamo Braian! <br />
              Sou professor de chinês desde 2014. Durante esse tempo, trabalhei
              em diferentes projetos, desde aulas para crianças e adolescentes
              da rede municipal até traduções em fábricas e entrevistas para a
              TV. Embora tenha conquistado essas realizações, eu ainda sentia
              que poderia fazer mais. Decidi então empreender e, no início de
              2021, criei a página "Chinês na Real" no Facebook e Instagram. Lá,
              produzo conteúdo para ajudar mais pessoas a aprender o idioma de
              forma prática, com dicas, exercícios e curiosidades sobre a
              cultura chinesa. Além disso, estou sempre desenvolvendo novos
              projetos e ideias para tornar o aprendizado do chinês mais
              acessível e divertido. Se você quer aprender chinês de verdade,
              venha comigo nessa jornada!
            </p>
          </div>

          <Image
            src={braianVira04}
            alt="foto braiam apontando para a esquerda em com uma cara de uau"
            height={700}
          />
        </div>
      </div>
      <div className="garantia_de_7dias">
        <div className="garantia02">
          <h1>
            GARANTIA INCONDÍCIONAL <br />
            DE 7 DIAS
          </h1>

          <p>
            Eu respeito seu direito de “arrependimento de compra”. Por isso, em
            até 7 dias após sua inscrição, você pode pedir reembolso e vou te
            devolver integralmente o seu dinheiro. Basta enviar um e-mail para o
            suporte em “canais de contato” e pedir o reembolso. Você receberá
            cada centavo investido sem NENHUMA PERGUNTA. Simples assim!!
          </p>

          <Button />
        </div>
      </div>
      <div className="naMidia">
        <h1>Na Mídia</h1>
        <div className="logosNaMidia">
          <Image src={youtubeLogo} alt="" width={150} />
          <Image src={r7Logo} alt="" width={50} />
          <Image src={globonewsLogo} alt="" width={150} />
        </div>
      </div>

      <div className="aindaComDuvida">
        <h1>AINDA COM DÚVIDA?</h1>
        <p>Abaixo você encontra as perguntas mais comuns sobre a mentoria</p>

        <div>
          <PerguntasFrequentes />
          <PerguntasFrequentes />
          <PerguntasFrequentes />
          <PerguntasFrequentes />
          <PerguntasFrequentes />
        </div>

        <Image src={logoPrincipal} alt="logotipo chines na real" width={160} />
        <Button />
      </div>
    </>
  );
}
