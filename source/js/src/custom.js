window.onload = function(){
  document.querySelector('#posts').querySelectorAll('img').forEach((v)=>{
    if(v.getAttribute('src').startsWith('/img/')){
        v.src = v.getAttribute('src').replace(/\/img/, '/a/img')
    }
});
}
