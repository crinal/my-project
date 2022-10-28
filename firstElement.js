let list = ["1", "2", "3", "4", "5"]; //注意此处的分号是必须的 否则报错（Cannot access 'list' before initialization）//原因未知 
[list[0], list[2], list[4]] = [list[2], list[4], list[0]];
console.log(list);

// let list = ['a', 'b', 'c', 'd', 'e'];

// [list[1], list[3]] = [list[3], list[1]];

// console.log(list)