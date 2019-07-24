---
layout: post
class: post
title: 'JavaScript - ES6: let, const, arrow function'
description: 
image: javascript-es6.jpg
---

A nova versão do JavaScript, conhecida também como ECMAScript 6 ou apenas ES6, vamos falar sobre `let`, `const` e `arrow function`.


## Let

Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor. O `let` é o substituto para `var`, pois ele será descontinuado futuramente. Por que ele se comporta como o esperado de uma variável.

Exemplo usando `var`:

{% highlight js %}
nome = "Airton";
var nome; 
console.log(nome); // Airton
{% endhighlight %}

Se fizermos o mesmo, substituindo por `let`, o que vai acontecer:

{% highlight js %}
nome = "Airton";
let nome; 
console.log(nome); // undefined
{% endhighlight %}

Vai dar erro, pois o `let` suporta somente o modo estrito, o famoso `'use strict'`, a blz então só adicionar no começo do arquivo:

{% highlight js %}
'use strict';
nome = "Airton";
let nome; 
console.log(nome); // undefined
{% endhighlight %}

Também não vai funcionar :disappointed: , pois o `let` obriga você a sempre declarar as variáveis antes de ser chamada, então como que vai ficar?

{% highlight js %}
'use strict';
let nome;
nome = "Airton"; 
console.log(nome); // Airton
{% endhighlight %}

Você pode ver aqui sobre [Hoisting](http://airtonvancin.com/blog/artigo-instanciacao-variaveis-javascript/#hoisting) para entender melhor isso.

## Const

Como o próprio nome diz são constantes, então:

- O valor de uma constante não pode ser alterado;
- É obrigatório que um valor seja atribuido à constante em sua declaração;
- Uma constante não deve compartilhar o nome com uma função ou variável em um mesmo escopo.

Isso quer dizer que uma vez declarada você não consegue mais alterar o valor dela, certo? sim esse é o propósito, mas existe uma marotagem para poder alterar esse valor.

Então se você declarar uma `const`, ex:

{% highlight js %}
    const nome = "Airton";
{% endhighlight %}

O valor da `const` `nome` nesse exemplo sempre vai ser `Airton`, agora se você tentar redeclarar ela com outro valor, o que acontece?

{% highlight js %}
const nome = "Airton";
const nome = "Junior";
{% endhighlight %}

Isso vai dar erro dizendo que essa `const` já foi declarada:

{% highlight js %}
TypeError: Identifier 'nome' has already been declared
{% endhighlight %}

E se eu tentar reescrever assim:

{% highlight js %}
const nome = "Airton";
      nome = "Junior";
console.log(nome); // Airton
{% endhighlight %}

Não vai dar erro, mas quando você for imprimir a `const` `nome` ele vai imprimir `Airton`.

**Const também funciona com objetos:**

{% highlight js %}
const user = {name: 'Airton'};
console.log(user); // { name: 'Airton' }
{% endhighlight %}

Entretanto, atributos de objetos não estão protegidos, logo a seguinte instrução é executada sem problemas:

{% highlight js %}
const user = {name: 'Airton'};
      user.name = 'Junior';
console.log(user); // { name: 'Junior' }
{% endhighlight %}

## Arrow Function

É uma função que possui uma sintaxe mais curta, e elas sempre são funções anônimas ([IIFE](http://airtonvancin.com/blog/artigo-instanciacao-variaveis-javascript/#instanciao-usando-uma-iife)), vinculando o valor de **this** de maneira léxica, quando ela é criada o valor de **this** sempre será o mesmo.

{% highlight js %}
// Função normal
function (name) { return name; }

// Arrow Function
(name) => name;
{% endhighlight %}

Função nomeada não é possível fazer com arrow function:

{% highlight js %}
// Função normal
function sayName(name) { return name; }

// Arrow Function
sayName(name) => name; // <-- ISSO NÃO EXISTE
{% endhighlight %}

O que fazer então? vamos estanciar ela como uma constante:

{% highlight js %}

// Arrow Function
const sayName = (name) => name; // Ae agora sim
{% endhighlight %}


Vamos ver um exemplo de uma função que retorna a média de dois números:

{% highlight js %}
// ES5
const media = (function(num1,num2) {
    return (num1 + num2) / 2;
})(10,50); // passando os valores 10  e 50 como parâmetros

console.log(media); // 30

// --------------------------------

// ES6
const media = ((num1,num2) => {
    return (num1 + num2) / 2;
})(10,50);

console.log(media); // 30

// OU MAIS SIMPLES

const media = ( (num1,num2) => (num1 + num2) / 2 )(10,50);
console.log(media); // 30
{% endhighlight %}

### Livro ###
<a target="_blank" href="https://www.amazon.com.br/gp/offer-listing/193398869X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=193398869X&linkCode=am2&tag=avancin-20&linkId=099ff8e589bc6767d151d25c6ba0fa81">Secrets of the JavaScript Ninja</a><img src="//ir-br.amazon-adsystem.com/e/ir?t=avancin-20&l=am2&o=33&a=193398869X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />
<br/>
<a target="_blank"  href="https://www.amazon.com.br/gp/product/193398869X/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=193398869X&linkCode=as2&tag=avancin-20&linkId=a0223e5c2cd8bfe85ee43e8961eb11c2"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=BR&ASIN=193398869X&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=avancin-20" ></a><img src="//ir-br.amazon-adsystem.com/e/ir?t=avancin-20&l=am2&o=33&a=193398869X" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />