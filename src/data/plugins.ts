export interface TranslatedContent {
  desc: string;
  fullDescription: string;
  features: string[];
  installation: string;
  faq: { question: string; answer: string }[];
  premium?: {
    features: string[];
    description: string;
    howToActivate?: string[];
  };
}

export interface PluginData {
  id: number;
  name: string;
  slug: string;
  image: string;
  link: string;
  video?: string;
  en: TranslatedContent;
  pt: TranslatedContent;
}

export const plugins: PluginData[] = [
  {
    id: 1,
    name: "Video Destacado",
    slug: "video-destacado",
    image:
      "https://via.placeholder.com/772x250/cccccc/ffffff?text=Video+Destacado+Banner",
    link: "https://wordpress.org/plugins/video-destacado/",
    en: {
      desc: "A plugin to set a featured video for posts.",
      fullDescription: `
              <p><strong>Featured Video</strong> is a robust and intuitive solution for WordPress editors and developers who want to go beyond traditional featured images. With the exponential growth of video consumption on the web, having the ability to feature videos directly in post listings or at the top of your articles is essential for increasing engagement.</p>
              
              <p>This plugin allows you to replace the default WordPress 'Featured Image' with a video, supporting major video hosting platforms like YouTube, Vimeo, and Dailymotion, as well as locally hosted videos via MP4. Integration is seamless, using the native WordPress interface, meaning your clients or editors won't need to learn a new workflow.</p>
  
              <h3>Why use featured videos?</h3>
              <p>Videos retain user attention longer than static images. Studies show that pages with videos have higher conversion rates and lower bounce rates. Whether you manage a tutorial blog, a news site, or a portfolio, Featured Video offers the flexibility needed to present your content dynamically.</p>
  
              <h3>Key Features</h3>
              <p>The plugin was developed with a focus on performance and usability. It doesn't load heavy scripts unnecessarily and integrates with standard WordPress hooks, ensuring compatibility with most modern themes.</p>
          `,
      features: [
        "Support for YouTube, Vimeo, and Dailymotion.",
        "Support for native MP4 videos.",
        "Automatic replacement of the featured image in compatible themes.",
        "Autoplay option (configurable).",
        "Responsive: adapts to any screen size.",
        "Lightweight and SEO optimized.",
        "Compatible with Classic Editor and Gutenberg.",
      ],
      installation: `
              <ol>
                  <li>In the WordPress dashboard, go to <strong>Plugins > Add New</strong>.</li>
                  <li>Search for "Video Destacado".</li>
                  <li>Click <strong>Install Now</strong> and then <strong>Activate</strong>.</li>
                  <li>When editing a post, you'll see a new "Video Destacado" box in the sidebar.</li>
                  <li>Paste your video URL and save the post.</li>
              </ol>
          `,
      faq: [
        {
          question: "Does it work with any theme?",
          answer:
            "In most cases, yes. The plugin tries to filter the `the_post_thumbnail` call. If your theme uses this standard function, it will work automatically.",
        },
        {
          question: "Does it impact site speed?",
          answer:
            "The plugin loads only the necessary resources when a video is present. It is highly optimized.",
        },
      ],
    },
    pt: {
      desc: "Um plugin para definir um vídeo em destaque para posts.",
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
  },
  {
    id: 2,
    name: "Manage User Roles",
    slug: "manage-user-roles",
    image:
      "https://via.placeholder.com/772x250/cccccc/ffffff?text=Manage+User+Roles+Banner",
    link: "https://wordpress.org/plugins/manage-user-roles/",
    en: {
      desc: "A plugin to manage user roles and capabilities.",
      fullDescription: `
              <p><strong>Manage User Roles</strong> is the ultimate tool for WordPress site administrators who need granular control over what their users can and cannot do. The WordPress role and capability system is powerful, but often difficult to manage without editing code. This plugin solves that by bringing a simple and powerful visual interface.</p>
  
              <p>With it, you can create new roles from scratch, clone existing roles to make small modifications, or edit the capabilities of standard roles (Editor, Author, Contributor, etc.). This is essential for membership sites, e-commerces, online newspapers, or any site with multiple contributors.</p>
  
              <h3>Usage Scenarios</h3>
              <p>Imagine you have a "Junior Editor" who should be able to edit posts but not publish them, and definitely shouldn't have access to plugin settings. With Manage User Roles, you create this role in seconds by checking only the desired boxes.</p>
          `,
      features: [
        "Unlimited creation of new user roles.",
        "Editing of existing role capabilities.",
        "Cloning of roles to speed up configuration.",
        "Intuitive interface with checkboxes for each capability.",
        "Reset to default WordPress settings.",
        "Support for custom capabilities from other plugins (like WooCommerce).",
        "Multisite compatible.",
      ],
      installation: `
              <ol>
                  <li>Go to <strong>Plugins > Add New</strong>.</li>
                  <li>Search for "Manage User Roles".</li>
                  <li>Install and activate the plugin.</li>
                  <li>Access the <strong>Users > User Roles</strong> menu to start managing.</li>
              </ol>
          `,
      faq: [
        {
          question: "Can I delete the Administrator role?",
          answer:
            "For security, the plugin prevents deleting the primary administrator role to avoid accidental lockouts.",
        },
        {
          question: "Do changes affect existing users?",
          answer:
            "Yes, all users assigned to that role will immediately inherit the new permissions.",
        },
      ],
    },
    pt: {
      desc: "Um plugin para gerenciar funções e capacidades de usuários.",
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
  },
  {
    id: 3,
    name: "Nudge SEO AI",
    slug: "nudge-seo-ai",
    image:
      "https://via.placeholder.com/772x250/cccccc/ffffff?text=Nudge+SEO+AI+Banner",
    link: "https://wordpress.org/plugins/nudge-seo-ai/",
    en: {
      desc: "An AI-powered SEO plugin to help you with your content.",
      fullDescription: `
              <p><strong>Nudge SEO AI</strong> revolutionizes the way you optimize your content for search engines. Instead of just checking static checklists like traditional SEO plugins, Nudge uses advanced artificial intelligence to analyze your text and offer contextual, creative, and strategic suggestions to improve your ranking.</p>
  
              <p>Creating SEO-optimized content can be exhausting. Finding the right keywords, maintaining proper density without sounding robotic, and ensuring readability are constant challenges. Nudge SEO AI acts as an intelligent assistant editor, suggesting real-time improvements while you write.</p>
              
              <h3>Artificial Intelligence at Your Service</h3>
              <p>The plugin analyzes the "Top 10" Google results for your focus keyword and identifies patterns that are working for your competitors. It then suggests topics to cover, questions to answer, and related terms to include, all to increase the topical relevance of your article.</p>
          `,
      features: [
        "AI-based content analysis.",
        "Long-tail keyword suggestions.",
        "Optimization of titles and meta descriptions with AI.",
        "Readability and tone of voice analysis.",
        "Smart internal link suggestions.",
        "Automatic generation of ALT text for images.",
        "Integration with OpenAI (requires API key).",
      ],
      installation: `
              <ol>
                  <li>Install via <strong>Plugins > Add New > Nudge SEO AI</strong>.</li>
                  <li>Activate the plugin.</li>
                  <li>Go to settings and enter your API key (if needed for premium features).</li>
                  <li>Open any post and see the Nudge sidebar for suggestions.</li>
              </ol>
          `,
      faq: [
        {
          question: "Do I need to pay for AI usage?",
          answer:
            "The plugin has a generous free version. Advanced features may require a subscription or your own API key.",
        },
        {
          question: "Does it replace Yoast or RankMath?",
          answer:
            "It can work alongside them. While Yoast focuses on technical aspects, Nudge focuses on content quality and relevance.",
        },
      ],
    },
    pt: {
      desc: "Um plugin de SEO alimentado por IA para ajudar você com seu conteúdo.",
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
  },
  {
    id: 4,
    name: "SSO Connector for JumpCloud",
    slug: "sso-connector-for-jumpcloud",
    image:
      "https://ps.w.org/sso-connector-for-jumpcloud/assets/banner-1544x500.png?rev=3421110",
    link: "https://wordpress.org/plugins/sso-connector-for-jumpcloud/",
    video: "/assets/videos/jump-demo.mp4",
    en: {
      desc: "A plugin to connect your WordPress site with JumpCloud SSO.",
      fullDescription: `
              <p>Security and ease of access are paramount in corporate environments. <strong>SSO Connector for JumpCloud</strong> allows your organization to integrate SAML 2.0-based Single Sign-On (SSO) authentication directly into your WordPress site. This means your employees or members can log in to WordPress using their JumpCloud corporate credentials, without needing to memorize yet another password.</p>
  
              <p>This plugin was designed to simplify the complex configuration of SAML. With clear fields and step-by-step instructions, you establish the trust relationship between JumpCloud (Identity Provider) and your WordPress (Service Provider) in minutes.</p>
  
              <h3>Enterprise Security</h3>
              <p>By centralizing authentication, you gain total control over who accesses your site. If an employee leaves the company and is removed from JumpCloud, they automatically lose access to WordPress, closing common security gaps.</p>
          `,
      features: [
        "SAML 2.0 Support.",
        "Attribute mapping (Email, First Name, Last Name).",
        "Mapping JumpCloud groups to WordPress roles (e.g., Group 'Admins' -> Role 'Administrator').",
        "Forced login (automatic redirect to SSO).",
        "Automatic user creation on first login (JIT Provisioning).",
        "Debug logs to facilitate configuration.",
      ],
      installation: `
              <ol>
                  <li>Install and activate the plugin.</li>
                  <li>In the JumpCloud dashboard, create a new SAML 2.0 application.</li>
                  <li>In WordPress, go to <strong>Settings > JumpCloud SSO</strong>.</li>
                  <li>Copy the JumpCloud Metadata URL and paste it into the plugin settings.</li>
                  <li>Configure attribute and role mapping as needed.</li>
              </ol>
          `,
      faq: [
        {
          question: "Does it work with other SAML providers?",
          answer:
            "While optimized for JumpCloud, it follows the SAML 2.0 standard and may work with other IdPs, but official support is for JumpCloud.",
        },
        {
          question: "What happens if SSO fails?",
          answer:
            "There is an emergency bypass URL that can be configured to allow login with local WordPress credentials.",
        },
      ],
      premium: {
        description:
          "Unlock the full power of your enterprise identity management with advanced features designed for scale and security.",
        features: [
          "Group-Based Access Control: Restrict login access to specific JumpCloud groups.",
          "Role-Based Redirects: Define custom landing pages for different user roles.",
          "Automated Role Mapping: Dynamically assign WordPress roles based on JumpCloud groups.",
          "Comprehensive Audit Logs: Track every SSO login attempt with detailed metadata.",
          "Enterprise Support: Priority assistance for complex deployments.",
        ],
        howToActivate: [
          "Go to the Premium Features tab in the plugin settings.",
          "If you don’t have a subscription yet, use the secure Stripe pricing table to subscribe.",
          "Once subscribed, simply click the “Check Subscription Status” button.",
          "The plugin will automatically verify your subscription using your administrator email and activate all premium features instantly.",
          "You can manage your subscription at any time via the Stripe Customer Portal link provided in the same tab.",
        ],
      },
    },
    pt: {
      desc: "Um plugin para conectar seu site WordPress com JumpCloud SSO.",
      fullDescription: `
              <p>Segurança e facilidade de acesso são primordiais em ambientes corporativos. O <strong>SSO Connector for JumpCloud</strong> permite que sua organização integre autenticação Single Sign-On (SSO) baseada em SAML 2.0 diretamente no seu site WordPress. Isso significa que seus funcionários ou membros podem fazer login no WordPress usando suas credenciais corporativas do JumpCloud, sem precisar memorizar mais uma senha.</p>
  
              <p>Este plugin foi projetado para simplificar a configuração complexa de SAML. Com campos claros e instruções passo-a-passo, você estabelece a relação de confiança entre o JumpCloud (Identity Provider) e seu WordPress (Service Provider) em minutos.</p>
  
              <h3>Segurança Enterprise</h3>
              <p>Ao centralizar a autenticação, você ganha controle total sobre quem acessa seu site. Se um funcionário deixa a empresa e é removido do JumpCloud, ele perde automaticamente o acesso ao WordPress, fechando brechas de segurança comuns.</p>
          `,
      features: [
        "Suporte a SAML 2.0.",
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
      premium: {
        description:
          "Desbloqueie todo o poder do seu gerenciamento de identidade empresarial com recursos avançados projetados para escala e segurança.",
        features: [
          "Controle de Acesso Baseado em Grupo: Restrinja o acesso de login a grupos específicos do JumpCloud.",
          "Redirecionamentos Baseados em Função: Defina páginas de destino personalizadas para diferentes funções de usuário.",
          "Mapeamento Automático de Funções: Atribua dinamicamente funções do WordPress com base em grupos do JumpCloud.",
          "Logs de Auditoria Abrangentes: Acompanhe cada tentativa de login SSO com metadados detalhados.",
          "Suporte Enterprise: Assistência prioritária para implantações complexas.",
        ],
        howToActivate: [
          "Vá para a aba Recursos Premium nas configurações do plugin.",
          "Se você ainda não tem uma assinatura, use a tabela de preços segura do Stripe para assinar.",
          "Uma vez assinado, basta clicar no botão “Verificar status da assinatura”.",
          "O plugin verificará automaticamente sua assinatura usando seu e-mail de administrador e ativará todos os recursos premium instantaneamente.",
          "Você pode gerenciar sua assinatura a qualquer momento através do link do Portal do Cliente Stripe fornecido na mesma aba.",
        ],
      },
    },
  },
];
