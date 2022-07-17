/**
  43. 字符串相乘
  给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

  注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

  示例 1:

  输入: num1 = "2", num2 = "3"
  输出: "6"
  示例 2:

  输入: num1 = "123", num2 = "456"
  输出: "56088"
 */

// /**
//  * 从两个字符串的右边开始乘
//  * 使用一个extra变量来记录进位
//  * 乘第二位置往后的位置，每一位都多*10
//  * @param {string} num1
//  * @param {string} num2
//  * @return {string}
//  */
// var multiply = function (num1, num2) {
//   let list = [];
//   let result = "";
//   for (let i = num2.length - 1; i >= 0; i--) {
//     let extra = 0;
//     let everyMul = [];
//     for (let j = num1.length - 1; j >= 0; j--) {
//       const leftNum = Number(num1[j]);
//       const rightNum = Number(num2[i]);
//       const ans = leftNum * rightNum;
//       const value = (ans + extra) % 10;
//       extra = Math.floor((ans + extra) / 10);
//       everyMul.unshift(value);
//     }
//     if (extra !== 0) {
//       everyMul.unshift(extra);
//     }
//     list.push(everyMul.join(""));
//   }
//   const relList = list.map(
//     (item, index) => (item += new Array(index).fill(0).join(""))
//   );
//   for (let i = 0; i < relList.length; i++) {
//     result = add()
//   }
//   console.log(relList);
// };

// function add(str1, str2) {
//   let index = 0;
//   let extra = 0;
//   let result = "";
//   while (index < str1.length || index < str2.length) {
//     const left = str1?.[str1.length - index - 1] ?? "0";
//     const right = str2?.[str2.length - index - 1] ?? "0";
//     const ans = Number(left) + Number(right);
//     const value = (ans + extra) % 10;
//     extra = Math.floor((ans + extra) / 10);
//     result = value + result;
//     index++;
//   }

//   console.log("extra: ", extra);
//   if (extra !== 0) result = "1" + result;
//   return result;
// }

// const res = multiply("123", "45");
// console.log("res: ", res);
