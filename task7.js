function maxProfit(arr){
    let min = arr[0]
    let minindex = 0
    let max = 0
    let maxindex = 0
    for(let i = 0; i < arr.length; i++){
        if(min > arr[i]){
            min = arr[i]
            minindex = i
        }
        
    }
    for(let x = minindex ; x < arr.length; x++){
        if(max < arr[x]){
            max = arr[x]
            maxindex = x
        }
    }
    
    return arr[maxindex] - arr[minindex];
}


console.log(maxProfit([7,1,5,3,6,4]));