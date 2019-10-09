/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    x = x + '';
    x = x.split('');
    var intx = [];
    var flag = false;
    if (x[0] == '-') {
        x.shift();
        flag = true
    }
    intx = x
    
    var resultX = intx.reverse();
    if (resultX.length > 10) {
        return 0;
    }

    if (flag) {
        result = 0 - parseInt(resultX.join(''))
    } else {
         result = parseInt(resultX.join(''))
    }
    if (Math.abs(result) >= Math.pow(2, 31)) {
        return 0;
    }
    return result
};

