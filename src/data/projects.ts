export interface ProjectData {
  id: number;
  name: string;
  slug: string;
  desc: string;
  image: string;
  link: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  faq: { question: string; answer: string }[];
}

export const projects: ProjectData[] = [
  {
    id: 1,
    name: "Balancewise.io",
    slug: "balancewise",
    desc: "Rebalanceie sua carteira de investimentos com o balancewise. Otimize seus investimentos com o balancewise. Rebalanceie sua carteira de forma simples e eficiente para maximizar seus ganhos.",
    image: "balancewise.jpg",
    link: "https://balancewise.io/",
    fullDescription: `
            <p>O <strong>Balancewise.io</strong> é uma ferramenta sofisticada de gestão de portfólio projetada para investidores que entendem a importância do rebalanceamento periódico. Manter a alocação de ativos alinhada com seus objetivos de risco e retorno é uma das estratégias mais eficazes para o sucesso a longo prazo, mas calcular manualmente quanto comprar ou vender de cada ativo pode ser trabalhoso e propenso a erros.</p>
            
            <p>Com o Balancewise, você define sua alocação ideal (ex: 60% Ações, 40% Renda Fixa) e a ferramenta monitora sua carteira em tempo real. Quando os desvios ocorrem devido à flutuação do mercado, o sistema sugere exatamente quais transações realizar para trazer seu portfólio de volta ao equilíbrio, minimizando custos de transação e impostos.</p>

            <h3>Filosofia de Investimento</h3>
            <p>A plataforma foi construída sobre os princípios da Teoria Moderna do Portfólio (MPT). Acreditamos que a disciplina supera a emoção no longo prazo. O Balancewise remove o viés emocional das decisões de investimento, fornecendo um roteiro claro e lógico para cada aporte ou resgate.</p>

            <h3>Segurança e Privacidade</h3>
            <p>Entendemos que dados financeiros são sensíveis. O Balancewise opera com criptografia de ponta a ponta e não armazena suas credenciais de corretora. Utilizamos integrações seguras apenas para leitura de saldos quando disponível, ou você pode optar por entradas manuais para total privacidade.</p>
        `,
    features: [
      "Cálculo automático de rebalanceamento.",
      "Visualização clara da alocação atual vs. meta.",
      "Suporte a múltiplos tipos de ativos (Ações, FIIs, Tesouro, Crypto).",
      "Relatórios de performance histórica.",
      "Simulação de cenários de aporte.",
      "Alertas de desvio de alocação.",
      "Interface intuitiva e responsiva (mobile-first).",
    ],
    technologies: [
      "React / Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Chart.js",
    ],
    faq: [
      {
        question: "É seguro conectar minha corretora?",
        answer:
          "Sim, utilizamos APIs oficiais e somente leitura. Nunca temos permissão para movimentar seu dinheiro.",
      },
      {
        question: "Funciona para investidores iniciantes?",
        answer:
          "Absolutamente. O sistema guia você passo a passo, tornando o processo de balanceamento acessível a todos.",
      },
    ],
  },
  {
    id: 183,
    name: "Timberoad",
    slug: "timberoad",
    desc: "Timberoad é sobre liberdade. Em um mundo cheio de regras, tudo o que buscamos é um pedaço de paraíso tranquilo para nos divertirmos. Ao projetar uma van, prezamos pela funcionalidade, conforto e confiabilidade.",
    image: "timberoad.jpg",
    link: "https://timberoad.vercel.app/",
    fullDescription: `
            <p><strong>Timberoad</strong> não é apenas um projeto de conversão de vans; é um manifesto de liberdade sobre rodas. Nascido da paixão pela estrada e pelo estilo de vida minimalista, o Timberoad documenta e auxilia na transformação de veículos utilitários em casas móveis completas, funcionais e aconchegantes.</p>

            <p>Este projeto web serve como um hub central para a comunidade de vanlife. Ele oferece desde calculadoras de energia solar e dimensionamento de sistemas elétricos até layouts 3D interativos para planejamento de espaço. O objetivo é democratizar o conhecimento técnico necessário para construir uma van segura e confortável, permitindo que mais pessoas realizem o sonho de viajar o mundo.</p>

            <h3>Design e Funcionalidade</h3>
            <p>A filosofia do Timberoad é que o design deve servir à função. Em um espaço pequeno, cada centímetro conta. O site reflete isso com uma interface limpa, rápida e direta ao ponto. As ferramentas são projetadas para serem usadas "no campo", muitas vezes com conexões de internet instáveis, garantindo performance e acessibilidade offline (PWA).</p>

            <h3>Comunidade</h3>
            <p>Além das ferramentas técnicas, o Timberoad conecta viajantes. Uma seção de "Diário de Bordo" permite que usuários compartilhem suas rotas, locais de pernoite seguros (wild camping) e dicas de manutenção preventiva na estrada.</p>
        `,
    features: [
      "Calculadora de sistema solar off-grid.",
      "Planejador de layout de van em 2D/3D simples.",
      "Diretório de peças e fornecedores recomendados.",
      "Blog com tutoriais passo-a-passo (isolamento, elétrica, hidráulica).",
      "Mapa colaborativo de pontos de apoio.",
      "Calculadora de custos de viagem.",
    ],
    technologies: [
      "Vue.js",
      "Nuxt",
      "Firebase",
      "PWA (Progressive Web App)",
      "Mapbox API",
      "Three.js (para visualização 3D)",
    ],
    faq: [
      {
        question: "O projeto é open source?",
        answer:
          "Sim, o código das calculadoras e ferramentas está disponível no GitHub para contribuição.",
      },
      {
        question: "Posso usar as ferramentas offline?",
        answer:
          "Sim, ao instalar o PWA, as calculadoras funcionam sem internet.",
      },
    ],
  },
  {
    id: 3,
    name: "Pablo Escobar Ipsum",
    slug: "pablo-escobar-ipsum",
    desc: "Pablo Escobar Ipsum. O lorem ipsum do pablito. Ustedes pueden aceptar mi negocio o aceptar las consequências. ¿Plata o plomo?",
    image: "pablo-escobar.jpg",
    link: "https://www.pabloescobaripsum.com/",
    fullDescription: `
            <p><strong>Pablo Escobar Ipsum</strong> é um gerador de texto placeholder (Lorem Ipsum) com um toque de humor negro e história pop. Em vez do latim clássico e monótono, ele preenche seus layouts de design com as frases icônicas, gírias e diálogos memoráveis da série Narcos e da cultura pop que envolve a figura de Pablo Escobar.</p>

            <p>Desenvolvido como um projeto divertido de fim de semana, ele rapidamente ganhou tração entre designers e desenvolvedores que queriam algo diferente para seus mockups. "Plata o Plomo?", "Hijo de p*ta", e outras frases famosas injetam personalidade (e um pouco de tensão) nos protótipos de interfaces.</p>

            <h3>Como funciona</h3>
            <p>O gerador permite escolher o número de parágrafos, a presença de tags HTML e se o texto deve começar com o clássico "Lorem ipsum..." ou ir direto para as citações. A API por trás do site é extremamente rápida e pode ser integrada diretamente em ferramentas de design via plugins.</p>

            <h3>Nota de Isenção</h3>
            <p>Este projeto é puramente satírico e baseado em representações ficcionais da mídia. Não glorifica atividades ilegais, mas sim celebra a narrativa dramática que se tornou parte da cultura pop moderna.</p>
        `,
    features: [
      "Gerador de parágrafos aleatórios temáticos.",
      "Opção de copiar para área de transferência com um clique.",
      "API JSON pública para desenvolvedores.",
      "Modo 'Suave' (sem palavrões) e Modo 'Hardcore'.",
      "Design temático imersivo.",
      "Integração fácil com scripts de automação.",
    ],
    technologies: [
      "HTML5 / CSS3",
      "Vanilla JavaScript",
      "Netlify Functions (para a API)",
      "Vite",
    ],
    faq: [
      {
        question: "Posso usar em projetos comerciais?",
        answer: "Sim, é livre para uso em qualquer mockup ou protótipo.",
      },
      {
        question: "Existe uma versão em inglês?",
        answer:
          "As frases são mantidas majoritariamente em espanhol ('spanglish') para manter a autenticidade do personagem.",
      },
    ],
  },
];
