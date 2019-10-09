/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0)
        return false;
    x = (x+'').split('')
    var flag = true;
    for (var i = 0; i < x.length / 2; i++){
        if (x[i] != x[x.length - i - 1]) {
            flag = false
        }
    }
    return flag;
    
};

