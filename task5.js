function isPalindrome(num){
    let num2 = 0;
    let kaskad = num;
    while(kaskad){
        let last = kaskad % 10;
        num2 = num2 * 10 + last;
        kaskad = Math.floor(kaskad / 10);
    }
    return num2 === num;
}

console.log(isPalindrome(121));