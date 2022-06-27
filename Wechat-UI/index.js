var wechat = document.getElementsByClassName('weui-tabbar__item')
var items = document.querySelectorAll('.item')
var top = document.getElementById('searchBar')
console.log(top);
for(let i = 0; i < wechat.length ; i++){
    wechat[i].addEventListener('click' , function(){
        removeClass()
        items[i].classList.add('show')
    })
}
function removeClass(){
    for(let j = 0; j < wechat.length ; j++){
        items[j].classList.remove('show')
        if (j >= 2 ){
            top.classList.add('item')
        }
    }
}