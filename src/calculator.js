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
        throw ("nagtive numbers are not allowed " + nagtiveNum);
    }
    if (str.match(/\D$/) || isNaN(sum)) {
        throw Error("Invalid input")
    }
    return sum
}

module.exports ={ add }
