// returns true if n is prime
function isPrime(n) {
    p = true;
    if (n <= 1) {
        return false;
    }
    else {
        for (let i = 2; i < n; i++) {
            if ((n % i) === 0) {
                p = false;
                break;
            }
        }
        return p;
    }
}


// buttons
const check_button = document.getElementById("check");
const clear_button = document.getElementById("clear");


// when the check button is clicked
check_button.addEventListener('click', () => {
    num = parseInt(document.getElementById("number").value, 10);
    if (isPrime(num)) {
        alert(`${num} is a prime number!!!`);
    }
    else {
        alert(`${num} is not a prime number.`);
    }

});


// when the clear button is clicked
clear_button.addEventListener('click', () => {
    document.getElementById("number").value = "";
});