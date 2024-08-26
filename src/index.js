module.exports = function reverse (n) {
  let revNum = 0
  let num = Math.abs(n)
  while(num > 0) {
    revNum = revNum * 10 + num % 10
    num = Math.floor(num / 10)
  }
  return revNum
}
