---
layout: post
class: post
title: Desenvolvendo com AngularJS - Parte 2
description: Diretivas e controladores básicos do AngularJS
image: desenvolvendo-com-angularjs-2.jpg
---

## Introdução ##

Exploraremos os módulos e os controladores do AngularJS e criaremos nossos próprios controladores. Em seguida, usaremos esses controladores para carregar dados ou estados em nossa aplicação e manipularesmos o HTML.

## Módulos do AngularJS ##

Os módulos correspondem ao modo como o AngularJS empacota códigos relevantes usando um único nome.

- Um módulo pode definir seus próprios **controladores**, **serviços**, **factories** e **diretivas**. São funções e códigos que podem ser acessados em todo o módulo.
- O módulo pode depender de outros módulos, assim podendo acessar controladores, serviços etc. definidos nesse outro módulo.

O módulo também é usado para inicializar uma aplicação, assim podemos dizer ao AngularJS qual módulo deve ser carregado como o principal ponto de entrada.

Vamos ver como definir um módulo chamdo <code>MeuModulo</code>:

{% highlight js %}
    angular.module('MeuModulo', []);
{% endhighlight %}

- O primeiro argumento da função corresponde ao nome do módulo.
- O segundo argumento corresponde a um array de nomes de módulos dos quais esse módulo depende.
- Observe que os colchetes vazios que passamos <code>[]</code> no segundo argumento, diz ao AngularJS para criar um módulo chamado <code>MeuModulo</code> sem dependências.

Um exemplo de um módulo com dependências

{% highlight js %}
    angular.module('MeuModulo', ['dependencia1', 'dependencia2']);
{% endhighlight %}

Se quisermos carregar um módulo que já foi definido em outro arquivo, devemos usar a função <code>angular.module</code> somente com o primeiro argumento.

{% highlight js %}
    angular.module('MeuModulo');
{% endhighlight %}

Há dois erros comuns ao tentar definir um módulo

- Tentar definir um módulo sem passar o segundo argumento, um erro sera gerado <code>'No module found'</code>.
- Tentar carregar um módulo de outro arquivo que não foi carregado na página.

Agora vamos ver um exemplo de como usar esse módulo

<p data-height="266" data-theme-id="9559" data-slug-hash="VLMPMp" data-default-tab="result" data-user="airton" class='codepen'>See the Pen <a href='http://codepen.io/airton/pen/VLMPMp/'>Module</a> by Airton Vancin Junior (<a href='http://codepen.io/airton'>@airton</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

- A diretiva <code>ng-app</code> recebe um argumento opcional, que corresponde ao nome do módulo a ser carregado durante a inicialização

## Criando nosso próprio controlador ##

Controladores em AngularJS representam as funções JavaScript.

Algumas responsabilidades comuns de um controlador em um aplicação AngularJS incluem:

- Acessar os dados no servidor
- Decidir quais partes dos dados devem ser apresentadas ao usuário
- Lógica de apresentação - por exemplo de que modo os elementos serão exibidos
- Interação com o usuário - por exemplo oque acontece quando o usuário clica em algo.

Vamos ver como podemos criar um controlador para o nosso módulo <code>MeuModulo</code>

<p data-height="266" data-theme-id="9559" data-slug-hash="MwEJQM" data-default-tab="result" data-user="airton" class='codepen'>See the Pen <a href='http://codepen.io/airton/pen/MwEJQM/'>Creating controller</a> by Airton Vancin Junior (<a href='http://codepen.io/airton'>@airton</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

- Definimos um controlador usando a função <code>controller</code>
- A função controller recebe o nome <code>MainCrlt</code> como primeiro argumento
- O segundo argumento do controlador é o que ele faz e como faz
- Há um pequeno truque nesse caso, definimos nossa função de <code>controller</code> dentro de um array. Ou seja, o primeiro argumento é o nome <code>MainCtrl</code> e o segundo um array <code>[]</code>. O array armazena todas as dependências do controlador em variáveis na forma de string. E a função é o unico argumento presente no array.
- Vimos a nova diretiva <code>ng-controller</code>. Ela é usada ara dizer ao AngularJS que crie uma instância do controller com o nome especificado e a associe ao elemento do DOM.

## Criando nossa primeira Aplicação AngularJS com controlador ##

<p data-height="266" data-theme-id="9559" data-slug-hash="QbObxg" data-default-tab="result" data-user="airton" class='codepen'>See the Pen <a href='http://codepen.io/airton/pen/QbObxg/'>Hello Controller</a> by Airton Vancin Junior (<a href='http://codepen.io/airton'>@airton</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
