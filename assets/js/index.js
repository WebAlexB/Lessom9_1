const numberInput = prompt('Enter an number');
const degreeInput = prompt('Enter an degree');

function validNumber(numberInput, degreeInput) {
    const number = +numberInput;
    const degree = +degreeInput;
    if (isNaN(number) || isNaN(degree) || !Number.isInteger(number) || !Number.isInteger(degree)) {
        alert('Invalid input. Please enter valid numbers.');
        return false;
    }
    if (numberInput === null || degreeInput === null) {
        alert('Okay good bye');
        return false;
    }
    return true;
}

function pow(num, degree) {
    if (degree === 0) {
        return 1;
    }
    if (degree < 0) {
        return 1 / pow(num, -degree);
    }
    return num * pow(num, degree - 1);
}

if (validNumber(numberInput, degreeInput)) {
    alert(pow(numberInput, degreeInput));
}