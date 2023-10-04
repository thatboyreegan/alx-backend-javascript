export default function hasValuesFromArray(set, array) {
  let bool = true;

  for (const value of array) {
    if (!set.has(value)) {
      bool = false;
      break;
    }
  }

  return bool;
}
