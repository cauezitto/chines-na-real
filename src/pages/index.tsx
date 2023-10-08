import logoPrincipal from "../../public/lofoprincipal.svg";
import braianVira01 from "../../public/braianvira01.png";
import braianVira04 from "../../public/braianvira04.png";
import casaFaxadaVira02 from "../../public/casachinesavira02.png";
import aulagratuita from "../../public/imgaulagratuita.png";
import youtubeLogo from "../../public/youtubelogo.svg";
import r7Logo from "../../public/r7logo.svg";
import globonewsLogo from "../../public/sbt-news-logo.png";
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
        <div className="oq_dizem_os_alunos_wrapper">
          <h1>Oque Dizem Os Alunos</h1>
          <div className="quadrados_alunos">
            <AlunosDizendo
              foto="/leticia.png"
              nome="Letícia Ang"
              texto="As aulas me ajudaram bastante, principalmente por causa da didática. Os diálogos e as leituras consistentes proporcionaram mais fluência e um melhor entendimento do idioma"
            />
            <AlunosDizendo
              foto="/thales.png"
              nome="Thales Henrique"
              texto="O professor Braian é bem explicativo e tem a paciência em explicar o conteúdo para os alunos com dificuldade de aprender. sabe explciar bem e tem métodos simples e objetivos para o aprendizado dos alunos"
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
              nome="Sirina"
              texto="As aulas dele são indescritíveis! Fazem apenas alguns mese sque eu estudo com o professor Braian e ele sempre mostrou uma proficiência enorme. Além da metodologia simples e fácil, é de rápido aprendizado, ele sempre se adápta as minha exigências e conseguiu me fazer ler caracteres em menos tempo que eu esperava! Recomendo a todos de coração!"
            />
            <AlunosDizendo
              foto="/desconhecida2.png"
              nome="Débora"
              texto="Braian é um lecionador que, tem a delicadeza de respeitar nosso limite e é flexível na forma de ensinar para promover um maior rendimento. Ele promove o ensino com paciência necessária para o aprendizado. É impossível para alguém que se dedique deixar de aprender todo o conteúdo repassado. Além do que é um curso dinâmico e interativo. Em suma: Aprovado pela pessoa mais exgente, inconsistente e cheia de desculpas"
            />
          </div>
        </div>
        <Button />

        <br />
        <br />
        <br />
        <br />
        <br />

        {/* <div className="break_wide">
          <Image src={aulagratuita} alt="" width={1000} />
        </div>

        <div className="break_1024">
          <Image src={aulagratuita} alt="" width={800} />
        </div>

        <div className="mobile">
          <Image src={aulagratuita} alt="" width={300} />
        </div> */}

        <div className="quem_sera_seu_professor">
          <div className="quem_sera_seu_professor_textos">
            <h1> Quem será seu professor?</h1>
            <p>
              Olá, eu sou o Braian, Comecei a ensinar chinês em 2014 para alguns
              amigos. Em pouco tempo, percebi que eu gostava de ensinar e que eu
              poderia viver da minha paixão. No final de 2014 eu fui para a
              China e fiquei lá por quase 3 meses. Quando retornei, decidi sair
              da empresa da minha família e comecei a trabalhar na escola de uma
              chinesa ensinando português para chineses. 2 anos e meio depois,
              recebi uma proposta para participar de um projeto onde eu
              ensinaria chinês para crianças e adolescentes da rede municipal.
              Desde que comecei até hoje, realizei traduções em fábricas, dei
              aulas em 2 empresas (1 chinesa e 1 brasileira) e dei 3 entrevistas
              para a TV (1 delas para o SBT). Apesar de tais realizações, eu
              acreditava que poderia oferecer mais, ajudar mais pessoas. Então,
              no início de 2021, eu decidi empreender, e foi quando eu comecei
              com a minha página “Chinês na Real” no Facebook e Instagram. E
              desde então, venho produzindo conteúdo e desenvolvendo novos
              projetos para ajudar cada vez mais pessoas a aprender de forma
              prática o idioma chinês.
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
