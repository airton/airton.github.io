import { Prose } from "@/components/Prose";

export default function Politicas() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div className="container px-4 md:px-6 max-w-4xl">
        <Prose>
          <h1 className="scroll-m-20 text-2xl tracking-tight lg:text-3xl">
            Políticas de Privacidade
          </h1>
          <p>Última atualização: 24 Outubro, 2024</p>

          <p>
            Esta página informa sobre nossas políticas relacionadas à coleta,
            uso e divulgação de dados pessoais quando você usa nosso Serviço e
            as escolhas que você associou a esses dados.
          </p>

          <p>
            Usamos seus dados para fornecer e melhorar o Serviço. Ao usar o
            Serviço, você concorda com a coleta e uso de informações de acordo
            com esta política. A menos que definido de outra forma nesta
            Política de Privacidade, os termos usados nesta Política de
            Privacidade têm os mesmos significados que em nossos Termos e
            Condições.
          </p>

          <h2>Definições</h2>
          <ul>
            <li>
              <strong>Coleta de Informações</strong>
              <p>
                O site airtonvancin.com coleta informações pessoais, como nome
                e endereço de e-mail, por meio de formulários de contato e
                para processamento de compras de produtos digitais.
              </p>
            </li>
            <li>
              <strong>Uso das Informações</strong>
              <p>
                As informações coletadas são utilizadas para fornecer conteúdos
                de tecnologia, compartilhar projetos pessoais e facilitar a
                compra de produtos digitais. Não compartilhamos essas
                informações com terceiros sem consentimento.
              </p>
            </li>
            <li>
              <strong>Cookies</strong>
              <p>
                Utilizamos cookies para melhorar a experiência do usuário e
                analisar o tráfego do site. Os usuários podem gerenciar as
                configurações de cookies em seus navegadores.
              </p>
            </li>
            <li>
              <strong>Segurança</strong>
              <p>
                Implementamos medidas de segurança para proteger as informações
                dos usuários contra acesso não autorizado ou divulgação.
              </p>
            </li>
          </ul>
        </Prose>
      </div>
    </section>
  );
}