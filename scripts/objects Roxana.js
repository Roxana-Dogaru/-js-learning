/* -------------------------------------------------------------------------- */
/*               Exercițiul 1: Crearea și Manipularea Obiectului              */
/* -------------------------------------------------------------------------- */
//Creează un obiect numit person cu proprietățile name, age și city.
//Modifică proprietatea age a obiectului.
//Accesează și afișează proprietățile obiectului în consolă.
console.log("-----Exercitiul-1-----")
var person={
    name:"Roxana",
    age:"28",
    city:"Bucuresti",

}

person.age=30;

console.log(person)


/* -------------------------------------------------------------------------- */
/*                       Exercițiul 2: Metode în Obiect                       */
/* -------------------------------------------------------------------------- */
//Creează un obiect numit calculator cu o metodă numită sum care primește doi parametri și returnează suma lor.
//Folosește metoda sum pentru a calcula suma a două numere și afișează rezultatul în consolă.
console.log("-----Exercitiul-2-----")
var calculator={
    sum:function(a,b){
        return a+b
    }
}

console.log(calculator.sum(5,8))


/* -------------------------------------------------------------------------- */
/*                 Exercițiul 3: Obiecte Înăuntrul Obiectelor                 */
/* -------------------------------------------------------------------------- */
//Creează un obiect numit car cu proprietățile make, model și year.
//Adaugă un obiect numit engine în interiorul obiectului car, care are proprietățile power și fuelType.
//Accesează și afișează proprietatea power a obiectului engine în consolă.
console.log("-----Exercitiul-3-----")
var car={
    make:"audi",
    model:"A4",
    year:"2015"
}

car.engine={power:"500cai",fueltype:"diesel"}

console.log(car.engine.power)


/* -------------------------------------------------------------------------- */
/*                     Exercițiul 4: Compararea Obiectelor                    */
/* -------------------------------------------------------------------------- */
//Creează două obiecte book1 și book2 cu proprietățile title și author.Compară proprietățile obiectelor
//book1 și book2 și afișează un mesaj în consolă indicând dacă sunt egale sau nu.
console.log("-----Exercitiul-4-----")
var book1={
    title:"vine vara",
    author:"andrei s"
}

var book2={
    title:"vine iarna",
    author:"andrei s"
}

if(book1.title==book2.title){
    
    console.log("cartile au acelasi titlu");}
    else{
        console.log("cartile nu au acelasi titlu");
    }


if(book1.author==book2.author){
    console.log("cartile au acelasi autor");}
else{
        console.log("cartile nu au acelasi autor");
    }

