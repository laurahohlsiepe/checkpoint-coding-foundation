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
