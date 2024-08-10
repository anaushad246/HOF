const input = "pw skills";

function reverseString(str) {
    return str.split("").reverse().join("");
}

function reverseStringWithDelay(inputString) {
    setTimeout(function () {
        let reversed = reverseString(inputString);
        console.log("Reversed String: " + reversed);
    }, 2000);
}

reverseStringWithDelay(input);
