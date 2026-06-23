function isAnagram(word1, word2){
    let count = 0
    for(let i = 0; i < word1.length; i++){
        for(let x = 0; x < word2.length; x++){
            if(word1[i] === word2[x]){
                count++
            }
        }
    }
    return count == word1.length ? true : false
}

console.log(isAnagram('listen', 'silent'))