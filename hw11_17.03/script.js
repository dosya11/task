// const pushArr = (el, count) => {
//     let NewArr = [];
//     for (let i = 0; i < count; i++) {
//         NewArr.push(el);
//     }
//     return NewArr;
// };
//
// console.log(pushArr('hello', 10));


let arr = [-5, 10, 5, 55, -1, 22, -4, 36, -45];
let result =arr.reduce(function (sum, el) {
    if (el >= 0) {
        return sum + el;
    } else {
        return sum;
    }
});
console.log(result);