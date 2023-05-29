/* -------------------------------------------------------------------------- */
/*                      (Data Types, Operators, Strings)                      */
/* -------------------------------------------------------------------------- */
//Scrie un program care primește de la utilizator două cuvinte și le concatenează într-un 
//singur șir de caractere. Apoi, determină lungimea șirului rezultat și afișează în consolă.
console.log("-----Exercitiul 1-----")
const primul=prompt("introdu un cuvant");
const al2lea=prompt("introdu un cuvant");
const sirCaractere=primul+al2lea;
console.log(sirCaractere.length)


/* -------------------------------------------------------------------------- */
/*                        (Functions, Arrays, Strings)                        */
/* -------------------------------------------------------------------------- */
//Scrie o funcție care primește un șir de caractere și returnează un array conținând fiecare 
//caracter al șirului ca element separat. Apoi, apelează funcția cu un șir introdus de utilizator 
//și afișează array-ul rezultat în consolă.
console.log("-----Exercitiul 2-----");
const sir=prompt("introdu un text");

function separare (sir){
    
        var arrSir=sir.split("");
       
    
    console.log(arrSir);
}
separare(sir)


/* -------------------------------------------------------------------------- */
/*                              (Loops, Strings)                              */
/* -------------------------------------------------------------------------- */
//Scrie un program care primește un șir de caractere de la utilizator și afișează fiecare caracter 
//al șirului în ordine inversă, folosind un loop.
console.log("-----Exercitiul 3-----");
var text=prompt("introdu un text");
function inversare(text){
    var textNou="";
    for(i=text.length-1;i>=0;i--)
        {
        textNou=textNou+text[i];
    }
    return textNou
}
console.log(inversare(text))


/* -------------------------------------------------------------------------- */
/*                         (Objects, Arrays, Strings)                         */
/* -------------------------------------------------------------------------- */
//Creează un obiect care reprezintă o persoană, având proprietăți precum nume, vârstă și hobburi 
//(reprezentate printr-un array de șiruri de caractere). Apoi, afișează un mesaj în consolă care 
//să conțină informații despre persoană, folosind proprietățile obiectului.
console.log("-----Exercitiul 4-----")
const persoana={
    nume:"Dogaru",
    prenume:"Roxana",
    varsta:28,
    localitate:"Bucuresti",
    hobbyuri: ['handbal','citit','filme','calatorii']
}
console.log(`Ma numesc ${persoana.prenume} ${persoana.nume}, am ${persoana.varsta},sunt din ${persoana.localitate} si am urmatoarele hobbyuri ${persoana.hobbyuri}`)


/* -------------------------------------------------------------------------- */
/*                             (For Loop, Strings)                            */
/* -------------------------------------------------------------------------- */
//Scrie un program care primește un șir de cuvinte separate prin spații de la utilizator. 
//Folosind un loop, afișează fiecare cuvânt în consolă, împreună cu numărul de caractere pe care îl conține.
console.log("-----Exercitiul 5-----")

var sirCuvinte=prompt("introdu un sir de cuvinte separate prin spatii");
var sirArray=sirCuvinte.split(" ");
for(i=0;i<sirArray.length;i++){
    var cuvant=sirArray[i];
    console.log(`cuvantul ${sirArray[i]} are ${cuvant.length} caractere`)
}