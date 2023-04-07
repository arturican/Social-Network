type ObjType = {
    name: string
    height: number
}

const arr: Array<ObjType> = [
    {name: 'Dima', height: 1.78},
    {name: 'Sasha', height: 1.8}
]


type CarType = {
    model: string
    year: number
    on: boolean
    turnOn: () => void
    rename: (model: string) => void

}

let createGarage = () => {
    let _cars: Array<CarType> = [];

    return {
        addCar(car:string) {
            _cars.push();
        },
        logAllCarsNames() {
            console.log('Cars in the garage: ');
            _cars.forEach(c => console.log(c.model));
        },
        getAllCars() {
            return _cars;
        }
    }
}

let car: CarType = {
    model: 'Reno Stepway',
    year: 2016,
    on: false,
    turnOn() {
        this.on = true;
    },
    rename(model) {
        this.model = model;
    }
}


export default 1
