import { Prose } from "@/components/Prose";

export default function Termos() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div className="container px-4 md:px-6 max-w-4xl">
        <Prose>
          <h1 className="scroll-m-20 text-2xl tracking-tight lg:text-3xl">
            Termos de Uso
          </h1>
          <p>Última atualização: 24 Outubro, 2024</p>

          <p>
            Seu acesso e uso do Serviço estão condicionados à sua aceitação e
            conformidade com estes Termos. Estes Termos se aplicam a todos os
            visitantes, usuários e outros que acessam ou usam o Serviço.
          </p>

          <p>
            Ao acessar ou usar o Serviço, você concorda em ficar vinculado a
            estes Termos. Se você discordar de qualquer parte dos termos,
            então você não poderá acessar o Serviço.
          </p>

          <h2>Conteúdo do Site</h2>
          <p>
            Todo o conteúdo disponível no site airtonvancin.com, incluindo
            textos, imagens e vídeos, é de propriedade intelectual de Airton
            Vancin e protegido por direitos autorais.
          </p>

          <h2>Responsabilidades do Usuário</h2>
          <p>
            Os usuários concordam em não violar direitos autorais, publicar
            conteúdo ilegal ou prejudicial, ou realizar atividades que possam
            comprometer a segurança do site.
          </p>

          <h2>Compras de Produtos Digitais</h2>
          <p>
            Ao adquirir um produto digital em nosso site, os usuários
            concordam com os termos de compra estabelecidos, incluindo
            políticas de reembolso e suporte ao cliente.
          </p>

          <h2>Alterações nos Termos</h2>
          <p>
            Reservamos o direito de modificar os termos de uso a qualquer
            momento. Os usuários serão notificados sobre quaisquer alterações
            significativas.
          </p>
        </Prose>
      </div>
    </section>
  );
}