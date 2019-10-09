/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (arr) {
    var first = arr[0];
    if (!first) {
        return '';
    }
    var firstArr = first.split('');
    var max = firstArr.length;
    arr.shift();
    arr.forEach(item => {
        var strArr = item.split('');
        var max_item = 0;
        for (var i = 0; i < strArr.length; i++) {
            if (firstArr[i] == strArr[i]) {
                max_item++
            } else {
                break;
            }
        }
        if (max_item < max) {
            max = max_item
        }
    });
    console.log(max)
    return firstArr.splice(0, max).join('')
};