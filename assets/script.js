const addEmployeesBtn = document.querySelector("#add-employees-btn");

const collectEmployees = function () {
  const employeesArr = [];
  let addemployees = true;

  while (addemployees) {
    var firstName = prompt("First Name");
    var lastName = prompt("Last Name");
    var salary = parseInt(prompt("Salary"));
    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
   
    employeesArr.push(employee);
    addemployees = confirm("Add Another Employee?");
  }
  return employeesArr;
};

const displayAverageSalary = function (employeesArr) {
  let total = 0;
  for (let i = 0; i < employeesArr.length; i++) {
    total += employeesArr[i].salary;
  }
  
  const average = total / employeesArr.length;
  console.log(`The average salary of ${employeesArr.length} employees is $${average.toFixed(2)}`)
};
console.log ("average");

const getRandomEmployee = function (employeesArray) {
  const employee =
    employeesArray[Math.floor(Math.random() * employeesArray.length)];
  console.log(`Congratulations! ${employee.firstName} ${employee.lastName}, you are the random employee chosen!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  console.log(employeesArray);
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);
 
  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
