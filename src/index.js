module.exports = function check(str, bracketsConfig) {
  const joinBracketConfig = bracketsConfig.map(el => el.join(''));
  for (let i = 0; i < joinBracketConfig.length; i++) {
    !str.includes(joinBracketConfig[i]) ? str : (str = str.replace(joinBracketConfig[i], '')) && (i = -1);
  }
  return str.length === 0;
}