{
const repeatString = (string : string, number : number)  =>{
    let words = '';
    for(let i = 0; i < number; i++){
        words = words + string;
    }

    return words;
}

const result = repeatString('Hello', 3);
console.log(result);














}