import logoPrincipal from "../../public/lofoprincipal.svg";
import braianVira01 from "../../public/braianvira01.png";
import braianVira04 from "../../public/braianvira04.png";
import casaFaxadaVira02 from "../../public/casachinesavira02.png";
import aulagratuita from "../../public/imgaulagratuita.png";
import youtubeLogo from "../../public/youtubelogo.svg";
import r7Logo from "../../public/r7logo.svg";
import globonewsLogo from "../../public/globonewslogo.svg";
import voltaAoTopo from "../../public/voltaaotopo.svg";

import Image from "next/image";

import { Button } from "@/components/Button";
import { ModulosMentoriaQuadrado } from "@/components/ModulosMentoriaQuadrado";
import { AlunosDizendo } from "@/components/AlunosDizendo";
import { PerguntasFrequentes } from "@/components/PerguntasFrequentes";

export default function Home() {
  return (
    <>
      <div id="menu-cima">
        <aside id="topo">
          <Image
            src={logoPrincipal}
            alt="logotipo chines na real"
            width={160}
          />
          <h2>
            Destrave sua pronúncia e desperte seu potencial{" "}
            <strong>com um método ágil e eficiente</strong>
          </h2>
          <p style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: 20 }}>
            {`Cansado de cursinhos razos com aulas monótonas que só te ensinam aquele famoso "be-a-ba" que você já sabe?`}{" "}
            <br />
            Aprenda{" "}
            <b style={{ fontWeight: 800, fontSize: "1.2rem" }}>
              CHINÊS DE VERDADE
            </b>{" "}
            sem enrolação com aulas intuitivas e{" "}
            <b style={{ fontWeight: 800, fontSize: "1.2rem" }}>
              {" "}
              ENCONTROS AO VIVO TODA SEMANA!
            </b>
          </p>
          <Button />
        </aside>
        <div className="imgBrainAjuste">
          <div className="break_1024">
            <Image
              src={braianVira01}
              alt="foto braiam apontando para a esquerda em com uma cara de uau"
              height={550}
            />
          </div>

          <div className="break_wide">
            <Image
              src={braianVira01}
              alt="foto braiam apontando para a esquerda em com uma cara de uau"
              height={700}
            />
          </div>
        </div>
      </div>
      <div className="modulo_da_mentoria">
        <div className="textoEimmagem">
          <div className="textos_modulo_da_mentoria">
            <h2>Método da mentoria</h2>
            <h3 className="secondaryTitle">
              Oque você vai receber ao se <br></br> inscrever neste treinamento
            </h3>
          </div>
          <div className="imagem_modulo_da_mentoria temple">
            <div className="break_wide">
              <Image
                src={casaFaxadaVira02}
                alt="Santuário Kanda Myojin parte frontal do santuário"
                width={850}
              />
            </div>

            <div className="break_1024 temples">
              <Image
                src={casaFaxadaVira02}
                alt="Santuário Kanda Myojin parte frontal do santuário"
                width={650}
              />
            </div>
          </div>
        </div>

        <div className="tres_queadros_modulos_mentoria">
          <ModulosMentoriaQuadrado title="PLANO DE AÇÃO">
            <p>
              Mapa e roteiro de estudos que descreve em detalhes as tarefas que
              você precisa fazer e como fazê-las
            </p>
          </ModulosMentoriaQuadrado>
          <ModulosMentoriaQuadrado title="CONTEÚDOS INTUITÍVOS">
            <p>
              Aprenda de forma divertida com trechos rápidos de desenhos
              animados. <br /> <br /> Acredite... muitas vezes você vai entender
              a palavra apenas pelo contexto sem nunca ter a visto antes
            </p>
          </ModulosMentoriaQuadrado>
          <ModulosMentoriaQuadrado title="PRÁTICA">
            <p>
              Exercícios práticos que você vai precisar fazer todos os dias para
              ATIVAR as suas habilidades linguisticas, especialmente a FALA
            </p>
          </ModulosMentoriaQuadrado>

          <ModulosMentoriaQuadrado title="ACOMPANHAMENTO">
            <p>
              Toda semana teremos encontros ao vivo pelo aplicativo ZOOM onde
              vamos poder nos conhecer melhor e poder fazer aulas variadas de
              acordo com a sua necessidade!
            </p>
          </ModulosMentoriaQuadrado>
        </div>
      </div>
      <div className="oq_dizem_os_alunos">
        <div className="break_wide">
          <Image src={aulagratuita} alt="" width={1000} />
        </div>

        <div className="break_1024">
          <Image src={aulagratuita} alt="" width={800} />
        </div>

        <div className="mobile">
          <Image src={aulagratuita} alt="" width={300} />
        </div>
        <div className="oq_dizem_os_alunos_wrapper">
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
              2021, criei a página &quot;Chinês na Real&quot; no Facebook e
              Instagram. Lá, produzo conteúdo para ajudar mais pessoas a
              aprender o idioma de forma prática, com dicas, exercícios e
              curiosidades sobre a cultura chinesa. Além disso, estou sempre
              desenvolvendo novos projetos e ideias para tornar o aprendizado do
              chinês mais acessível e divertido. Se você quer aprender chinês de
              verdade, venha comigo nessa jornada!
            </p>
          </div>

          <div className="break_1024">
            <Image
              src={braianVira04}
              alt="foto braiam apontando para a esquerda em com uma cara de uau"
              height={500}
            />
          </div>

          <div className="break_wide">
            <Image
              src={braianVira04}
              alt="foto braiam apontando para a esquerda em com uma cara de uau"
              height={700}
            />
          </div>

          <div className="mobile">
            <Image
              src={braianVira04}
              alt="foto braiam apontando para a esquerda em com uma cara de uau"
              height={320}
            />
          </div>
        </div>
      </div>
      <div className="garantia_de_7dias">
        <div className="garantia02">
          <h1>
            GARANTIA INCONDÍCIONAL <br />
            DE 7 DIAS
          </h1>

          <p>
            Eu respeito seu direito de &quot;arrependimento de compra&quot;. Por
            isso, em até 7 dias após sua inscrição, você pode pedir reembolso e
            vou te devolver integralmente o seu dinheiro. Basta enviar um e-mail
            para o suporte em &quot;canais de contato&quot; e pedir o reembolso.
            Você receberá cada centavo investido sem NENHUMA PERGUNTA. Simples
            assim!!
          </p>

          <Button />
        </div>
      </div>
      <section>
        <h2></h2>
      </section>
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
          <PerguntasFrequentes
            ask="Por quanto tempo tenho acesso à mentoria?"
            answer="Resposta da pergunta"
          />
          <PerguntasFrequentes
            ask="Se eu não gostar posso cancelar?"
            answer="Resposta da pergunta"
          />
          <PerguntasFrequentes
            ask="É possível cancelar após os 7 dias?"
            answer="Resposta da pergunta"
          />
          <PerguntasFrequentes
            ask="Como funcionam as aulas, são gravadas ou ao vivo?"
            answer="Resposta da pergunta"
          />
          <PerguntasFrequentes
            ask="Não tenho cartão de crédito. É possível parcelar de outra forma?"
            answer="Resposta da pergunta"
          />
        </div>

        <div className="logoComBotaoAindaComDuvida">
          <Image
            src={logoPrincipal}
            alt="logotipo chines na real"
            width={160}
          />
          <br />
          <Button />
        </div>
      </div>

      <div className="rodape">
        <div className="voltarAoTopo">
          <a href="#topo" target="_self">
            <Image src={voltaAoTopo} alt="" width={35} />
          </a>
          <h1>voltar ao topo</h1>
        </div>

        <p>© 2023 Chinês na Real</p>
      </div>
    </>
  );
}
