// Researched on mdn object classes, inhertitance, and functions.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

class Employee{
    constructor(name, employeeType){
        this.name = name;
        this.employeeType = employeeType;
    }
    payoutFlatSalary(salesTarget, salesMade, additionalHours){

        if(additionalHours > 0 || salesMade > salesTarget){
            
            let formula = this.flatSalary + (additionalHours * this.hourlySalary);

            let bonus = (20/100) * this.hourlySalary;

            let next = (bonus + this.hourlySalary) * additionalHours;

            let final = next + this.flatSalary;

            console.log(`Your total is ${formula}, `)

            }else{
                console.log(this.flatSalary);
            }
        }else {
            if(salesMade > salesTarget){
                
                let formula = (10/100) * this.flatSalary;
                
                let totalSalary = formula + (this.flatSalary);
                
                console.log(`${this.name}, your total salary for this month is £${totalSalary}.`);
            
            }else{
                console.log(`${this.name}, your total salary for this month is £${this.flatSalary}.`);
            }
        }
    }
    payoutPerHour(hoursLogged, salesTarget, salesMade){
        
        if(salesMade > salesTarget){

            let formula = (50/100) * this.perHour;

            let totalSalary = formula + (hoursLogged * this.perHour);

            console.log(`${this.name}, your total salary for this month is £${totalSalary}.`);
        }else{
            console.log(`${this.name}, your total salary for this month is £${totalSalary}.`);
        }
    }
}


class Salaried extends Employee{
    constructor(name, employeeType, flatSalary){
        super(name, employeeType);
        this.flatSalary = flatSalary;
    }
}

class Hourly extends Employee{
    constructor(name, employeeType, perHour){
        super(name, employeeType);
        this.perHour = perHour;
    }
}

class Hybrid extends Employee{
    constructor(name, employeeType, flatSalary, hourlySalary = 13){
        super(name, employeeType);
        this.flatSalary = flatSalary;
        this.hourlySalary = hourlySalary;
    }
    totalSalary(salesTarget, salesMade, additionalHours){
        super.payoutFlatSalary(salesTarget, salesMade, additionalHours);
    }
}

let salariedEmployeeOne = new Salaried("Liam", "salaried", 1500);
let salariedEmployeeTwo = new Salaried("Noah", "salaried", 2000);

let hourlyEmployeeOne = new Hourly("Oliver", "hourly", 13);
let hourlyEmployeeTwo = new Hourly("Lisa", "hourly", 15);

let hybridEmployeeOne = new Hybrid("Elizabeth", "hybrid", 1000);
let hybridEmployeeTwo = new Hybrid("Fred", "hybrid", 2500);

// console.log(salariedEmployeeOne);
// console.log(hourlyEmployeeOne);
// console.log(hybridEmployeeOne);

// salariedEmployeeTwo.payoutFlatSalary(21, 11);
hybridEmployeeOne.totalSalary(73, 13, 0);

/*
    Thinking
        1.
*/