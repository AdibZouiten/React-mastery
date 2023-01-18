const cars = [
        { name: 'Honda Civic', price: 16000 },
        { name: 'Toyota Corolla', price: 18000 },
        { name: 'Ford Mustang', price: 35000 },
        { name: 'Chevrolet Camaro', price: 32000 },
        { name: 'Nissan Altima', price: 20000 },
        { name: 'Mazda 3', price: 22000 },
        { name: 'BMW 3 Series', price: 42000 },
        { name: 'Mercedes-Benz C-Class', price: 45000 },
        { name: 'Audi A4', price: 40000 },
        { name: 'Volkswagen Jetta', price: 24000 },
        { name: 'Hyundai Elantra', price: 19000 },
        { name: 'Kia Optima', price: 22000 },
        { name: 'Subaru Impreza', price: 25000 },
        { name: 'Jeep Grand Cherokee', price: 30000 },
        { name: 'Dodge Challenger', price: 35000 },
        { name: 'Chrysler 300', price: 32000 },
        { name: 'Ford F-150', price: 28000 },
        { name: 'Chevrolet Silverado', price: 30000 },
        { name: 'Ram 1500', price: 32000 }
];

//! array.filter to filter  a array
const filtedCars = cars.filter((car)=>{
    return car.price >=40000;
})
console.log(filtedCars);

//! array.map to go trow the  array

const MapCars = cars.map((car)=>{
    return car.price
})
console.log(MapCars);

//! array.find to find a element in the  array

const FindCars = cars.find((car)=>{
    return car.name === `Ram 1500`
})
console.log(FindCars);

//! array.forEach to do something for each element in the  array

const forEachCars = cars.forEach((car)=>{
    console.log(car);
})
console.log(forEachCars);

//! array.some if any element has the condition it returns true else false

const someCars = cars.some((car)=>{
    return car.name === `Ram 1500`
})
console.log(someCars);

//! array.some if every element has the condition it returns true else false

const everyCars = cars.every((car)=>{
    return car.price >= 200
})
console.log(everyCars);


//! array.reduce use it to for array calculation look at the example below PS: don't forget to initialize the second param
const reduceCars = cars.reduce((totalPrice,car)=>{
    return car.price + totalPrice
}, 0)
console.log(reduceCars);

//! array.include returns true or false depending if a item is included in the array
const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
const includeArrayNumbers = arrayNumbers.includes(2)
console.log(includeArrayNumbers);