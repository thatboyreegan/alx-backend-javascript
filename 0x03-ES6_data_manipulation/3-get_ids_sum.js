export default function getStudentIdsSum(array) {
  const sumOfIds = array.reduce((acc, student) => {
    const sum = acc + student.id;
    return sum;
  }, 0);

  return sumOfIds;
}
