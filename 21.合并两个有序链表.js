/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val, child) {
    this.val = val;
    this.next = child || null;
}
function merge(l1, l2, all) {
    if (l1 == null) {
        return l2;
    }
    if (l2 == null) {
        return l1;
    }

    if (l1.val > l2.val) {

        return new ListNode(l2.val, merge(l1, l2.next))
    } else {
        return new ListNode(l1.val, merge(l1.next, l2))

    }

}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {

    let all = null;
    return merge(l1, l2, all);
};