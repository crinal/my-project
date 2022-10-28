// const getFrequency = (arr) => {
//     return arr.reduce((pre, cur) => {
//         pre[cur] = (pre[cur] || 0) + 1
//         return pre
//     }, {})
// }
// console.log(getFrequency([12, 12, 132, 32, 12]));
const getFrequencyByFor = (arr) => {
    let res = {}
    arr.forEach(ele => {
        res[ele] = (res[ele] || 0) + 1
    });
    return res
}
let data = [12, 32, 12, 23, 23]
console.log(getFrequencyByFor(data));