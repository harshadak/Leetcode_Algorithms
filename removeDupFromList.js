// 83. Remove Duplicates from Sorted List

// Given a sorted linked list, delete all duplicates such that each element appear only once.

// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.


// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}
 
var deleteDuplicates = function(head) {
  if (!head) {
    return head;
  }
  var temp = head;
  var runner = head.next;
  while (temp.next) {
    if (temp.val == runner.val) {
      runner = runner.next;
      temp.next = runner;
    } else {
      temp = temp.next;
      runner = runner.next;
    }
  }
  return head;
};

var l1 = new ListNode(3);
var l2 = new ListNode(3);
var l3 = new ListNode(3);
var l4 = new ListNode(3);
l1.next = l2;
l2.next = l3;
l3.next = l4;

console.log(deleteDuplicates(l1));

