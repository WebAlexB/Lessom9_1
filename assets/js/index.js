const numberInput = prompt('Enter a number');
const degreeInput = prompt('Enter a degree');

function validNumber(numberInput, degreeInput) {
    if (numberInput === null || degreeInput === null || numberInput.trim() === '' || degreeInput.trim() === '') {
        alert('Invalid input. Please enter valid numbers.');
        return false;
    }

    const number = +numberInput;
    const degree = +degreeInput;

    if (isNaN(number) || isNaN(degree)) {
        alert('Invalid input. Please enter valid numbers.');
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
    alert(pow(+numberInput, +degreeInput));
}