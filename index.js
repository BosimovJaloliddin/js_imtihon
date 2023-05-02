// 1-masala
// {
//   let str = "+998 33 576 2020";
//   //   Javob
//   let res = {
//     country: "+998",
//     region: "33",
//     city: "576",
//     number: "2020",
//   };
// }

let res = {
  country: "",
  region: "",
  city: "",
  number: "",
};
let str = "+998 33 576 2020";
const razNum = () => {
  Array.from(str, (v, i) => {
    if (i < 5) {
      res.country += v;
    } else if (i < 8) {
      res.region += v;
    } else if (i < 11) {
      res.city += v;
    } else {
      res.number += v;
    }
  });
};

razNum(str);
// console.log(res);
// ===============================
// 3-savol o'rta arifmetikni toping

let coordinate = {
  c1: [3, 2, 4], //  [9+4+16]= (29) = 5.1
  c2: [1, 2, 2], // [1,4,4] = (9) = 3
  c3: [7, 4, 1], // [49,16,1] = (66) = 8.4
  c4: [2, 2, 2], // [4,4,4] = (12) = 3.3
};
//   res (5.1 + 3 + 8.4 + 3.3)/4

const mean = (coordinate) => {
  let res = 0;
  let counter = 0;
  for (let v in coordinate) {
    ++counter;
    res += Math.sqrt(
      coordinate[v].reduce((sum, curr) => {
        return (sum += curr ** 2);
      }, 0)
    );
  }
  return res / counter;
};
// console.log(mean(coordinate));
//===========================================

// task
// textni alphabet tarzda joylashtirish kerak.
// sort filter dan foydalanilmasin.
// bosh joylar chiqarib yuborilsin

const sortAlf = () => {
  let title = "webbrain academy";

  let res = "";
  for (let n in title) {
    for (let i = 97; i <= 122; i++) {
      if (title[n].charCodeAt() == i) {
        res += title[n];
      }
    }
  }
};
console.log("a".charCodeAt());

sortAlf();
// console.log();
// javob;
// title = "aaabbcdeeimnrwy";

// =======================================
// 2-savol k-mean value
// task
// 1. s va coordinatalar orasidagi mafosalarni hisoblang.
// 2. s yigini va coordinatalar yigindisidan hosil bo'lgan s va coordinate yigindilarini hisoblang.

let s = [2, 3, 5]; // (4 + 9 + 25) // 38
let coordinate2 = {
  c1: [3, 2, 4], // [1,1,1] = (1+1+1) = 3
  c2: [1, 2, 2], // [1,1,2] = (1+1+4) = 6
  c3: [7, 4, 1], // [5,2,3] = (25+4+9) = 38
  c4: [2, 2, 2], // [0,1,3] = (0, 1, 9) = 10
};

function* calclulate(coordinate2, s) {
  let sum = 0;
  let sumS = 0;
  s.forEach((e) => {
    sumS += e ** 2;
  });
  for (let i in coordinate2) {
    sum += eval(
      coordinate2[i]
        .map((v, i) => {
          return (v - s[i]) ** 2;
        })
        .join("+")
    );
  }
  yield sum - sumS;
  yield sum + sumS;
}
let r = calclulate(coordinate2, s);
for (let vl of r) {
  console.log(vl);
}
