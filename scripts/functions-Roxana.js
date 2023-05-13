/* -------------------------------------------------------------------------- */
/*                                exercitiul 1                                */
/* -------------------------------------------------------------------------- */
//Scrie o funcție care primește ca argument o valoare numerica, iar apoi verifică dacă acea valoare 
//este mai mare sau mai mică decât 10. Funcția trebuie să returneze un mesaj diferit în fiecare caz.

console.log("exercitiul-1");

function verifica(number){
    if(number<10){
        rezultat="numarul este mai mic ca 10"
    }else if(number >10){
        rezultat="numarul este mai mare ca 10"
    }else {
        rezultat="numarul este egal cu 10"
    }

    return rezultat

}

console.log(verifica(10));


/* -------------------------------------------------------------------------- */
/*                                exercitiul 2                                */
/* -------------------------------------------------------------------------- */
//Scrie o funcție care primește ca argument un număr și verifică dacă acel număr este un număr prim. 
//Funcția trebuie să returneze true dacă numărul este prim și false în caz contrar.

console.log("exercitiul-2");
var numarDivizor=0;
function prim(valoare){
    for(i=1; i<=valoare; i++){
        if(valoare%i == 0){
            numarDivizor++;
        }
    }
    if(numarDivizor==2){
        rezultat="numarul este prim"
    }else {
        rezultat="numarul nu este prim"
    }
    return rezultat
}
console.log(prim(18))


/* -------------------------------------------------------------------------- */
/*                                exercitiul 3                                */
/* -------------------------------------------------------------------------- */
//Scrie o funcție care primește ca argument un număr și calculează suma tuturor numerelor 
//între 0 și acel număr.

console.log("exercitiul-3");

function sum(numar) {
    if (numar>0){
        
        sumaNumerelor=numar*(numar+1)/2;
    }else{
        console.log("introdu un numar mai mare ca 0")
    }
    return sumaNumerelor;
};
console.log(sum(10));