function reverseString(word){
    let newstr = '';
    for(let i = word.length-1; i >= 0; i--){
        newstr += word[i];
    }
    return newstr;
}

console.log(reverseString('hello'));