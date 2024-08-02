interface Student {
    firstName: string;
    lastName: string;
    Age: number;
    location: string;

}
const StudentA: Student = {
    firstName: "John",
    lastName: "Doe",
    Age: 20,
    location: "Lagos"
};

const StudentB: Student = {
    firstName: "Jane",
    lastName: "Doe",
    Age: 20,
    location: "Lagos"
};

const studentsList: Array<Student> = [StudentA, StudentB];

export const renderTable = (studentsList: Array<Student>): void => {
	const table = document.createElement("table");
	const headRow = document.createElement("tr");
	table.appendChild(headRow);

	headRow.innerHTML += "<th>FirstName</th>";
	headRow.innerHTML += "<th>Location</th>";

	for (const student of studentsList) {
		const studentRow = document.createElement("tr");
		studentRow.innerHTML += `<td>${student.firstName}</td>`;
		studentRow.innerHTML += `<td>${student.location}</td>`;
		table.appendChild(studentRow);
	}

	document.body.appendChild(table);
};

renderTable(studentsList);