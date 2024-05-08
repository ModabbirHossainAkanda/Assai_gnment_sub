{


    interface Student {
        name: string;
        age: number;
        grades: number[];
    }
    
    function findGrade(obj: Student): number {
        const grades = obj.grades;
        const result = grades.reduce((accumulator, currentValue) => accumulator + currentValue);
        return result / grades.length;
    }
    
    const student: Student = {
        name: 'Bob',
        age: 17,
        grades: [75, 80, 82, 88, 90]
    };
    
    const result: number = findGrade(student);
    console.log(result);












}