// ASSIGNMENT 1:
// -------------
// You are building a shopping cart summary for an e-commerce website.

// Test Data : 
// const cart = [
//   { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
//   { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
//   { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
//   { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
// ];

// Tasks:
//     1. Use filter() to get only inStock products
//     2. Use map() to create a new array with:  { name, totalPrice }
//     3. Use reduce() to calculate grand total cart value
//     4. Use find() to get details of "Mouse"
//     5. Use findIndex() to find the position of "Keyboard"


const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//     1. Use filter() to get only inStock products
let available = cart.filter((stock) => stock.inStock===true)
console.log(available)

//     2. Use map() to create a new array with:  { name, totalPrice }
let newarray = cart.map((scart) => {
  return 
   name = scart.name,
   totalprice = scart.price * scart/quantity
  }
)
console.log(newarray)

//     3. Use reduce() to calculate grand total cart value
let grandTotal = cart.reduce((acc,element) => acc += element.price*element.quantity,0)
console.log(grandTotal)

//     4. Use find() to get details of "Mouse"
let finfname = cart.find((n) => n.name==="Mouse")
console.log(finfname)

//     5. Use findIndex() to find the position of "Keyboard"
let finfidx = cart.findIndex((idx) => idx.name=="keyboard")
console.log(finfidx)




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



// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
// const movies = [
//   { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
//   { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
//   { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
//   { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
// ];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"
//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
//     1. filter() only "Sci-Fi" movies
let SciFimovies = movies.filter((movie) => movie.genre === "Sci-Fi")
console.log(SciFimovies)

//     2. map() to return:
//             "Inception (8.8)"
let newmovies = movies.map((movie) => {
  return {
    title : movie.title,
    rating : movie.rating
  }
})
console.log(newmovies)

//     3. reduce() to find average movie rating
let ratingsum = movies.reduce((acc,movie) => acc += movie.rating,0)
let ratingavg = ratingsum / movies.length
console.log(ratingavg)

//     4. find() movie "Joker"
let findJoker = movies.filter((movie) => movie.title === "Joker")
console.log(findJoker)

//     5. findIndex() of "Avengers"
let findAvengers = movies.findIndex((movie) => movie.title === "Avengers")
console.log(findAvengers)



// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
// const transactions = [
//   { id: 1, type: "credit", amount: 5000 },
//   { id: 2, type: "debit", amount: 2000 },
//   { id: 3, type: "credit", amount: 10000 },
//   { id: 4, type: "debit", amount: 3000 }
// ];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//      1. filter() all credit transactions
let  credittransactions = transactions.filter((trans) => trans.type === "credit")
console.log(credittransactions)

//     2. map() to extract only transaction amounts
let extracttransaction = transactions.map((trans) => {
  return {
    amount : trans.amount
  }
})
console.log(extracttransaction)

//     3. reduce() to calculate final account balance
let balance = transactions.reduce((acc,transaction) => {
  if(transaction.type === "credit"){
    return acc += transaction.amount
  }
  else{
    return acc -= transaction.amount
  }
})
console.log(balance)

//     4. find() the first debit transaction
let firstdebit = transactions.findIndex((element) => {
  if(element.type === "debit"){
    return element
  }
})
console.log(transactions[firstdebit])

//   5. findIndex() of transaction with amount 10000
let find10000 = transactions.findIndex((element) => element.amount === 10000)
console.log(find10000)
