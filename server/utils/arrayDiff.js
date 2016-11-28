export default function arrayDiff(x, y) {
  // returns an array of the elements in x that aren't in y.
  return x.filter(item => y.indexOf(item) < 0);
}
