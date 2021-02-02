function str_len(value) {
    return value.length;
}
console.group(str_len("Test 1"));
function str_len_spaces(value) {
    var num = value.replace(/\s+/, "").length;
    return num;
}
console.group(str_len_spaces("Test 1"));
function str_len_both(value, spaces) {
    var num;
    if (spaces) {
        num = value.replace(/\s+/, "").length;
    }
    else {
        num = value.length;
    }
    return num;
}
console.group(str_len_both("Test 1", true));
