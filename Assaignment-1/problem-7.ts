{





    function checkString(value: any): string {
        if (typeof value === 'string') {
            return value;
        }
    
        return 'Input is not a string';
    }
    
    const result: string = checkString('hello typescript');
    console.log(result);


























}