/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    let newARR = _.cloneDeep(matrix)
    let maxw = matrix[0].length;
    let maxh = matrix.length;
    for (let i = 0; i < maxw; i++) {
        for (let j = maxh - 1; j >= 0; j--) {
            let item = newARR[j][i];
            matrix[i][Math.abs(j - maxh + 1)] = item;
        }

    }
    console.log(newARR)

};
// @lc code=end

