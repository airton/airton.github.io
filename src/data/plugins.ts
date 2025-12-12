export interface PluginData {
  id: number;
  name: string;
  slug: string;
  desc: string;
  image: string;
  link: string;
  fullDescription: string;
  features: string[];
  installation: string;
  faq: { question: string; answer: string }[];
}

export const plugins: PluginData[] = [
  {
    id: 1,
    name: "Video Destacado",
    slug: "video-destacado",
    desc: "A plugin to set a featured video for posts.",
    image: "",
    link: "https://wordpress.org/plugins/video-destacado/",
    fullDescription: `
            <p>O <strong>Video Destacado</strong> é uma solução robusta e intuitiva para editores e desenvolvedores WordPress que desejam ir além das imagens destacadas tradicionais. Com o crescimento exponencial do consumo de vídeo na web, ter a capacidade de destacar vídeos diretamente na listagem de posts ou no topo de seus artigos é fundamental para aumentar o engajamento.</p>
            
            <p>Este plugin permite substituir a "Imagem Destacada" padrão do WordPress por um vídeo, suportando as principais plataformas de hospedagem de vídeo do mercado, como YouTube, Vimeo e Dailymotion, além de vídeos hospedados localmente via MP4. A integração é perfeita, utilizando a interface nativa do WordPress, o que significa que seus clientes ou editores não precisarão aprender um novo fluxo de trabalho.</p>

            <h3>Por que usar vídeos destacados?</h3>
            <p>Vídeos retêm a atenção do usuário por mais tempo do que imagens estáticas. Estudos mostram que páginas com vídeos têm taxas de conversão mais altas e menor taxa de rejeição. Se você gerencia um blog de tutoriais, um site de notícias ou um portfólio, o Video Destacado oferece a flexibilidade necessária para apresentar seu conteúdo de forma dinâmica.</p>

            <h3>Funcionalidades Principais</h3>
            <p>O plugin foi desenvolvido com foco em performance e usabilidade. Ele não carrega scripts pesados desnecessariamente e se integra aos ganchos (hooks) padrões do WordPress, garantindo compatibilidade com a maioria dos temas modernos.</p>
        `,
    features: [
      "Suporte a YouTube, Vimeo e Dailymotion.",
      "Suporte a vídeos MP4 nativos.",
      "Substituição automática da imagem destacada em temas compatíveis.",
      "Opção de autoplay (configurável).",
      "Responsivo: adapta-se a qualquer tamanho de tela.",
      "Leve e otimizado para SEO.",
      "Compatível com o Editor Clássico e Gutenberg.",
    ],
    installation: `
            <ol>
                <li>No painel do WordPress, vá para <strong>Plugins > Adicionar Novo</strong>.</li>
                <li>Pesquise por "Video Destacado".</li>
                <li>Clique em <strong>Instalar Agora</strong> e depois em <strong>Ativar</strong>.</li>
                <li>Ao editar um post, você verá uma nova caixa "Video Destacado" na barra lateral.</li>
                <li>Cole a URL do seu vídeo e salve o post.</li>
            </ol>
        `,
    faq: [
      {
        question: "Funciona com qualquer tema?",
        answer:
          "Na maioria dos casos, sim. O plugin tenta filtrar a chamada `the_post_thumbnail`. Se o seu tema usa essa função padrão, funcionará automaticamente.",
      },
      {
        question: "Impacta a velocidade do site?",
        answer:
          "O plugin carrega apenas os recursos necessários quando um vídeo está presente. É altamente otimizado.",
      },
    ],
  },
  {
    id: 2,
    name: "Manage User Roles",
    slug: "manage-user-roles",
    desc: "A plugin to manage user roles and capabilities.",
    image: "",
    link: "https://wordpress.org/plugins/manage-user-roles/",
    fullDescription: `
            <p>O <strong>Manage User Roles</strong> é a ferramenta definitiva para administradores de sites WordPress que precisam de controle granular sobre o que seus usuários podem ou não fazer. O sistema de funções (roles) e capacidades (capabilities) do WordPress é poderoso, mas muitas vezes difícil de gerenciar sem editar código. Este plugin resolve isso trazendo uma interface visual simples e poderosa.</p>

            <p>Com ele, você pode criar novas funções do zero, clonar funções existentes para fazer pequenas modificações, ou editar as capacidades das funções padrão (Editor, Autor, Colaborador, etc.). Isso é essencial para sites de membros, e-commerces, jornais online ou qualquer site com múltiplos colaboradores.</p>

            <h3>Cenários de Uso</h3>
            <p>Imagine que você tem um "Editor Júnior" que deve poder editar posts, mas não publicá-los, e definitivamente não deve ter acesso às configurações de plugins. Com o Manage User Roles, você cria essa função em segundos, marcando apenas as caixas de seleção desejadas.</p>
        `,
    features: [
      "Criação ilimitada de novas funções de usuário.",
      "Edição de capacidades de funções existentes.",
      "Clonagem de funções para agilizar a configuração.",
      "Interface intuitiva com checkbox para cada capacidade.",
      "Reset para as configurações padrão do WordPress.",
      "Suporte a capacidades personalizadas de outros plugins (como WooCommerce).",
      "Multisite compatível.",
    ],
    installation: `
            <ol>
                <li>Vá para <strong>Plugins > Adicionar Novo</strong>.</li>
                <li>Busque por "Manage User Roles".</li>
                <li>Instale e ative o plugin.</li>
                <li>Acesse o menu <strong>Usuários > User Roles</strong> para começar a gerenciar.</li>
            </ol>
        `,
    faq: [
      {
        question: "Posso excluir a função de Administrador?",
        answer:
          "Por segurança, o plugin impede a exclusão da função de administrador principal para evitar bloqueios acidentais.",
      },
      {
        question: "As alterações afetam usuários existentes?",
        answer:
          "Sim, todos os usuários designados àquela função herdarão imediatamente as novas permissões.",
      },
    ],
  },
  {
    id: 3,
    name: "Nudge SEO AI",
    slug: "nudge-seo-ai",
    desc: "An AI-powered SEO plugin to help you with your content.",
    image: "",
    link: "https://wordpress.org/plugins/nudge-seo-ai/",
    fullDescription: `
            <p><strong>Nudge SEO AI</strong> revoluciona a maneira como você otimiza seu conteúdo para motores de busca. Em vez de apenas verificar checklists estáticos como plugins de SEO tradicionais, o Nudge utiliza inteligência artificial avançada para analisar seu texto e oferecer sugestões contextuais, criativas e estratégicas para melhorar seu ranking.</p>

            <p>A criação de conteúdo otimizado para SEO pode ser exaustiva. Encontrar as palavras-chave certas, manter a densidade adequada sem parecer robótico e garantir a legibilidade são desafios constantes. O Nudge SEO AI atua como um editor assistente inteligente, sugerindo melhorias em tempo real enquanto você escreve.</p>

            <h3>Inteligência Artificial a seu Favor</h3>
            <p>O plugin analisa os "Top 10" resultados do Google para sua palavra-chave foco e identifica padrões que estão funcionando para seus concorrentes. Ele então sugere tópicos a serem cobertos, perguntas a serem respondidas e termos relacionados a serem incluídos, tudo para aumentar a relevância tópica do seu artigo.</p>
        `,
    features: [
      "Análise de conteúdo baseada em IA.",
      "Sugestões de palavras-chave de cauda longa.",
      "Otimização de títulos e meta descrições com IA.",
      "Análise de legibilidade e tom de voz.",
      "Sugestões de links internos inteligentes.",
      "Geração automática de ALT text para imagens.",
      "Integração com OpenAI (requer chave API).",
    ],
    installation: `
            <ol>
                <li>Instale via <strong>Plugins > Adicionar Novo > Nudge SEO AI</strong>.</li>
                <li>Ative o plugin.</li>
                <li>Vá para as configurações e insira sua chave de API (se necessário para recursos premium).</li>
                <li>Abra qualquer post e veja a barra lateral do Nudge com sugestões.</li>
            </ol>
        `,
    faq: [
      {
        question: "Preciso pagar pelo uso da IA?",
        answer:
          "O plugin possui uma versão gratuita generosa. Recursos avançados podem exigir uma assinatura ou chave de API própria.",
      },
      {
        question: "Substitui o Yoast ou RankMath?",
        answer:
          "Ele pode trabalhar em conjunto. Enquanto Yoast foca em aspectos técnicos, o Nudge foca na qualidade e relevância do conteúdo.",
      },
    ],
  },
  {
    id: 4,
    name: "JumpCloud SSO Connector",
    slug: "jumpcloud-sso-connector",
    desc: "A plugin to connect your WordPress site with JumpCloud SSO.",
    image: "",
    link: "http://wordpress.org/plugins/search/jumpcloud-sso-connector/",
    fullDescription: `
            <p>Segurança e facilidade de acesso são primordiais em ambientes corporativos. O <strong>JumpCloud SSO Connector</strong> permite que sua organização integre autenticação Single Sign-On (SSO) baseada em SAML 2.0 diretamente no seu site WordPress. Isso significa que seus funcionários ou membros podem fazer login no WordPress usando suas credenciais corporativas do JumpCloud, sem precisar memorizar mais uma senha.</p>

            <p>Este plugin foi projetado para simplificar a configuração complexa de SAML. Com campos claros e instruções passo-a-passo, você estabelece a relação de confiança entre o JumpCloud (Identity Provider) e seu WordPress (Service Provider) em minutos.</p>

            <h3>Segurança Enterprise</h3>
            <p>Ao centralizar a autenticação, você ganha controle total sobre quem acessa seu site. Se um funcionário deixa a empresa e é removido do JumpCloud, ele perde automaticamente o acesso ao WordPress, fechando brechas de segurança comuns.</p>
        `,
    features: [
      "Suporte nativo a SAML 2.0.",
      "Mapeamento de atributos (Email, Nome, Sobrenome).",
      "Mapeamento de grupos do JumpCloud para funções do WordPress (Ex: Grupo 'Admins' -> Função 'Administrator').",
      "Login forçado (redirecionamento automático para SSO).",
      "Criação automática de usuários no primeiro login (JIT Provisioning).",
      "Logs de depuração para facilitar a configuração.",
    ],
    installation: `
            <ol>
                <li>Instale o plugin e ative-o.</li>
                <li>No painel do JumpCloud, crie uma nova aplicação SAML 2.0.</li>
                <li>No WordPress, vá para <strong>Configurações > JumpCloud SSO</strong>.</li>
                <li>Copie a URL de Metadados do JumpCloud e cole nas configurações do plugin.</li>
                <li>Configure o mapeamento de atributos e funções conforme necessário.</li>
            </ol>
        `,
    faq: [
      {
        question: "Funciona com outros provedores SAML?",
        answer:
          "Embora otimizado para JumpCloud, ele segue o padrão SAML 2.0 e pode funcionar com outros IdPs, mas o suporte oficial é para JumpCloud.",
      },
      {
        question: "O que acontece se o SSO falhar?",
        answer:
          "Existe uma URL de bypass de emergência que pode ser configurada para permitir login com credenciais locais do WordPress.",
      },
    ],
  },
];
