{
    let numArray = [1,2,16385,4,5,105,15,23,1,5,30,47,65,115]
    let isDivisibleByFive = []
    function divisibleByFive(arr){
        for(let i = 0; i < numArray.length; i++){
            if(arr[i] % 5 == 0)
                isDivisibleByFive.push(numArray[i])
        }
        console.log(isDivisibleByFive)
    }
    divisibleByFive(numArray)
}