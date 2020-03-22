console.log('Hello')

class Person{
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Address{
    street;
    city;
    state;
    zip;

    constructor(street, city, state, zip){
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
}

console.log(new Person('Mike', 24))