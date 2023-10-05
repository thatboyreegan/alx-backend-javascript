interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Reagan',
    lastName: 'Odhiambo',
    age: 22,
    location: 'Nairobi',
};

const student2: Student = {
    firstName: 'Jokes',
    lastName: 'Galore',
    age: 25,
    location: 'Nakuru',
};

const studentsList: Array<Student> = [student1, student2];

const table = document.createElement('table');
const header = document.createElement('tr')

for (const key of Object.keys(student1)) {
    const row = document.createElement('th');
    row.innerHTML = key;
    header.appendChild(row);
}

table.appendChild(header);

studentsList.forEach((student) => {
    const row =document.createElement('tr');

    for (const value of Object.values(student)) {
        const data = document.createElement('td');
        data.innerHTML = value;
        row.appendChild(data);
    }
    table.appendChild(row);
});

document.body.appendChild(table);
