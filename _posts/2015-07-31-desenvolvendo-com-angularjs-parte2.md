---
layout: post
class: post
title: Desenvolvendo com AngularJS - Parte 2
description: Diretivas e controladores básicos do AngularJS
image: desenvolvendo-com-angularjs-2.jpg
---
- <a href="/blog/desenvolvendo-com-angularjs-parte1/">Desenvolvendo com AngularJS - Parte 1</a>

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

<blockquote>
    <p><b>Sintaxe da injeção de dependência e o AngularJS</b><br>
    A notação que usamos é uma de duas opões que podem ser utilizadas para efetuar a decalaração de controladores no AngularJS. O estilo que usamos nos exemplos é o estilo <i>seguro da injeção de dependência</i> ou declaração, que também é a maneira recomendada:</p>

{% highlight js %}
angular.module('MeuModulo', [])
    .controller('MainCtrl', function(){
});
{% endhighlight %}
    <p>o funcionamento será semelhante, porém isso poderá causar problemas se houver um passo para minificar o nosso código.</p>

</blockquote>

## Criando nossa primeira Aplicação AngularJS com controlador ##

<p data-height="266" data-theme-id="9559" data-slug-hash="QbObxg" data-default-tab="result" data-user="airton" class='codepen'>See the Pen <a href='http://codepen.io/airton/pen/QbObxg/'>Hello Controller</a> by Airton Vancin Junior (<a href='http://codepen.io/airton'>@airton</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
- Definimos a variável <code>goodbyeMSg</code> usando a palavra-chave <code>this</code> e a variável <code>goodbyeMsg</code> usando a palavra chave <code>var</code>
- Usamos esse controlador por meio da diretiva <code>ng-controller</code>. Essa diretiva permite associar uma instância de um controlador a um elemento, nesse caso o <code>body</code>
- Demos um nome a essa instância <code>MainCtrl</code> em particular quando usamos <code>ng-controller</code>. Nesse caso chamamos de <code>ctrl</code>. Isso é conhecido como sintaxe <code>controllerAs</code> em AngularJS.
- Fizemos referência às variaveis <code>helloMsg</code> e <code>goodbyeMsg</code> do controlador no HTML usando a notação de chaves duplas <code>{ { } }</code>
- Tudo que o HTML tenha de usar deverá ser definido em <code>this</code>. Tudo que o HTML não acessar diretamente não deverá ser colocado em this, mas deverá ser salvo como variável local no escopo do controlador, semelhante a <code>goodbyeMsg</code>.

<blockquote>
    <p><b>$scope versus sintaxe controllerAs</b><br>
        Nas versões anteriores a 1.2 do AngularJS, usava a variável <code>$scope</code>. No Angular 1.2 e mais recentes, há uma nova sintaxe - a sintaxe <code>controllerAs</code>, que permite definir as variáveis na instância do controlador usando a palavra-chave <code>this</code>.
    </p>
</blockquote>

### Livro ###
O Livro usado para escrever esse post:

<a target="_blank" href="https://www.amazon.com.br/gp/product/8575224093/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=8575224093&linkCode=as2&tag=avancin-20&linkId=57a2a7491187bac25f0b697336b4810b">Desenvolvendo com AngularJS</a><img src="//ir-br.amazon-adsystem.com/e/ir?t=avancin-20&l=am2&o=33&a=8575224093" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
<br/>  
<div class="books">
<a class="books__item" href="https://www.amazon.com.br/gp/product/8575224093/ref=as_li_ss_il?ie=UTF8&linkCode=li3&tag=avancin-20&linkId=9bb7d1928c71ef92382da430e7418240" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=8575224093&Format=_SL250_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=avancin-20" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=avancin-20&l=li3&o=33&a=8575224093" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
<img src="//ir-br.amazon-adsystem.com/e/ir?t=avancin-20&l=am2&o=33&a=8575224093" width="1" height="1" border="0" alt="" />
</div>