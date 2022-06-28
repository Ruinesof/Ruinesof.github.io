var item = document.querySelectorAll('.item')
var audio = document.getElementById('audio')
var img = document.getElementById('img')
var imgs = document.getElementById('imgs')
var h1 = document.getElementsByClassName('now')
var stop = document.getElementsByClassName('stop')
var next = document.getElementsByClassName('next')
console.log(h1[1].children[1].innerHTML);
for(let i = 0; i < item.length ; i++){
    item[i].addEventListener('click',function(e){
        audio.src = e.srcElement.children[0].innerText
        audio.play()
        console.log(e.srcElement.children[1].children[1].innerText);
        img.src = (e.srcElement.children[1].children[2].innerText)
        imgs.src = (e.srcElement.children[1].children[2].innerText)
        h1[1].children[0].innerText = e.srcElement.children[1].children[0].innerText
        h1[1].children[1].innerText = e.srcElement.children[1].children[1].innerText
    })
    next[0].addEventListener('click',function(e){
        i++
    
    })
    
}
var j = 0
stop[0].addEventListener('click',function(e){
    j++
    console.log(j);
    if( j % 2 !== 0 ){
        audio.pause()
    }else{
        audio.play()
    }

})