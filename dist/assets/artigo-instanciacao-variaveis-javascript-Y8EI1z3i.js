import{n as e}from"./index-BZtytHmN.js";var t=e();const n={title:`Instanciação de Variáveis JavaScript`,description:`Esse é um artigo feito como forma de estudo para o curso de BE Mean do WebSchool.io`,date:`2015-12-11`,readTime:2,image:`/assets/images/instanciacao-de-variaveis-javascript.jpg`},r={title:n.title,description:n.description};function i(e){let n={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{children:`Hoisting`}),`
`,(0,t.jsx)(n.p,{children:`Hoisting é um comportamento do JavaScript de mover declarações para o topo de um escopo (o escopo global ou da função em que se encontra). Em JavaScript, funções e variáveis são hoisted (ou "levados ao topo"). Isso significa que você pode usar variável e função antes mesmo de tê-las declaradas.`}),`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Ex`})}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`sobrenome = "Vancin";
var sobrenome;

nome();
function nome() {
  return "Airton";
}
`})}),`
`,(0,t.jsx)(n.h2,{children:`Closure`}),`
`,(0,t.jsx)(n.p,{children:`Uma closure é o escopo criado quando uma função é declarada que permite à função acessar e manipular variáveis externas a ela. Em outras palavras, clousers permitem quem uma função acesse todas as variáveis, assim como outras funções, que estão em escopo quando ela é declarada.`}),`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Como usar`})}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`var sobrenome = "Vancin"; // Declara variável em escopo global

function nomeCompleto() {
  // Declara função em escopo global
  return "Airton " + sobrenome;
}
nomeCompleto(); // Executa a função
`})}),`
`,(0,t.jsx)(n.h2,{children:`Variável Global`}),`
`,(0,t.jsx)(n.p,{children:`Todas as variáveis ​​ou funções declaradas fora de uma função estarão disponíveis para todo o código JavaScript na página, se esse código é dentro de uma função ou de outra forma, nós chamamos isso de âmbito global. Veja o exemplo:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`var sobrenome = "Vancin"; // Declara variável em escopo global

function nomeCompleto() {
  // Declara função em escopo global
  return "Airton " + sobrenome;
}
`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`A variável `,(0,t.jsx)(n.code,{children:`sobrenome`}),` essa é uma variável global pois é criada no exterior de uma função, e porque é global, ela pode ser utilizado em qualquer lugar na página.`]}),`
`,(0,t.jsxs)(n.li,{children:[`A função `,(0,t.jsx)(n.code,{children:`nomeCompleto()`}),` acessa a variável `,(0,t.jsx)(n.code,{children:`sobrenome`}),` para retornar o nome completo.`]}),`
`]}),`
`,(0,t.jsx)(n.h2,{children:`Variável por parâmetro`}),`
`,(0,t.jsx)(n.p,{children:`Parâmetros de função são semelhantes às variáveis, eles têm um âmbito local, e, portanto, só pode ser acessado de dentro da função.`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`function nomeCompleto(sobrenome) {
  // Declara função em escopo global
  return "Airton " + sobrenome;
}

nomeCompleto("Vancin"); // Chama a função passando uma string como parametro
`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Nesse caso a função espera que você passe um valor como parametro, se não passar nada ela retornara `,(0,t.jsx)(n.code,{children:`undefined`}),`.`]}),`
`]}),`
`,(0,t.jsx)(n.h2,{children:`Instanciação usando uma IIFE`}),`
`,(0,t.jsx)(n.p,{children:`IIFE significa uma "Função anônima auto-executável" ou "Função Imediatamente Executável", quando usamos isso queremos criar um escopo no JavaScript para que as variáveis dentro dela não poluam o escopo global, evitando possíveis conflitos de variáveis ou funções com o mesmo nome.`}),`
`,(0,t.jsx)(n.p,{children:`Existem dois padrões para invovar funções imediatas`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`(function () {
  /* código */
})(); // Crockford recomenda esse
(function () {
  /* código */
})(); // Mas esse também funciona
`})}),`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Exemplo usando variável`})}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`var nomeCompleto = (function () {
  return "Airton Vancin";
})();

nomeCompleto; // Chama a variável que executa a função imediata que retorna o nome completo
`})}),`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Exemplo usando parâmetros`})}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`(function (x) {
  return x;
})(1); // Passando o valor 1 como parâmetro
`})}),`
`,(0,t.jsx)(n.h2,{children:`Considerações`}),`
`,(0,t.jsx)(n.p,{children:`O uso dessas técnicas pode não apenas nos ajudar a reduzir a quantidade e a complexidade do script necessário para incluir funcionalidades avançadas em nossas páginas, como também nos permite realizar operações que simplesmente não seriam possíveis, ou seriam complexas demais para serem factíveis, sem elas.`})]})}function a(e={}){let{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}export{n as article,a as default,r as metadata};