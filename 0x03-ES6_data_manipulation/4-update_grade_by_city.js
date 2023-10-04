export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  const Students = studentsArray
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.filter(
        (newGrade) => newGrade.studentId === student.id,
      );

      const newStudent = student;
      newStudent.grade = studentGrade.length ? studentGrade[0].grade : 'N/A';

      return newStudent;
    });

  return Students;
}
