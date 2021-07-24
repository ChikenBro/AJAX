/* 多个元素组成的列表
*  元素存储不连续 用next指针连在一起
*  用Object实现
*/

const a = { val: 'a' };
const b = { val: 'b' };
const c = { val: 'c' };
const d = { val: 'd' };

a.next = b;
b.next = c;
c.next = d;

//遍历链表
let p = a;
while (p) {
    console.log(p.val);
    p = p.next;  
}
//插入元素 c和d之间
const e = { val: 'e' };
c.next = e;
e.next = d;
//删除
c.next = d;