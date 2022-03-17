"use stric";

let btnShifrlash = document.querySelector(".btn");
let btnDeshifrlash = document.querySelector(".btn-1");
let btnLotin = document.querySelector(".btn-2");

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
});
