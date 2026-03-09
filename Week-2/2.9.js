console.log("OTP sent sucessfully")
let c = 11;
const timer = setInterval(() => {
    c--;
    console.log(c);
    if (c == 0) {
        clearInterval(timer); // Stops the interval
        console.log("Resend OTP");
    }
}, 1000);


