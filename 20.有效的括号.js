/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var arr = s.split("");
    var arr_tmp = [];
    var flag = true;
    arr = arr.filter(function (item) {
        return item  =='('|| item ==')' || item == '{' || item=='}'||item=='[' ||item==']'
    })
    
    var len = arr.length;
    if (len % 2 != 0) {
        return false;
    }
    for (var i = 0; i < len; i++) {
        var item = arr[i];
        switch (item) {
            case '(':
            case '{':
            case '[':
                arr_tmp.push(item);
                break;
            case ')':
            case '}':
            case ']':
                {
                    var map = {
                        ')': '(',
                        '}': '{',
                        ']':'['
                    }
                    if (arr_tmp[arr_tmp.length - 1] != map[item]) {
                    flag = false
                } else {
                    arr_tmp.pop(); 
                }
                break;

            }
        }
    }
    if (arr_tmp.length > 0) {
        flag = false
    }
    return flag;
};

