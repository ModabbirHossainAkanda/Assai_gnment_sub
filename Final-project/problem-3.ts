{




  


    const filterEvenNumbers = (nums : number[]) : number[] => {
    let evenNumbers : number [] = [];
    for (let i =0; i < nums.length; i++){
        if(nums[i]%2 === 0){
            evenNumbers.push(nums[i]);
        }
    }
    return evenNumbers;
   }
   const result : number[] = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
   console.log(result);






















}