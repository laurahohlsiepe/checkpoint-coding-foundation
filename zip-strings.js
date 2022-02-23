function zipStrings(strA, strB) {
  let both = 0;

  for (let i = 0; i < strA.length || i < strB.length; i++) {
    if (i < strA.length) {
      both = both + strA[i];
    }

    if (i < strB.length) {
      both = both + strB[i];
    }
  }

  return both.replace(/^0+/, "");
}

//
// const splitStrA = strA.split(" ");
// const splitStrB = strB.split(" ");
//let endString = 0;

//for (let i = 0; i < splitStrA.length || i < splitStrB.length; i++) {
//if (i < splitStrA.length) {
//  endString += splitStrA[i];
// }
//if (i < splitStrB.length) {
//  endString += splitStrB[i];
// }
//}

// return endString.join("");

// }

// endString += secondStrA[i] + secondStrB[i];

// i < strA.length || i < strB.length;
