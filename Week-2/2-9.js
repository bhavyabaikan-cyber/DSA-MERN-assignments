// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28

const temperatures = [32, 35, 28, 40, 38, 30, 42];

//     1. filter() temperatures above 35
let above35 = temperatures.filter((greater) => greater > 35)
console.log(above35)

//     2. map() to convert all temperatures from Celsius → Fahrenheit
let forenheit = temperatures.map((element) => element = (9*element/5) + 32)
console.log(forenheit)

//     3. reduce() to calculate average temperature
let sum = temperatures.reduce((acc,element) => acc + element )
let size = temperatures.length
let avg = sum/size
console.log(avg)

//     4. find() first temperature above 40
let above40 = temperatures.filter((temperature) => {
    if(temperature > 40){
        return temperature
    }
})
console.log(above40)

//     5. findIndex() of temperature 28
let tempidx = temperatures.findIndex((temperature)=>  temperature === 20)
console.log(tempidx)

