import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions",
};

export default function Page() {
  return (
    <>
      <div className="max-w-[600px] m-auto my-20">
        <h1 className="scroll-m-20 text-2xl tracking-tight lg:text-3xl">
          Termos de Uso
        </h1>

        <div className="text-component line-height-lg v-space-md">
          <p className="leading-7 mt-8">Última atualização: 24 Outubro, 2024</p>

          <p className="leading-7 mt-8">
            Seu acesso e uso do Serviço estão condicionados à sua aceitação e
            conformidade com estes Termos. Estes Termos se aplicam a todos os
            visitantes, usuários e outros que acessam ou usam o Serviço.
          </p>

          <p className="leading-7 mt-8">
            Ao acessar ou usar o Serviço, você concorda em ficar vinculado a
            estes Termos. Se você discordar de qualquer parte dos termos, então
            você não poderá acessar o Serviço.
          </p>

          <h2>Conteúdo do Site</h2>

          <p className="leading-7 mt-8">
            Todo o conteúdo disponível no site airtonvancin.com, incluindo
            textos, imagens e vídeos, é de propriedade intelectual de Airton
            Vancin e protegido por direitos autorais.
          </p>
          <h2>Responsabilidades do Usuário</h2>

          <p className="leading-7 mt-8">
            Os usuários concordam em não violar direitos autorais, publicar
            conteúdo ilegal ou prejudicial, ou realizar atividades que possam
            comprometer a segurança do site.
          </p>
          <h2>Compras de Produtos Digitais</h2>

          <p className="leading-7 mt-8">
            Ao adquirir um produto digital em nosso site, os usuários concordam
            com os termos de compra estabelecidos, incluindo políticas de
            reembolso e suporte ao cliente.
          </p>
          <h2>Alterações nos Termos</h2>

          <p className="leading-7 mt-8">
            Reservamos o direito de modificar os termos de uso a qualquer
            momento. Os usuários serão notificados sobre quaisquer alterações
            significativas.
          </p>
        </div>
      </div>
    </>
  );
}
