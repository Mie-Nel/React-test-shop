export function getDec(number, one, two, three) {
  number = number % 10;
  if (number === 1) {
    return one;
  }
  if (number >= 2) {
    return two;
  }
  return three;
}
