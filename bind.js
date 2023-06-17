const stuff ={
    name : "Abdullah",
    address: 'tkg',
    salary : 300000,

    tax: function(amount,tips,insurance){
        this.salary = this.salary - amount - tips - insurance;
        return this.salary;
    }
}

const abm = {
    name: 'abm',
    address: 'tkg',
    salary: 1000000
}
const kamrul ={
    name: 'kamrul',
    address: 'noakhali',
    salary : 600000
}

const badhon ={
    name: 'kamrul',
    address: 'noakhali',
    salary : 9000000
}
//                  bind
const abmTax = stuff.tax.bind(abm);
abmTax(3000 ,100,400);
console.log(abm.salary);

//                      call

stuff.tax.call(kamrul,32332 ,43, 66666 );   // param
console.log(kamrul.salary);

//                    apply

stuff.tax.apply(badhon,[767676,34,45]);   // parameter passed with array
console.log(badhon.salary);