import logoPrincipal from "../../public/lofoprincipal.svg";
import braianVira01 from "../../public/braianvira01.png";
import braianVira04 from "../../public/braianvira04.png";
import casaFaxadaVira02 from "../../public/braian-graçom.png";
import aulagratuita from "../../public/imgaulagratuita.png";
import youtubeLogo from "../../public/youtubelogo.svg";
import r7Logo from "../../public/r7logo.svg";
import globonewsLogo from "../../public/sbt-news-logo.png";
import voltaAoTopo from "../../public/voltaaotopo.svg";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { LuFileSignature } from "react-icons/lu";
import { GoDesktopDownload } from "react-icons/go";
import { BiConversation, BiLogoZoom } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import { useState } from "react";

import Image from "next/image";

import { Button } from "@/components/Button";
import { ModulosMentoriaQuadrado } from "@/components/ModulosMentoriaQuadrado";
import { AlunosDizendo } from "@/components/AlunosDizendo";
import { PerguntasFrequentes } from "@/components/PerguntasFrequentes";

export default function Home() {
  const [showVimeoPlayer, setShowVimeoPlayer] = useState(false);
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
            Destrave a sua fala e desperte o seu potencial{" "}
            <strong>com um método prático e eficiente</strong>
          </h2>
          <p style={{ fontSize: "1.3rem", fontWeight: 600, marginBottom: 20 }}>
            {`Cansado de estudar e não conseguir botar o seu chinês na prática?`}{" "}
            <br />
            Estude já com um método diferente{" "}
            <b> focado na prática do idioma </b> por meio de vídeo aulas
            intuitivas e <b> encontros ao vivo toda semana!</b>
          </p>
          <Button />
        </aside>
        <div className="imgBrainAjuste">
          <div className="break_1024">
            <Image
              src={braianVira01}
              alt="foto braiam apontando para a esquerda em com uma cara de uau"
              height={550}
              style={{ marginTop: 200 }}
            />
          </div>

          <div className="break_wide">
            <Image
              src={braianVira01}
              alt="foto braiam apontando para a esquerda em com uma cara de uau"
              height={600}
            />
          </div>
        </div>
      </div>
      <div className="modulo_da_mentoria">
        <div className="textos_modulo_da_mentoria">
          <h2>Método da mentoria</h2>
          <h3 className="secondaryTitle">
            O&nbsp;que você vai receber ao se <br></br> inscrever neste
            treinamento
          </h3>
        </div>
        {/* <div className="textoEimmagem">
          <div className="imagem_modulo_da_mentoria temple">
            <div className="break_wide">
              <Image
                src={casaFaxadaVira02}
                alt="Santuário Kanda Myojin parte frontal do santuário"
                width={620}
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
        </div> */}

        <div className="tres_queadros_modulos_mentoria">
          <ModulosMentoriaQuadrado
            title="+ DE 210 VIDEOAULAS"
            icon={<MdOutlineOndemandVideo />}
          >
            <p>
              Incluem 3 módulos com 3 séries de desenhos diferentes. Cada vídeo
              com uma atividade prática para você treinar o seu chinês.
            </p>
          </ModulosMentoriaQuadrado>
          <ModulosMentoriaQuadrado
            title="MATERIAIS DE APOIO"
            icon={<GoDesktopDownload />}
          >
            <p>
              Para tornar o seu estudo mais dinâmico, você terá ferramentas
              variadas como PDFs, arquivos de áudio, flashcards e quizzes.
            </p>
          </ModulosMentoriaQuadrado>
          <ModulosMentoriaQuadrado
            title="ROTEIRO DE ESTUDOS"
            icon={<LuFileSignature />}
          >
            <p>
              Com a ajuda do roteiro, você não perderá tempo, pois saberá
              exatamente que tarefa fazer e como fazer a cada dia.
            </p>
          </ModulosMentoriaQuadrado>

          <ModulosMentoriaQuadrado
            title="SUPORTE DIÁRIO"
            icon={<BiConversation />}
          >
            <p>
              Acompanhamento e suporte diário para correção das tarefas e
              feedbacks para saber onde melhorar.
            </p>
          </ModulosMentoriaQuadrado>

          <ModulosMentoriaQuadrado
            title="AULAS SEMANAIS AO VIVO"
            icon={<BiLogoZoom />}
          >
            <p>
              Aulas ao vivo via zoom onde trabalharemos conteúdos variados de
              acordo com seu pedido ou necessidade.
            </p>
          </ModulosMentoriaQuadrado>

          <ModulosMentoriaQuadrado
            title="GRUPO NO FACEBOOK"
            icon={<BsFacebook />}
          >
            <p>
              Você poderá interagir com outras pessoas que têm os mesmos
              objetivos e ainda receberá indicações para vagas de trabalho.
            </p>
          </ModulosMentoriaQuadrado>
        </div>
      </div>
      <div className="oq_dizem_os_alunos">
        {!showVimeoPlayer && (
          <>
            <div
              className="break_wide"
              onClick={() => setShowVimeoPlayer(true)}
              style={{ cursor: "pointer" }}
            >
              <Image src={aulagratuita} alt="" width={1000} />
            </div>

            <div
              className="break_1024"
              onClick={() => setShowVimeoPlayer(true)}
              style={{ cursor: "pointer" }}
            >
              <Image src={aulagratuita} alt="" width={800} />
            </div>

            <div
              className="mobile"
              onClick={() => setShowVimeoPlayer(true)}
              style={{ cursor: "pointer" }}
            >
              <Image src={aulagratuita} alt="" width={300} />
            </div>
          </>
        )}

        {showVimeoPlayer && (
          <>
            <iframe
              src="https://player.vimeo.com/video/791315684?h=ee9492fd28"
              width="100%"
              height="360"
              style={{ marginBottom: 15, border: 0 }}
              className="break_1024"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>

            <iframe
              src="https://player.vimeo.com/video/791315684?h=ee9492fd28"
              width="100%"
              height="360"
              style={{ marginBottom: 15, border: 0 }}
              className="break_wide"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>

            <iframe
              src="https://player.vimeo.com/video/791315684?h=ee9492fd28"
              width="100%"
              height="360"
              style={{ marginBottom: 15, border: 0 }}
              className="mobile"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </>
        )}

        <Button />
        <div className="oq_dizem_os_alunos_wrapper">
          <h1>O que dizem os alunos</h1>
          <div className="quadrados_alunos">
            <AlunosDizendo
              foto="/leticia.png"
              nome="Letícia Ang"
              texto="As aulas me ajudaram bastante, principalmente por causa da didática. Os diálogos e as leituras consistentes proporcionaram mais fluência e um melhor entendimento do idioma"
            />
            <AlunosDizendo
              foto="/thales.png"
              nome="Thales Henrique"
              texto="O professor Braian é bem explicativo e tem a paciência em explicar o conteúdo para os alunos com dificuldade de aprender. Sabe explicar bem e tem métodos simples e objetivos para o aprendizado dos alunos"
            />
            <AlunosDizendo
              foto="/tifany.png"
              nome="Tifany L. S. Vieira"
              texto="O professor tem uma boa estratégia de ensino pelo simples fato de fazer diferente. Sempre usa o treinamento em voz alta para podermos treinar pronúncia, e isso é bom para quem tem dificuldade.... resumindo a proposta vale a pena!"
            />
          </div>

          <div className="quadrados_alunos">
            <AlunosDizendo
              foto="/nicole.png"
              nome="Nicole Bueno"
              texto="As aulas do professor Braian são muito boas e eficientes. Ele explica de um jeito divertido e que não fica cansativo. No começo eu pensei que mandarim era um bicho de sete cabeças, e que nunca iria conseguir entender nada, mas aos poucos fui percebendo que não era difícil, e que tudo depende da nossa dedicação e das explicações da aula"
            />
            <AlunosDizendo
              foto="/desconhecida1.png"
              nome="Sinara Menezes"
              texto="As aulas dele são indescritíveis! Fazem apenas alguns meses que eu estudo com o professor Braian e ele sempre mostrou uma proficiência enorme. Além da metodologia simples e fácil, é de rápido aprendizado. Ele sempre se adapta às minhas exigências e conseguiu me fazer ler caracteres em menos tempo que eu esperava! Recomendo a todos de coração!"
            />
            <AlunosDizendo
              foto="/desconhecida2.png"
              nome="Débora"
              texto="Braian é um lecionador que tem a delicadeza de respeitar nosso limite e é flexível na forma de ensinar para promover um maior rendimento. Ele promove o ensino com paciência necessária para o aprendizado. É impossível para alguém que se dedique deixar de aprender todo o conteúdo repassado. Além do que é um curso dinâmico e interativo. Em suma: Aprovado pela pessoa mais exigente, inconsistente e cheia de desculpas"
            />
          </div>
        </div>

        {/* <br />
        <br />
        <br />
        <br />
        <br /> */}

        <div className="quem_sera_seu_professor">
          <div className="quem_sera_seu_professor_textos">
            <h1> Quem será o seu professor?</h1>
            <p>
              Olá, eu sou o Braian! Comecei a ensinar chinês em 2014 para alguns
              amigos. Em pouco tempo, percebi que eu gostava de ensinar e que eu
              poderia viver da minha paixão. <br /> <br /> No final de 2014 eu
              fui para a China e fiquei lá por quase 3 meses. Quando retornei,
              decidi sair da empresa da minha família e comecei a trabalhar na
              escola de uma chinesa ensinando português para chineses. 2 anos e
              meio depois, recebi uma proposta para participar de um projeto
              onde eu ensinaria chinês para crianças e adolescentes da rede
              municipal. <br /> <br /> Desde que comecei até hoje, realizei
              traduções em fábricas, dei aulas em 2 empresas (1 chinesa e 1
              brasileira) e dei 3 entrevistas para a TV (1 delas para o SBT).{" "}
              <br /> <br />
              Apesar de tais realizações, eu acreditava que poderia oferecer
              mais, ajudar mais pessoas. Então, no início de 2021, eu decidi
              empreender, e foi quando eu comecei com a minha página “Chinês na
              Real” no Facebook e Instagram. E desde então, venho produzindo
              conteúdo e desenvolvendo novos projetos para ajudar cada vez mais
              pessoas a aprender de forma prática o idioma chinês.
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
            GARANTIA INCONDICIONAL <br />
            DE 15 DIAS
          </h1>

          <p>
            Após entrar na mentoria, você terá até 15 dias para aplicar o que eu
            te propor. Nesse período, se por qualquer razão você não gostar do
            que adquiriu, não ver nenhum resultado real, basta mandar um e-mail
            para a minha equipe que faremos o reembolso de cada centavo que você
            investiu. Sem pegadinhas!
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
        <div className="break_1024">
          <iframe
            style={{ marginTop: 100 }}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_TqIk0oF-ck?si=Fb2Dip4-crNq7DcR&amp;start=54"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mobile">
          <iframe
            style={{ marginTop: 100 }}
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/_TqIk0oF-ck?si=Fb2Dip4-crNq7DcR&amp;start=54"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="aindaComDuvida">
        <h1>AINDA COM DÚVIDA?</h1>
        <p>Abaixo você encontra as perguntas mais comuns sobre a mentoria</p>

        <div>
          <PerguntasFrequentes
            ask="Por quanto tempo tenho acesso às aulas gravadas?"
            answer="No caso das aulas básicas o acesso é de até um ano. No caso da mentoria o acesso é igual ao prazo da mentoria que é de 6 meses"
          />
          <PerguntasFrequentes
            ask="Se eu não gostar posso cancelar?"
            answer="Temos 7 dias de prazo para o arrependimento incondicional da compra"
          />
          <PerguntasFrequentes
            ask="É possível cancelar após os 7 dias?"
            answer="Num prazo máximo de até 15 dias você poderá nos enviar um email para solicitar o seu reembolso do valor pago e cancelar sua compra"
          />
          <PerguntasFrequentes
            ask="Como funcionam as aulas, são gravadas ou ao vivo?"
            answer="As aulas são gravadas e ficam disponibilizadas na plataforma eduz. Uma vez na semana os alunos das trilhas avançado e combo fluency terão acesso também aos nossos encontros por zoom onde a aula será ao vivo"
          />
          <PerguntasFrequentes
            ask="Não tenho cartão de crédito. É possível parcelar de outra forma?"
            answer="Para pagamentos a vista é possível fazer o pagamento via boleto ou pix. Porém em caso de pagamento parcelado somente no cartão de crédito"
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
