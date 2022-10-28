/*this的本质就是函数的调用者。
    1.以函数的方式调用(直接调用 及 前面没有点) 调用对象就是window， 对象的方式调用，this就指向对象
    2.node 环境中全局对象是global 浏览器环境是window
    3.箭头函数在函数声明时确定this且this无法被改变，但箭头函数本身并没有this 要通过作用域链查找已经确定的this，继承最近的this
    因为箭头没有this ，所以本质上 箭头函数this的改变是因为箭头函数声明时的作用域链上原有this的改变
        例如 下列代码中fn的this 继承自 h 如果h被window调用（let a=obj.h）则this为window fn的this 也就是window 
    4.setTimeOut因为延时的问题 内部的普通函数的this 永远指向 window 或undefined（严格模式），箭头函数可以解决这个问题      
*/
const obj = {
        name: 'hello',
        drink: () => { // 特别注意 this 是与函数相伴而生的，因此箭头函数的外层如果直接是对象，
            console.log(this, 'as'); //则继承不到任何的this this只能是window例如 obj.drink（） 
        },
        h() {
            console.log('对象', this);
            const my = () => {
                const fn = () => {
                    console.log(11, this);
                }
                fn()
            }
            my()
        }
    }
    // obj.drink()
obj.drink()


// const fn = () => {
//         console.log(11, this);
//     }
//     // obj.h()
//     // f()
// a.say = fn
// a.say()