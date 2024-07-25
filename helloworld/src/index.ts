let sales = 123_456_789;
let course = "Typescript";
let is_published = true;
let level;
level= 1;
level ='a';

let numbers= [1,2,3,4,5,6];

numbers.forEach(n=>n.toFixed())

let user: [number, string] = [1, 'Mosh']
user.push(1);
user.push(2);
console.log(user)
enum Size {small = 's', medium='m', large='l '};
let mySize : Size= Size.medium;
console.log(mySize);
function calculateTax(income: number){
   
    if(income<50_000)
        return income *1.2
    return income * 1.3;
}


let employee:{
    readonly id: number,
    name: string,
    retire:(date:Date)=>void
} = {
    id:1, 
    name:'Mosh',
    retire: (date:Date)=>{
        console.log(date)
    }
};

type Employee = {
    readonly id: number,
    name: string,
    retire:(date:Date)=>void
}

let a: Employee ={
    id:1,
    name:'Mosh',
    retire: (date:Date)=>{
        console.log(date)
        }
}


function kgToLbs(weight:number|string): number{
   if (typeof weight ==='number')
    return weight * 2.2;
else
return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs('10kgs');

//type intersection in action
type draggable = {
    drag: () => void;
};
type resizeable ={
    resize: ()=>void
}
type UIWidget = draggable & resizeable;

let textBox: UIWidget = {
    drag: () => {
        console.log('dragging')
    },  
    resize:()=>{
        console.log('resizing')
    }
} ;

//literal types
//literal (exact, specific)
type Quantity = 50 | 100 | 200;

let quantity:Quantity =50;

type Metric = 'cm' | 'inch'

let unit: Metric = 'cm' 

//nullable types

function greet(name:string | null | undefined){
    if (name)
    console.log("Hello! "+name.toUpperCase());
    else
    console.log('Hello');
}

greet(null)

//optional chaining

type Customer ={
    birthday: Date
};

function getCustomer(id:number): Customer|null|undefined{
    return id===0 ? null :{ birthday: new Date()}
}

let customer = getCustomer(0);
// if(customer !== null && customer !== undefined)
//instead we can use optional property access operator

console.log(customer?.birthday?.getFullYear())

//optional element access operator
//customers?.[0]

//optional call
let log: any = null

log?.('a')

