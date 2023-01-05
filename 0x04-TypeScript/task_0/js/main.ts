interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Tana',
    lastName: 'Mbindi',
    age: 25,
    location: 'harare',
}

const student2: Student = {
    firstName: 'Tate',
    lastName: 'husband',
    age: 32,
    location: 'chiyadzwa',
}

let studentsList: Student[] = [];

studentsList.push(student1);
studentsList.push(student2);

let myVar = document.createElement('table');

for (let i = 0; i < studentsList.length; i++) {
    let row = myVar.insertRow();
    let name = row.insertCell();
    let location = row.insertCell();
    name.innerHTML = studentsList[i].firstName;
    location.innerHTML = studentsList[i].location;
}

document.body.appendChild(myVar);
