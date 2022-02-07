/*const book1= {
    title: 'Ethical Hacking: Slow and Steady Wins the Race',
    author: 'Shawn D. Hudspeth',
    year: '2022',
    getSummary: function(){
        return `${this.title} was written by 
        ${this.author} in ${this.year}`;
    }
}; This is the evolution of the project
and playinng with different varaibles*/
//console.log(Object.values(book1))
//console.log(Object.keys(book1))
//constructor
function Book(title, author, year) {
    this.title = title;
    this.author= author;
    this.year= year;
}
//getSummary
Book.prototype.getSummary =function() {
    return `${this.title} was written by ${this.author} in ${this.year}.`;
}
//getAge
Book.prototype.getAge=function(){
    const year= new Date().getFullYear() - this.year;
    return `${this.title} is ${year} years old`;
}
//Revise /Change Year
Book.prototype.revise=function(newYear){
    this.year= newYear;
    this.revised = true;
}
// Instatiate an Object 
const book1 = new Book('Ethical Hacking: Slow and Steady Wins the Race', 'Shawn D. Hudspeth', '2022');
console.log(book1)
console.log(book1.getSummary())
book1.revise('2022');
console.log(book1);
//Magazine Constructor
function Magazine(title, author, year, month){
    Book.call(this, title,author, year);
    
    this.month= month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine Object
const mag1= new Magazine('The Quantum Computing Times', 'Someone Else Smarter Than Me',
 '2020', 'December');
// Use Magazine Constructor
Magazine.prototype.constructor= new Magazine('The Quantum Computing Times', 'Someone Else Smarter Than Me',
'2020', 'December');

console.log(mag1);

//Object Of Protos
const bookProtos ={
    getSummary: function() {
        return `${this.title} is ${year} years old`;
    },
    getAge: function(){
        const years= new Date().getFullYear()-
        this.year;
        return`${this.title} is ${years} years old`;
    }
}

// Create Object
const book2= Object.create(bookProtos);
book2.title='Book Two';
book2.author='John Doe';
book2.year='2015';

console.log(book2);