---
layout: post
class: post
title: AngularJS Validação de Formulário
description: "Vamos focar a validação do lado do cliente e usando as propriedades de formulário angular. Aqui está uma demonstração rápida." 
image: angularjs.png
---

<!-- Code/Demo -->
<div class="btn-group centered">
    <!-- <a href="http://codepen.io/airton/pen/KDosE" class="btn btn-large btn-success"><i class="fa fa-code"></i> Code</a> -->
    <a href="http://codepen.io/airton/pen/KDosE" class="btn btn-large btn-primary"><i class="fa fa-eye"></i> Demo</a>
</div>

## Demo ##
<p data-height="333" data-theme-id="9559" data-slug-hash="KDosE" data-default-tab="result" data-user="airton" class='codepen'>See the Pen <a href='http://codepen.io/airton/pen/KDosE/'>KDosE</a> by Airton Vancin Junior (<a href='http://codepen.io/airton'>@airton</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Para começar vamos listar os requisitos do formulário

## Requisitos ##

- <b>name</b> é obrigatório
- <b>username</b> não é necessária, comprimento mínimo de 3 caracteres e comprimento máximo de 8 caracteres
- <b>email</b> não é obrigatório, mas tem que ser um e-mail válido
- Formulário de envio é desativado se o formulário não é válido
- Mostrar um erro de e-mail obrigatório ou inválido
- Monstrar uma mensagem de alerta se estiver tudo correto

Agora que sabemos o que queremos, vamos começar a construção.

## Propriedades do formulário Angular ##
<code>$valid</code>, <code>$invalid</code>, <code>$pristine</code>, <code>$dirty</code>


O Angular fornece propriedades que nos ajudam a validá-los.

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

O Angular também oferece classes de acordo com as entradas de modo que você pode estilizar cada estado do formulário.

### Acessando as propriedades do formulário Angular ###

- <b>Para acessar o formulário:</b> <code>< form name >.< angular property ></code> <br>ex: <code>userForm.$valid</code>
- <b>Para acessar o input:</b> <code>< form name >.< input name >.< angular property ></code> <br>ex: <code>userForm.name.$valid</code>


### Configurando nosso Formulário ###

Vamos usar um formulário simples para demonstrar.

<img src="/build/img/posts/angularjs-form.jpg" alt="Formulário simples AngularJS">

Vamos precisar de dois arquivos:

- <code>index.html</code> Nosso código para exibir o formulário
- <code>app.js</code> Nossa aplicação angular e o controlador

### Nosso arquivo <code>index.html</code>###

{% highlight html %}
<!DOCTYPE html>
<html>
<head>
    <!-- load bootstrap css -->
    <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css"> 
    <style>
        body    { padding-top:30px; }
    </style>
    
    <!-- load angularJS -->
    <script src="http://code.angularjs.org/1.2.6/angular.js"></script> 
    <script src="app.js"></script>
</head>

<!-- aplicar app angular e controlador para o nosso body -->
<body ng-app="validationApp" ng-controller="mainController">
    <div class="container">
        <div class="col-sm-8 col-sm-offset-2">
            
            <!-- PAGE HEADER -->
            <div class="page-header"><h1>AngularJS Validação de Formulário</h1></div>
           
            <!-- FORM -->
            <!-- passa a variável se nosso formulário é válida ou inválida -->
            <!-- novalidate isso vai evitar a validação padrão do HTML5, já que vamos fazer isso usando o Angular -->
            <form name="userForm" ng-submit="submitForm(userForm.$valid)" novalidate> 

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
                <button type="submit" class="btn btn-primary">Enviar</button>
                
            </form>
        </div><!-- col-sm-8 -->
    </div><!-- /container -->
</body>
</html>
{% endhighlight %}


Alguns pontos importantes a observar aqui:


- <b>novalidate</b>: isso vai evitar a validação padrão do HTML5, já que vamos fazer isso usando o Angular (o nosso será muito mais bonito) 
- Temos aplicado <code>ng-model</code> para poder vincular os dados do nosso formulário a variáveis ​​
- <code>ng-minlength</code> e <code>ng-maxlength</code> no nome de usuário vai criar essas regras de introdução
- O input <code>name</code> é <b>required</b> 
- O input <code>e-mail</code> é <b>type = "email"</b>


### Regras de Validação ###

Angular oferece muitas regras de validação que podemos usar, além de <code>ng-minlength</code> e <code>ng-maxlength</code>.

Estes são os parâmetros disponíveis para uma entrada angular para criar regras de validação. Leia a <a href="http://docs.angularjs.org/api/ng.directive:input">Angular input directive</a> para mais informações.

{% highlight html %}
<input
   ng-model="{ string }"
   name="{ string }"
   required
   ng-required="{ boolean }"
   ng-minlength="{ number }"
   ng-maxlength="{ number }"
   ng-pattern="{ string }"
   ng-change="{ string }"
   ng-trim="{ boolean }">
</input>
{% endhighlight %}

Agora que temos a nosso formulário simples, vamos criar nosso aplicativo Angular e controlador que já aplicou a ele usando <code>ng-app</code> e <code>ng-controller</code>.

### Nosso código Angular <code>app.js</code>###

{% highlight Javascript %}
// app.js
// criar angular app
var validationApp = angular.module('validationApp', []);

// criar angular controller
validationApp.controller('mainController', function($scope) {

    // função para enviar o formulário depois que a validação estiver ok           
    $scope.submitForm = function(isValid) {

        // verifica se o formulário é válido
        if (isValid) {
            alert('Formulário OK');
        }

    };

});
{% endhighlight %}

## Desabilitar validação HTML5 <code>novalidate</code>##

Usaremos <code>novalidate</code> no nosso formulário. Esta é uma boa prática, pois não queremos usar a validação nativa do navegador.

## Desabilitar o botão Enviar <code>ng-disabled</code>##

Agora começa a verdadeira diversão. Temos que começar a usar propriedades angulares. Primeiro vamos desativar o nosso botão enviar. Nós só queremos que o botão fique habilitado quando a validação estiver correta, então vamos usar a propriedade <code>$invalid</code>.

{% highlight html %}
<!-- index.html -->
...
    <!-- SUBMIT BUTTON -->
    <button type="submit" class="btn btn-primary" ng-disabled="userForm.$invalid">Enviar</button>
...
{% endhighlight %}

Com apenas esse pequeno código (<code>ng-disable</code>), o nosso botão de formulário será desativado se o formulário for <code>$invalid</code>. Isto significa que o nosso campo de entrada de <code>name</code> é obrigatório e nosso campo de entrada de <code>e-mail</code> requer um e-mail válido.

## Mostrando uma mensagem de erro  <code>ng-show</code>##

<b>ng-valid</b> e <b>ng-invalid</b> irá determinar automaticamente se uma entrada é uma boa base nas regras colocadas sobre ele em seu formulário.

Vamos percorrer e adicionar uma mensagem de erro para cada uma de nossas entradas, se não forem <code>$valid</code> e já foram usados ​​(uma vez que não queremos mostrar um erro antes de terem sido utilizados).

{% highlight html %}
<!-- index.html -->
...
    <!-- NAME -->
    <div class="form-group">
        <label>Nome</label>
        <input type="text" name="name" class="form-control" ng-model="user.name" required>
        <p ng-show="userForm.name.$invalid && !userForm.name.$pristine" class="help-block">Seu nome é obrigatório</p>
    </div>

    <!-- USERNAME -->
    <div class="form-group">
        <label>Username</label>
        <input type="text" name="username" class="form-control" ng-model="user.username" ng-minlength="3" ng-maxlength="8">
        <p ng-show="userForm.username.$error.minlength" class="help-block">Username no mínimo 3 caracteres.</p>
        <p ng-show="userForm.username.$error.maxlength" class="help-block">Username no máximo 8 caracteres.</p>
    </div>

    <!-- EMAIL -->
    <div class="form-group">
        <label>Email</label>
        <input type="email" name="email" class="form-control" ng-model="user.email">
        <p ng-show="userForm.email.$invalid && !userForm.email.$pristine" class="help-block">Informe um e-mail válido.</p>
    </div>
...
{% endhighlight %}

Só assim, angular irá determinar automaticamente se devemos mostrar um erro baseado em uma entradas <code>$invalid</code> e <code>$pristine</code> propriedades.

## Estilizando as classes ##

O Angular já oferece as classes css em nosso formulário, baseando se nossos campos são válidos ou inválidos. Veja a tabela no começo do post com as classes (<code>ng-valid</code>, <code>ng-invalid</code>, <code>ng-pristine</code> e <code>ng-dirty</code>).

Você pode estilizar o formulário usando essas classes, se quiser. Você pode fazer o que quiser com essas classes.

{% highlight css %}
.ng-valid       {  }
.ng-invalid     {  }
.ng-pristine    {  }
.ng-dirty       {  }

/* really specific css rules applied by angular */
.ng-invalid-required        {  }
.ng-invalid-minlength       {  }
.ng-valid-max-length        {  }
{% endhighlight %}

## Adicionando Classes condicionais <code>ng-class</code>##

Como estamos usando <a href="http://getbootstrap.com/">Bootstrap</a>, vamos utilizar as classes que eles fornecem (<code>has-error</code>).
 
O <code>ng-class</code> nos permite adicionar classes com base em uma expressão. Neste caso, nós queremos adicionar uma classe <code>has-error</code> no nosso <b>form-group</b>, se uma entrada é <code>$invalid</code> e não <code>pristine</code>.

O modo como funciona é <code> ng-class="{ < nome-da-classe > : < expressão a ser avaliada > }" </code> Para mais informações, leia o <a href="http://docs.angularjs.org/api/ng.directive:ngClass">Angular ngClass docs</a>.

{% highlight html %}
<!-- index.html -->
...
    <!-- NAME -->
    <div class="form-group" ng-class="{ 'has-error' : userForm.name.$invalid && !userForm.name.$pristine }">
        <label>Nome</label>
        <input type="text" name="name" class="form-control" ng-model="user.name" required>
        <p ng-show="userForm.name.$invalid && !userForm.name.$pristine" class="help-block">Seu nome é obrigatório</p>
    </div>

    <!-- USERNAME -->
    <div class="form-group" ng-class="{ 'has-error' : userForm.username.$invalid && !userForm.username.$pristine }">
        <label>Username</label>
        <input type="text" name="username" class="form-control" ng-model="user.username" ng-minlength="3" ng-maxlength="8">
        <p ng-show="userForm.username.$error.minlength" class="help-block">Username no mínimo 3 caracteres.</p>
        <p ng-show="userForm.username.$error.maxlength" class="help-block">Username no máximo 8 caracteres.</p>
    </div>

    <!-- EMAIL -->
    <div class="form-group" ng-class="{ 'has-error' : userForm.email.$invalid && !userForm.email.$pristine }">
        <label>Email</label>
        <input type="email" name="email" class="form-control" ng-model="user.email">
        <p ng-show="userForm.email.$invalid && !userForm.email.$pristine" class="help-block">Informe um e-mail válido.</p>
    </div>
...
{% endhighlight %}

Agora nosso formulário tem as classes de erro do Bootstrap corretas.

## Só mostrar os erros depois que enviar o formulário ##

Às vezes não é desejável para mostrar erros enquanto o usuário está digitando. Os erros atualmente mostram imediatamente como um usuário está a preencher o formulário. Isso acontece por causa da grande característica de ligação de dados do Angular. Uma vez que tudo muda imediatamente, pode ser uma desvantagem quando se fala de validação de formulário.

Para o cenário onde você só quer mostrar erros depois de um formulário é enviado, você poderia ajustar o código acima um pouco.

1. Você precisaria tirar o <code>ng-disabled</code> no botão enviar, para qe o usuário possa enviar o formulário, mesmo que não é totalmente válido.
2. Você gostaria de acrescentar uma variável após o formulário ser submetido. Dentro da sua função <code>submitForm()</code>, basta adicionar <code>$scope.submitted = true;</code>. Este armazena a variável apresentada como verdade, logo que o formulário é enviado.
3. Ajuste as regras de erro de <code>ng-class="{ 'has-error' : userForm.name.$invalid && !userForm.name.$pristine }"</code> para <code>ng-class="{ 'has-error' : userForm.name.$invalid && !userForm.name.$pristine && submitted }"</code>. Isso garante que o erro só será exibido após o formulário é enviado. Você precisará ajustar todos os outros <code>ng-class</code> e <code>ng-show</code> para explicar essa variável.

Agora, o formulário só mostra erros se a variável <code>submitted</code> é definido como verdadeiro.

## Só mostrar erros após clicar fora de uma entrada ##

Apenas mostrando erros após clicar fora de uma entrada (também conhecida como <b>blur</b>) é um pouco mais complicado do que validar em enviar. Validando um formulário no **blur** requer uma <a href="http://docs.angularjs.org/api/ng.directive:form">custom directive</a>. A directiva permitirá que você manipule o DOM.


Aqui estão alguns recursos para criar diretivas personalizadas para lidar com **blur**:

- [http://coding-issues.blogspot.in/2013/10/angularjs-blur-directive.html](http://coding-issues.blogspot.in/2013/10/angularjs-blur-directive.html)
- [http://blog.ejci.net/2013/08/06/dealing-with-focus-and-blur-in-angularjs-directives/](http://blog.ejci.net/2013/08/06/dealing-with-focus-and-blur-in-angularjs-directives/)
- [http://plnkr.co/edit/Xfr7X6JXPhY9lFL3hnOw?p=preview](http://plnkr.co/edit/Xfr7X6JXPhY9lFL3hnOw?p=preview)


## Tudo feito ##

Agora preenchemos nossas informações corretamente no nosso formulário o botão de envio estará ativo, e ao enviar aparecera a mensagem de alerta que montamos. **alert('Formulário OK');**

<img src="/build/img/posts/angularjs-alert.jpg" alt="Alert">

Com apenas algumas linhas simples que temos agora:

- Validação de Entrada
- Form Errors
- Classes customizadas
- Automaticamente desabilitada e habilitada forma
- Regras personalizadas

Como você pode ver, é fácil de usar o construída em técnicas de validação forma angular para criar um formulário validado no lado do cliente.

## O Futuro ##

Tal como está, não é um processo simples para fazer a validação depois que um usuário clica fora de uma entrada. A equipe é Angular ciente disso e eles disseram que planejam adicionar mais estados para lidar com coisas como <code>form.submitted</code>, <code>input.$visited</code>, <code>input.$blurred</code>, ou <code>input.$touched</code>. 

Aqui estão alguns recursos para o futuro da validação de formulário:

- Github Issue
- ngForm Module Ideas

## Suporte ##

<blockquote>
    Nota: <b>AngularJS 1.3</b> não tem suporte para IE8. Leia mais sobre isso <a href="http://blog.angularjs.org/2013/12/angularjs-13-new-release-approaches.html">no blog do AngularJS</a>. <b>AngularJS 1.2</b> continuará com suporte ao IE8, mas a equipe principal não pretende gastar tempo com endereçamento específicos para o IE8.
</blockquote>

<blockquote>
    Nota: Esse é uma tradução do post original <a href="http://scotch.io/tutorials/javascript/angularjs-form-validation">http://scotch.io/tutorials/javascript/angularjs-form-validation</a>
</blockquote>
