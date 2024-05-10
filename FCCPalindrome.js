const input = document.getElementById("text-input")
/*Reverse word function for Palindrome check */
function reverseWord(str) {
    return str.split("").reverse().join("")
}
/*needed check with underscore but not with whitespaces or characters */
function checkBtn() {
    const originalValue = 
document.getElementById('text-input').value;
    const value = originalValue.replace(/[\s\W_]/g, '').toLowerCase(); 
    const reverse = reverseWord(value)
    const resultDiv = document.getElementById('result');
    if (value === reverse) {
        resultDiv.textContent = originalValue + " is a palindrome";
    } else {
        resultDiv.textContent = originalValue + " is not a palindrome";
    }
}
/*check button no-text alert */
document.getElementById('check-btn').addEventListener('click', function() {
    var textInput = document.getElementById('text-input').value;
    if (textInput === '') {
        alert("Please input a value");
    }
});