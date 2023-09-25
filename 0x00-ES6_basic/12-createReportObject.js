export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: employeesList,

    geNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return reportObject;
}
