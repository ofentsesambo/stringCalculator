function add(str) {

    let sum = 0,
        split = str.split(/[\n|,|;]/g),
        nagtiveNum = [];

    if (str == "") {
        return 0;
    }

    function replacingSpecialChar(specialChar) {
        return specialChar.replace(/[*&$.=*+?\\(){}\/\[\]]/g, "\\$&")
    }

    if (str.startsWith('//')) {
        let delimeter = str.split(/\/\/(.*)\n/g)[1],
            numSec = str.split(/\/\/(.*)\n/g)[2];
        delimeter = new RegExp(replacingSpecialChar(delimeter), "g");
        split = numSec.replace(delimeter, ",").split(",")

    }

    if (str.startsWith('//[')) {
        let delimeter = str.match(/(?<=\/\/).*(?=\n)/g)[0],
            replacer = delimeter.replace("[", ""),
            replacer2 = replacer.replace(/\]\[/g, "|"),
            replacer3 = replacer2.replace("]", ""),
            numSec = str.match(/(?<=\n).*/g)[0];

        delimeter = new RegExp(replacingSpecialChar(replacer3), "g");
        split = numSec.replace(delimeter, ",").split(",");
    }

    for (let i = 0; i < split.length; i++) {
        if (split[i] >= 1000) {
            continue;
        }
        sum += parseInt(split[i])
    }

    for (let i = 0; i < split.length; i++) {
        if (split[i] < 0) {
            nagtiveNum.push(parseInt(split[i]));
        }
    }
    if (nagtiveNum.length > 0) {
        throw ("nagtive numbers not allowed not allowed " + nagtiveNum);
    }
    if (str.match(/\D$/) || isNaN(sum)) {
        throw Error("Invalid input")
    }
    return sum
}

console.log(add(""), " should be 0")
console.log(add("1"), " should be 1")
console.log(add("1,1"), " should be 2")
console.log(add("1,2,3,4"), " should be 10")
console.log(add("1\n2,3"), " should be 6")
console.log(add("//;\n1;2"), " should be 3")
console.log(add("//4\n142"), " should be 3")
//console.log(add("-1,-2,-3,4"), " should throw error")
console.log(add("//;\n1000;1;2"), " should be 3")
console.log(add("//***\n1***2***3"), "should be 6")
console.log(add("//[:D][%]\n1:D2%3"), "should be 6")
console.log(add("//[***][%%%]\n1***2%%%3"), " should be 6")
console.log(add("//[(-_-')][%]\n1(-_-')2%3"), "should be 6")
console.log(add("//[abc][777][:(]\n1abc27773:(1"), "should be 7")
//console.log(add("//;\n1000;1;2;"), "should throw invalid input")
//console.log(add("   //;\n1000,1;2"))
//console.log(add("1,2,3//;\n1000,1;2"))


module.exports ={ add }
