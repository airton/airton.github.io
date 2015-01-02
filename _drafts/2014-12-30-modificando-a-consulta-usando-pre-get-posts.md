---
layout: post
class: post
title: Modificando a consulta atual usando pre_get_posts
description:
image: 
---

O **pre_get_posts** é um gancho que permite que você modifique a consulta principal, é muito comum você precisar alterar o conteúdo que é exibido em uma página, então vamos usar esse gancho que facilita muito o trabalho.

Para poder funcionar você precisa adicionar a função no arquivo **functions.php**

Não use **query_posts()** para alterar a consulta principal, como o próprio [codex](http://codex.wordpress.org/Function_Reference/query_posts) do WordPress diz essa função não é para ser usada em temas e plugins, existe outros métodos mais confiáveis que é o **pre_get_posts** que vamos ver agora.

## Alterando a quantidade de posts na página ##

{% highlight php startinline %}
add_action( 'pre_get_posts', 'change_posts_per_page' );

function change_posts_per_page( $query ) {
    if( $query->is_main_query() && $query->is_home() ) {
        $query->set( 'posts_per_page', '20' );
    }
}
{% endhighlight %}

- <code>$query->is_main_query()</code>: isso verifica se estamos acessando a consulta principal
- <code>$query->is_home()</code>: essa outra verificamos se estamos na homepage
- <code>$query->set( 'posts_per_page', '20' )</code>: aqui modificamos para exibir 20 posts por página

As modificações devem ser feitas usando o método <code>$query->set( 'key', 'value' )</code>, consulte todos os parametros possíveis aqui [WP_Query Parameter](http://codex.wordpress.org/Class_Reference/WP_Query#Parameters).

### Um detalhe muito importante ###

Essa alteração na consulta também pode afetar a página de administração, certifique-se de verificar se sua consulta esta afetando a página de adminsitração dos posts.

