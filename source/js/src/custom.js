window.onload = function(){
    document.querySelectorAll('#content posts').forEach((v)=>{
        if(v.getAttribute('src').startsWith('/img/')){
            v.src = v.getAttribute('src').replace(/\/img/, '/a/img')
        }
    });

}
