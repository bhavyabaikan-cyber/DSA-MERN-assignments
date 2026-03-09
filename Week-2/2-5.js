
// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
//     1. filter() students who passed (marks ≥ 40)
const passed = students.filter((std) => std.marks >= 40)
console.log(passed)

let addgrade = students.map((std) => {
  let grade
    if(std.marks >= 90) grade = "A"
    if(std.grade >= 75) grade - "B"
    if(std.marks >= 60) grade = "C"
    else grade = "D"
    return newgrade = std.grade
})
console.log("The Grade is : ",addgrade)

 //    3. reduce() to calculate average marks
let sum = students.reduce((acc,std) => acc += std.marks,0)
let avg = sum / students.length
console.log(avg)

//    4. find() the student who scored 92
let find92 = students.find((std) => std.marks === 92)
console.log(find92)

//    5. findIndex() of student "Kiran"
let findkiran = students.findIndex((std) => std.name == "Kiran")
console.log(findkiran)