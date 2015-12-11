---
layout: post
class: post
title: Instanciação de Variáveis JavaScript
description: Esse é um artigo feito como forma de estudo para o curso de BE Mean do WebSchool.io
image: instanciacao-de-variaveis-javascript.jpg
---

## Hoisting

Hoisting é um comportamento do JavaScript de mover declarações para o topo de um escopo (o escopo global ou da função em que se encontra). Em JavaScript, funções e variáveis são hoisted (ou "levados ao topo"). Isso significa que você pode usar variável e função antes mesmo de tê-las declaradas.

**Ex**

{% highlight js %}
sobrenome = "Vancin";
var sobrenome;

nome();
function nome(){
    return "Airton";
}
{% endhighlight %}

## Closure

Uma closure é o escopo criado quando uma função é declarada que permite à função acessar e manipular variáveis externas a ela. Em outras palavras, clousers permitem quem uma função acesse todas as variáveis, assim como outras funções, que estão em escopo quando ela é declarada.

**Como usar**
{% highlight js %}
var sobrenome = "Vancin"; // Declara variável em escopo global

function nomeCompleto(){ // Declara função em escopo global
    return "Airton " + sobrenome;
}
nomeCompleto(); // Executa a função
{% endhighlight %}


## Variável Global

Todas as variáveis ​​ou funções declaradas fora de uma função estarão disponíveis para todo o código JavaScript na página, se esse código é dentro de uma função ou de outra forma, nós chamamos isso de âmbito global. Veja o exemplo:

{% highlight js %}
var sobrenome = "Vancin"; // Declara variável em escopo global

function nomeCompleto(){ // Declara função em escopo global
    return "Airton " + sobrenome;
}  
{% endhighlight %}

- A variável `sobrenome` essa é uma variável global pois é criada no exterior de uma função, e porque é global, ela pode ser utilizado em qualquer lugar na página.
- A função `nomeCompleto()` acessa a variável `sobrenome` para retornar o nome completo.


## Variável por parâmetro

Parâmetros de função são semelhantes às variáveis, eles têm um âmbito local, e, portanto, só pode ser acessado de dentro da função.

{% highlight js %}
function nomeCompleto(sobrenome){ // Declara função em escopo global
    return "Airton " + sobrenome;
}  

nomeCompleto('Vancin'); // Chama a função passando uma string como parametro
{% endhighlight %}

- Nesse caso a função espera que você passe um valor como parametro, se não passar nada ela retornara `undefined`.


## Instanciação usando uma IIFE

IIFE significa uma "Função anônima auto-executável" ou "Função Imediatamente Executável", quando usamos isso queremos criar um escopo no JavaScript para que as variáveis dentro dela não poluam o escopo global, evitando possíveis conflitos de variáveis ou funções com o mesmo nome.

Existem dois padrões para invovar funções imediatas
{% highlight js %}
(function(){ /* código */ }()); // Crockford recomenda esse
(function(){ /* código */ })(); // Mas esse também funciona
{% endhighlight %}

**Exemplo usando variável**
{% highlight js %}
var nomeCompleto = (function(){
    return "Airton Vancin";
})();

nomeCompleto; // Chama a variável que executa a função imediata que retorna o nome completo
{% endhighlight %}

**Exemplo usando parâmetros**
{% highlight js %}
(function(x) { 
    return x;
})(1); // Passando o valor 1 como parâmetro
{% endhighlight %}

## Considerações

O uso dessas técnicas pode não apenas nos ajudar a reduzir a quantidade e a complexidade do script necessário para incluir funcionalidades avançadas em nossas páginas, como também nos permite realizar operações que simplesmente não seriam possíveis, ou seriam complexas demais para serem factíveis, sem elas.


