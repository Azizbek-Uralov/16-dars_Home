const arr = [1, 2, 3, 1];
function containsDuplicate(arr){
    let unique = new Set(arr);
    return unique.size != arr.length ? true : false;
}
console.log(containsDuplicate(arr));