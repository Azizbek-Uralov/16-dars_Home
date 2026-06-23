function isValid(str){
    
    for(let i = 0; i < str.length; i += 2){
        if(str[i] === "("){
            if(str[i+1] != ")"){
                return false;
            }
        } else if (str[i] === '{') {
            if(str[i+1] != "}"){
                return false;
            }
        } else if (str[i] === "["){
            if(str[i+1] != ']'){
                return false;
            }
        }
    }
    return true;
}

console.log(isValid("(){}[]"));