import{n as e}from"./index-BZtytHmN.js";var t=e();const n={title:`Desenvolvendo com AngularJS - Parte 1`,description:`Uma introdução básica sobre AngularJS, oque é MVC, vantagens, que tipo de backend é necessário, nosso primeiro "Hello Word" e uma aplicação básica com AngularJS.`,date:`2015-06-08`,readTime:2,image:`/desenvolvendo-com-angularjs-1.jpg`,tags:[`Javascript`,`AngularJS`]},r={title:n.title,description:n.description};function i(e){let n={a:`a`,code:`code`,em:`em`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsx)(`a`,{href:`/blog/desenvolvendo-com-angularjs-parte2/`,children:(0,t.jsx)(n.p,{children:`Desenvolvendo com AngularJS - Parte 2`})}),`
`]}),`
`]}),`
`,(0,t.jsx)(n.h2,{children:`Introdução`}),`
`,(0,t.jsxs)(n.p,{children:[`Como todo mundo sabe o AngularJS é um framework JavaScript MVC para web, ele oferece uma estrutura consistente e escalável, e tudo isso é feito em JavaScript e HTML, `,(0,t.jsx)(n.em,{children:`coisa linda de god :)`}),`.`]}),`
`,(0,t.jsx)(n.h2,{children:`O que é MVC (Modelo-Visão-Controlador)?`}),`
`,(0,t.jsx)(n.p,{children:`O principal conceito sobre o framework AngularJS é o padrão de arquitetura MVC (Model-View-Controller) ou MVVM (Model-View-ViewModel).`}),`
`,(0,t.jsx)(n.p,{children:`Esse padrão de arquitetura separa uma aplicação em três partes distintas:`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Modelo (Model)`}),`: em geral corresponde aos dados por trás da aplicação, os dados que o usuário vê é derivado do modelo.`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Visão (View)`}),`: isso é tudo que usuário vê e consegue interagir.`]}),`
`]}),`
`,(0,t.jsxs)(n.li,{children:[`
`,(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:`Controlador (Controller)`}),`: representa a lógica de negócios e a camada de apresentação, o controlador acessa a camada de dados e toma decisões, sobre como o modelo sera apresentado.`]}),`
`]}),`
`]}),`
`,(0,t.jsxs)(n.p,{children:[`Veja esse `,(0,t.jsx)(n.a,{href:`https://www.youtube.com/watch?v=q8ekGIkU2jE`,children:`vídeo`}),` explicando.`]}),`
`,(0,t.jsx)(n.h2,{children:`Vantagens do AngularJS`}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsx)(n.li,{children:`É um framework para SPA (Single Page Apllication, ou Aplicação de página única).`}),`
`,(0,t.jsx)(n.li,{children:`Os templates de aplicações AngularJS são implementados em HTML puro.`}),`
`,(0,t.jsx)(n.li,{children:`Não há necessidade de abrir mão de componentes como jQueryUI. O AngularJS interage bem com bibliotecas de componentes de terceiros.`}),`
`,(0,t.jsx)(n.li,{children:`Uma aplicação AngularJS exigirá menos linhas de código do que uma solução JavaScript pura usando jQuery. Comparando com outros frameworks, você se verá implementando menos código e terá um código mais limpo.`}),`
`,(0,t.jsx)(n.li,{children:`As aplicações podem ser estilizadas usando CSS e HTML, independente da lógica de negócios, sem a necessidade de alterar uma linha de código.`}),`
`]}),`
`,(0,t.jsx)(n.h3,{children:`Vamos comparar com um exemplo usando jQuery`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-html`,children:`Hello <span id="name"></span>
`})}),`
`,(0,t.jsx)(n.p,{children:`O JavaScript para fazer isso funcionar, seria algo semelhante a isso:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-js`,children:`var updateNameInUI = function (name) {
  $("#name").text(name);
};

updateNameInUI(user.name);
updateNameInUI(updatedName);
`})}),`
`,(0,t.jsx)(n.h3,{children:`Usando AngularJS`}),`
`,(0,t.jsx)(n.p,{children:`Basta fazer o binding em nosso HTML, e o AngularJS cuidará de fazer esses valores chegarem até a UI.`}),`
`,(0,t.jsx)(n.p,{children:`A mesma funcionalidade em uma aplicação AngularJS ficará semelhante a isso:`}),`
`,(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:`language-html`,children:`Hello <span>{ { name } }</span>
`})}),`
`,(0,t.jsxs)(n.p,{children:[`No JavaScript tudo que devemos fazer é definir o valor da variável `,(0,t.jsx)(`code`,{children:`name`})]}),`
`,(0,t.jsx)(n.h2,{children:`Que tipo de backend é necessário?`}),`
`,(0,t.jsx)(n.p,{children:`A resposta é bem simples: esse tipo de requisito não existe.`}),`
`,(0,t.jsx)(n.p,{children:`O AngularJS não tem nenhum requisito sobre o tipo de backend necessário para funcionar como uma Single-Page Application. Você esta livre para usar Java, Python, Ruby, C#, PHP ou qualquer outra linguagem que sentir mais à vontade.`}),`
`,(0,t.jsxs)(n.p,{children:[`O único recurso necessário é ter uma maneira de se comunicar com o servidor. O ideal é que seja feito por meio de XHR(`,(0,t.jsx)(n.a,{href:`https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest`,children:`solicitação HTTP XML`}),`) ou sockets.`]}),`
`,(0,t.jsx)(n.p,{children:`Se o seu servidor tiver pontos de conexão com REST ou APIs que disponibilizem valores JSON, sua vida como desenvolvedor frontend será mais fácil ainda.`}),`
`,(0,t.jsx)(n.h2,{children:`Nosso Primeiro Hello World com AngularJS`}),`
`,(0,t.jsx)(`p`,{"data-height":`266`,"data-theme-id":`9559`,"data-slug-hash":`QbvrmM`,"data-default-tab":`result`,"data-user":`airton`,className:`codepen`,children:(0,t.jsxs)(n.p,{children:[`See the Pen`,` `,`
`,(0,t.jsx)(`a`,{href:`http://codepen.io/airton/pen/QbvrmM/`,children:`Hello Word - AngularJS`}),` by
Airton Vancin Junior (`,(0,t.jsx)(`a`,{href:`http://codepen.io/airton`,children:`@airton`}),`) on`,` `,`
`,(0,t.jsx)(`a`,{href:`http://codepen.io`,children:`CodePen`}),`.`]})}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(`code`,{children:`ng-app`}),`: diretiva AngularJS para dar o start;`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(`code`,{children:`ng-model`}),`: diretiva AngularJS para campos de entrada, sempre que
quisermos que o usuário insira dados e tenha acesso ao valor em JavaScript.`]}),`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(`code`,{children:`ng-bind`}),`: diretiva AngularJS para mostrar os dados na view.`]}),`
`]}),`
`,(0,t.jsx)(n.h2,{children:`Básica aplicação com AngularJS`}),`
`,(0,t.jsxs)(`p`,{"data-height":`266`,"data-theme-id":`9559`,"data-slug-hash":`MwmGGV`,"data-default-tab":`result`,"data-user":`airton`,className:`codepen`,children:[(0,t.jsxs)(n.p,{children:[`See the Pen`,` `]}),(0,t.jsx)(`a`,{href:`http://codepen.io/airton/pen/MwmGGV/`,children:(0,t.jsx)(n.p,{children:`Básica aplicação - AngularJS`})}),` `,(0,t.jsxs)(n.p,{children:[`by Airton Vancin Junior (`,(0,t.jsx)(`a`,{href:`http://codepen.io/airton`,children:`@airton`}),`) on`,` `,`
`,(0,t.jsx)(`a`,{href:`http://codepen.io`,children:`CodePen`}),`.`]})]}),`
`,(0,t.jsxs)(n.ul,{children:[`
`,(0,t.jsxs)(n.li,{children:[(0,t.jsx)(`code`,{children:`﹛﹜`}),` e `,(0,t.jsx)(`code`,{children:`ng-bind`}),`: essas duas diretivas tem a mesma
funcionalidade, mostrar os dados na view. A única diferença é que o AngularJS
leva um tempo para ser carregado, e pode ser que você veja as chaves duplas `,(0,t.jsx)(`code`,{children:`
﹛﹜
`}),` na página, isso não acontecera com `,(0,t.jsx)(`code`,{children:`ng-bind`}),`.`]}),`
`]}),`
`,(0,t.jsx)(`script`,{async:!0,src:`//assets.codepen.io/assets/embed/ei.js`})]})}function a(e={}){let{wrapper:n}=e.components||{};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(i,{...e})}):i(e)}export{n as article,a as default,r as metadata};