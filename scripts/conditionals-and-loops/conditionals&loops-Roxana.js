/* -------------------------------------------------------------------------- */
/*                                    Ex 1                                    */
/* -------------------------------------------------------------------------- */
//Scrie un program care afișează numerele de la 1 la 10 folosind o buclă do-while.
console.log("--exercitiul - 1--")

var x=1;
do{
    console.log(x);
    x++;
}while(x<=10)



/* -------------------------------------------------------------------------- */
/*                                    Ex 2                                    */
/* -------------------------------------------------------------------------- */
//Scrie un program care afișează toate numerele pare între 0 și 20 folosind o buclă for.
console.log("--exercitiul - 2--")

for(let i=0; i<20;i++){
    if(i%2==0){
        console.log(i)
    }
}



/* -------------------------------------------------------------------------- */
/*                                    Ex 3                                    */
/* -------------------------------------------------------------------------- */
//Scrie un program care citește două numere de la tastatură și afișează 
//toate numerele între aceste două numere folosind o buclă for.
console.log("--exercitiul - 3--")

var number1=prompt("number1");
var number2=prompt("number2");
if(number1<number2){
    for(a=number1; a<=number2; a++){
    console.log(a);
    }
}else{
    console.log("number1 trebuie sa fie mai mare ca number2")
}


/* -------------------------------------------------------------------------- */
/*                                    Ex 4                                    */
/* -------------------------------------------------------------------------- */
//Scrie un program care citește un șir de caractere de la tastatură și afișează numărul 
//de vocale folosind o buclă for și condiția pentru a determina dacă un caracter este o vocală.
console.log("--exercitiul - 4--")

var text=prompt("introdu un text");
var vocale="aAeEiIoOuU";
var nrVocale=0;
for(var i = 0; i < text.length ; i++) {
    if (vocale.indexOf(text[i]) !== -1) {
       nrVocale += 1;
   }
 }
 console.log(nrVocale)






/* -------------------------------------------------------------------------- */
/*                                    Ex 5                                    */
/* -------------------------------------------------------------------------- */
//Scrie un program care citește un număr de la tastatură și afișează tabla înmulțirii pentru 
//acel număr folosind o buclă for.
console.log("--exercitiul - 5--")

var numar=prompt("Adauga un numar intre 1 si 10");

for(i=0;i<=10;i++){
    console.log(numar+" * "+i+" = "+numar*i);
}


