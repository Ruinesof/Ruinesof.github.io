var hans = document.querySelector('.han-s')
var hanm = document.querySelector('.han-m')
var hanh = document.querySelector('.han-h')

function setDate(){
    
    var time = new Date()//获取当前时间
    console.log(time);

    //当前秒
    var seconds = time.getSeconds()
    var secondsDeg = seconds * 6 + 90
    hans.style.transform = `rotate(${secondsDeg}deg)`
    
    //
    var min = time.getMinutes()
    var minDeg = min * 6 + 90
    hanm.style.transform = `rotate(${minDeg}deg)`
    
    var hour = time.getHours()
    var hourDeg = hour * 15 + 90
    hanh.style.transform = `rotate(${hourDeg}deg)`
}
setInterval(setDate , 1000)
setDate()
// 自定义函数一定一定一定要调用一次