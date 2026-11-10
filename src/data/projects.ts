import type { ImageMetadata } from "astro";

// Import project images
import lumeIqImg from "../assets/images/projects/lume-iq.png";
import jurosobraImg from "../assets/images/projects/jurosobra.jpg";
import balancewiseImg from "../assets/images/projects/balancewise.jpg";
import timberoadImg from "../assets/images/projects/timberoad.jpg";
import pabloEscobarImg from "../assets/images/projects/pablo-escobar.jpg";

export interface ProjectData {
  id: number;
  name: string;
  slug: string;
  desc: string;
  image: ImageMetadata;
  link: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  faq: { question: string; answer: string }[];
}

export const projects: ProjectData[] = [
  {
    id: 4,
    name: "Lume IQ",
    slug: "lume-iq",
    desc: "Teste de QI online gratuito, preciso e transparente baseado na Teoria de Resposta ao Item (IRT). Pontuação instantânea com margem de erro explícita e sem assinaturas ocultas.",
    image: lumeIqImg,
    link: "https://getlumeiq.com/",
    fullDescription: `
            <p>O <strong>Lume IQ</strong> (disponível em <a href="https://getlumeiq.com" target="_blank" rel="noopener noreferrer">getlumeiq.com</a>) é uma plataforma moderna de avaliação cognitiva desenvolvida com foco em rigor estatístico, psicometria contemporânea e transparência total com o usuário.</p>
            
            <p>Ao contrário dos tradicionais testes de QI na internet — que frequentemente submetem o visitante a dezenas de perguntas para, no último passo, cobrar uma taxa inesperada que se transforma em uma assinatura recorrente oculta —, o Lume IQ foi concebido com uma filosofia ética e direta: o teste de 30 questões é gratuito, o resultado com pontuação estimada, percentil e margem de erro é entregue imediatamente na tela, sem necessidade de cartão de crédito e sem obrigatoriedade de fornecer e-mail.</p>

            <h3>Metodologia Psicométrica e Teoria de Resposta ao Item (IRT)</h3>
            <p>O motor psicométrico do Lume IQ é baseado na <strong>Teoria de Resposta ao Item (IRT)</strong> de 2 parâmetros (discriminação e dificuldade), calibrando cada item para estimar a habilidade latente do participante. O teste avalia quatro domínios cognitivos fundamentais: raciocínio fluido (matrizes visuais), raciocínio quantitativo (sequências numéricas e operadores), visualização espacial (rotação mental e reconhecimento de padrões) e detecção de regras contextuais.</p>

            <p>Para mitigar a memorização e o vazamento de gabaritos online, as questões são geradas de forma procedural por algoritmos paramétricos, garantindo que testes repetidos apresentem variantes exclusivas.</p>

            <h3>Transparência Estatística e Margem de Erro</h3>
            <p>Nenhuma medição psicológica é exata. Por isso, o Lume IQ exibe explicitamente um intervalo de confiança de 90% ao lado da pontuação, educando o usuário sobre a natureza probabilística da estimativa e desmistificando testes sensacionalistas.</p>
        `,
    features: [
      "30 questões procedurais divididas em 4 domínios cognitivos.",
      "Motor psicométrico fundamentado em Teoria de Resposta ao Item (IRT).",
      "Resultado instantâneo com percentil e margem de erro (IC 90%).",
      "100% gratuito para realizar e visualizar pontuação, sem paywall oculto.",
      "Geração procedural de questões para evitar vazamento de gabarito.",
      "Relatório detalhado opcional questão por questão e certificado verificável.",
      "Política de pagamento único sem qualquer modelo de assinatura recorrente.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "TanStack Start / Router",
      "Tailwind CSS",
      "Item Response Theory (IRT)",
      "Vite",
    ],
    faq: [
      {
        question: "O teste é realmente gratuito?",
        answer:
          "Sim. Você responde as 30 perguntas e vê sua estimativa de QI, percentil, margem de erro e gráfico de habilidades na hora sem pagar nada nem cadastrar cartão. Relatórios detalhados com certificado são opcionais e cobrados como pagamento único.",
      },
      {
        question: "Substitui uma avaliação psicológica clínica?",
        answer:
          "Não. O teste é voltado para entretenimento e autodescoberta. Avaliações com validade clínica ou para ingresso em sociedades como a Mensa exigem supervisão presencial por psicólogo credenciado.",
      },
      {
        question: "Como as questões são geradas?",
        answer:
          "Utilizamos geradores procedurais paramétricos com regras geométricas e matemáticas estritas, impedindo que gabaritos estáticos vazem na internet.",
      },
    ],
  },
  {
    id: 5,
    name: "Juros de Obra",
    slug: "jurosobra",
    desc: "Simulador inteligente de financiamento imobiliário na planta. Calcule mês a mês a evolução dos juros de obra com correção pelo INCC, fluxo de desembolso e comparação SAC vs. Price.",
    image: jurosobraImg,
    link: "https://jurosobra.com.br/",
    fullDescription: `
            <p>O <strong>Juros de Obra</strong> (disponível em <a href="https://jurosobra.com.br" target="_blank" rel="noopener noreferrer">jurosobra.com.br</a>) é uma ferramenta financeira especializada projetada para resolver uma das maiores dores de quem compra imóveis na planta: a imprevisibilidade da <strong>taxa de evolução de obra</strong> (comumente chamada de 'juros de obra') cobrada pela Caixa Econômica Federal e outros bancos ao longo da construção.</p>

            <p>Durante a fase de obras, o comprador não amortiza a dívida principal do financiamento; ele paga apenas juros proporcionais ao percentual de avanço físico da construção medido pelo engenheiro do banco. Além disso, as parcelas da entrada devidas à construtora sofrem correção monetária pelo <strong>INCC</strong> (Índice Nacional de Custo de Construção). O simulador do Juros de Obra modela esse fluxo financeiro complexo mês a mês com clareza cristalina.</p>

            <h3>Simulação Mês a Mês e Cronograma de Medições</h3>
            <p>O usuário pode configurar o cronograma de evolução da obra (linear ou personalizado conforme medições reais de engenharia), o valor de avaliação do imóvel, o montante financiado e as taxas de juros contratuais. O sistema calcula a curva de desembolso mensal, mostrando como a parcela começa baixa nos primeiros meses e sobe gradativamente até a entrega das chaves.</p>

            <h3>Comparação SAC vs. Tabela Price Pós-Chaves</h3>
            <p>Além da fase de construção, a ferramenta simula a virada para a fase de amortização após a expedição do habite-se e entrega das chaves, comparando os sistemas SAC (Sistema de Amortização Constante) e Tabela Price, demonstrando o custo total efetivo de cada opção ao longo do prazo contratual.</p>

            <h3>Segurança Jurídica e Conteúdo Educativo</h3>
            <p>A plataforma reúne guias explicativos detalhados, jurisprudência consolidada do Superior Tribunal de Justiça (STJ) sobre cobrança indevida de juros de obra após o prazo de tolerância de atraso e estratégias para antecipação de amortização.</p>
        `,
    features: [
      "Simulador mês a mês da evolução dos juros de obra durante a construção.",
      "Cálculo de correção monetária pelo INCC integrado às parcelas e entrada.",
      "Suporte a cronogramas de medição de engenharia lineares e customizados.",
      "Comparador detalhado entre sistemas de amortização SAC e Tabela Price.",
      "Gráficos interativos de curva de desembolso e saldo devedor acumulado.",
      "Guias práticos sobre regras bancárias da Caixa e jurisprudência do STJ.",
      "Ferramenta 100% gratuita no navegador, sem necessidade de cadastro.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Modelagem Financeira (SAC / Price)",
      "Vite",
      "SVG Data Visualization",
    ],
    faq: [
      {
        question: "O que são exatamente os juros de obra?",
        answer:
          "São valores pagos ao banco durante a construção do imóvel na planta. Eles incidem apenas sobre a fatia do financiamento que o banco já liberou para a construtora conforme o avanço medido das obras. Não amortizam a dívida principal.",
      },
      {
        question: "É normal o valor da parcela aumentar todo mês?",
        answer:
          "Sim, na fase de obras o valor sobe porque o repasse do banco à construtora aumenta a cada medição de conclusão da obra, além da correção monetária pelo INCC.",
      },
      {
        question: "A simulação substitui a proposta da Caixa ou do banco?",
        answer:
          "A ferramenta é um simulador de planejamento financeiro independente que replica fielmente a matemática contratual dos bancos para ajudar o comprador a se planejar sem surpresas.",
      },
    ],
  },
  {
    id: 1,
    name: "Balancewise.io",
    slug: "balancewise",
    desc: "Rebalanceie sua carteira de investimentos com o balancewise. Otimize seus investimentos com o balancewise. Rebalanceie sua carteira de forma simples e eficiente para maximizar seus ganhos.",
    image: balancewiseImg,
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
    image: timberoadImg,
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
    image: pabloEscobarImg,
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
