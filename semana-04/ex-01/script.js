var PersonClass = /** @class */ (function () {
    function PersonClass(name, lastName, age, favoriteFoods) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.favoriteFoods = favoriteFoods;
        this.fullName = '';
        this.isOlderThanEighteen = this.age >= 18;
    }
    PersonClass.prototype.setFullName = function () {
        this.fullName = "".concat(this.name, " ").concat(this.lastName);
    };
    PersonClass.prototype.showUserData = function () {
        console.log("hi, my name is ".concat(this.fullName, ", i'm ").concat(this.age, " years old and my favorite foods are ").concat(this.favoriteFoods.join(', ')));
    };
    return PersonClass;
}());
var p1 = new PersonClass("César", "Braz", 19, ["grape", "bread"]);
p1.setFullName();
p1.showUserData();
