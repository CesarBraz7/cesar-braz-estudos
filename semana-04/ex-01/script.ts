interface Person {
    name: string;
    lastName: string;
    age: number;
    isOlderThanEighteen: boolean;
    favoriteFoods: string[];
}

class PersonClass implements Person {
    fullName: string = '';

    constructor(public name: string, public lastName: string, public age: number, public favoriteFoods: string[]) {
        this.isOlderThanEighteen = this.age >= 18;
    }
    isOlderThanEighteen: boolean;

    setFullName(): void{
        this.fullName = `${this.name} ${this.lastName}`;
    }

    showUserData(): void{
        console.log(`hi, my name is ${this.fullName}, i'm ${this.age} years old and my favorite foods are ${this.favoriteFoods.join(', ')}`);
    }
}

const p1 = new PersonClass("César", "Braz", 19, ["grape", "bread"]);
p1.setFullName();
p1.showUserData();