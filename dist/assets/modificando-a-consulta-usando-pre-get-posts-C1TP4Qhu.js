import{i as e,n as t,r as n}from"./index-BZtytHmN.js";n();var r=t();const i={title:`Modificando a consulta atual usando pre_get_posts`,description:`É um gancho que permite que você modifique a consulta principal, é muito comum você precisar alterar o conteúdo que é exibido em uma página, então vamos usar esse gancho que facilita muito o trabalho.`,date:`2015-01-02`,readTime:2,image:`https://picsum.photos/id/113/200/300?grayscale`,tags:[`wordpress`]},a={title:i.title,description:i.description};function o(e){let t={a:`a`,code:`code`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,ul:`ul`,...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[`O `,(0,r.jsx)(t.strong,{children:`pre_get_posts`}),` é um gancho que permite que você modifique a consulta principal, é muito comum você precisar alterar o conteúdo que é exibido em uma página, então vamos usar esse gancho que facilita muito o trabalho.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Para poder funcionar você precisa adicionar a função no arquivo `,(0,r.jsx)(t.strong,{children:`functions.php`}),`.`]}),`
`,(0,r.jsxs)(t.p,{children:[`Não use `,(0,r.jsx)(t.strong,{children:`query_posts()`}),` para alterar a consulta principal, como o próprio `,(0,r.jsx)(t.a,{href:`http://codex.wordpress.org/Function_Reference/query_posts`,children:`Codex`}),` do WordPress diz essa função não é para ser usada em temas e plugins, existe outros métodos mais confiáveis que é o `,(0,r.jsx)(t.strong,{children:`pre_get_posts`}),` que vamos ver agora.`]}),`
`,(0,r.jsx)(t.h2,{children:`Alterando a quantidade de posts na página`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`function change_posts_per_page( $query ) {
    if( $query->is_main_query() && $query->is_home() ) {
        $query->set( 'posts_per_page', '20' );
    }
}

add_action( 'pre_get_posts', 'change_posts_per_page' );

`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(`code`,{children:`$query->is_main_query()`}),`: isso verifica se estamos acessando a
consulta principal`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(`code`,{children:`$query->is_home()`}),`: essa outra verificamos se estamos na homepage`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(`code`,{children:`$query->set( 'posts_per_page', '20' )`}),`: aqui modificamos para
exibir 20 posts por página`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`Excluir páginas do resultado da busca`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`function search_filter($query) {
    if ( !is_admin() && $query->is_main_query() ) {
        if ($query->is_search) {
            $query->set('post_type', 'post');
        }
    }
}

add_action('pre_get_posts','search_filter');
`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(`code`,{children:`!is_admin()`}),`: verificamos se não for a página de adminstração`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(`code`,{children:`$query->is_main_query()`}),`: e se estamos acessando a consulta
principal`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(`code`,{children:`$query->is_search`}),`: por fim verificamos se é a página de busca`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(`code`,{children:`$query->set('post_type', 'post')`}),`: aqui definimos para o resultado
da busca só exibir posts`]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`Incluir Custom Post Types no resultado da busca`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`function search_filter($query) {
    if ( !is_admin() && $query->is_main_query() ) {
        if ($query->is_search) {
            $query->set('post_type', array( 'post', 'eventos' ) );
        }
    }
}

add_action('pre_get_posts','search_filter');
`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(`code`,{children:`$query->set('post_type', array( 'post', 'eventos' ) )`}),`: aqui
setamos para o resultado da busca exibir `,(0,r.jsx)(`b`,{children:`posts`}),` e o custom post type `,(0,r.jsx)(`b`,{children:`eventos`})]}),`
`]}),`
`,(0,r.jsx)(t.h2,{children:`Ordenar Custom Post Type por título em ordem decrescente`}),`
`,(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:`language-js`,children:`
function modify_query_eventos( $query ) {
    if( $query->query_vars['post_type'] === 'eventos' && !is_admin() ) {
        $query->set('orderby', 'title');
        $query->set('order', 'desc');
    }
}

add_action( 'pre_get_posts', 'modify_query_eventos' );

`})}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(`code`,{children:`$query->query_vars['post_type']`}),`: verifica se o custom post type é
o de eventos`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(`code`,{children:`!is_admin()`}),`: e se não for a página de administração`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(`code`,{children:`$query->set('orderby', 'title')`}),`: ordena por título`]}),`
`,(0,r.jsxs)(t.li,{children:[(0,r.jsx)(`code`,{children:`$query->set('order', 'desc')`}),`: em ordem decrescente`]}),`
`]}),`
`,(0,r.jsx)(t.h3,{children:`Algumas observações`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`As modificações devem ser feitas usando o método `,(0,r.jsx)(`code`,{children:`$query->set('key','value')`}),`, são diversas possibilidades para você personalizar seus posts, consulte todos os parametros possíveis aqui `,(0,r.jsx)(`a`,{href:`http://codex.wordpress.org/Class_Reference/WP_Query#Parameters`,children:`WP_Query Parameters`}),`.`]}),`
`,(0,r.jsx)(t.li,{children:`Essa alteração na consulta também pode afetar a página de administração, certifique-se de verificar se sua consulta esta afetando a página de adminsitração dos posts.`}),`
`,(0,r.jsxs)(t.li,{children:[`Se você precisar criar um segundo bloco de posts na página use o `,(0,r.jsx)(`a`,{href:`http://codex.wordpress.org/Class_Reference/WP_Query`,children:`WP_Query()`}),`.`]}),`
`]}),`
`,(0,r.jsx)(t.h3,{children:`Referências`}),`
`,(0,r.jsxs)(t.ul,{children:[`
`,(0,r.jsxs)(t.li,{children:[`Palestra Leo Baiano WordCamp São Paulo 2014 - `,(0,r.jsx)(`a`,{href:`http://pt.slideshare.net/leobaiano1/dicas-e-truques-para-desenvolver-projetos-web-utilizando-wordpress`,children:`Dicas e Truques para desenvolver Projetos Web Utilizando WordPress`}),`.`]}),`
`,(0,r.jsxs)(t.li,{children:[`wpmidia - `,(0,r.jsx)(`a`,{href:`http://wpmidia.com.br/tutoriais/customizando-query-wordpress/`,children:`Customizando a query do WordPress`})]}),`
`,(0,r.jsxs)(t.li,{children:[`Codex Wordpress `,(0,r.jsx)(`a`,{href:`http://codex.wordpress.org/Plugin_API/Action_Reference/pre_get_posts`,children:`pre_get_posts`})]}),`
`]})]})}function s(e={}){let{wrapper:t}=e.components||{};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}export{i as article,s as default,a as metadata};