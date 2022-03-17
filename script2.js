"usa string";

// arr = [1, 2, 3, 4, 5];
// let setsArr = new Set([1, 1, 2, 2, 3, 3, 4, 5, 8, 2]);

// let name = "samandar";
// let name1;
// console.log(setsArr);
// console.log(setsArr.size);
// console.log(setsArr.has(1));
// console.log(setsArr.add("A"));

// let del = setsArr.delete(1);
// console.log(setsArr);

// let cle = setsArr.clear();
// console.log(cle);

// let ofis = [
//   "fronted",
//   "mobile",
//   "backend",
//   "fronted",
//   "mobile",
//   "backend",
//   "fronted",
//   "mobile",
//   "backend",
//   "fronted",
//   "mobile",
//   "backend",
//   "fronted",
//   "mobile",
//   "backend",
//   "bugalter",
// ];

// let son = new Set(ofis);
// console.log(son);

// for (let el of ofis.entries()) {
//   console.log(`${el[0] + 1} - ${el[1]}`);
// }

// ///////////////////////
// const me = new Map();

// me.set("name", "Umid");
// me.set(1, 20);

// me.set(true, "yutdim");

// console.log(me.get(true));

// const obj = {
//   son: "ism",
//   age: 21,
// };

// const rest = new Map([
//   [1, 2],
//   [2, 30],
//   [0, 6],
//   [5, 9],
//   [7, 9],
//   ["Qodirqulov", "Samandar"],
//   ["name", "Umid"],
// ]);

// console.log(rest.get(7));
// if (rest.has("name")) {
//   console.log(rest.get("name"));
// }

// let arr = [1, 2];
// rest.set(arr, "cho'tki");
// console.log(rest.get(arr));

// rest.set("ali", "vali");
// rest.set("ana", "mana");

// console.log(rest);

// const ofis = new Map([
//   ["name", "MagicSoft"],
//   ["open", 9],
//   ["yopilish vaqti", 18],
//   [true, "ofis ochiq"],
//   [false, "ofish yopiq"],
// ]);

// const vaqt = Number(prompt("Vaqtni kiriting"));

// ofis.get("open") < vaqt && ofis.get("yopilish vaqti") > vaqt
//   ? console.log(ofis.get(true))
//   : console.log(ofis.get(false));

// const ofis = new Map([
//   ["dushanba", "bugun ish kuni soat 9:00dan 18:00 gacha ochiq bo'lamiz"],
//   ["sechanba", "bugun ish kuni soat 9:00dan 18:00 gacha ochiq bo'lamiz"],
//   ["chorshanba", "bugun ish kuni soat 9:00dan 18:00 gacha ochiq bo'lamiz"],
//   ["payshanba", "bugun ish kuni soat 9:00dan 18:00 gacha ochiq bo'lamiz"],
//   ["juma", "bugun ish kuni soat 9:00dan 18:00 gacha ochiq bo'lamiz"],
//   ["shanba", "bugun ish kuni emas"],
//   ["yakshanba", "bugun ish kuni emas"],
// ]);

// let ish = prompt("hafta kunini kiriting");

// console.log(ofis.get(ish));

// let kirit = prompt("hafta kunini kiriting").toLowerCase()
// arr =["dushanba", "seshanba", "chorshanba", "payshanba", "juma"]
// arr1 = ["shanba", "yakshanba"]

// if(kirit)

// let gitArr = new Map([
//   ["savol", "O'zbekistonning poytaxti qaysi:"],
//   [1, "Toshkent"],
//   [2, "Bangladesh"],
//   [3, "New York"],
//   ["javob", 1],
//   [true, "to'g'ri javob topdingiz"],
//   [false, "noto'g'ri javob kiritdingiz"],
// ]);

// console.log(gitArr.get("savol"));
// for (let [key, val] of gitArr) {
//   if (typeof key == "number") {
//     console.log(`${key} -javob ${val}`);
//   }
// }

// let javob = Number(prompt("javobni kiriting"));

// if (javob == 1) {
//   console.log(gitArr.get(true));
// } else {
//   console.log(gitArr.get(false));
// }

// javob == gitArr.get("javob")
//   ? console.log(gitArr.get(true))
//   : console.log(gitArr.get(false));

// const baza = new Map([
//   ["savol", "Mukammal xotira romanini kim yozgan"],
//   [1, "Davron Turdiyev"],
//   [2, "Shohruh-Mirzo Rahmonov"],
//   [3, "Jasurbek"],
//   ["javob", 2],
//   [true, "siz to'g'ri javob kiritdingiz"],
//   [false, "siz xato javob kiritdingiz"],
// ]);

// console.log(baza.get("savol"));
// for (let [key, val] of baza) {
//   if (typeof key === "number") {
//     console.log(`${key} - javob ${val}`);
//   }
// }

// let javob = Number(prompt("javobni kiriting"));

// javob == baza.get("javob")
//   ? console.log(baza.get(true))
//   : console.log(baza.get(false));

// let zakovat = new Map([
//   [
//     "matn",
//     " Ilgarilari toʻy va marakalarga qaysidir mehmonni taklif qilish esdan chiqib qolsa, oʻsha mehmondan uzr soʻrab uyiga tugun berib yuborishar ekan. Tugunga non, shirinliklar va albatta ozgina boʻlsada mol goʻshtidan solib qoʻyishar ekan.",
//   ],
//   [
//     "savol",
//     "Kelolmagan mehmon xafa boʻlmasligi uchun molning qaysi qismidan ozgina kesib joʻnatishgan?",
//   ],
//   [1, "jigarini "],
//   [2, "opkasini"],
//   [3, "yuragini"],
//   ["javob", 2],
//   [true, "siz to'g'ri javob berdingiz"],
//   [false, "siz xato javob berdingiz"],
// ]);

// console.log(zakovat.get("matn"));

// for (let [key, val] of zakovat) {
//   if (typeof key === "number") {
//     console.log(`${key} - variant ${val}`);
//   }
// }

// let javob = Number(prompt("javoblarni kiriting"));
// javob === zakovat.get("javob")
//   ? console.log(zakovat.get(true))
//   : console.log(zakovat.get(false));

// let savol = {
//   name: "Samandar",
//   age: 21,
//   surname: "Qodirqulov",
// };

// console.log(savol);

// let savolMap = new Map(Object.entries(savol));
// console.log(savolMap);

// let a = [1, 2, 3, 4];
// let aq = [];
// let b = [4, 5, 6];
// let bq = [];

// for (let i = a.length - 1; i >= 0; i--) {
//   aq.push(a[i]);
// }
// console.log(aq);

// for (let i = b.length - 1; i >= 0; i--) {
//   bq.push(b[i]);
// }
// // console.log(bq);

// let aqN = Number(aq.join(""));
// let bqN = Number(bq.join(""));

// let qosh = String(aqN + bqN);
// // console.log(qosh);

// let str = `${qosh}`;

// let arr = str.split("");
// // console.log(arr);

// let fin = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   fin.push(arr[i]);
// }

// console.log(fin);

// let strA = fin.join(",");
// console.log(`[${strA}]`);

// let c = Number(a.join(""));
// let d = Number(b.join(""));
// let cd = c + d;
// console.log(cd);

//

// let arr = str.split("");
// console.log(arr);

// let arrt = arr.reverse();
// console.log(arrt);

// let strA = arr3.join(",");
// console.log(`[${strA}]`);

// //////////////////////////////////////////////
// 19.dars             ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// let matn = "salom ishlar qalay";

// let matn1 = matn.split(" ");
// console.log(matn1);

// for (let i = 0; i < matn1.length; i++) {
//   let arr = matn[0].slice(0, 1) + matn1[i][1].toUpperCase() + matn1[i].slice(2);

//   console.log(arr);
// }

// let nameStr = "1234 5678 9456 1231";
// let str = nameStr.slice(-4);

// console.log(str.padStart(19, "*"));

// let str = "salom : ";
// console.log(str.repeat(10));

// kkkkkkkkkkkkkkkkkkkkkkkk

// let arr = [
//   { name: "S10", price: 100, color: "qora" },
//   { name: "S15", price: 200, color: "qora" },
//   { name: "S21", price: 300, color: "qora" },
//   { name: "S22", price: 400, color: "qora" },
// ];

// let market = function (cat, price) {
//   switch (cat) {
//     case "Samsung":
//       for (let i = 0; i < arr.length; i++) {
//         if (arr[i].price <= price) {
//           console.log(
//             `Siz ${arr[i].name} ni ${arr[i].price} $ ga ${arr[i].color} sini olishingiz mumkin`
//           );
//         }
//       }
//   }
// };
// console.log(market, 300);

// ////////////////////////////////

// let me = {
//   name: "Umid",
//   job: "front end",
// };

// let age = 30;

// let myFunc = function (age, obj) {
//   age = 12;
//   obj.name = "Sardor";
//   console.log(age, obj);
// };

// myFunc(age, me);

// console.log(age);
// console.log(me);

// primitivlarga tasir qila olmaydi shuning uchun ko'p foydalanishimiz kk

// let me = {
//   name: "Samandar",
//   job: "front end",
//   id: 1221,
// };

// let age = 30;

// let myFunc = function (kutub, obj) {
//   if (obj.id === 1221) {
//     console.log(`Kutubxonamizga hush kelibsiz ${obj.name},${kutub}ga `);
//   } else console.log(`Qaytadan urinib korin`);
// };

// myFunc(age, me);

// let my = {
//   nameN: "samandar",
//   age: 21,
//   id: 2001,
// };

// let age = 50;

// const myFunc = function (age, obj) {
//   obj.nameN = "azizbek";
//   obj.age = 30;
//   arr = "hello world";
//   if(id == 2001) {
//     console.log()
//   }
// };
// myFunc(age, my);
// console.log(myFunc);
// console.log(my);

// llllllllllllll

// let shaxsiy = {
//   nameN: "Samandar",
//   nomer: 939971944,
//   yil: 2001,
//   id: 1944,
// };

// let shox = function (obj) {
//   if (obj.id === 1944) {
//     console.log("salom");
//   }
// };

// shox(shaxsiy);

// let arr = "salom ishlar qalay sog'liqlar yaxshimi";
// console.log(arr);

// let str = arr.split(" ");
// console.log(str);

// for (let i = 0; i < str.length; i++) {
//   let matn = str[0].slice(0,2)+ str[i][0].toUpperCase() + str[i].slice(1);

//   console.log(matn);
// }

// let a = [1, 2, 3];
// let b = 0;

// for (let i = 0; i < a.length; i++) {
//   b = b + 1;
//   console.log(b);
// }

// function myFunction(a) {
//   return a.filter((el) => el < 0).length;
// }

// let arr = ["salom", "qalaysiz"];
// let a = 0;
// let b = 0;
// for (let i = 0; i < arr.length; i++) {
//   a = a + 1;
//   for (let j = 0; j < arr[i].length; j++) {
//     b = b + 1;
//   }
// }
// console.log(b);
// console.log(a);

// let arr = [2, 2, 3];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === arr[i]) {
//     true;
//     console.log(true);
//   } else {
//     false;
//     console.log(false);
//   }
// }
// function myFunction(v, w, x, y, z) {

// }
// let args = [0, 1];
// myFunction(-1, ...args, 2, ...[3]);

// let a = (2, 10);
// let b = 0;

// for (let i = 0; i < a.length; i++) {
//   b = b + a[i];
// }
// console.log(b);

// dddddddddddddddd
// 3 - dars
// ggggggggggggggggglllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

// function add(a) {
//   return function (d) {
//     return a + d;
//   };
// }

// let arr = add(10);
// console.log(arr(10));

// function add(a, b) {
//   return a + b;
// }

// first-class function

// function calc(c, math) {
//   return c + math;
// }

// calc(8, add(7, 2));

// console.log(calc(8, add(7, 2)));

// llllllllllllllllllllllllllllllllllllllllllllllllllll

// function ali(f, j) {
//   return f + j;
// }

// function vali(g, h) {
//   return g + h;
// }

// console.log(vali(4, ali(5, 6)));

// llllllllllllllllllllllllllllllllllllllllllllllllllll

// function add(a) {
//   return function arr(d) {
//     return a + d;
//   };
// }

// let r = add(4);
// console.log(r(5));

// pppppppppppppppppppppppppppppppppppppppppppppppppppp

// function count() {
//   let counter = 0;
//   return function () {
//     console.log(counter++);
//     return;
//   };
// }
// let a = count();
// a();
// a();
// a();
// a();
// a();
// a();

// pppppppppppppppppppppppppppppppppppppppppppppppppppppppp

// let arr = "gapni kiriting";

// function arrK(suz) {
//   console.log(suz.toUpperCase(arr));
// }

// function arrKi(suz) {
//   console.log(suz.toLowerCase(arr));
// }

// function arrB(suz) {
//   let str = arr.split(" ");
//   for (let i = 0; i < str.length; i++) {
//     str[i] = str[i][0].toUpperCase() + str[i].slice(1);
//     console.log(str[i]);
//   }
// }
// arrB(arr);

// let calc = function (obj, name) {
//   name(obj);
// };

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

// function salom(ism) {
//   return function (nomi) {
//     console.log(`${ism} ${nomi}`);
//   };
// }

// let a = salom("Umid");
// console.log(a(1));

// function sal(ism1) {
//   return function (ism2) {
//     return function (ism3) {
//       console.log(`${ism1} ${ism2} ${ism3}`);
//     };
//   };
// }

// let b = sal("Samandar");
// let c = b("Mamur");
// console.log(c("Jamshid"));

// sal(1)(2)(3);

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

// let magicPhone = {
//   name: "Magic Phone",
//   address: "Tashkent",
//   seller: "Jonibek",
//   bookings: [],
//   book(price, name) {
//     console.log(
//       `Siz ${name} telefonini ${price} $ ga sotib oldingiz! ${this.address} magazinidan oldingiz`
//     );
//     this.bookings.push(`Nomi: ${name}, Narxi: ${price}`);
//   },
// };

// magicPhone.book(200, "IphoneX");
// magicPhone.book(60, "Nokia");
// console.log(magicPhone.bookings);

// ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

// let books = magicPhone.book;

// let magicBux = {
//   name: "Magic Bukh",
//   address: "Bukhara",
//   bookings: [],
// };

// // call
// books.call(magicBux, 400, "iphonex");
// console.log(magicBux.bookings);

// // Apply
// let arr = [700, "Nokia"];
// books.apply(magicBux, arr);
// console.log(magicBux.bookings);

// dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

// let TDTU = {
//   name: "TDTU",
//   address: "Olmazor tum",
//   quti: [],
//   davomat(davK, davG) {
//     console.log(
//       `bugin darsga kantrakda o'qiydiganlarni ${davK} tasi grandda o'qiydiganlarni ${davG} tasi kelmadi`
//     );
//     console.log(this.quti.push(`kantrakt: ${davK}ta`, `grand: ${davG}ta`));
//   },
// };

// TDTU.davomat(30, 50);
// console.log(TDTU.quti);

// let arr = TDTU.davomat;

// let TATU = {
//   name: "TATU",
//   address: "Yunusobod tum",
//   quti: [],
// };

// // Call
// arr.call(TATU, 40, 100);
// console.log(TATU.quti);

// // Apply
// let str = [50, 400];
// arr.apply(TATU, str);
// console.log(TATU.quti);

// GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG

// let me = {
//   name: "Messi",
//   order(medal) {
//     console.log(`sizning telefoningiz ${medal}`);
//   },
// };

// let you = {
//   name: "Ronaldo",
// };

// let newOrder = me.order;

// let youOrder = newOrder.bind(you);
// youOrder("iphobe");
// youOrder("tel");

// tttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt

// let magicPhone = {
//   name: "Magic Phone",
//   address: "Tashkent",
//   seller: "Jonibek",
//   bookings: [],
//   book(price, name) {
//     console.log(
//       `Siz ${name} telefonini ${price} $ ga sotib oldingiz! ${this.address} magazinidan oldingiz`
//     );
//     this.bookings.push(`Nomi: ${name}, Narxi: ${price}`);
//   },
// };

// magicPhone.book(200, "IphoneX");
// magicPhone.book(60, "Nokia");
// console.log(magicPhone.bookings);

// magicPhone.phone = 10;
// magicPhone.buy = function () {
//   console.log(++this.phone);
// };
// console.log(magicPhone);

// let func = magicPhone.buy;
// document.querySelector(".btn").addEventListener("click", func.bind(magicPhone));

// magicPhone.phone = 10;
// magicPhone.buy = function () {
//   console.log(--this.phone);
// };
// console.log(magicPhone);

// let funcJ = magicPhone.buy;
// document
//   .querySelector(".btn-1")
//   .addEventListener("click", funcJ.bind(magicPhone));

// lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll

// const son = {
//   name: ".mikado",
//   address: "toshkent.chorsu",
//   quti: [],
//   func(telefon, soat, kompyuter) {
//     console.log(
//       `bizga yangi ${telefon} markali telefon, ${soat} yapyangi soatlarimiz hamda supper arzon va tez ${kompyuter} kompyuterlarimiz keldi`
//     );
//     this.quti.push(
//       `telefon: ${telefon}`,
//       `soat: ${soat}`,
//       `kompyuter: ${kompyuter}`
//     );
//   },
// };
// son.func("iphoneX", "apple watch", "lenovo 32talik");
// console.log(son.quti);

// let smartlife = {
//   name: "SmartLife",
//   address: "toshkent.malika",
//   quti: [],
// };

// // Call
// let arr = son.func;
// arr.call(smartlife, "nokia", "oddiy", "macbook");
// console.log(smartlife.quti);

// // Apply
// let str = ["Galaxy s21", "mi watch", "windows"];
// arr.apply(smartlife, str);
// console.log(smartlife.quti);

// **************************************************

// let me = {
//   name: "shaxsiy",
//   yangi(model) {
//     console.log(`siz yap yangi ${model} telefonini yutib oldingiz`);
//   },
// };

// let it = {
//   name: "it",
// };

// let newOrder = me.yangi;

// let newYangi = newOrder.bind(it);
// newYangi("qalay");
// newYangi("bo'lyaptimi");
// newYangi("haa malades");

// 111111111111111111111111111111111111111111111111111111

// me.phone = 10;
// me.buy = function () {
//   console.log(this.phone++);
// };
// console.log(me);

// let arrD = me.buy;

// document.querySelector(".btn").addEventListener("click", arrD.bind(me));

// 22222222222222222222222222222222222222222222222222222

// function funcL(salom) {
//   return function (dramma) {
//     return function (adabiy) {
//       console.log(`${salom}, ${dramma}, ${adabiy}`);
//     };
//   };
// }

// let a = funcL(1);
// let b = a(2);
// let c = b(3);

// funcL(4)(5)(6);

// 333333333333333333333333333333333333333333333333333333

// let a = {
//   name: "hello",
//   tarix(temuriylar) {
//     console.log(
//       `temuriylar tarihidagi buyuk podshohlardan biri bu ${temuriylar}`
//     );
//   },
// };

// a.shox = 23;
// a.buy = function () {
//   console.log(this.shox++);
// };
// console.log(a);

// document.querySelector(".btn").addEventListener("click", a.buy.bind(a));

// 5555555555555555555555555555555555555555555555555555555555555555555555555

// let a = {
//   name: "Abadiylar",
//   obj(b) {
//     console.log(`men ko'rgan kinolar nomi "${b}"`);
//   },
// };

// let c = {
//   name: "qasoskorlar",
// };

// let arr = a.obj;

// let newarr = arr.bind(c);
// newarr(5);
// newarr("qishki askar");
// newarr("o'rgimchak odam");
// newarr("doktor strenj");

// 66666666666666666666666666666666666666666666666666666666666666666666666

// let real = {
//   name: "Real Madrid",
//   davlat: "ispaniya",
//   arr: [],
//   func(son) {
//     console.log(`futbolchilar soni ${son}`);
//     this.arr.push(`o'yinchirarini soni ${son}`);
//   },
// };

// let barsa = {
//   name: "Barselona",
//   davlat: "kataloniya",
//   arr: [],
// };

// real.func(20);

// let str = real.func;
// str.call(barsa, 150);
// console.log(barsa.arr);

// let strN = [250];
// str.apply(barsa, strN);
// console.log(barsa.arr);

// 777777777777777777777777777777777777777777777777777777777777777777777777

// function ali(a, b) {
//   return a * b;
// }

// function vali(c, d) {
//   return c + d;
// }

// console.log(vali(8, ali(4, 5)));

// 8888888888888888888888888888888888888888888888888888888888888888888888888

// 10.03.2022 14:41 payshanba

// const func = function () {
//   let sana = 0;
//   return function () {
//     sana++;
//     console.log(sana);
//   };
// };

// let arr = func();
// arr();
// arr();
// arr();

// let sum = 0;
// let t = 0;
// for (let i = 0; i < 11; i++) {
//   if (i < 5) {
//     t = t + i;
//     console.log(t);
//   }
// sum = sum + i;
// console.log(sum);
// }

// 111111111111111111111111111111111111111111111111111111111111111111111111111

// let counter = 0;
// function add() {
//   counter += 1;
//   console.log(counter);
// }

// add();
// add();
// add();
// add();
// add();
// add();
// add();
// add();
// add();

// 22222222222222222222222222222222222222222222222222222222222222222222222222222
// let plus;
// function add() {
//   let counter = 0;
//   plus = function () {
//     counter += 1;
//     console.log(counter);
//   };
// }
// add();

// plus();
// plus();
// plus();
// plus();

// add();

// plus();
// plus();

// 333333333333333333333333333333333333333333333333333333

// let arr = ["u", "m", "i", "d"];
// let str = arr.slice(0, -2);
// console.log(str);

// let str1 = arr.splice(-3);
// console.log(arr);

// let a = [1, 2, 3, 4, 5, 6];
// let c = a.concat(arr);
// let d = c.join("-");
// console.log(d);
// console.log(c);
// console.log(a.reverse());

// let arr3 = arr[arr.length - 1];
// console.log(arr3);
// let arr10 = [1, 2, 3, 4, 5, 6, [2, 5, 10]];
// let arr31 = arr10[arr10.length - 1].at(-1);
// console.log(arr31);

// 555555555555555555555555555555555555555555555555555555555555555555555555555555

// arr.forEach((element) => {
//   console.log(element);
// });

// arr.forEach(function (a, b, c) {
//   console.log(a, "-", b);
// });

// ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp

// let UmidClick = {
//   name: "Umid Rustamov",
//   balans: 1000,
//   transaction: [],
//   pin: 1111,
// };

// let MamurClick = {
//   name: "Mamur",
//   balans: 2000,
//   transaction: [],
//   pin: 2222,
// };

// let arr = [UmidClick, MamurClick];

// let utkazma = function (arr) {
//   let pinCode = Number(prompt("Parolni kirit:"));
//   for (let el of arr) {
//     if (pinCode === el.pin) {
//       console.log(`sizning balansingiz ${el.balans}`);
//       console.log(`accountingiz ${el.name}`);
//       break;
//       // let pinCode = Number(prompt("Qancha pul jo'natmoqchisiz:"));
//     } else {
//       console.log("parol xato");
//     }
//   }
// };
// utkazma(arr);

// 55555555555555555555555555555555555555555555555555555

// let valyuta = new Map([
//   ["USD", "Amerika dollari"],
//   ["UZS", "Uzbekistan so'mi"],
//   ["RUB", "Rossiya rubli"],
// ]);

// valyuta.forEach(function (value, key) {
//   console.log(`sizning valyutangiz ${value} - ${key}`);
// });

// let val = [1, -2, 3, -5, -6];
// val.forEach((value, key) => {
//   value > 0
//     ? console.log(`kirgan ${value}`)
//     : console.log(`chiqqan pullar: ${value}`);
// });

// let mySet = new Set(["euro", "usd"]);
// mySet.forEach(function (val, key) {
//   console.log(`${val}: ${key} `);
// });

// let arr = [1, 2, 3, 4, 5, 6];

// let x = arr.map(function (val, key) {
//   return val * 10;
// });
// console.log(x);

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let dollor = [100, 500, 600, 120];

// let dollorToUz = 10900;

// let y = dollor.map(function (val) {
//   return dollorToUz * val;
// });
// console.log(dollor);
// console.log(y);

// 22222222222222222222222222222222222222

// let dollor = [100, 500, 600, 120];

// let dollorToUz = 10900;

// let y = dollor.filter(function (val) {
//   return val > 200;
// });
// console.log(dollor);
// console.log(y);

// let a = y.map(function (val) {
//   return dollorToUz * val;
// });
// console.log(a);

// 44444444444444444444444444444444444444

// let dollor = [100, 500, 600, 120];

// let dollorToUz = 10900;

// let y = dollor.filter(function (val) {
//   return val > 200;
// });
// console.log(dollor);
// console.log(y);

// let a = y.map(function (val) {
//   return dollorToUz * val;
// });
// console.log(a);
