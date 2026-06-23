function twoSum(arr, sum){
    const arr2=[];
    for (let i=0; i<arr.length; i++){
        for (let k = i+1; i<arr.length; i++){
            if (sum===arr[i]+arr[k]){
                arr2.push([i,k])
                return arr2
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9));
