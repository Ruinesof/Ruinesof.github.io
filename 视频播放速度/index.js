var speed = document.querySelector('.speed')    /*获取到底部box */
var speed1 = document.querySelector('.speed1' ) /*获取顶部box */
var video = document.querySelector('.video')    /*获取到video */
var remake = document.querySelector('.remake')  /*获取重置box */

/*事件 */
/*要操作的名称 . 为元素添加事件('什么事件' , 函数(名)) */
speed.addEventListener('mousemove' , function(e){ /*mousemove */
    var par = e.offsetY / speed.offsetHeight    /*计算鼠标位置和box总高的比例*/
    var height = Math.round(par * 100) + '%'    /*扩大后保留两位小数再加上百分比符号 */
    var fast = par * (5-0.5) + 0.5              /*显示倍数 */

    speed1.style.height = height                /*修改顶部box的高 */
    speed1.textContent = fast.toFixed(2) + 'x'  /*修改顶部box的倍速显示数字 */
    video.playbackRate = fast                   /*修改视频速度 */
})

remake.addEventListener('click' , function(){
    var heighth = '20%'
    var FAST = '1.00'
    speed1.style.height = heighth
    speed1.textContent = FAST +'x'
    video.playbackRate = FAST
})