var char = 'asdfqwezq'
var char2 = 123456789

// 基础数据类型有七种: string number bool undefund null Symbol   Bigint

var cc = Symbol('asd')
var dd = Symbol('asd')
console.log(cc == dd);
// 每个Symbol定义后值不相等


var bb = 123456789n
// Bigint定义
console.log(bb);

console.log(char.length); 
// 打印字符串的长度


console.log(char[2]);
console.log(char.charAt(2));
// 打印字符串下标为2的字符


console.log(char.concat(char2));
console.log(char + char2);
// 拼接两个字符串


console.log(char.indexOf('q'));//从左往右
console.log(char.lastIndexOf('q'));//从右往左
// 返回该字符在字符串中第一次出现的下标


console.log(char.replace('s','z'));
// 只改变第一次出现的变量,切不修改原字符串


console.log(char.slice(1,3));
// 切出下标为1-3的字符,左闭右开,也不修改原字符串


console.log(char.split('q'));
// 如果不写就会把字符串切成一个个,写了就会根据写进的字符切割


console.log(char.substring(2,5));
// 从下标2切到下标5,左闭右开
console.log(char.substr(2,5));
// 从下标2开始,后面的五位


console.log(char.toLocaleUpperCase());
var char3 = 'ACBD'
console.log(char3.toLocaleLowerCase());
//大小写转换

var char4 = ' dwad '
console.log(char4);
console.log(char4.trim());
// 去除字符串首尾的空格


var num = 12.52
var num2 = 12.3

console.log(num.toFixed());
console.log(num2.toFixed());
console.log(num.toFixed(1));
// 保留几位小数,不写就四舍五入

console.log(num.toString());
// 转变成字符串