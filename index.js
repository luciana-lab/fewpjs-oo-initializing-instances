// Write your code here
// breakfast
// 1) has a class of breakfast
// 2) creates a new breakfast with the correct parameters
class Breakfast {
    constructor(food, drink) {
        this.food = food;
        this.drink = drink;
    };
};

// lunch
// 1) has a class of lunch
// 2) creates a new lunch with the correct parameters
class Lunch {
    constructor(salad, soup, drink) {
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    };
};

// dinner
// 1) has a class of dinner
// 2) creates a new dinner with the correct parameters
class Dinner {
    constructor(salad, soup, entree, dessert) {
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this._dessert = dessert;
    };
};