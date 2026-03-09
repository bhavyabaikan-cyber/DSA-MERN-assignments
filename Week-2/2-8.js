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
