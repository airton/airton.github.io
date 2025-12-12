import{n as e,t}from"./index-BZtytHmN.js";var n=e();const r={title:`AngularJS Validação de Formulário`,description:`Vamos focar a validação do lado do cliente e usando as propriedades de formulário angular. Aqui está uma demonstração rápida.`,date:`2014-11-01`,readTime:4,tags:[`Javascript`,`AngularJS`],image:`https://picsum.photos/id/76/200/300?grayscale`},i={title:r.title,description:r.description};function a(e){let r={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t,{href:`http://codepen.io/airton/pen/KDosE`,children:`Demo`}),`
`,(0,n.jsx)(r.h2,{children:`Demo`}),`
`,(0,n.jsx)(`p`,{"data-height":`333`,"data-theme-id":`9559`,"data-slug-hash":`KDosE`,"data-default-tab":`result`,"data-user":`airton`,className:`codepen`,children:(0,n.jsxs)(r.p,{children:[`See the Pen `,(0,n.jsx)(`a`,{href:`http://codepen.io/airton/pen/KDosE/`,children:`KDosE`}),` by Airton
Vancin Junior (`,(0,n.jsx)(`a`,{href:`http://codepen.io/airton`,children:`@airton`}),`) on`,` `,`
`,(0,n.jsx)(`a`,{href:`http://codepen.io`,children:`CodePen`}),`.`]})}),`
`,(0,n.jsx)(`script`,{async:!0,src:`//codepen.io/assets/embed/ei.js`}),`
`,(0,n.jsx)(r.p,{children:`Para começar vamos listar os requisitos do formulário`}),`
`,(0,n.jsx)(r.h2,{children:`Requisitos`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(`b`,{children:`name`}),` é obrigatório`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(`b`,{children:`username`}),` não é necessária, comprimento mínimo de 3 caracteres e comprimento
máximo de 8 caracteres`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(`b`,{children:`email`}),` não é obrigatório, mas tem que ser um e-mail válido`]}),`
`,(0,n.jsx)(r.li,{children:`Formulário de envio é desativado se o formulário não é válido`}),`
`,(0,n.jsx)(r.li,{children:`Mostrar um erro de e-mail obrigatório ou inválido`}),`
`,(0,n.jsx)(r.li,{children:`Monstrar uma mensagem de alerta se estiver tudo correto`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Agora que sabemos o que queremos, vamos começar a construção.`}),`
`,(0,n.jsx)(r.h2,{children:`Propriedades do formulário Angular`}),`
`,(0,n.jsx)(`p`,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(`code`,{children:`$valid`}),`, `,(0,n.jsx)(`code`,{children:`$invalid`}),`, `,(0,n.jsx)(`code`,{children:`$pristine`}),`,`,` `,`
`,(0,n.jsx)(`code`,{children:`$dirty`})]})}),`
`,(0,n.jsx)(r.p,{children:`O Angular fornece propriedades que nos ajudam a validá-los.`}),`
`,(0,n.jsxs)(`table`,{class:`table table-bordered table-striped table-hover`,children:[(0,n.jsx)(`thead`,{children:(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`td`,{children:`Propriedade`}),(0,n.jsx)(`td`,{children:`Classe`}),(0,n.jsx)(`td`,{children:`Descrição`})]})}),(0,n.jsxs)(`tbody`,{children:[(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`td`,{class:`success`,children:`$valid`}),(0,n.jsx)(`td`,{children:`ng-valid`}),(0,n.jsx)(`td`,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(`em`,{class:`text-info`,children:`Boolean`}),` Diz se um item é válido no momento
com base nas regras que você colocou.`]})})]}),(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`td`,{class:`danger`,children:`$invalid`}),(0,n.jsx)(`td`,{children:`ng-invalid`}),(0,n.jsx)(`td`,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(`em`,{class:`text-info`,children:`Boolean`}),` Diz se um item está inválida com base
nas regras que você colocou.`]})})]}),(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`td`,{class:`active`,children:`$pristine`}),(0,n.jsx)(`td`,{children:`ng-pristine`}),(0,n.jsx)(`td`,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(`em`,{class:`text-info`,children:`Boolean`}),` Verdadeiro se o form/input`,` `,`
`,(0,n.jsx)(`b`,{children:`ainda não`}),` foi usado`]})})]}),(0,n.jsxs)(`tr`,{children:[(0,n.jsx)(`td`,{class:`warning`,children:`$dirty`}),(0,n.jsx)(`td`,{children:`ng-dirty`}),(0,n.jsx)(`td`,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(`em`,{class:`text-info`,children:`Boolean`}),` Verdadeiro se o form/input`,` `,`
`,(0,n.jsx)(`strong`,{children:`foi`}),` usado.`]})})]})]})]}),`
`,(0,n.jsx)(r.p,{children:`O Angular também oferece classes de acordo com as entradas de modo que você pode estilizar cada estado do formulário.`}),`
`,(0,n.jsx)(r.h3,{children:`Acessando as propriedades do formulário Angular`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(`p`,{children:[(0,n.jsx)(`b`,{children:`Para acessar o formulário:`}),` `,(0,n.jsx)(`code`,{children:`"form name"."angular property"`}),(0,n.jsx)(`br`,{}),(0,n.jsxs)(r.p,{children:[`ex: `,(0,n.jsx)(`code`,{children:`userForm.$valid`})]})]}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsxs)(`p`,{children:[(0,n.jsx)(`b`,{children:`Para acessar o input:`}),` `,(0,n.jsx)(`code`,{children:`"form name"."input name"."angular property"`}),(0,n.jsx)(`br`,{}),(0,n.jsxs)(r.p,{children:[`ex: `,(0,n.jsx)(`code`,{children:`userForm.name.$valid`})]})]}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.h3,{children:`Configurando nosso Formulário`}),`
`,(0,n.jsx)(r.p,{children:`Vamos usar um formulário simples para demonstrar.`}),`
`,(0,n.jsx)(`img`,{src:`/assets/images/angularjs-form.jpg`,alt:`Formulário simples AngularJS`}),`
`,(0,n.jsx)(r.p,{children:`Vamos precisar de dois arquivos:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(`p`,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(`code`,{children:`index.html`}),` Nosso código para exibir o formulário`]})}),`
`]}),`
`,(0,n.jsxs)(r.li,{children:[`
`,(0,n.jsx)(`p`,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(`code`,{children:`app.js`}),` Nossa aplicação angular e o controlador`]})}),`
`]}),`
`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-html`,children:`<!DOCTYPE html>
<html>
  <head>
    <!-- load bootstrap css -->
    <link
      rel="stylesheet"
      href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css"
    />
    <style>
      body {
        padding-top: 30px;
      }
    </style>

    <!-- load angularJS -->
    <script src="http://code.angularjs.org/1.2.6/angular.js"><\/script>
    <script src="app.js"><\/script>
  </head>

  <!-- aplicar app angular e controlador para o nosso body -->
  <body ng-app="validationApp" ng-controller="mainController">
    <div class="container">
      <div class="col-sm-8 col-sm-offset-2">
        <!-- PAGE HEADER -->
        <div class="page-header">
          <h1>AngularJS Validação de Formulário</h1>
        </div>

        <!-- FORM -->
        <!-- passa a variável se nosso formulário é válida ou inválida -->
        <!-- novalidate isso vai evitar a validação padrão do HTML5, já que vamos fazer isso usando o Angular -->
        <form
          name="userForm"
          ng-submit="submitForm(userForm.$valid)"
          novalidate
        >
          <!-- NAME -->
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              class="form-control"
              ng-model="name"
              required
            />
          </div>

          <!-- USERNAME -->
          <div class="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              class="form-control"
              ng-model="user.username"
              ng-minlength="3"
              ng-maxlength="8"
            />
          </div>

          <!-- EMAIL -->
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              class="form-control"
              ng-model="email"
            />
          </div>

          <!-- SUBMIT BUTTON -->
          <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
      </div>
      <!-- col-sm-8 -->
    </div>
    <!-- /container -->
  </body>
</html>
`})}),`
`,(0,n.jsx)(r.p,{children:`Alguns pontos importantes a observar aqui:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(`b`,{children:`novalidate`}),`: isso vai evitar a validação padrão do HTML5, já que vamos
fazer isso usando o Angular (o nosso será muito mais bonito)`]}),`
`,(0,n.jsxs)(r.li,{children:[`Temos aplicado `,(0,n.jsx)(`code`,{children:`ng-model`}),` para poder vincular os dados do nosso formulário a variáveis ​​`]}),`
`,(0,n.jsxs)(r.li,{children:[(0,n.jsx)(`code`,{children:`ng-minlength`}),` e `,(0,n.jsx)(`code`,{children:`ng-maxlength`}),` no nome de usuário vai criar
essas regras de introdução`]}),`
`,(0,n.jsxs)(r.li,{children:[`O input `,(0,n.jsx)(`code`,{children:`name`}),` é `,(0,n.jsx)(`b`,{children:`required`})]}),`
`,(0,n.jsxs)(r.li,{children:[`O input `,(0,n.jsx)(`code`,{children:`e-mail`}),` é `,(0,n.jsx)(`b`,{children:`type = "email"`})]}),`
`]}),`
`,(0,n.jsx)(r.h3,{children:`Regras de Validação`}),`
`,(0,n.jsxs)(r.p,{children:[`Angular oferece muitas regras de validação que podemos usar, além de `,(0,n.jsx)(`code`,{children:`ng-minlength`}),` e `,(0,n.jsx)(`code`,{children:`ng-maxlength`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Estes são os parâmetros disponíveis para uma entrada angular para criar regras de validação. Leia a `,(0,n.jsx)(`a`,{href:`http://docs.angularjs.org/api/ng.directive:input`,children:`Angular input directive`}),` para mais informações.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-html`,children:`<input
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
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Agora que temos a nosso formulário simples, vamos criar nosso aplicativo Angular e controlador que já aplicou a ele usando `,(0,n.jsx)(`code`,{children:`ng-app`}),` e `,(0,n.jsx)(`code`,{children:`ng-controller`}),`.`]}),`
`,(0,n.jsxs)(r.h3,{children:[`Nosso código Angular `,(0,n.jsx)(`code`,{children:`app.js`})]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-js`,children:`// app.js
// criar angular app
var validationApp = angular.module("validationApp", []);

// criar angular controller
validationApp.controller("mainController", function ($scope) {
  // função para enviar o formulário depois que a validação estiver ok
  $scope.submitForm = function (isValid) {
    // verifica se o formulário é válido
    if (isValid) {
      alert("Formulário OK");
    }
  };
});
`})}),`
`,(0,n.jsxs)(r.h2,{children:[`Desabilitar validação HTML5 `,(0,n.jsx)(`code`,{children:`novalidate`})]}),`
`,(0,n.jsxs)(r.p,{children:[`Usaremos `,(0,n.jsx)(`code`,{children:`novalidate`}),` no nosso formulário. Esta é uma boa prática, pois não queremos usar a validação nativa do navegador.`]}),`
`,(0,n.jsxs)(r.h2,{children:[`Desabilitar o botão Enviar `,(0,n.jsx)(`code`,{children:`ng-disabled`})]}),`
`,(0,n.jsxs)(r.p,{children:[`Agora começa a verdadeira diversão. Temos que começar a usar propriedades angulares. Primeiro vamos desativar o nosso botão enviar. Nós só queremos que o botão fique habilitado quando a validação estiver correta, então vamos usar a propriedade `,(0,n.jsx)(`code`,{children:`$invalid`}),`.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-html`,children:`<!-- index.html -->
...
<!-- SUBMIT BUTTON -->
<button type="submit" class="btn btn-primary" ng-disabled="userForm.$invalid">
  Enviar
</button>
...
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Com apenas esse pequeno código (`,(0,n.jsx)(`code`,{children:`ng-disable`}),`), o nosso botão de formulário será desativado se o formulário for `,(0,n.jsx)(`code`,{children:`$invalid`}),`. Isto significa que o nosso campo de entrada de `,(0,n.jsx)(`code`,{children:`name`}),` é obrigatório e nosso campo de entrada de `,(0,n.jsx)(`code`,{children:`e-mail`}),` requer um e-mail válido.`]}),`
`,(0,n.jsxs)(r.h2,{children:[`Mostrando uma mensagem de erro `,(0,n.jsx)(`code`,{children:`ng-show`})]}),`
`,(0,n.jsx)(`p`,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(`b`,{children:`ng-valid`}),` e `,(0,n.jsx)(`b`,{children:`ng-invalid`}),` irá determinar automaticamente se uma
entrada é uma boa base nas regras colocadas sobre ele em seu formulário.`]})}),`
`,(0,n.jsxs)(r.p,{children:[`Vamos percorrer e adicionar uma mensagem de erro para cada uma de nossas entradas, se não forem `,(0,n.jsx)(`code`,{children:`$valid`}),` e já foram usados ​​(uma vez que não queremos mostrar um erro antes de terem sido utilizados).`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-html`,children:`<!-- index.html -->
...
<!-- NAME -->
<div class="form-group">
  <label>Nome</label>
  <input
    type="text"
    name="name"
    class="form-control"
    ng-model="user.name"
    required
  />
  <p
    ng-show="userForm.name.$invalid && !userForm.name.$pristine"
    class="help-block"
  >
    Seu nome é obrigatório
  </p>
</div>

<!-- USERNAME -->
<div class="form-group">
  <label>Username</label>
  <input
    type="text"
    name="username"
    class="form-control"
    ng-model="user.username"
    ng-minlength="3"
    ng-maxlength="8"
  />
  <p ng-show="userForm.username.$error.minlength" class="help-block">
    Username no mínimo 3 caracteres.
  </p>
  <p ng-show="userForm.username.$error.maxlength" class="help-block">
    Username no máximo 8 caracteres.
  </p>
</div>

<!-- EMAIL -->
<div class="form-group">
  <label>Email</label>
  <input type="email" name="email" class="form-control" ng-model="user.email" />
  <p
    ng-show="userForm.email.$invalid && !userForm.email.$pristine"
    class="help-block"
  >
    Informe um e-mail válido.
  </p>
</div>
...
`})}),`
`,(0,n.jsxs)(r.p,{children:[`Só assim, angular irá determinar automaticamente se devemos mostrar um erro baseado em uma entradas `,(0,n.jsx)(`code`,{children:`$invalid`}),` e `,(0,n.jsx)(`code`,{children:`$pristine`}),` propriedades.`]}),`
`,(0,n.jsx)(r.h2,{children:`Estilizando as classes`}),`
`,(0,n.jsxs)(r.p,{children:[`O Angular já oferece as classes css em nosso formulário, baseando se nossos campos são válidos ou inválidos. Veja a tabela no começo do post com as classes (`,(0,n.jsx)(`code`,{children:`ng-valid`}),`, `,(0,n.jsx)(`code`,{children:`ng-invalid`}),`, `,(0,n.jsx)(`code`,{children:`ng-pristine`}),` e `,(0,n.jsx)(`code`,{children:`ng-dirty`}),`).`]}),`
`,(0,n.jsx)(r.p,{children:`Você pode estilizar o formulário usando essas classes, se quiser. Você pode fazer o que quiser com essas classes.`}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-css`,children:`.ng-valid {
}
.ng-invalid {
}
.ng-pristine {
}
.ng-dirty {
}

/* really specific css rules applied by angular */
.ng-invalid-required {
}
.ng-invalid-minlength {
}
.ng-valid-max-length {
}
`})}),`
`,(0,n.jsxs)(r.h2,{children:[`Adicionando Classes condicionais `,(0,n.jsx)(`code`,{children:`ng-class`})]}),`
`,(0,n.jsxs)(r.p,{children:[`Como estamos usando `,(0,n.jsx)(`a`,{href:`http://getbootstrap.com/`,children:`Bootstrap`}),`, vamos utilizar as classes que eles fornecem (`,(0,n.jsx)(`code`,{children:`has-error`}),`).`]}),`
`,(0,n.jsxs)(r.p,{children:[`O `,(0,n.jsx)(`code`,{children:`ng-class`}),` nos permite adicionar classes com base em uma expressão. Neste caso, nós queremos adicionar uma classe `,(0,n.jsx)(`code`,{children:`has-error`}),` no nosso `,(0,n.jsx)(`b`,{children:`form-group`}),`, se uma entrada é `,(0,n.jsx)(`code`,{children:`$invalid`}),` e não `,(0,n.jsx)(`code`,{children:`pristine`}),`.`]}),`
`,(0,n.jsxs)(r.p,{children:[`O modo como funciona é `,(0,n.jsx)(r.code,{children:`ng-class="{ < nome-da-classe > : < expressão a ser avaliada > }"`}),` Para mais informações, leia o `,(0,n.jsx)(`a`,{href:`http://docs.angularjs.org/api/ng.directive:ngClass`,children:`Angular ngClass docs`}),`.`]}),`
`,(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:`language-html`,children:`<!-- index.html -->
...
<!-- NAME -->
<div
  class="form-group"
  ng-class="{ 'has-error' : userForm.name.$invalid && !userForm.name.$pristine }"
>
  <label>Nome</label>
  <input
    type="text"
    name="name"
    class="form-control"
    ng-model="user.name"
    required
  />
  <p
    ng-show="userForm.name.$invalid && !userForm.name.$pristine"
    class="help-block"
  >
    Seu nome é obrigatório
  </p>
</div>

<!-- USERNAME -->
<div
  class="form-group"
  ng-class="{ 'has-error' : userForm.username.$invalid && !userForm.username.$pristine }"
>
  <label>Username</label>
  <input
    type="text"
    name="username"
    class="form-control"
    ng-model="user.username"
    ng-minlength="3"
    ng-maxlength="8"
  />
  <p ng-show="userForm.username.$error.minlength" class="help-block">
    Username no mínimo 3 caracteres.
  </p>
  <p ng-show="userForm.username.$error.maxlength" class="help-block">
    Username no máximo 8 caracteres.
  </p>
</div>

<!-- EMAIL -->
<div
  class="form-group"
  ng-class="{ 'has-error' : userForm.email.$invalid && !userForm.email.$pristine }"
>
  <label>Email</label>
  <input type="email" name="email" class="form-control" ng-model="user.email" />
  <p
    ng-show="userForm.email.$invalid && !userForm.email.$pristine"
    class="help-block"
  >
    Informe um e-mail válido.
  </p>
</div>
...
`})}),`
`,(0,n.jsx)(r.p,{children:`Agora nosso formulário tem as classes de erro do Bootstrap corretas.`}),`
`,(0,n.jsx)(r.h2,{children:`Só mostrar os erros depois que enviar o formulário`}),`
`,(0,n.jsx)(r.p,{children:`Às vezes não é desejável para mostrar erros enquanto o usuário está digitando. Os erros atualmente mostram imediatamente como um usuário está a preencher o formulário. Isso acontece por causa da grande característica de ligação de dados do Angular. Uma vez que tudo muda imediatamente, pode ser uma desvantagem quando se fala de validação de formulário.`}),`
`,(0,n.jsx)(r.p,{children:`Para o cenário onde você só quer mostrar erros depois de um formulário é enviado, você poderia ajustar o código acima um pouco.`}),`
`,(0,n.jsxs)(r.ol,{children:[`
`,(0,n.jsxs)(r.li,{children:[`Você precisaria tirar o `,(0,n.jsx)(`code`,{children:`ng-disabled`}),` no botão enviar, para qe o usuário possa enviar o formulário, mesmo que não é totalmente válido.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Você gostaria de acrescentar uma variável após o formulário ser submetido. Dentro da sua função `,(0,n.jsx)(`code`,{children:`submitForm()`}),`, basta adicionar `,(0,n.jsx)(`code`,{children:`$scope.submitted = true;`}),`. Este armazena a variável apresentada como verdade, logo que o formulário é enviado.`]}),`
`,(0,n.jsxs)(r.li,{children:[`Ajuste as regras de erro de `,(0,n.jsx)(r.code,{children:`ng-class="{ 'has-error' : userForm.name.$invalid && !userForm.name.$pristine }"`}),` para `,(0,n.jsx)(r.code,{children:`ng-class="{ 'has-error' : userForm.name.$invalid && !userForm.name.$pristine && submitted }"`}),`. Isso garante que o erro só será exibido após o formulário é enviado. Você precisará ajustar todos os outros `,(0,n.jsx)(`code`,{children:`ng-class`}),` e `,(0,n.jsx)(`code`,{children:`ng-show`}),` para explicar essa variável.`]}),`
`]}),`
`,(0,n.jsxs)(r.p,{children:[`Agora, o formulário só mostra erros se a variável `,(0,n.jsx)(`code`,{children:`submitted`}),` é definido como verdadeiro.`]}),`
`,(0,n.jsx)(r.h2,{children:`Só mostrar erros após clicar fora de uma entrada`}),`
`,(0,n.jsxs)(r.p,{children:[`Apenas mostrando erros após clicar fora de uma entrada (também conhecida como `,(0,n.jsx)(`b`,{children:`blur`}),`) é um pouco mais complicado do que validar em enviar. Validando um formulário no `,(0,n.jsx)(r.strong,{children:`blur`}),` requer uma `,(0,n.jsx)(`a`,{href:`http://docs.angularjs.org/api/ng.directive:form`,children:`custom directive`}),`. A directiva permitirá que você manipule o DOM.`]}),`
`,(0,n.jsxs)(r.p,{children:[`Aqui estão alguns recursos para criar diretivas personalizadas para lidar com `,(0,n.jsx)(r.strong,{children:`blur`}),`:`]}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:`http://coding-issues.blogspot.in/2013/10/angularjs-blur-directive.html`,children:`http://coding-issues.blogspot.in/2013/10/angularjs-blur-directive.html`})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:`http://blog.ejci.net/2013/08/06/dealing-with-focus-and-blur-in-angularjs-directives/`,children:`http://blog.ejci.net/2013/08/06/dealing-with-focus-and-blur-in-angularjs-directives/`})}),`
`,(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:`http://plnkr.co/edit/Xfr7X6JXPhY9lFL3hnOw?p=preview`,children:`http://plnkr.co/edit/Xfr7X6JXPhY9lFL3hnOw?p=preview`})}),`
`]}),`
`,(0,n.jsx)(r.h2,{children:`Tudo feito`}),`
`,(0,n.jsxs)(r.p,{children:[`Agora preenchemos nossas informações corretamente no nosso formulário o botão de envio estará ativo, e ao enviar aparecera a mensagem de alerta que montamos. `,(0,n.jsx)(r.strong,{children:`alert('Formulário OK');`})]}),`
`,(0,n.jsx)(`p`,{children:(0,n.jsx)(`img`,{src:`/assets/images/angularjs-alert.jpg`,alt:`Alert`})}),`
`,(0,n.jsx)(r.p,{children:`Com apenas algumas linhas simples que temos agora:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Validação de Entrada`}),`
`,(0,n.jsx)(r.li,{children:`Form Errors`}),`
`,(0,n.jsx)(r.li,{children:`Classes customizadas`}),`
`,(0,n.jsx)(r.li,{children:`Automaticamente desabilitada e habilitada forma`}),`
`,(0,n.jsx)(r.li,{children:`Regras personalizadas`}),`
`]}),`
`,(0,n.jsx)(r.p,{children:`Como você pode ver, é fácil de usar o construída em técnicas de validação forma angular para criar um formulário validado no lado do cliente.`}),`
`,(0,n.jsx)(r.h2,{children:`O Futuro`}),`
`,(0,n.jsxs)(r.p,{children:[`Tal como está, não é um processo simples para fazer a validação depois que um usuário clica fora de uma entrada. A equipe é Angular ciente disso e eles disseram que planejam adicionar mais estados para lidar com coisas como `,(0,n.jsx)(`code`,{children:`form.submitted`}),`, `,(0,n.jsx)(`code`,{children:`input.$visited`}),`, `,(0,n.jsx)(`code`,{children:`input.$blurred`}),`, ou `,(0,n.jsx)(`code`,{children:`input.$touched`}),`.`]}),`
`,(0,n.jsx)(r.p,{children:`Aqui estão alguns recursos para o futuro da validação de formulário:`}),`
`,(0,n.jsxs)(r.ul,{children:[`
`,(0,n.jsx)(r.li,{children:`Github Issue`}),`
`,(0,n.jsx)(r.li,{children:`ngForm Module Ideas`}),`
`]}),`
`,(0,n.jsx)(r.h2,{children:`Suporte`}),`
`,(0,n.jsxs)(`blockquote`,{children:[(0,n.jsxs)(r.p,{children:[`Nota: `,(0,n.jsx)(`b`,{children:`AngularJS 1.3`}),` não tem suporte para IE8. Leia mais sobre isso`,` `]}),(0,n.jsx)(`a`,{href:`http://blog.angularjs.org/2013/12/angularjs-13-new-release-approaches.html`,children:(0,n.jsx)(r.p,{children:`no blog do AngularJS`})}),(0,n.jsxs)(r.p,{children:[`. `,(0,n.jsx)(`b`,{children:`AngularJS 1.2`}),` continuará com suporte ao IE8, mas a equipe principal não
pretende gastar tempo com endereçamento específicos para o IE8.`]})]}),`
`,(0,n.jsxs)(`blockquote`,{children:[(0,n.jsxs)(r.p,{children:[`Nota: Esse é uma tradução do post original`,` `]}),(0,n.jsx)(`a`,{href:`http://scotch.io/tutorials/javascript/angularjs-form-validation`,children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:`http://scotch.io/tutorials/javascript/angularjs-form-validation`,children:`http://scotch.io/tutorials/javascript/angularjs-form-validation`})})})]})]})}function o(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}export{r as article,o as default,i as metadata};