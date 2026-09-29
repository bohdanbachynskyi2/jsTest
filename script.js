
// Завдання 4
function TriangleArea(base = 7, height = 3) {
    let area = (base * height) / 2;
    console.log("Площа трикутника: " + area);
    return area;
}

console.log("--- Завдання 4 ---");

TriangleArea();

TriangleArea(3, 6);



// Завдання 5
function Boat(color, maxSpeed, maxTonnage, brand, countryOfRegistration) {
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.maxTonnage = maxTonnage;
    this.brand = brand;
    this.countryOfRegistration = countryOfRegistration;
}

Boat.prototype.AssignCaptain = function(name, yearsOfExperience, hasFamily) {
    this.captain = {
        name: name,
        yearsOfExperience: yearsOfExperience,
        hasFamily: hasFamily
    };
};

console.log("--- Завдання 5 ---");

let myBoat = new Boat("white", 45.5, 500, "Yamaha", "Ukraine");

myBoat.AssignCaptain("Jack Sparrow", 15, false);

console.log(myBoat);



// Завдання 6
class SimpleCircle {
    constructor(majorRadius) {
        this.majorRadius = majorRadius;
    }

    set setRadius(value) {
        this.majorRadius = value;
    }
}


class SimpleEllipse extends SimpleCircle {
    constructor(majorRadius, minorRadius) {
        super(majorRadius);
        this.minorRadius = minorRadius;
    }

    static calculateArea(ellipse) {
        return Math.PI * ellipse.majorRadius * ellipse.minorRadius;
    }
}

console.log("--- Завдання 6 ---");

let circle = new SimpleCircle(10);
circle.setRadius = 12;
console.log("Коло:", circle);

let ellipse = new SimpleEllipse(10, 5);
console.log("Еліпс:", ellipse);

let ellipseArea = SimpleEllipse.calculateArea(ellipse);
console.log("Площа еліпса:", ellipseArea);



// Завдання 7
function SubGenerator(baseNumber) {
    return function(num) {
        return num - baseNumber;
    };
}

console.log("--- Завдання 7 ---");
let sub5 = SubGenerator(5);
let sub10 = SubGenerator(10);

console.log("20 - 5 =", sub5(20)); // 15
console.log("20 - 10 =", sub10(20)); // 10