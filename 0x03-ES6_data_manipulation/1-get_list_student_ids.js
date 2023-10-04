export default function getListStudentIds(array) {
  if (!Array.isArray(array)) return [];

  const Ids = array.map((student) => student.id);

  return Ids;
}
