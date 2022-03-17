"use stric";

let btnShifrlash = document.querySelector(".btn");
let btnDeshifrlash = document.querySelector(".btn-1");
let btnLotin = document.querySelector(".btn-lotin");

let btnClear = document.querySelector(".btn-clear");
let btnAnim = document.querySelector(".btn-anim");
let btnKril = document.querySelector(".btn-kril");

let inputOne = document.querySelector(".input_one");
let inputTwo = document.querySelector(".input_two");
let inputThree = document.querySelector(".input_three");

btnShifrlash.addEventListener("click", function (e) {
  let shifrlangan = inputOne.value;
  let shifrArr = shifrlangan.split("");

  // arraylarni har birini nomerini topish
  let Kodlangan = [];
  for (let i = 0; i < shifrArr.length; i++) {
    let arr1 = shifrArr[i].charCodeAt();
    Kodlangan.push(arr1);
    console.log(arr1);
  }
  console.log(Kodlangan);
  let sanoqTizimi = [];
  for (let k = 0; k < Kodlangan.length; k++) {
    let ali = Kodlangan[k].toString(2);
    sanoqTizimi.push(ali);
  }
  console.log(sanoqTizimi.join(""));
  inputTwo.value = sanoqTizimi;
});

btnDeshifrlash.addEventListener("click", function (a) {
  let sanoqTizimiInput = inputTwo.value;
  let Deshifr = sanoqTizimiInput.split("");

  let sanoqSoz = inputThree.value;

  let sanoqKod = [];
  let sanoqOlti = "";
  for (let j = 0; j < Deshifr.length; j++) {
    for (let q = j; q < 6; q++) {
      let sanoqSon = sanoqOlti + Deshifr[j];
      sanoqKod.push(sanoqSon);
    }
  }
  console.log(sanoqKod);

  // console.log(Deshifr);

  // sanoq tizimidan charcodeAt ga o'tkazadi
  // for (let k=0; k<)
});

let lugat = new Map([
  ["a", "а"],
  ["b", "б"],
  ["d", "д"],
  ["e", "э"],
  ["f", "ф"],
  ["g", "г"],
  ["h", "х"],
  ["i", "и"],
  ["j", "ж"],
  ["k", "к"],
  ["l", "л"],
  ["m", "м"],
  ["n", "Н"],
  ["o", "о"],
  ["p", "п"],
  ["q", "к"],
  ["r", "р"],
  ["s", "с"],
  ["t", "т"],
  ["u", "у"],
  ["v", "в"],
  ["x", "х"],
  ["y", "е"],
  ["z", "з"],
  ["o',", "у"],
  ["sh", "ш"],
  ["ch", "ч"],

  //
  ["A", "а"],
  ["B", "б"],
  ["D", "д"],
  ["E", "э"],
  ["F", "ф"],
  ["G", "г"],
  ["H", "х"],
  ["I", "и"],
  ["J", "ж"],
  ["K", "к"],
  ["L", "л"],
  ["M", "м"],
  ["N", "Н"],
  ["O", "о"],
  ["P", "п"],
  ["Q", "к"],
  ["R", "р"],
  ["S", "с"],
  ["T", "т"],
  ["U", "у"],
  ["V", "в"],
  ["X", "х"],
  ["Y", "е"],
  ["Z", "з"],
  ["O',", "у"],
  ["SH", "ш"],
  ["CH", "ч"],
  //

  ["а", "a"],
  ["б", "b"],
  ["д", "d"],
  ["э", "e"],
  ["ф", "f"],
  ["г", "g"],
  ["х", "h"],
  ["и", "i"],
  ["ж", "j"],
  ["к", "k"],
  ["л", "l"],
  ["м", "m"],
  ["Н", "n"],
  ["о", "o"],
  ["п", "p"],
  ["к", "q"],
  ["р", "r"],
  ["с", "s"],
  ["т", "t"],
  ["у", "u"],
  ["в", "v"],
  ["х", "x"],
  ["е", "y"],
  ["з", "z"],
  ["у", "o'"],
  ["ш", "sh"],
  ["ч", "ch"],
]);

btnLotin.addEventListener("click", function (c) {
  let shifrlangan = inputOne.value;
  let shifrArr = shifrlangan.split("");

  console.log(shifrArr);
  let arr = [];
  for (let w = 0; w < shifrArr.length; w++) {
    if (lugat.has(shifrArr[w])) {
      arr.push(lugat.get(shifrArr[w]));
    } else {
      arr.push(shifrArr[w]);
    }
  }

  let kril = arr.join("");
  console.log(kril);
  inputThree.value = kril;
  inputOne.value = kril;
});

// let inter = setInterval(function (l) {
//   inputOne.value = inputThree.value;
// }, 10000);

btnKril.addEventListener("click", function (e) {
  let Kirilcha = inputThree.value;
  let KirilLotin = Kirilcha.split("");

  let kir = [];
  for (let e = 0; e < KirilLotin.length; e++) {
    if (lugat.has(KirilLotin[e])) {
      kir.push(lugat.get(KirilLotin[e]));
    } else {
      kir.push(KirilLotin[e]);
    }
  }
  let lotin = kir.join("");
  console.log(lotin);
  inputOne.value = lotin;
});

btnClear.addEventListener("click", function (k) {
  inputOne.value = "";
  inputTwo.value = "";
  inputThree.value = "";
});
