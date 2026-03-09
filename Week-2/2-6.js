// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//     1. filter() employees from IT department
let ITdept = employees.filter((emp) => emp.department === "IT")
console.log(ITdept)

//     3. reduce() to calculate total salary payout
let totalsalary = employees.reduce((acc,emp) => acc += emp.salary,0)
console.log(totalsalary)

//     4. find() employee with salary 30000
let find30000 = employees.find((emp) => emp.salary === 30000)
console.log(find30000)

//     5. findIndex() of employee "Neha"
let findneha = employees.findIndex((emp) => emp.name === "Neha")
console.log(findneha)