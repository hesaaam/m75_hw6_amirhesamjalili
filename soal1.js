// let summation = function (nums) {
//     let  arr = [nums[0]];
//     for (let i = 1; i < nums.length; i++) {
//         arr.push(nums[i] + arr[i - 1]);
//     }
//     return arr;
// };





let summation = function (nums) {
    let sum = 0;
    return nums.map((a) => {
        sum+=a
        return sum
    })
}




console.log(summation([1,2,3,4]))





