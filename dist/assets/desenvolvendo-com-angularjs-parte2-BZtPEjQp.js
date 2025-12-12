import{n as e}from"./index-BZtytHmN.js";var t=e();const n={title:`Desenvolvendo com AngularJS - Parte 2`,description:`Diretivas e controladores básicos do AngularJS`,date:`2015-06-31`,readTime:2,image:`/desenvolvendo-com-angularjs-2.jpg`,tags:[`Javascript`,`AngularJS`]},r={title:n.title,description:n.description};function i(e){let n={code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(`a`,{href:`/blog/desenvolvendo-com-angularjs-parte1/`,children:(0,t.jsx)(n.p,{children:`Desenvolvendo com AngularJS - Parte 1`})}),`
`]}),`
`]}),`
`,(0,t.jsx)(n.h2,{children:`Introdução`}),`
`,(0,t.jsx)(n.p,{children:`Exploraremos os módulos e os controladores do AngularJS e criaremos nossos próprios controladores. Em seguida, usaremos esses controladores para carregar dados ou estados em nossa aplicação e manipularesmos o HTML.`}),`
`,(0,t.jsx)(n.h2,{children:`Módulos do AngularJS`}),`
`,(0,t.jsx)(n.p,{children:`Os módulos correspondem ao modo como o AngularJS empacota códigos relevantes usando um único nome.`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Um módulo pode definir seus próprios `,(0,t.jsx)(n.strong,{children:`controladores`}),`, `,(0,t.jsx)(n.strong,{children:`serviços`}),`, `,(0,t.jsx)(n.strong,{children:`factories`}),` e `,(0,t.jsx)(n.strong,{children:`diretivas`}),`. São funções e códigos que podem ser acessados em todo o módulo.`]}),`
`,(0,t.jsx)(n.li,{children:`O módulo pode depender de outros módulos, assim podendo acessar controladores, serviços etc. definidos nesse outro módulo.`}),`
`]}),`
`,(0,t.jsx)(n.p,{children:`O módulo também é usado para inicializar uma aplicação, assim podemos dizer ao AngularJS qual módulo deve ser carregado como o principal ponto de entrada.`}),`
`,(0,t.jsxs)(n.p,{children:[`Vamos ver como definir um módulo chamdo `,(0,t.jsx)(`code`,{children:`MeuModulo`}),`:`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`angular.module("MeuModulo", []);
`})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`O primeiro argumento da função corresponde ao nome do módulo.`}),`
`,(0,t.jsx)(n.li,{children:`O segundo argumento corresponde a um array de nomes de módulos dos quais esse módulo depende.`}),`
`,(0,t.jsxs)(n.li,{children:[`Observe que os colchetes vazios que passamos `,(0,t.jsx)(`code`,{children:`[]`}),` no segundo argumento, diz ao AngularJS para criar um módulo chamado `,(0,t.jsx)(`code`,{children:`MeuModulo`}),` sem dependências.`]}),`
`]}),`
`,(0,t.jsx)(n.p,{children:`Um exemplo de um módulo com dependências`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`angular.module("MeuModulo", ["dependencia1", "dependencia2"]);
`})}),`
`,(0,t.jsxs)(n.p,{children:[`Se quisermos carregar um módulo que já foi definido em outro arquivo, devemos usar a função `,(0,t.jsx)(`code`,{children:`angular.module`}),` somente com o primeiro argumento.`]}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`angular.module("MeuModulo");
`})}),`
`,(0,t.jsx)(n.p,{children:`Há dois erros comuns ao tentar definir um módulo`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Tentar definir um módulo sem passar o segundo argumento, um erro sera gerado `,(0,t.jsx)(`code`,{children:`'No module found'`}),`.`]}),`
`,(0,t.jsx)(n.li,{children:`Tentar carregar um módulo de outro arquivo que não foi carregado na página.`}),`
`]}),`
`,(0,t.jsx)(n.p,{children:`Agora vamos ver um exemplo de como usar esse módulo`}),`
`,(0,t.jsx)(`p`,{"data-height":`266`,"data-theme-id":`9559`,"data-slug-hash":`VLMPMp`,"data-default-tab":`result`,"data-user":`airton`,className:`codepen`,children:(0,t.jsxs)(n.p,{children:[`See the Pen `,(0,t.jsx)(`a`,{href:`http://codepen.io/airton/pen/VLMPMp/`,children:`Module`}),` by
Airton Vancin Junior (`,(0,t.jsx)(`a`,{href:`http://codepen.io/airton`,children:`@airton`}),`) on`,` `,`
`,(0,t.jsx)(`a`,{href:`http://codepen.io`,children:`CodePen`}),`.`]})}),`
`,(0,t.jsx)(`script`,{async:!0,src:`//assets.codepen.io/assets/embed/ei.js`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`A diretiva `,(0,t.jsx)(`code`,{children:`ng-app`}),` recebe um argumento opcional, que corresponde ao nome do módulo a ser carregado durante a inicialização`]}),`
`]}),`
`,(0,t.jsx)(n.h2,{children:`Criando nosso próprio controlador`}),`
`,(0,t.jsx)(n.p,{children:`Controladores em AngularJS representam as funções JavaScript.`}),`
`,(0,t.jsx)(n.p,{children:`Algumas responsabilidades comuns de um controlador em um aplicação AngularJS incluem:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`Acessar os dados no servidor`}),`
`,(0,t.jsx)(n.li,{children:`Decidir quais partes dos dados devem ser apresentadas ao usuário`}),`
`,(0,t.jsx)(n.li,{children:`Lógica de apresentação - por exemplo de que modo os elementos serão exibidos`}),`
`,(0,t.jsx)(n.li,{children:`Interação com o usuário - por exemplo oque acontece quando o usuário clica em algo.`}),`
`]}),`
`,(0,t.jsxs)(n.p,{children:[`Vamos ver como podemos criar um controlador para o nosso módulo `,(0,t.jsx)(`code`,{children:`MeuModulo`})]}),`
`,(0,t.jsx)(`p`,{"data-height":`266`,"data-theme-id":`9559`,"data-slug-hash":`MwEJQM`,"data-default-tab":`result`,"data-user":`airton`,className:`codepen`,children:(0,t.jsxs)(n.p,{children:[`See the Pen`,` `,`
`,(0,t.jsx)(`a`,{href:`http://codepen.io/airton/pen/MwEJQM/`,children:`Creating controller`}),` by
Airton Vancin Junior (`,(0,t.jsx)(`a`,{href:`http://codepen.io/airton`,children:`@airton`}),`) on`,` `,`
`,(0,t.jsx)(`a`,{href:`http://codepen.io`,children:`CodePen`}),`.`]})}),`
`,(0,t.jsx)(`script`,{async:!0,src:`//assets.codepen.io/assets/embed/ei.js`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Definimos um controlador usando a função `,(0,t.jsx)(`code`,{children:`controller`})]}),`
`,(0,t.jsxs)(n.li,{children:[`A função controller recebe o nome `,(0,t.jsx)(`code`,{children:`MainCrlt`}),` como primeiro argumento`]}),`
`,(0,t.jsx)(n.li,{children:`O segundo argumento do controlador é o que ele faz e como faz`}),`
`,(0,t.jsxs)(n.li,{children:[`Há um pequeno truque nesse caso, definimos nossa função de `,(0,t.jsx)(`code`,{children:`controller`}),` dentro de um array. Ou seja, o primeiro argumento é o nome `,(0,t.jsx)(`code`,{children:`MainCtrl`}),` e o segundo um array `,(0,t.jsx)(`code`,{children:`[]`}),`. O array armazena todas as dependências do controlador em variáveis na forma de string. E a função é o unico argumento presente no array.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Vimos a nova diretiva `,(0,t.jsx)(`code`,{children:`ng-controller`}),`. Ela é usada ara dizer ao AngularJS que crie uma instância do controller com o nome especificado e a associe ao elemento do DOM.`]}),`
`]}),`
`,(0,t.jsxs)(`blockquote`,{children:[(0,t.jsxs)(`p`,{children:[(0,t.jsx)(`b`,{children:`Sintaxe da injeção de dependência e o AngularJS`}),(0,t.jsx)(`br`,{}),`
A notação que usamos é uma de duas opões que podem ser utilizadas para efetuar a decalaração de controladores no AngularJS. O estilo que usamos nos exemplos é o estilo `,(0,t.jsx)(`i`,{children:`seguro da injeção de dependência`}),` ou declaração, que também é a maneira recomendada:`]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`angular.module("MeuModulo", []).controller("MainCtrl", function () {});
`})}),` `,(0,t.jsx)(`p`,{children:(0,t.jsx)(n.p,{children:`o funcionamento será semelhante, porém isso poderá causar problemas se houver
um passo para minificar o nosso código.`})})]}),`
`,(0,t.jsx)(n.h2,{children:`Criando nossa primeira Aplicação AngularJS com controlador`}),`
`,(0,t.jsx)(`p`,{"data-height":`333`,"data-theme-id":`9559`,"data-slug-hash":`QbObxg`,"data-default-tab":`result`,"data-user":`airton`,className:`codepen`,children:(0,t.jsxs)(n.p,{children:[`See the Pen `,(0,t.jsx)(`a`,{href:`http://codepen.io/airton/pen/QbObxg/`,children:`QbObxg`}),` by
Airton Vancin Junior (`,(0,t.jsx)(`a`,{href:`http://codepen.io/airton`,children:`@airton`}),`) on`,` `,`
`,(0,t.jsx)(`a`,{href:`http://codepen.io`,children:`CodePen`}),`.`]})}),`
`,(0,t.jsx)(`script`,{async:!0,src:`//codepen.io/assets/embed/ei.js`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`Definimos a variável `,(0,t.jsx)(`code`,{children:`goodbyeMSg`}),` usando a palavra-chave `,(0,t.jsx)(`code`,{children:`this`}),` e a variável `,(0,t.jsx)(`code`,{children:`goodbyeMsg`}),` usando a palavra chave `,(0,t.jsx)(`code`,{children:`var`})]}),`
`,(0,t.jsxs)(n.li,{children:[`Usamos esse controlador por meio da diretiva `,(0,t.jsx)(`code`,{children:`ng-controller`}),`. Essa diretiva permite associar uma instância de um controlador a um elemento, nesse caso o `,(0,t.jsx)(`code`,{children:`body`})]}),`
`,(0,t.jsxs)(n.li,{children:[`Demos um nome a essa instância `,(0,t.jsx)(`code`,{children:`MainCtrl`}),` em particular quando usamos `,(0,t.jsx)(`code`,{children:`ng-controller`}),`. Nesse caso chamamos de `,(0,t.jsx)(`code`,{children:`ctrl`}),`. Isso é conhecido como sintaxe `,(0,t.jsx)(`code`,{children:`controllerAs`}),` em AngularJS.`]}),`
`,(0,t.jsxs)(n.li,{children:[`Fizemos referência às variaveis `,(0,t.jsx)(`code`,{children:`helloMsg`}),` e `,(0,t.jsx)(`code`,{children:`goodbyeMsg`}),` do controlador no HTML usando a notação de chaves duplas `,(0,t.jsx)(`code`,{children:{}})]}),`
`,(0,t.jsxs)(n.li,{children:[`Tudo que o HTML tenha de usar deverá ser definido em `,(0,t.jsx)(`code`,{children:`this`}),`. Tudo que o HTML não acessar diretamente não deverá ser colocado em this, mas deverá ser salvo como variável local no escopo do controlador, semelhante a `,(0,t.jsx)(`code`,{children:`goodbyeMsg`}),`.`]}),`
`]}),`
`,(0,t.jsx)(`blockquote`,{children:(0,t.jsxs)(`p`,{children:[(0,t.jsx)(`b`,{children:`$scope versus sintaxe controllerAs`}),(0,t.jsx)(`br`,{}),(0,t.jsxs)(n.p,{children:[`Nas versões anteriores a 1.2 do AngularJS, usava a variável`,` `,`
`,(0,t.jsx)(`code`,{children:`$scope`}),`. No Angular 1.2 e mais recentes, há uma nova sintaxe - a
sintaxe `,(0,t.jsx)(`code`,{children:`controllerAs`}),`, que permite definir as variáveis na
instância do controlador usando a palavra-chave `,(0,t.jsx)(`code`,{children:`this`}),`.`]})]})})]})}function a(e={}){let{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}export{n as article,a as default,r as metadata};