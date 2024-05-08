{



class 
FindLargestNumber{
    findLargestNumber (number : number[]) : number {
        return Math.max(...number)
    }
}
const newNUmber = new FindLargestNumber();
const heighstNumber : number = newNUmber.findLargestNumber([10, 5, 8, 20, 31]);
console.log(heighstNumber);


















}