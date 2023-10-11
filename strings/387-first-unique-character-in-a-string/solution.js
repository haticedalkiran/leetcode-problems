function firstUniqChar(s) {
  if (s.length === 1) {
    return 0;
  }
  let letterList = {};

  for (let i = 0; i < s.length; i++) {
    if (!letterList[s[i]]) {
      let count = 0;
      for (let j = i; j < s.length; j++) {
        if (s[i] === s[j]) {
          count++;
        }
      }
      if (count === 1) return i;
      else letterList[s[i]] = count;
    }
  }

  return -1;
}

console.log(firstUniqChar("ab"));
