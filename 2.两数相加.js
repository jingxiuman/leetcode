/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {


    return merge(l1, l2, false)
};

function ListNode(val, child) {
    this.val = val;
    this.next = child || null;
}

function merge(l1, l2, needAdd) {
    let sum = l1.val + l2.val;
    if (needAdd) {
        sum += 1
    }
    let flag = false;
    if (sum >= 10) {
        sum -= 10;
        flag = true;
    }

    let all = null;
    if (flag || l1.next != null || l2.next != null) {
        if (l1.next == null) l1.next = new ListNode(0);
        if (l2.next == null) l2.next = new ListNode(0)
        all = merge(l1.next, l2.next, flag)
    }

    return new ListNode(sum, all)

}