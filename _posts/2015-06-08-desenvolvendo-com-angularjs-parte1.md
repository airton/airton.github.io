---
layout: post
class: post
title: Desenvolvendo com AngularJS - Parte 1
description: Uma introdução básica sobre AngularJS, oque é MVC, vantagens, que tipo de backend é necessário, nosso primeiro 'Hello Word' e uma aplicação básica com AngularJS.
image: desenvolvendo-com-angularjs-1.jpg
---
- <a href="/blog/desenvolvendo-com-angularjs-parte2/">Desenvolvendo com AngularJS - Parte 2</a>

## Introdução ##

Como todo mundo sabe o AngularJS é um framework JavaScript MVC para web, ele oferece uma estrutura consistente e escalável, e tudo isso é feito em JavaScript e HTML, *coisa linda de god :)*.


## O que é MVC (Modelo-Visão-Controlador)? ##

O principal conceito sobre o framework AngularJS é o padrão de arquitetura MVC (Model-View-Controller) ou MVVM (Model-View-ViewModel).

Esse padrão de arquitetura separa uma aplicação em três partes distintas:

- **Modelo (Model)**: em geral corresponde aos dados por trás da aplicação, os dados que o usuário vê é derivado do modelo.

- **Visão (View)**: isso é tudo que usuário vê e consegue interagir.

- **Controlador (Controller)**: representa a lógica de negócios e a camada de apresentação, o controlador acessa a camada de dados e toma decisões, sobre como o modelo sera apresentado.

Veja esse [vídeo](https://www.youtube.com/watch?v=q8ekGIkU2jE) explicando.

## Vantagens do AngularJS ##

- É um framework para SPA (Single Page Apllication, ou Aplicação de página única).
- Os templates de aplicações AngularJS são implementados em HTML puro.
- Não há necessidade de abrir mão de componentes como jQueryUI. O AngularJS interage bem com bibliotecas de componentes de terceiros.
- Uma aplicação AngularJS exigirá menos linhas de código do que uma solução JavaScript pura usando jQuery. Comparando com outros frameworks, você se verá implementando menos código e terá um código mais limpo.
- As aplicações podem ser estilizadas usando CSS e HTML, independente da lógica de negócios, sem a necessidade de alterar uma linha de código.


### Vamos comparar com um exemplo usando jQuery ###

{% highlight html %}
    Hello <span id="name"></span>
{% endhighlight %}

O JavaScript para fazer isso funcionar, seria algo semelhante a isso:

{% highlight js %}
var updateNameInUI = function(name){
    $('#name').text(name);
}

updateNameInUI(user.name);
updateNameInUI(updatedName);
{% endhighlight %}

### Usando AngularJS ###

Basta fazer o binding em nosso HTML, e o AngularJS cuidará de fazer esses valores chegarem até a UI.

A mesma funcionalidade em uma aplicação AngularJS ficará semelhante a isso:

{% highlight html %}
    Hello <span>{ { name } }</span>
{% endhighlight %}

No JavaScript tudo que devemos fazer é definir o valor da variável <code>name</code>

## Que tipo de backend é necessário? ##

A resposta é bem simples: esse tipo de requisito não existe.

O AngularJS não tem nenhum requisito sobre o tipo de backend necessário para funcionar como uma Single-Page Application. Você esta livre para usar Java, Python, Ruby, C#, PHP ou qualquer outra linguagem que sentir mais à vontade.

O único recurso necessário é ter uma maneira de se comunicar com o servidor. O ideal é que seja feito por meio de XHR([solicitação HTTP XML](https://developer.mozilla.org/pt-BR/docs/Web/API/XMLHttpRequest)) ou sockets.

Se o seu servidor tiver pontos de conexão com REST ou APIs que disponibilizem valores JSON, sua vida como desenvolvedor frontend será mais fácil ainda.

## Nosso Primeiro Hello World com AngularJS ##

<p data-height="266" data-theme-id="9559" data-slug-hash="QbvrmM" data-default-tab="result" data-user="airton" class='codepen'>See the Pen <a href='http://codepen.io/airton/pen/QbvrmM/'>Hello Word - AngularJS</a> by Airton Vancin Junior (<a href='http://codepen.io/airton'>@airton</a>) on <a href='http://codepen.io'>CodePen</a>.</p>

- <code>ng-app</code>: diretiva AngularJS para dar o start;
- <code>ng-model</code>: diretiva AngularJS para campos de entrada, sempre que quisermos que o usuário insira dados e tenha acesso ao valor em JavaScript.
- <code>ng-bind</code>: diretiva AngularJS para mostrar os dados na view.

## Básica aplicação com AngularJS ##

<p data-height="266" data-theme-id="9559" data-slug-hash="MwmGGV" data-default-tab="result" data-user="airton" class='codepen'>See the Pen <a href='http://codepen.io/airton/pen/MwmGGV/'>Básica aplicação - AngularJS</a> by Airton Vancin Junior (<a href='http://codepen.io/airton'>@airton</a>) on <a href='http://codepen.io'>CodePen</a>.</p>


- <code>{ { } }</code> e <code>ng-bind</code>: essas duas diretivas tem a mesma funcionalidade, mostrar os dados na view. A única diferença é que o AngularJS leva um tempo para ser carregado, e pode ser que você veja as chaves duplas <code>{ { } }</code> na página, isso não acontecera com <code>ng-bind</code>.

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

### Livro ###
O Livro usado para escrever esse post:

<a target="_blank" href="https://www.amazon.com.br/gp/product/8575224093/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=8575224093&linkCode=as2&tag=avancin-20&linkId=57a2a7491187bac25f0b697336b4810b">Desenvolvendo com AngularJS</a><img src="//ir-br.amazon-adsystem.com/e/ir?t=avancin-20&l=am2&o=33&a=8575224093" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
<br/>  
<div class="books">
<a class="books__item" href="https://www.amazon.com.br/gp/product/8575224093/ref=as_li_ss_il?ie=UTF8&linkCode=li3&tag=avancin-20&linkId=9bb7d1928c71ef92382da430e7418240" target="_blank"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=8575224093&Format=_SL250_&ID=AsinImage&MarketPlace=BR&ServiceVersion=20070822&WS=1&tag=avancin-20" ></a><img src="https://ir-br.amazon-adsystem.com/e/ir?t=avancin-20&l=li3&o=33&a=8575224093" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
<img src="//ir-br.amazon-adsystem.com/e/ir?t=avancin-20&l=am2&o=33&a=8575224093" width="1" height="1" border="0" alt="" />
</div>
