import Image from "next/image";
export function AlunosDizendo() {
  return (
    <>
      <div className="alunosFalando">
        <div className="voltalaunosfalando">
          <div className="alunosFalando_texto_com_img">
            <Image
              src="/aluno01.png"
              alt="Imagem dos alunos"
              width={80}
              height={80}
            />
            <h1>Jefferson Souza</h1>
          </div>
          <p>
            &quot;Recomendo fortemente a mentoria de pronúncia em chinês. As
            aulas são personalizadas de acordo com minhas necessidades e
            dificuldades específicas. A abordagem prática e os exercícios de
            pronúncia têm sido extremamente úteis. Estou muito satisfeito com os
            resultados até agora!&quot;
          </p>
        </div>
      </div>
    </>
  );
}
