import Image from "next/image";

type AlunoProps = {
  foto: string;
  nome: string;
  texto: string;
};
export function AlunosDizendo({ foto, nome, texto }: AlunoProps) {
  return (
    <>
      <div className="alunosFalando">
        <div className="voltalaunosfalando">
          <div className="alunosFalando_texto_com_img">
            <Image
              src={foto}
              alt="Imagem dos alunos"
              style={{ borderRadius: "100%" }}
              width={80}
              height={80}
            />
            <h1>{nome}</h1>
          </div>
          <p>&quot;{texto}&quot;</p>
        </div>
      </div>
    </>
  );
}
