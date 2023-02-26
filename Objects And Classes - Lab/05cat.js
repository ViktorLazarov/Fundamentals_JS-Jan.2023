function myCat(inputArr) {
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const cat of inputArr) {
        let [name, age] = cat.split(' ');
        let newCat = new Cat(name, age);
        newCat.meow();
    }
}


myCat(['Candy 1', 'Poppy 3', 'Nyx 2'])