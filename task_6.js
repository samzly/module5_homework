let array = [];
function unique(arr) {
    let setFromArr = new Set(arr);
    console.log(setFromArr.size === arr.length);
}
unique(array);