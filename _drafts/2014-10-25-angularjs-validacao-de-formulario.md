---
layout: post
class: post
title: AngularJS Validação de Formulário
description: "Vamos ver como o AngularJS nos ajuda e facilita na validação de um formulário" 
image: angularjs.png
---



Para começar vamos listar os requisitos do formulário

## Requisitos ##

- <b>name</b> é obrigatório
- <b>username</b> não é necessária, comprimento mínimo de 3 caracteres e comprimento máximo de 8 caracteres
- <b>email</b> não é obrigatório, mas tem que ser um e-mail válido
- Formulário de envio é desativado se o formulário não é válido
- Mostrar um erro de e-mail obrigatório ou inválido
- Alertar fantástico se apresentou corretamente

Agora que sabemos o que queremos, vamos começar a construção.

## Angular Form Propriedades <code>$valid, $invalid, $pristine, $dirty</code> ## 


O Angular fornece propriedades em formas que nos ajudam a validá-los. Eles nos dão várias informações sobre uma forma ou de seus insumos e são **aplicados a um formulário e insumos.**

<table class="table table-bordered table-striped table-hover">
    <thead>
        <tr>
            <td>Propriedade</td>
            <td>Classe</td>
            <td>Descrição</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="success">$valid</td>
            <td>ng-valid</td>
            <td><em class="text-info">Boolean</em> Diz se um item é válido no momento com base nas regras que você colocou.</td>
        </tr>
        <tr>
            <td class="danger">$invalid</td>
            <td>ng-invalid</td>
            <td><em class="text-info">Boolean</em> Diz se um item está inválida com base nas regras que você colocou.</td>
        </tr>
        <tr>
            <td class="active">$pristine</td>
            <td>ng-pristine</td>
            <td><em class="text-info">Boolean</em> Verdadeiro se o form/input <b>ainda não</b> foi usado</td>
        </tr>
        <tr>
            <td class="warning">$dirty</td>
            <td>ng-dirty</td>
            <td><em class="text-info">Boolean</em> Verdadeiro se o form/input <strong>foi</strong> usado.</td>
        </tr>
    </tbody>
</table>

Angular também oferece aulas sobre a forma e as suas entradas de modo que você pode estilizar cada estado de acordo.

### Acessando as propriedades do formulário angular ###

- <b>Para acessar o formulário:</b> <code>< form name >.< angular property ></code> ex: <code>userForm.$valid</code>
- <b>Para acessar o input:</b> <code>< form name >.< input name >.< angular property ></code> <br>ex: <code>userForm.name.$valid</code>


### Configurando nosso Formulário ###

Vamos usar um formulário simples para demonstrar.

<img src="" alt="">

Vamos precisar de dois arquivos:

- <code>index.html</code> Nosso código para exibir o formulário
- <code>app.js</code> Nossa aplicação angular e controlador (quase qualquer código em tudo)

### Nosso arquivo <code>index.html</code>###

{% prism markup %}
    <!-- index.html -->
    <!DOCTYPE html>
    <html>
    <head>
        <!-- CSS ===================== -->
        <!-- load bootstrap -->
        <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css"> 
        <style>
            body    { padding-top:30px; }
        </style>
        
        <!-- JS ===================== -->
        <!-- load angular -->
        <script src="http://code.angularjs.org/1.2.6/angular.js"></script> 
        <script src="app.js"></script>
    </head>

    <!-- apply angular app and controller to our body -->
    <body ng-app="validationApp" ng-controller="mainController">
    <div class="container">
    <div class="col-sm-8 col-sm-offset-2">
        
        <!-- PAGE HEADER -->
        <div class="page-header"><h1>AngularJS Form Validation</h1></div>
       
        <!-- FORM -->
        <!-- pass in the variable if our form is valid or invalid -->
        <form name="userForm" ng-submit="submitForm(userForm.$valid)" novalidate> <!-- novalidate prevents HTML5 validation since we will be validating ourselves -->

            <!-- NAME -->
            <div class="form-group">
                <label>Name</label>
                <input type="text" name="name" class="form-control" ng-model="name" required>
            </div>

            <!-- USERNAME -->
            <div class="form-group">
                <label>Username</label>
                <input type="text" name="username" class="form-control" ng-model="user.username" ng-minlength="3" ng-maxlength="8">
            </div>
            
            <!-- EMAIL -->
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" class="form-control" ng-model="email">
            </div>
            
            <!-- SUBMIT BUTTON -->
            <button type="submit" class="btn btn-primary">Submit</button>
            
        </form>

    </div><!-- col-sm-8 -->
    </div><!-- /container -->
    </body>
    </html>
{% endprism %}


Alguns pontos importantes a observar aqui:


- <b>novalidate</b>: Isso vai evitar que as validações padrão HTML5 já que vamos estar fazendo isso a nós mesmos (o nosso será muito mais bonita) 
- Temos aplicado <code>ng-model</code> para nossos insumos para que tenhamos dados de nossos formulários vinculados a variáveis ​​
- <code>ng-minlength</code> e <code>ng-maxlength</code> no nome de usuário vai criar essas regras de introdução
- O input <code>name</code> é <b>required</b> 
- O input <code>e-mail</code> é <b>type = "email"</b>


### Regras de Validação ###

Angular oferece muitas regras de validação que podemos usar, além de <code>ng-minlength</code> e <code>ng-maxlength</code>.

Estes são os parâmetros disponíveis para uma entrada angular para criar regras de validação. Leia a <a href="http://docs.angularjs.org/api/ng.directive:input">Angular input directive</a> para mais informações.


{% prism javascript %}
var obj = { 'foo': true, 'bar': false };

for (key in obj) {
  console.log(obj[key]);
}
{% endprism %}

{% prism javascript linenos=1,4 %}
var obj = { 'foo': true, 'bar': false };

for (key in obj) {
  console.log(obj[key]);
}
{% endprism %}

{% prism html %}
    <input
       ng-model="{ string }"
       name="{ string }"
       required
       ng-required="{ boolean }"
       ng-minlength="{ number }"
       ng-maxlength="{ number }"
       ng-pattern="{ string }"
       ng-change="{ string }">
    </input>
{% endprism %}


Agora que temos a nosso formulário simples, vamos criar nosso aplicativo Angular e controlador que já aplicou a ele usando <code>ng-app</code> e <code>ng-controller</code>.

### Nosso código Angular App <code>app.js</code>###


{% prism javascript %}
// app.js
// create angular app
var validationApp = angular.module('validationApp', []);

// create angular controller
validationApp.controller('mainController', function($scope) {

    // function to submit the form after all validation has occurred            
    $scope.submitForm = function(isValid) {

        // check to make sure the form is completely valid
        if (isValid) {
            alert('our form is amazing');
        }

    };

});
{% endprism %}


## Desabilitar validação HTML5 <code>novalidate</code>##


Usaremos <code>novalidate</code> no nosso formulário. Esta é uma boa prática, uma vez que vai lidar com a validação de nós mesmos. Se deixarmos a nossa forma fazê-lo, ele vai olhar muito feio.

## Desabilitar o botão Enviar <code>ng-disabled</code>##

Agora começa a verdadeira diversão. Temos que começar a usar propriedades angulares. Primeiro vamos desativar o nosso botão enviar. Nós só queremos que pessoas com deficiência, se o nosso formulário for <code>$invalid</code>.

{% prism markup %}
        <!-- index.html -->
        ...

            <!-- SUBMIT BUTTON -->
            <button type="submit" class="btn btn-primary" ng-disabled="userForm.$invalid">Submit</button>

        ...
{% endprism %}

Com apenas esse pequeno código (<code>ng-disable</code>), o nosso botão de formulário será desativado se o formulário for <code>$invalid</code>. Isto significa que o nosso campo de entrada de <code>name</code> é obrigatório e nosso campo de entrada de <code>e-mail</code> requer um e-mail válido.


## Mostrando uma mensagem de erro ##
ng-show

{% prism markup %}
    <!-- index.html -->
    ...

    ...
{% endprism %}

<b>ng-valid</b> e <b>ng-invalid</b> irá determinar automaticamente se uma entrada é uma boa base nas regras colocadas sobre ele em seu formulário.

Vamos percorrer e adicionar uma mensagem de erro para cada uma de nossas entradas, se não forem <code>$valid</code> e já foram usados ​​(desde que não queremos mostrar um erro antes que eles foram usados).

{% prism markup %}
    <!-- index.html -->
    ...
        
{% endprism %}

Só assim, angular irá determinar automaticamente se devemos mostrar um erro baseado em uma entradas <code>$invalid</code> e <code>$pristine</code> propriedades.

<img src="" alt="">


## Estilizando as classes ##

Angular já oferece aulas em nossas entradas e nossas formas com base em se eles são válidos ou não. Olhe para a tabela no início deste artigo para essas classes (<code>ng-valid</code>, <code>ng-invalid</code>, <code>ng-pristine</code> and <code>ng-dirty</code>).

Você pode estilizar os de CSS, se quiser. Você pode fazer o que quiser com essas classes. Não vai mesmo ser classes baseadas nos certas regras aplicadas se você quisesse ficar realmente específico.


{% prism css %}
    .ng-valid       {  }
    .ng-invalid     {  }
    .ng-pristine    {  }
    .ng-dirty       {  }

    /* really specific css rules applied by angular */
    .ng-invalid-required        {  }
    .ng-invalid-minlength       {  }
    .ng-valid-max-length        {  }
{% endprism %}

## Adicionando Classes condicionais ##
ng-class

Como estamos usando <a href="http://getbootstrap.com/">Bootstrap</a>, vamos utilizar as classes que eles fornecem (<code>has-error</code>). Isso vai nos erros que agradável e cor em torno do nosso <code>form-group</code>.
 
<code>ng-class</code> nos permite adicionar classes com base em uma expressão. Neste caso, nós queremos adicionar uma classe tem erro para nosso <b>form-group</b>, se uma entrada é <code>$invalid</code> and not <code>pristine</code>.

O modo como funciona é <code> ng-class="{ <class-you-want> : <expression to be evaluated > }" </code> Para mais informações, leia o <a href="http://docs.angularjs.org/api/ng.directive:ngClass">Angular ngClass docs</a>.

{% prism markup %}
    <!-- index.html -->
    ...
{% endprism %}

Agora nosso formulário tem as classes de erro Bootstrap corretos.

<img src="" alt="">

Só Mostrando Erros Após enviar o formulário

Às vezes não é desejável para mostrar erros enquanto o usuário está digitando. Os erros atualmente mostram imediatamente como um usuário está a preencher o formulário. Isso acontece por causa da grande característica de ligação de dados do Angular. Uma vez que tudo muda imediatamente, pode ser uma desvantagem quando se fala de validação de formulário.

Para o cenário onde você só quer mostrar erros depois de um formulário é enviado, você poderia ajustar o código acima um pouco.

1 - Você precisaria tirar o <code>ng-disabled</code> no botão enviar, uma vez que deseja que um usuário ser capaz de enviar um formulário, mesmo que não é totalmente válido.
2 - Você gostaria de acrescentar uma variável após o formulário foi submetido. Dentro da sua função <code>submitForm()</code>, basta adicionar <code>$scope.submitted = true;</code>. Este armazena a variável apresentada como verdade, logo que o formulário é enviado.
3 - Ajuste as regras de erro de <code>ng-class="{ 'has-error' : userForm.name.$invalid && !userForm.name.$pristine }"</code> para <code>ng-class="{ 'has-error' : userForm.name.$invalid && !userForm.name.$pristine && submitted }"</code>. Isso garante que o erro só será exibido após o formulário é enviado. Você precisará ajustar todos os outros <code>ng-class</code> e <code>ng-show</code> para explicar essa variável.


Agora, a forma só mostra erros se a variável <code>submitted</code> é definido como verdadeiro.

## Só Mostrando Erros após clicar Fora de uma entrada ##

Apenas mostrando erros após clicar fora de uma entrada (também conhecida como <b>blur</b>) é um pouco mais complicado do que validar em enviar. Validando um formulário no borrão requer uma <a href="http://docs.angularjs.org/api/ng.directive:form">custom directive</a>. A directiva permitirá que você manipular o DOM.


Aqui estão alguns recursos para criar diretivas personalizadas para lidar com borrão:

- http://coding-issues.blogspot.in/2013/10/angularjs-blur-directive.html
- http://blog.ejci.net/2013/08/06/dealing-with-focus-and-blur-in-angularjs-directives/
- http://plnkr.co/edit/Xfr7X6JXPhY9lFL3hnOw?p=preview


## Tudo feito ##

Agora, uma vez que preencher todas as nossas informações corretamente, nosso formulário de envio botão estará ativo. Uma vez que nosso formulário, vamos ver a mensagem de alerta montamos.

<img src="" alt="">

Com apenas algumas linhas simples que temos agora:

- Validação de Entrada
- Form Errors
- Classes customizadas
- Automaticamente desabilitada e habilitada forma
- Regras personalizadas

Como você pode ver, é fácil de usar o construída em técnicas de validação forma angular para criar um formulário validado no lado do cliente.

## O Futuro ##

Tal como está, não é um processo simples para fazer a validação depois que um usuário clica fora de uma entrada. A equipe é Angular ciente disso e eles disseram que planeja adicionar mais estados para lidar com coisas como <code>form.submitted</code>, <code>input.$visited</code>, <code>input.$blurred</code>, or <code>input.$touched</code>. 

Aqui estão alguns recursos para o futuro da validação de formulário:

- Github Issue
- ngForm Module Ideas
