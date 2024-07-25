"use strict";
var _a;
let sales = 123456789;
let course = "Typescript";
let is_published = true;
let level;
level = 1;
level = 'a';
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(n => n.toFixed());
let user = [1, 'Mosh'];
user.push(1);
user.push(2);
console.log(user);
var Size;
(function (Size) {
    Size["small"] = "s";
    Size["medium"] = "m";
    Size["large"] = "l ";
})(Size || (Size = {}));
;
let mySize = Size.medium;
console.log(mySize);
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
let employee = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
let a = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kgs');
let textBox = {
    drag: () => {
        console.log('dragging');
    },
    resize: () => {
        console.log('resizing');
    }
};
let quantity = 50;
let unit = 'cm';
function greet(name) {
    if (name)
        console.log("Hello! " + name.toUpperCase());
    else
        console.log('Hello');
}
greet(null);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map