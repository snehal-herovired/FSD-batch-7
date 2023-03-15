function mergeSortedLists(list1, list2) {
    let dummy = new Node();
    let tail = dummy;
  
    while (list1 && list2) {
      if (list1.value < list2.value) {
        tail.next = list1;
        list1 = list1.next;
      } else {
        tail.next = list2;
        list2 = list2.next;
      }
      tail = tail.next;
    }
  
    if (list1) {
      tail.next = list1;
    } else if (list2) {
      tail.next = list2;
    }
  
    return dummy.next;
  }
  