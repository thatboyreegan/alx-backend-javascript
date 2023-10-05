interface Teacher {
    readonly firstname: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [attrName: string]: any;
}

interface Directors extends Teacher {
    numberOfReports: number;
}

interface printTeacherFunction {
    //description: string;
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function (
  firstName: string,
  lastName: string
) {
    return `${firstName[0]}.${lastName}`;
};

interface studentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface studentClassInterfaceConstructor {
    new (firstName: string, lastName: string): studentClassInterface;
}

class StudentClass implements studentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firsName: string, lastName: string) {
        this.firstName = firsName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}
