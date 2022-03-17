"use strict";

// const arr = [2, 3, 4];

// const [x, y, z] = arr;
// console.log(x, y, z);

// const Magic = {
//   name: ["MagicCafe"],
//   taom: ["osh", "sho'rva", "chuchvara", "honim"],
//   shirinlik: ["tort", "cofe"],
//   ichimlik: ["cola", "choy"],
//   location: ["toshkent"],
//   ochishVaqti: {
//     dushanba: { open: "9:00", close: "22:00" },
//     seshanba: { open: "9:00", close: "22:00" },
//   },
//   order: function (taom, ichimlik) {
//     console.log(
//       `siz ${this.taom[taom]} buyurtma qildingiz va ${this.ichimlik[ichimlik]} oldingiz`
//     );
//   },
// };
// Magic.order(2, 1);

// const birinchiTaom = Magic.taom[0];
// const ikkinchiTaom = Magic.taom[1];
// const [birinchiTaom, ikkinchiTaom] = Magic.taom;4

// a = 5;
// b = 4;

// let [birinchi, , ikkinchi] = Magic.taom;
// (birinchi,ikkinchi) = (ikkinchi,birinchi)
// console.log(birinchi, ikkinchi);

// const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
// const [a, b, c, [d, i, f, [g, h, e]]] = arr;
// console.log(arr);

// //////////////////////////////////////////////////////

// const a = [1, 2, 3];
// const [x, , y] = a;
// console.log(x, y);

// const a = [1, 2, 3, [4, 5, 6]];
// const [x, , , [, b, ,]] = a;
// console.log(x, b);

// let arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "object") {
//     let b = arr.length - 1;
//     console.log(b);
//     break;
//   }
// }

// const [a, b, c] = [1, 2];
// console.log(a, b, c, g);

// /////////////////////////////////////////////////////
// 2 - Destructing Objects
// ////////////////////////////////////////////////////

// const Magic = {
//   name: ["MagicCafe"],
//   taom: ["osh", "sho'rva", "chuchvara", "honim"],
//   shirinlik: ["tort", "cofe"],
//   ichimlik: ["cola", "choy"],
//   locationM: ["toshkent"],
//   ochishVaqti: {
//     dushanba: { open: "9:00", close: "22:00" },
//     seshanba: { open: "9:00", close: "22:00" },
//   },
//   order: function (taom, ichimlik) {
//     console.log(
//       `siz ${this.taom[taom]} buyurtma qildingiz va ${this.ichimlik[ichimlik]} oldingiz`
//     );
//   },
//   buyurtma: function()
// };
// Magic.order(2, 1);

// 6:15

// const {
//   ichimlik,
//   locationM,
//   ochishVaqti: {
//     dushanba: { open: ochilish },
//   },
// } = Magic;
// console.log(ochilish);

// const a = {
//   b: 1,
//   c: 2,
// };

// let z = function (x, y) {
//   return x + y;
// };
// console.log(z);

// let y = function (a) {
//   const { b, c } = a;
//   return b + c;
// };

// console.log(`${y(a)}`);

// const obj ={
//   x:"salom",
//   y: 20,
//   z: 30.
// }

// const{x,y,age}

// const son = [1, 2, 3];
// const Num = [4, 5, ...son];
// console.log(Num);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// 3 - The Spread Operators
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const Magic = {
//   name: ["MagicCafe"],
//   taom: ["osh", "sho'rva", "chuchvara", "honim"],
//   shirinlik: ["tort", "cofe"],
//   ichimlik: ["cola", "choy", "fanta", "ayron"],
//   locationM: ["toshkent"],
//   ochishVaqti: {
//     dushanba: { open: "9:00", close: "22:00" },
//     seshanba: { open: "9:00", close: "22:00" },
//   },
//   order: function (taom, ichimlik) {
//     console.log(
//       `siz ${this.taom[taom]} buyurtma qildingiz va ${this.ichimlik[ichimlik]} oldingiz`
//     );
//   },
//   muzqaymoq: function (first, second, third) {
//     console.log(
//       `Sizning muzqaymog'ingiz ${first}, ${second}, ${third} shulardan iborat`
//     );
//   },
// };

// const muz = [
//   prompt("birinchini kiriting"),
//   prompt("ikkinchini kiriting"),
//   prompt("uchinchini kiriting"),
// ];
// Magic.muzqaymoq(...muz);

// const ich = ["fanta", "piva", "sigaret", "alkahol"];

// let arrich = [...ich, ...Magic.ichimlik];
// console.log(arrich);

// let shir = [...Magic.shirinlik, ...Magic.taom];
// console.log(shir);

// const str = "Uzbekistan";
// console.log(...str);
// const str2 = [...str];
// console.log(str2);

// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// 4 - dars
// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm

// const arr = [1, 2, 3];
// const arr1 = [4, 5, 6];

// const arr2 = [...arr, ...arr1];
// console.log(arr2);

// const arr3 = []

// const Magic = {
//   odam: 1,
//   name: ["MagicCafe"],
//   taom: ["osh", "sho'rva", "chuchvara", "honim"],
//   shirinlik: ["tort", "cofe"],
//   ichimlik: ["cola", "choy", "fanta", "ayron"],
//   locationM: ["toshkent"],
//   ochishVaqti: {
//     dushanba: { open: "9:00", close: "22:00" },

//     seshanba: { open: "9:00", close: "22:00" },
//     chorshanba: { open: "9:00", close: "22:00" },
//     payshanba: { open: "9:00", close: "22:00" },
//     juma: { open: "9:00", close: "22:00" },
//     shanba: { open: "9:00", close: "22:00" },
//     yakshanba: { open: "9:00", close: "22:00" },
//   },
//   order: function (taom, ichimlik) {
//     console.log(
//       `siz ${this.taom[taom]} buyurtma qildingiz va ${this.ichimlik[ichimlik]} oldingiz`
//     );
//   },
// };

// const { ochishVaqti } = Magic
// console.log(ochishVaqti);

// const { yakshanba, ...haftaKunlar } = ochishVaqti;
// console.log(yakshanba);
// console.log(haftaKunlar);
// const muz = [
//   prompt("birinchini kiriting"),
//   prompt("ikkinchini kiriting"),
//   prompt("uchinchini kiriting"),
// ];
// Magic.muzqaymoq(...muz);

// const x = [...Magic.taom, ...Magic.ichimlik];
// console.log(x);
// const [birinchi, ikkinchi, ...Magic] = [...Magic.taom];

// nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

// let sum = 0;
// function add(...raqam) {
//   for (let i = 0; i < raqam.length; i++) {
//     sum = sum + raqam[i];
//   }
//   console.log(sum);
// }
// add(4, 5, 6);

// nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn
// 5 - dars
// nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn

// console.log(Boolean(2 && 1 && "" && null && NaN));
// console.log(Boolean(2 || 1 || "" || null || NaN));

// Magic.odamlar = 1;
// Magic.odamlar && Magic.order(1, 2);
// console.log(Magic.taom || "bunaqa shirinlik yo'q");

// console.log(1 && 2 && true && "salom" && NaN && 0);
// bu yerda uchta tipdan foydalanilgan Number string boolen

// console.log(Magic.odam ?? "Bunday odam mavjud emas");

// llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
// 9 - dars
// llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

// let sum1 = 0;
// let a1 = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < a1.length; i++) {
//   sum1 = sum1 + a1[i];
//   console.log(sum1);
// }
// console.log(sum1);

// for (let element of a) {
//   sum = sum + element;
// }
// console.log(sum);

// const qosh = [...Magic.taom, ...Magic.ichimlik];
// let a = 0;
// for (let element of qosh) {
//   console.log(element);
// }

// const qosh = [...Magic.taom, ...Magic.ichimlik];
// let qosh = ["a", 1, 2, 3, 4, 5, 6];
// for (let el of qosh.entries()) {
//   console.log(`${el[0] + 1} - ${el[1]}`);
// }

// for (let [x, y] of Magic.taom.entries()) {
//   console.log(`${x + 1} - ${y}`);
// }

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
// 10 - dars
// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

// const kino = {
//   dush: { ertalab1: "marvel", kechasi: "turk seriali" },
//   sesh: { ertalab2: "marvel", kechasi: "turk seriali" },
//   chor: { ertalab3: "marvel", kechasi: "turk seriali" },
//   pay: { ertalab4: "marvel", kechasi: "turk seriali" },
// };

// const Magic = {
//   odam: 1,
//   name: ["MagicCafe"],
//   taom: ["osh", "sho'rva", "chuchvara", "honim"],
//   shirinlik: ["tort", "cofe"],
//   ichimlik: ["cola", "choy", "fanta", "ayron"],
//   locationM: ["toshkent"],
//   kino,
//   ochishVaqti: {
//     dushanba: { open: "9:00", close: "22:00" },

//     seshanba: { open: "9:00", close: "22:00" },
//     chorshanba: { open: "9:00", close: "22:00" },
//     payshanba: { open: "9:00", close: "22:00" },
//     juma: { open: "9:00", close: "22:00" },
//     shanba: { open: "9:00", close: "22:00" },
//     yakshanba: { open: "9:00", close: "22:00" },
//   },
//   order: function (taom, ichimlik) {
//     console.log(
//       `siz ${this.taom[taom]} buyurtma qildingiz va ${this.ichimlik[ichimlik]} oldingiz`
//     );
//   },
// };
// console.log(Magic);
// Magic.ochishVaqti.yakshanba?.open1?.ss
//   ? console.log("bunday son bor ekan")
//   : console.log("bunday son yo'q ekan");

// let obj = {
//   name: "Umid",
//   age: 28,
//   job: "Development",
//   city: "toshkent",
//   status: "student",
// };

// const kalitlar = Object.entries(obj);

// console.log(kalitlar);

// for (let el of kalitlar) {
//   console.log(el);
// }

// for (let el of Object.entries(obj)) {
//   console.log(`${el[0]} - ${el[1]}`);
// }
// jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj
// 8 - vazifa
// kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

// let son1 = prompt("birinchi sonni kiriting");
// let son2 = Number(prompt("ikkinchi sonni kiriting"));

// let y = "";
// for (let i = 0; i < son2; i++) {
//   y = y + son1;
// }
// console.log(y);

// 2 - misol

// let a = Number(prompt("birinchi sonni kiriting"));
// let b = Number(prompt("ikkinchi sonni kiting"));
// let arr = [1, 2, 3, 4, 5, 6, "a", "b", "c", "d", 7, 8, 9];
// // let x = (a, b);
// let sum = 0;
// const c = [...a, ...b];
// console.log(c);

// for (let i = 0; i < b; i++) {
//   sum = sum + a;
//   // y = [...sum];
//   // console.log(`${y[0] + 1}-${y[11]}`);
//   console.log(sum);
// }

// for (let el of arr.entries()) {
//   sum = sum + arr;
//   // console.log(el);
//   console.log(`${el[0] + 1} - ${el[1]}`);
// }

// ////////////////////
// 3 - masala
// ///////////////////

// let a = Number(prompt("birinchi sonni kiriting"));
// let b = Number(prompt("ikkinchi sonni kiting"));

// let sum = 0;

// for (let i = 0; i < b; i--) {
//   sum = sum + a;
//   // sum = b[i] - sum;
//   console.log(sum);
// }

// /////////////////////
// 4 - masala
// .....................

// let kg = 20;

// let xkg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// for (let i = 0; i < xkg.length; i++) {
//   sum = sum + xkg;
// }
// console.log(sum);

// for (let el of xkg.entries()) {
//   console.log(
//     `${el[0] + 1} -> ${el[1]} kilogram konfetni narxi  (${el[1] * kg}) `
//   );
// }

// let kg = 20;

// let xkg = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;

// let a = Number(prompt("birinchi sonni kiriting"));
// let b = Number(prompt("ikkinchi sonni kiting"));

// for (let i = 0; i < b; i++) {
//   sum = sum + a;
//   console.log(sum);
// }

// const wow = [a, b];

// for (let el of wow.entries()) {
//   sum = sum + a;
//   console.log(`${el}`);
// }

// for (let el of xkg.entries()) {
//   console.log(
//     `${el[0] + 1} -> ${el[1]} kilogram konfetni narxi  (${el[1] * kg}) `
//   );
// }

// //////////////////
// 7 - masala
// /////////////////

// let a = Number(prompt("birinchi sonni kiriting"));
// let b = Number(prompt("ikkinchi sonni kiting"));
// let sum = 0;
// for (let i = 0; i < b; i++) {

// }
// console.log(sum);

// let answer = [];
// let question = ["what is your name", "how old are you", "can i help you"];

// for (let i = 0; i < question.length; i++) {
//   answer[i] = prompt(question[i]);
// }
// console.log(answer);

// let input = "mamur,samandar,jamshid,begzon";
// let arr = input.split(",");
// let newarr = arr.join(" ");
// console.log(newarr);

// function checker(input) {
//   let alph = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let bor = 0;
//   for (let i = 0; i < 52; i++) {
//     if (input.includes(alph[i])) {
//       bor++;
//     }
//   }
//   return bor;
// }

// let a = Number(prompt("1 - sonni kiriting"));
// let b = Number(prompt("2 - sonni kiriting"));
// let c = Number(prompt("3 - sonni kiriting"));
// let d = Number(prompt("4 - sonni kiriting"));

// let yuza1 = a * b;
// let yuza2 = c * d;

// if (yuza1 < yuza2) {
//   console.log(yuza2);
// } else if (yuza1 > yuza2) {
//   console.log(yuza1);
// }

// let alp = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let a = 0;
// let b = 0;

// const c = "abdDlb x";

// for (let i = 0; i < alp.length; i++) {
//   if (a > 0) {
//     a++;
//     b = 0;
//   }
//   for (let j = 0; j < alp.length; j++) {
//     if (alp[i] === c[j]) {
//       b++;
//     }
//   }
// }
// console.log(b);
// //////////////////////

// let a = "25";
// let b = 0;

// for (let i = 0; i < a.length; i++) {
//   b = b + Number(a[i]);
//   if (a % b == 0) {
//     console.log("YES");
//   } else {
//     console.log("No");
//   }
// }

// let a = 13;
// let b = 0;

// for (let i = 1; i <= a; i++) {
//   if (a % i == 0) {
//     b++;
//   }
// }

// if (b == 2) {
//   console.log("1");
// } else {
//   console.log("0");
// }

// ////////////////////////////

// let a = 2;
// let b = 1;
// let c = 86;

// for (let i = 2; i <= c; i++) {
//   if (c == 1) {
//     console.log(1);
//     i == 86;
//   } else {
//     a += b;
//     if (c == i) {
//       console.log(`i- ${i}`);
//     }
//     i++;

//     b += a;
//     if (c == i) {
//       console.log(b);
//     }
//     console.log(`i- ${i}`);
//   }
// }

// console.log(`i- ${i}`);
// console.log(a);
// i++;

// b = b + a;
// console.log(`i- ${i}`);
// console.log(b);

// let arr = [1, 2, 3, [1, 2, 4], 5];
// let b = 0;
// let c = 0;
// let d = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (typof(arr === Object)) {
//     for (let i = 0; i < arr.length; i++) {
//       c++;
//       console.log(c);
//     }
//   }
// else {
//   b++;
//   console.log(b);
// }
// }

// let ab = "salom";
// let b = a.split("");
// console.log(a.split(""));
// console.log(a.slice(0, 3));
// console.log(a.slice(3));
// console.log(b.join(""));
// let c = b.push("qalay");
// console.log(c);

// let obj = {
//   name: "samandar",
//   age: 21,
// };

// const { ...yiguvchi } = obj;
// console.log(yiguvchi);
