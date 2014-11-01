$(document).ready(function(){
    $('.social-share a').click(function(event){
        event.preventDefault();
        event.isDefaultPrevented();
        var url = $(this).attr('href');
        window.open(url, 'Compartilhar', 'toolbar=no, location=no, status=no, menubar=no,scrollbars=yes, resizable=yes, width=600px, height=400px');
    });
});
