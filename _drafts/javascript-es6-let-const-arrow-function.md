---
layout: post
class: post
title: 'JavaScript - ES6: let, const, arrow function'
description: 
image: javascript-es6.jpg
---

ECMA Script 6

## Let

Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor. O `let` é o substituto para `var`, pois ele será descontinuado futuramente. Assim ele se comporta como o esperado de uma variável.

Exemplo usando `var`:

{% highlight js %}
nome = "Airton";
var nome;
{% endhighlight %}

Se fizermos o mesmo, substituindo por `let`, o que vai acontecer:

{% highlight js %}
nome = "Airton";
let nome;
{% endhighlight %}

Vai dar erro, pois o `let` suporta somente o modo estrito, o famoso `'use strict'`, a blz então só adicionar no começo do arquivo:

{% highlight js %}'use strict';
nome = "Airton";
let nome;
{% endhighlight %}

Também não vai funcionar :disappointed: , pois o `let` obriga você a declarar ela antes de ser chamada

## Const

Como o próprio nome diz são constantes, isso quer dizer que uma vez declarada você não consegue mais alterar o valor dela, certo? sim esse é o propósito, mas existe uma marotagem para poder alterar esse valor.

Então se você declarar uma `const`, ex:

{% highlight js %}
    const nome = "Airton";
{% endhighlight %}

O valor da `const` `nome` nesse exemplo sempre vai ser `Airton`, agora se você tentar rescrever ela com outro valor, o que aconte?

{% highlight js %}
const nome = "Airton";
const nome = "Junior";
{% endhighlight %}

Isso vai dar erro dizendo que essa `const` já foi declarada:

{% highlight js %}
TypeError: Identifier 'nome' has already been declared
{% endhighlight %}

E se eu fizer assim:

{% highlight js %}
const nome = "Airton";
      nome = "Junior";
{% endhighlight %}

Não vai dar erro, mas quando você for imprimir a `const` `nome` ele vai imprimir `Airton`

## Arrow Function

