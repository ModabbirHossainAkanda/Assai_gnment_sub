{



    class Car {
        name: string;
        brand: string;
        year: number;


        constructor(name: string, brand: string, year: number) {
            this.name = name;
            this.brand = brand;
            this.year = year;
        }

        makeBrand() {
            return (`Your car model is:  ${this.year} ${this.name} ${this.brand}`)
        }


    }
    const carInfo: {
        name: string;
        brand: string;
        year: number;
    } = {
        name : 'Toyota',
        brand: 'corolla',
        year : 2020,
    }
    const car1 = new Car('Toyota', 'corolla', 2020);
    console.log(car1.makeBrand());


}