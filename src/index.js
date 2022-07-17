const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  // write your solution here
  let arr = expr.split(""),
    newArr = [],
    morseArr = [],
    result = [];

  for (let i = 0; i < expr.length; i++) {
    newArr.push(arr.slice(0, 10));
    arr = arr.splice(10, arr.length);
  }

  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      if (newArr[i][j] === "0") {
        newArr[i].shift();
        j--;
      }
      if (newArr[i][j] === "1" && newArr[i][j + 1] === "0") {
        morseArr.push(".");
        newArr[i].shift();
        newArr[i].shift();
        j -= 2;
      }
      if (newArr[i][j] === "1" && newArr[i][j + 1] === "1") {
        morseArr.push("-");
        newArr[i].shift();
        newArr[i].shift();
        j -= 2;
      }
      if (newArr[i][j] === "*") {
        morseArr.push(" ");
        newArr[i] = [];
      }
    }
    morseArr.push(";");
  }

  morseArr = morseArr.join("").split(";");
  morseArr.pop();

  morseArr.forEach((el) => {
    if (el === " ") {
      result.push(" ");
    }
    for (let key in MORSE_TABLE) {
      if (el === key) {
        result.push(MORSE_TABLE[key]);
      }
    }
  });

  return result.join("");
}

module.exports = {
  decode,
};
