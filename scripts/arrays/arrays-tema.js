/* -------------------------------------------------------------------------- */
/*                    Ex 1 (Data Types, Operators, Arrays):                   */
/* -------------------------------------------------------------------------- */
//Scrie un program care primește de la utilizator trei numere și le adaugă într-un array. 
//Apoi, calculează suma numerelor din array și o afișează în consolă.
console.log("-----Exercitiul 1-----");

// metode de mai jos nu merge, pentru ca numere introduse vin ca si string

var a=Number(prompt("introdu un numar"));
var b=Number(prompt("introdu un numar"));
var c=Number(prompt("introdu un numar"));

var numere=[a,b,c];
var suma=0;
for (var i=0;i<numere.length;i++){
suma+= numere[i];

    
}
console.log(suma)








/* -------------------------------------------------------------------------- */
/*                        Ex 2 (If, Operators, Arrays):                       */
/* -------------------------------------------------------------------------- */
//Scrie un program care primește un array de la utilizator și verifică dacă există vreun 
//element negativ în array. Dacă da, afișează un mesaj corespunzător. Altfel, calculează 
//media numerelor din array și o afișează în consolă.
console.log("-----Exercitiul 2-----");

//Aceeasi problema de mai sus, numere vin ca string
//var arrayPrimit=prompt("introdu o serie de numere separate prin virgula");
//var arrayModif=arrayPrimit.split(',');
//var sum=0;
//console.log("array nou"+arrayModif)
//for (var i=0; i<arrayModif.length;i++){
    
    //if(arrayModif[i]<0){
        //console.log("ai introdus un numar negativ")
    //}else{
        //sum+=arrayModif[i];
        
    //}
   
//}
//console.log(sum)

var arrNou=[9,5,3,6,12,85];
var sum=0;
for (var i=0; i<arrNou.length;i++){
    
    if(arrNou[i]<0){
        console.log("ai introdus un numar negativ")
    }else{
        sum+=arrNou[i];
        
    }
   
}
console.log(sum/arrNou.length)



/* -------------------------------------------------------------------------- */
/*                      Ex 3 (Switch, Functions, Arrays):                     */
/* -------------------------------------------------------------------------- */
//Scrie un program care primește un cod de țară de la utilizator și afișează numele țării respective, 
//împreună cu o listă de capitale asociate. Folosește un obiect pentru a mapa codurile de țară la numele 
//țărilor și la array-uri cu capitalele corespunzătoare.
console.log("-----Exercitiul 3-----");
var codTara=prompt("introdu unul din urmatoarele coduri de tara: RO, ES, FR, DE").toUpperCase();

var tari={
    RO:{
        tara:"Romania",
        capitala:"Bucuresti"
    },
    ES:{
        tara:"Spania",
        capitala:"Madrid"
    },
    FR:{
        tara:"Franta",
        capitala:"Paris"
    },
    DE:{
        tara:"Germania",
        capitala:"Berlin"
    }

}



console.log("Tara: "+tari[codTara].tara+", are capitala la "+ tari[codTara].capitala)



/* -------------------------------------------------------------------------- */
/*                        Ex 4 (For, Arrays, Objects):                        */
/* -------------------------------------------------------------------------- */
//Scrie un program care primește de la utilizator un array de obiecte, fiecare obiect reprezentând un 
//produs (cu proprietăți precum nume, preț, cantitate). Calculează valoarea totală a
//produselor (preț x cantitate) și o afișează în consolă.
console.log("-----Exercitiul 4-----");
var magazin=[
    p1={
        nume:"unt",
        pret: 10,
        cantitate:5,
    },
    p2={
        nume:"lapte",
        pret: 8.5,
        cantitate:7,
    },
    p3={
        nume:"gris",
        pret: 4,
        cantitate:11,
    },
    p4={
        nume:"paine",
        pret: 3.5,
        cantitate:5,
    },
    p2={
        nume:"cafea",
        pret: 15,
        cantitate:4,
    },
    p2={
        nume:"suc",
        pret: 8,
        cantitate:12,
    },
]
 var valoareProduse = 0;
 for(i=0;i<magazin.length;i++){
    valoareProduse+=magazin[i].pret*magazin[i].cantitate
}
console.log("Valoarea totala a produselor din magazin este: "+valoareProduse)



 /* -------------------------------------------------------------------------- */
 /*            Ex 5 (While / Do-While, Functions, Arrays, Objects):            */
 /* -------------------------------------------------------------------------- */
//Scrie un program care primește de la utilizator un array de obiecte reprezentând studenți 
//(cu proprietăți precum nume, vârstă, note) și calculează media notelor pentru fiecare student. 
//Afișează numele și media fiecărui student în consolă.
console.log("-----Exercitiul 5-----");
var studenti=[
    student1={
        nume:"Alina",
        varsta:19,
        note:[10,5,8,9]
    },
    student2={
        nume:"Bogdan",
        varsta:20,
        note:[9,8,7,8]
    },
    student3={
        nume:"Iris",
        varsta:19,
        note:[10,3,7,6]
    },
    student4={
        nume:"Dan",
        varsta:21,
        note:[6,7,9,9]
    }
]
var medie=0;
var sumaNotelor=0
studenti.forEach(function (med) {
    for (i=0;i<med.note[i];i++){
        sumaNotelor+=med.note[i]
     }
     medie=sumaNotelor/med.note.length;
     console.log("Studentul: "+med.nume+" are media: "+medie)
})







