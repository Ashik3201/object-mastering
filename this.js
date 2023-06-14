const person = {
    firstName : 'ashik',
    lastName : "Abdullah",
    getFullName : function(){
        console.log(this.firstName, this.lastName);
    },
    salary : 12000,
    charge : function(amount){
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroAlam = {
    firstName : 'Hero',
    lastName : 'Alam',
    salary : 25000
}
const anontoJolil ={
    firstName : 'Ananto',
    lastName : 'Jolil',
    salary : 30000
}


// person.charge(1000);
// console.log(person.salary);

// const heroBill = person.charge.bind(heroAlam);
// heroBill(5000);
// heroBill(1000);
// console.log(heroAlam.salary);

const anontocharge = person.charge.bind(anontoJolil);
anontocharge(500);
console.log(anontoJolil.salary);