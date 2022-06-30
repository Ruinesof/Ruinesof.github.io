var nums = [1,2,3,4,5,6,7,8,9]
var traget = 20


    for (var i = 0 ; i < nums.length ; i++){
        var less = traget - nums[i];
        var last = nums.indexOf(less , i+1)
        if (last != -1){
            console.log([i , last]);
            break;
        }else{
            console.log([null , null]);
            break;
        }
    }
