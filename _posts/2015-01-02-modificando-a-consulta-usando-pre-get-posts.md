---
layout: post
class: post
title: Modificando a consulta atual usando pre_get_posts
description:
image: wordpress-pre-get-posts.jpg
---

O **pre_get_posts** é um gancho que permite que você modifique a consulta principal, é muito comum você precisar alterar o conteúdo que é exibido em uma página, então vamos usar esse gancho que facilita muito o trabalho.

Para poder funcionar você precisa adicionar a função no arquivo **functions.php**.

Não use **query_posts()** para alterar a consulta principal, como o próprio [Codex](http://codex.wordpress.org/Function_Reference/query_posts) do WordPress diz essa função não é para ser usada em temas e plugins, existe outros métodos mais confiáveis que é o **pre_get_posts** que vamos ver agora.

## Alterando a quantidade de posts na página ##

{% highlight php startinline %}
function change_posts_per_page( $query ) {
    if( $query->is_main_query() && $query->is_home() ) {
        $query->set( 'posts_per_page', '20' );
    }
}

add_action( 'pre_get_posts', 'change_posts_per_page' );
{% endhighlight %}

- <code>$query->is_main_query()</code>: isso verifica se estamos acessando a consulta principal
- <code>$query->is_home()</code>: essa outra verificamos se estamos na homepage
- <code>$query->set( 'posts_per_page', '20' )</code>: aqui modificamos para exibir 20 posts por página

## Excluir páginas do resultado da busca ##

{% highlight php startinline %}
function search_filter($query) {
    if ( !is_admin() && $query->is_main_query() ) {
        if ($query->is_search) {
            $query->set('post_type', 'post');
        }
    }
}

add_action('pre_get_posts','search_filter');
{% endhighlight %}

- <code>!is_admin()</code>: verificamos se não for a página de adminstração
- <code>$query->is_main_query()</code>: e se estamos acessando a consulta principal
- <code>$query->is_search</code>: por fim verificamos se é a página de busca
- <code>$query->set('post_type', 'post')</code>: aqui definimos para o resultado da busca só exibir posts

## Incluir Custom Post Types no resultado da busca ##

{% highlight php startinline %}
function search_filter($query) {
    if ( !is_admin() && $query->is_main_query() ) {
        if ($query->is_search) {
            $query->set('post_type', array( 'post', 'eventos' ) );
        }
    }
}

add_action('pre_get_posts','search_filter');
{% endhighlight %}

- <code>$query->set('post_type', array( 'post', 'eventos' ) )</code>: aqui setamos para o resultado da busca exibir <b>posts</b> e o custom post type <b>eventos</b>

## Ordenar Custom Post Type por título em ordem decrescente ##

{% highlight php startinline %}

function modify_query_eventos( $query ) {
    if( $query->query_vars['post_type'] === 'eventos' && !is_admin() ) {
        $query->set('orderby', 'title');
        $query->set('order', 'desc');
    }
}

add_action( 'pre_get_posts', 'modify_query_eventos' );

{% endhighlight %}

- <code>$query->query_vars['post_type']</code>: verifica se o custom post type é o de eventos
- <code>!is_admin()</code>:  e se não for a página de administração
- <code>$query->set('orderby', 'title')</code>: ordena por título
- <code>$query->set('order', 'desc')</code>: em ordem decrescente

### Algumas observações ###

- As modificações devem ser feitas usando o método <code>$query->set('key','value')</code>, são diversas possibilidades para você personalizar seus posts, consulte todos os parametros possíveis aqui <a href="http://codex.wordpress.org/Class_Reference/WP_Query#Parameters">WP_Query Parameters</a>.

- Essa alteração na consulta também pode afetar a página de administração, certifique-se de verificar se sua consulta esta afetando a página de adminsitração dos posts.

- Se você precisar criar um segundo bloco de posts na página use o <a href="http://codex.wordpress.org/Class_Reference/WP_Query">WP_Query()</a>.


### Referências ###
- Palestra Leo Baiano WordCamp São Paulo 2014 - <a href="http://pt.slideshare.net/leobaiano1/dicas-e-truques-para-desenvolver-projetos-web-utilizando-wordpress">Dicas e Truques para desenvolver Projetos Web Utilizando WordPress</a>.
- wpmidia - <a href="http://wpmidia.com.br/tutoriais/customizando-query-wordpress/">Customizando a query do WordPress</a> 
- Codex Wordpress <a href="http://codex.wordpress.org/Plugin_API/Action_Reference/pre_get_posts">pre_get_posts</a>

### Livro ###

<a target="_blank" href="https://www.amazon.com.br/gp/search?ie=UTF8&tag=avancin-20&linkCode=ur2&linkId=1e560e5a466d73cd53d0457a2f2ee54d&camp=1789&creative=9325&index=books&keywords=WordPress">Livros WordPress na Amazon</a><img src="//ir-br.amazon-adsystem.com/e/ir?t=avancin-20&l=ur2&o=33" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />