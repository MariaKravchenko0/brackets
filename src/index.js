module.exports = function check(str, bracketsConfig) {
  let stack = [];
  let bracketsConfigObj = Object.fromEntries(bracketsConfig);
  let openingBrackets = Object.keys(bracketsConfigObj);
  let sameBrackets = [];

  bracketsConfig.forEach((bracketsPair) => {
    if (bracketsPair[0] === bracketsPair[1]) {
      sameBrackets.push(bracketsPair[0]);
    }
  });

  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let topSymbol = stack[stack.length - 1];

    if (sameBrackets.includes(currentSymbol)) {
      if (currentSymbol === topSymbol) {
        stack.pop();
      } else {
        stack.push(currentSymbol);
      }
    } else if (openingBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else if (bracketsConfigObj[topSymbol] === currentSymbol) {
      stack.pop();
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
