---
layout: post
class: post
title: Efeito paralax com css puro
description: 
image: efeito-paralax-com-css-puro.jpg
---

Dimensionar os elementos com base nas dimensões da janela de visualização sem javascript. Utilizando as unidades de viewport vw e vh.

{% highlight css %}
section {
    width: 100vw;
    height: 100vh;
}
{% endhighlight %}

- **vw**: largura da viewport
- **vh**: altura da viewport

<!-- Code/Demo -->
<div class="btn-group centered">
    <a href="http://airtonvancin.com/paralax-com-css-puro/" class="btn btn-large btn-primary"><i class="fa fa-eye"></i> Demo</a>
</div>

## Referência ##

- Learn Advanced CSS Layout Techniques: [@egghead](https://egghead.io/lessons/css-dynamically-size-elements-with-pure-css)

## Suporte ##

- Suporte aos browsers: [Viewport units: vw, vh, vmin, vmax](http://caniuse.com/#search=vw)
