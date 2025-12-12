import{n as e}from"./index-BZtytHmN.js";var t=e();const n={title:`JavaScript - ES6: let, const, arrow function`,description:``,date:`2020-08-04`,readTime:2},r={title:n.title,description:n.description};function i(e){let n={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[`A nova versão do JavaScript, conhecida também como ECMAScript 6 ou apenas ES6, vamos falar sobre `,(0,t.jsx)(n.code,{children:`let`}),`, `,(0,t.jsx)(n.code,{children:`const`}),` e `,(0,t.jsx)(n.code,{children:`arrow function`}),`.`]}),`
`,(0,t.jsx)(n.h2,{children:`Let`}),`
`,(0,t.jsxs)(n.p,{children:[`Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor. O `,(0,t.jsx)(n.code,{children:`let`}),` é o substituto para `,(0,t.jsx)(n.code,{children:`var`}),`, pois ele será descontinuado futuramente. Por que ele se comporta como o esperado de uma variável.`]}),`
`,(0,t.jsxs)(n.p,{children:[`Exemplo usando `,(0,t.jsx)(n.code,{children:`var`}),`:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`nome = "Airton";
var nome;
console.log(nome); // Airton
`})}),`
`,(0,t.jsxs)(n.p,{children:[`Se fizermos o mesmo, substituindo por `,(0,t.jsx)(n.code,{children:`let`}),`, o que vai acontecer:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-javascript`,children:`nome = "Airton";
let nome;
console.log(nome); // undefined
`})}),`
`,(0,t.jsxs)(n.p,{children:[`Vai dar erro, pois o `,(0,t.jsx)(n.code,{children:`let`}),` suporta somente o modo estrito, o famoso `,(0,t.jsx)(n.code,{children:`'use strict'`}),`, a blz então só adicionar no começo do arquivo:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-javascript`,children:`"use strict";
nome = "Airton";
let nome;
console.log(nome); // undefined
`})}),`
`,(0,t.jsxs)(n.p,{children:[`Também não vai funcionar :disappointed: , pois o `,(0,t.jsx)(n.code,{children:`let`}),` obriga você a sempre declarar as variáveis antes de ser chamada, então como que vai ficar?`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-javascript`,children:`"use strict";
let nome;
nome = "Airton";
console.log(nome); // Airton
`})}),`
`,(0,t.jsxs)(n.p,{children:[`Você pode ver aqui sobre `,(0,t.jsx)(n.a,{href:`http://airtonvancin.com/blog/artigo-instanciacao-variaveis-javascript/#hoisting`,children:`Hoisting`}),` para entender melhor isso.`]}),`
`,(0,t.jsx)(n.h2,{children:`Const`}),`
`,(0,t.jsx)(n.p,{children:`Como o próprio nome diz são constantes, então:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`O valor de uma constante não pode ser alterado;`}),`
`,(0,t.jsx)(n.li,{children:`É obrigatório que um valor seja atribuido à constante em sua declaração;`}),`
`,(0,t.jsx)(n.li,{children:`Uma constante não deve compartilhar o nome com uma função ou variável em um mesmo escopo.`}),`
`]}),`
`,(0,t.jsx)(n.p,{children:`Isso quer dizer que uma vez declarada você não consegue mais alterar o valor dela, certo? sim esse é o propósito, mas existe uma marotagem para poder alterar esse valor.`}),`
`,(0,t.jsxs)(n.p,{children:[`Então se você declarar uma `,(0,t.jsx)(n.code,{children:`const`}),`, ex:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-javascript`,children:`const nome = "Airton";
`})}),`
`,(0,t.jsxs)(n.p,{children:[`O valor da `,(0,t.jsx)(n.code,{children:`const`}),` `,(0,t.jsx)(n.code,{children:`nome`}),` nesse exemplo sempre vai ser `,(0,t.jsx)(n.code,{children:`Airton`}),`, agora se você tentar redeclarar ela com outro valor, o que acontece?`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-javascript`,children:`const nome = "Airton";
const nome = "Junior";
`})}),`
`,(0,t.jsxs)(n.p,{children:[`Isso vai dar erro dizendo que essa `,(0,t.jsx)(n.code,{children:`const`}),` já foi declarada:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-javascript`,children:`TypeError: Identifier 'nome' has already been declared
`})}),`
`,(0,t.jsx)(n.p,{children:`E se eu tentar reescrever assim:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-javascript`,children:`const nome = "Airton";
nome = "Junior";
console.log(nome); // Airton
`})}),`
`,(0,t.jsxs)(n.p,{children:[`Não vai dar erro, mas quando você for imprimir a `,(0,t.jsx)(n.code,{children:`const`}),` `,(0,t.jsx)(n.code,{children:`nome`}),` ele vai imprimir `,(0,t.jsx)(n.code,{children:`Airton`}),`.`]}),`
`,(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:`Const também funciona com objetos:`})}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-javascript`,children:`const user = { name: "Airton" };
console.log(user); // { name: 'Airton' }
`})}),`
`,(0,t.jsx)(n.p,{children:`Entretanto, atributos de objetos não estão protegidos, logo a seguinte instrução é executada sem problemas:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-javascript`,children:`const user = { name: "Airton" };
user.name = "Junior";
console.log(user); // { name: 'Junior' }
`})}),`
`,(0,t.jsx)(n.h2,{children:`Arrow Function`}),`
`,(0,t.jsxs)(n.p,{children:[`É uma função que possui uma sintaxe mais curta, e elas sempre são funções anônimas (`,(0,t.jsx)(n.a,{href:`http://airtonvancin.com/blog/artigo-instanciacao-variaveis-javascript/#instanciao-usando-uma-iife`,children:`IIFE`}),`), vinculando o valor de `,(0,t.jsx)(n.strong,{children:`this`}),` de maneira léxica, quando ela é criada o valor de `,(0,t.jsx)(n.strong,{children:`this`}),` sempre será o mesmo.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-javascript`,children:`// Função normal
function (name) { return name; }

// Arrow Function
(name) => name;
`})}),`
`,(0,t.jsx)(n.p,{children:`Função nomeada não é possível fazer com arrow function:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-javascript`,children:`// Função normal
function sayName(name) { return name; }

// Arrow Function
sayName(name) => name; // <-- ISSO NÃO EXISTE
`})}),`
`,(0,t.jsx)(n.p,{children:`O que fazer então? vamos estanciar ela como uma constante:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-javascript`,children:`// Arrow Function
const sayName = (name) => name; // Ae agora sim
`})}),`
`,(0,t.jsx)(n.p,{children:`Vamos ver um exemplo de uma função que retorna a média de dois números:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-javascript`,children:`// ES5
const media = (function (num1, num2) {
  return (num1 + num2) / 2;
})(10, 50); // passando os valores 10  e 50 como parâmetros

console.log(media); // 30

// --------------------------------

// ES6
const media = ((num1, num2) => {
  return (num1 + num2) / 2;
})(10, 50);

console.log(media); // 30

// OU MAIS SIMPLES

const media = ((num1, num2) => (num1 + num2) / 2)(10, 50);
console.log(media); // 30
`})})]})}function a(e={}){let{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}export{n as article,a as default,r as metadata};