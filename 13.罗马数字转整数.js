/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */
/**
 * @param {string} s
 * @return {number}
 */
var map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
var romanToInt = function (s) {
    var resultNum = 0;
    var arrS = s.split("");
    for (var i = 0; i < arrS.length; i++) {
        var item = arrS[i];
        var next = arrS[i + 1]
        var type = 'add'
        if (item == 'I') {
            if (next == 'V' || next == 'X') {
                type = 'reduce'
            }
        } else if (item == 'X') {
            if (next == 'L' || next == 'C') {
                type = 'reduce'
            }
        } else if (item == 'C') {
            if (next == 'D' || next == 'M') {
                type = 'reduce'
            }
        }
        if (type == 'reduce') {
            resultNum -= map[item]
        } else {
            resultNum += map[item]
        }
    }
    return resultNum

};