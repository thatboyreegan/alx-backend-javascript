export default function appendToEachArrayValue(array, appendString) {
  for (const [idx, element] of array.entries()) {
    const value = element;
    // eslint-disable-next-line no-param-reassign
    array[idx] = `${appendString}${value}`;
  }

  return array;
}
