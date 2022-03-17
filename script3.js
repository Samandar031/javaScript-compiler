"use strict";

// let arr = [1, 2, 3, 4, 5];

// let arr1 = arr
//   .filter((val) => val > 2)
//   .map((val) => val * 10)
//   .reduce((yig, val) => {
//     return yig + val;
//   }, 3);

// console.log(arr1);

// 11111111111111111111111111111111111111111111111
// let arr1 = {
//   name: "Jamshid",
// };

// let arr2 = {
//   name: "Mamur",
//   nomer: 33,
// };

// let arr3 = {
//   name: "Bekzod",
// };

// let arrs = [arr1, arr2, arr3];

// let arr = arrs.find(function (val) {
//   return val.name == "Mamur";
// });
// console.log(arr);

// let str = arrs.findIndex(function (val) {
//   return val.name == "Jamshid";
// });

// console.log(str);

// 111111111111111111111111111111111111111111111111111111

// every va some array methods

// let arr = [1, 2, 3, -4, -5, -6];

// let str = arr.filter((val) => val > 1);
// console.log(str);

// let bor = arr.some((val) => val > 1);
// console.log(bor);

// let yoq = arr.every((val) => val > 1);
// console.log(yoq);

// 111111111111111111111111111111111111111111111111111111

// 10. flat and flarMap Methods
// unmutable

// let arr = [[4, 5], -2, [3, 5, 9, [4, 5]]];

// let str = arr.flat(10);
// console.log(str);

// let str = [8, 9, 5, [5, 4.5, 6, 4, 5, [4, 5]]];

// let sum = [arr, str];
// let ali = sum.map(function (val) {
//   return val.flat(4);
// });
// console.log(ali);

// let arr1 = [1, 2, 3, [1, 2, 3, [1, 5, 6]]];
// let arr2 = [4, 5, 6, [7, 8, 9]];
// let arr3 = [3, 4, 6, [7, 8, 6]];

// let arrA = [arr1, arr2, arr3];

// let str = arrA.map(function (val) {
//   return val.flat(1);
// });
// console.log(str);

// let str1 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
// let str2 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
// let str3 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

// let str = [str1, str2, str3];

// let sum = str.flatMap(function (val) {
//   return val;
// });
// console.log(sum);

// 1111111111111111111111111111111111111111111111111111111111

// 11.Sorting Arreys

// let a = ["a", "g", "h", "f", "h", "b", "o", "t"];
// let x = a.sort();
// console.log(x);

// let s = "shakhdamauhfagicsjdsoft";
// let arr = s.split("");
// console.log(arr);

// let e1 = arr.findIndex((val) => val == "m");
// let e2 = arr.findIndex((val) => val == "a");
// let e3 = arr.findIndex((val) => val == "g");
// let e4 = arr.findIndex((val) => val == "i");
// let e5 = arr.findIndex((val) => val == "c");
// let e6 = arr.findIndex((val) => val == "s");
// let e7 = arr.findIndex((val) => val == "o");
// let e8 = arr.findIndex((val) => val == "f");
// let e9 = arr.findIndex((val) => val == "t");

// e1 < e2 &&
// e2 < e3 &&
// e3 < e4 &&
// e4 < e5 &&
// e5 < e6 &&
// e6 < e7 &&
// e7 < e8 &&
// e8 < e9
//   ? console.log(true)
//   : console.log(false);
// //////////////////////////////////////

// let a = [5, 6, 7];
// let b = [3, 6, -8];

// let x = 0;
// let y = 0;
// for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < b.length; j++) {
//     if (a[i] > b[j]) {
//       x = x + 1;
//     } else if (a[i] == b[j]) {
//       x = x;
//     } else {
//       y = y + 1;
//     }
//     i++;
//   }
// }
// console.log(x);
// console.log(y);

// 1111111111111111111111111111111111111111

// let arr = [1, 2, 3, [1, 2, 3, [4, 5, 6, [7, 8, 9, [1, 2, 3]]]]];
// let arr1 = [1, 2, [3, 4, [5]]];

// let str = arr1.flat(10);
// console.log(str);

// let sum = 0;
// let sum1 = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum1++;
//   for (let j = sum1; j < str.length; j++) {
//     sum1 = sum1 + 1;
//   }
// }
// console.log(sum1);
// console.log(sum);

// let account1 = {
//   name: "Qodirqulov Samandar",
// };

// let account2 = {
//   name: "Hatamov Jamshid",
// };

// let account = [account1, account2];

// account.forEach(function (val) {
//   val.userName = val.name
//     .toLocaleLowerCase()
//     .split(" ")
//     .map(function (val) {
//       return val[0];
//     })
//     .join("");
// });
// console.log(account);

// 222222222222222222222222222222222222222222222

// let s = "ssaammaannddaarr";
// let arr = s.split("");
// console.log(arr);

// let e1 = arr.findIndex((val) => val == "s");
// console.log(e1);
// let e2 = arr.findIndex((val) => val == "s");
// console.log(e2);

// let e3 = arr.findIndex((val) => val == "a ");
// console.log(e3);

// 4444444444444444444444444444444444444444444444

// let button = document.querySelector(".btn");

// let arr = function () {
//   let name = document.querySelector("#name").value;
//   let select = document.querySelector("#til").value;
//   let greetingg;
//   if (select == "uz") {
//     greetingg = "Assalome alaykum " + name;
//   } else if (select == "en") {
//     greetingg = "hi " + name;
//   } else {
//     greetingg = "здрасвьте " + name;
//   }

//   let hello = (document.querySelector(".message").textContent = greetingg);
// };

// button.addEventListener("click", arr);

// 4444444444444444444444444444444444444444444444444

// qaysi elementga ta'sir o'tkazishimizni bilishimiz kk
// let coutdown = document.getElementById("countdown");

// har safar uni qaysi element o'zgartiradi

// let countIdDown = function () {
//   let currentTime = parseFloat(coutdown.textContent);
//   if (currentTime > 0) {
//     coutdown.textContent = currentTime - 1;
//   } else {
//     window.clearInterval(timer);
//   }
// };

// uni malum bir vaqt oralig'ida chiqaramiz
// let timer = window.setInterval(countIdDown, 1000);

// 4444444444444444444444444444444444444444444444444
// sort

// let a = ["umid", "umidd", "ali", "vali", "vaali"];
// let c = [1, 2, 33, 44, 55, 77, 6];
// let x = c.sort();
// let b = a.sort();
// console.log(x, b);

// jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj

// let str = ["olma", "umid", "nok", "gilos", "anor"];

// for (let i = 0; i < str.length; i++) {
//   for (let j = 0; j < str.length - i - 1; j++) {
//     if (str[j].charCodeAt(0) > str[j + 1].charCodeAt(0)) {
//       [str[j], str[j + 1]] = [str[j + 1], str[j]];
//     }
//   }
// }
// console.log(str);

// 444444444444444444444444444444444444444444444444

// let a = [];
// let b = a.push(45);

// console.log(String.fromCharCode(111));

// 44444444444444444444444444444444444444444444444

// let a = [1, 2, 3, 4, 5, 65, 4512, 45, 98, 122, 12];

// a.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// console.log(a);

// let y = a.sort((a, b) => b - a);
// console.log(y);

// 555555555555555555555555555555555555555555555555555

// 14 mart 2022 dushanba 14:22

// let arr = [1, 2, 3, 4, 5, 6];

// let x = new Array(10);
// let y = [];

// x.fill(6, -6);

// for (let i = 0; i < 20; i++) {
//   y[i] = i;
// }
// console.log(y);

// let vali = Array.from({ length: 50 }, function (val, key) {
//   return key * 6;
// });
// console.log(vali);

// let ali = Array.from({ length: 50 }, function (val, key) {
//   return key * 2 + 1;
// });
// console.log(ali);

// let olma = Array.from({ length: 50 }, function (val, key) {

// });
// console.log(vali);

// let arr = [1, 2, 3, 4, 5, 6];
// let str = Array.from(arr, function (val, key) {
//   return val * 10;
// });
// console.log(str);

// let arr1 = [1, 2, 3, 3, 4, 5, 7, 78];
// let str1 = Array.from({ length: arr1.length }, function (val, key) {
//   return key * 10;
// });
// console.log(str1);

// ////////////////////////////////////////////////////////////////////

// let a = 25.6156465165;
// let b = a.toFixed(2);
// console.log(b);

// let xas = "260";
// x = Number(x);

// let y = Number(x);

// console.log(typeof xas);

// hakkerrank 1111111111111111111111111111111111111111111111

// let a = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
// let b = 0;

// for (let i = 0; i < a.length; i++) {
//   b = b + a[i];
// }
// console.log(b);

// 2-task

// let arr = [
//   [6, 6, 7, -10, 9, -3, 8, 9, -1],
//   [9, 7, -10, 6, 4, 1, 6, 1, 1],
//   [-1, -2, 4, -6, 1, -4, -6, 3, 9],
//   [-8, 7, 6, -1, -6, -6, 6, -7, 2],
//   [-10, -4, 9, 1, -7, 8, -5, 3, -5],
//   [-8, -3, -4, 2, -3, 7, -5, 1, -5],
//   [-2, -7, -4, 8, 3, -1, 8, 2, 3],
//   [-3, 4, 6, -7, -7, -8, -3, 9, -6],
//   [-2, 0, 5, 4, 4, 4, -3, 3, 0],
// ];

// let qush1 = 0;
// let qush2 = 0;
// let qush3 = 0;
// for (let i = 0; i < arr.length; i++) {
//   qush1 += arr[i][i];
//   qush2 += arr[i][arr.length - 1 - i];
// }

// console.log(qush2);
// console.log(qush1);
// let ab = Math.abs(qush1 + qush2);
// console.log(ab);
// console.log("lkjhjk");

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (i == j) {
//       sum = sum + arr[i][j];
//     }
//   }
// }
// console.log(sum);

// let sum1 = 0;
// let sum2 = 0;
// for (let i = arr.length - 1; i >= 0; i--) {
//   for (let j = sum2; j < arr.length; j++) {
// console.log(arr[i][j]);

//     sum2++;
//     sum1 = sum1 - arr[i][j];
//     break;
//   }
// }
// console.log(sum1);

// let a = sum1 - sum;
// let b = Math.abs(a);

// console.log(b);

// let leftD = 0;
// let rightD = 0;

// for (let j = 0; j < arr.length; j++) {
//   for (let k = 0; k < arr.length; k++) {
//     if (j == k) {
//       leftD += arr[j][k];
//     }
//     if (j + k == arr.length - 1) {
//       rightD += arr[j][k];
//     }
//   }
// }
// console.log(Math.abs(leftD - rightD));

// hakkerrank works

// let arr = [-4, 3, -9, 0, 4, 1];

// let sum1 = 0;
// let sum2 = 0;
// let sum3 = 0;
// let sum4 = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum4++;
//   if (arr[i] > 0) {
//     sum1++;
//   } else if (arr[i] < 0) {
//     sum2++;
//   } else {
//     sum3++;
//   }
// }

// let x = sum1 / sum4;
// let y = sum2 / sum4;
// let z = sum3 / sum4;

// let x = sum1 / arr.length;
// let y = sum2 / arr.length;
// let z = sum3 / arr.length;
// console.log(typeof x);

// console.log(arr.length);
// let str = [x.toFixed(6), y.toFixed(6), z.toFixed(6)];

// console.log(str);

// 15.03.2022 seshanba 15:03

// let a = "205.98";
// console.log(Number.parseFloat(a));
// console.log(Number.parseInt(a));
// console.log(Number.isNaN(Number.parseFloat(a)));
// console.log(Number.isFinite(Number.parseFloat(a)));
// console.log(50 / 0);

// let a = 81 ** (1 / 2);
// console.log(a);

// let b = (1, 2, 3, 4, 5, 7, 75);
// let x = Math.min(b);
// console.log(x);

// let a = 10;
// let b = 20;

// let xl = Math.trunc(Math.random() * (b - a) + 1) + a;
// console.log(xl);

// let mars = function (a, b) {
//   return Math.trunc(Math.random() * (b - a) + 1) + a - 1;
// };
// console.log(mars(50, 100));

// let a = 2.6;
// let aa = 2.4;
// let aaa = 2.5;

// let b = -2.6;
// let bb = -2.4;
// let bbb = -2.5;

// console.log(Math.round(a));
// console.log(Math.trunc(b));

// let a1 = "bir";
// let a2 = "ikki";
// let a3 = "uch";
// let a4 = "to'rt";
// let a5 = "besh";
// let a6 = "olti";
// let a7 = "yetti";
// let a8 = "sakkiz";
// let a9 = "to'qqiz";

// let b10 = "o'n";
// let b20 = "yigirma";
// let b30 = "o'ttiz";
// let b40 = "qirq";
// let b50 = "ellik";
// let b60 = "oltmish";
// let b70 = "yetmish";
// let b80 = "sakson";
// let b90 = "to'qson";

// let a = 55;
// let b = a % 10;
// let v = a - b;

// switch (v) {
//   case 10:
//     console.log(b10);
//     break;
//   case 20:
//     console.log(b20);
//     break;
//   case 30:
//     console.log(b30);
//     break;
//   case 40:
//     console.log(b40);
//     break;
//   case 50:
//     console.log(b50);
//     break;
//   case 60:
//     console.log(b60);
//     break;
//   case 70:
//     console.log(b70);
//     break;
//   case 80:
//     console.log(b80);
//     break;
//   case 90:
//     console.log(b90);
//     break;
// }

// switch (b) {
//   case 1:
//     console.log(a1);
//     break;
//   case 2:
//     console.log(a2);
//     break;
//   case 3:
//     console.log(a3);
//     break;
//   case 4:
//     console.log(a4);
//     break;
//   case 5:
//     console.log(a5);
//     break;
//   case 6:
//     console.log(a6);
//     break;
//   case 7:
//     console.log(a7);
//     break;
//   case 8:
//     console.log(a8);
//     break;
//   case 9:
//     console.log(a9);
//     break;
// }

// let vali = 0;
// let ali = function (q) {
//   for (let i = 0; i < q; i++) {
//     vali++;
//     console.log(vali);
//   }
// };
// ali(10);
// console.log(vali);

// console.log(2 ** 999);
// let bigNumber = Number.MAX_SAFE_INTEGER;
// console.log(bigNumber);
// let minNumber = Number.MIN_SAFE_INTEGER;
// console.log(minNumber);

// 33333333333console.log(BigInt(z));

// let a = new Date();
// console.log(a);

// let b = new Date().getTime() / 1000 / 60 / 60 / 24 / 365;
// console.log(new Date().getTime());
// console.log(new Date().getMonth());
// console.log(new Date().getFullYear());
// console.log(new Date().getDate());
// console.log(new Date().getDay());
// console.log(new Date().getHours());
// console.log(new Date().getSeconds());
// console.log(b);

// let bb = new Date(2026, 2, 15);
// console.log(bb);

// let a = new Date().getTime();
// let x = 5 * 365 * 24 * 60 * 60 * 1000;
// let b = new Date(x + a);
// // console.log(x)
// console.log(b);

// let arr = new Date(2025, 5, 11).getTime();
// console.log(arr);//milli sekund

// let kun = arr + 10 * 24 * 60 * 60 * 1000;
// console.log(kun); // 10 kunni milli secundda qo'shdim

// let date10 = new Date(kun).toISOString();
// console.log(date10);
// milli sekunddagi sonni kunga o'tkazdik

// let aa = new Date();
// let bb = aa.setFullYear(2040);
// console.log(aa);

// let arr = new Date();
// let arr1 = {
//   day: "numeric",
//   month: "numeric",
//   weekday: "long",
//   year: "numeric",
//   hour: "numeric",
//   minute: "numeric",
// };
// let davlat = navigator.language;
// console.log(davlat);
// let str = new Intl.DateTimeFormat("uz-UZ", arr1).format(arr);
// console.log(str);

// let pos = 0,
//   neg = 0,
//   zero = 0,
//   length = arr.length;

// arr.forEach((n) => {
//   if (n > 0) pos++;
//   else if (n < 0) neg++;
//   else zero++;
// });

// console.log((pos / length).toFixed(6));
// console.log((neg / length).toFixed(6));
// console.log((zero / length).toFixed(6));

// let a = "";
// let sum = 0;
// let sum1 = "$";
// for (let i = 0; i < 6; i++) {
//   sum++;
//   for (let j = 0; j <= i; j++) {
//     a = a + sum1;
//     console.log(a);
//     break;
//   }
//   // console.log(sum);
// }

// let n = 6;
// for (let i = 1; i <= n; i++) {
//   console.log("#".repeat(i).padStart(n));
// }

// let a = "";
// let sum = 0;
// let sum1 = "$";
// for (let i = 1; i <= 6; i++) {
//   // sum++;
//   for (let j = 1; j <= i; j++) {
//     a += i;
//     break;
//   }
//   a += "\6";
// }
// console.log(a);

// let sum2 = 0;
// for (let k = 0; k < 6; k++) {
//   sum2++;
//   console.log(sum1.repeat(k));
//   console.log(sum2);
// }

// let n = 5; // height of pattern
// let string = "";
// // External loop
// for (let i = 1; i <= n; i++) {
//   // Internal loop
//   for (let j = 1; j <= i; j++) {
//     string = string + i;
//   }
//   string = string + "\n";
// }

// console.log(string);

// ////////////////////////////////////////////////////////////

// let a = [1, 2, 3, 2, 2, 30];
// let b = new Set(a);
// console.log(b);

// a.forEach((val, key) => {
//   console.log(key);
// });

// const arr = new Map([
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ]);

// arr.forEach((val, key) => {
//   console.log(` ${val} ${key}`);
// });

// const arr = new Set([1, 3, 5]);

// arr.forEach((val, key) => {
//   console.log(`${key}: ${val}`);
// });

// let a = [1, 2, 3, 2, 2, 30];

// let b = 10;

// let x = a.map(function (val, key) {
//   return val * b;
// });
// console.log(x);

// let xy = a.map((val, key) => {
//   return val * b;
// });
// console.log(xy);

// let a = [1, 2, 3, 2, 7, 2, 30];
// let x = a.filter(function (val, key) {
//   return val > 2;
// });
// console.log(x);

// let a = [1, 2, 3, 2, 7, 2, 30];
// let x = a.reduce(function (val, key) {
//   if (key < val) {
//     return val;
//   } else {
//     return key;
//   }
// }, a[0]);
// console.log(x);
