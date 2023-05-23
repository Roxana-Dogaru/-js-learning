console.log("---Exercitiul - 1---");
//1. Scrie o funcție care primește un număr și returnează true dacă este par, altfel false. 

function parImpar(number){
    if(number%2 == 0){
        rezultat= true
    }else {
        rezultat= false
    } 
    return rezultat
}
console.log(parImpar(50))


console.log("---Exercitiul - 2---");
//2. Scrie o funcție care primește două numere și returnează suma lor inmultita cu 0.1 
function suma(nr1 ,nr2){
    rezultat = (nr1 + nr2)*0.1
    return rezultat;
}
console.log(suma(20,80));


console.log("---Exercitiul - 3---");
//3. Scrie o functie care calculeaza procentajul dintr-un numar. Procentajul si numarul se introduc ca parametrii. 
function procentaj(nr,procent){
    rezultat = nr * procent/100;
    return rezultat;
}
console.log(procentaj(10,30))




console.log("---Exercitiul - 4---");
//4. Scrie o funcție care primește trei numere și returnează cel mai mare dintre ele.
function maiMare (a,b,c){
    if((a>b)&&(a>b)){
        rezultat=a;
    }else if((b>a)&&(b>c)) {
        rezultat=b;
    }else if((c>a)&&(c>b)){
        rezultat=c;
    }else if((a=b)||(a=c)||(b=c)||(a=b=c)){
        rezultat="cel putin 2 dintre numerele sunt egale";
    }
    return rezultat    
}
console.log(maiMare(10,10,3))


console.log("---Exercitiul - 5---"); 
//5. Scrie o funcție care primește un număr și returnează suma tuturor numerelor întregi de la 0 până la acel număr.
function sum(numar) {
    if (numar>0){
        
        sumaNumerelor=numar*(numar+1)/2;
    }else{
        console.log("introdu un numar mai mare ca 0")
    }
    return sumaNumerelor;
};
console.log(sum(10));


console.log("---Exercitiul - 6---");
//6. Scrie o funcție care primește un număr și returnează true dacă este prim, altfel false. 
var numarDivizor=0;
function prim(valoare){
    for(i=1; i<=valoare; i++){
        if(valoare%i == 0){
            numarDivizor++;
        }
    }
    if(numarDivizor==2){
        rezultat=true
    }else {
        rezultat=false
    }
    return rezultat
}
console.log(prim(7))


console.log("---Exercitiul - 7---");
//7. Scrie o funcție care primește ca parametru o valoare numerica, iar apoi verifică dacă acea valoare este mai mare sau mai mică decât 0. Funcția trebuie să returneze un mesaj diferit în fiecare caz. 
function verificaCu0(numar){
    if(numar>0){
        rezultat="numarul este mai mare ca 0"
    }else if(numar<0){
        rezultat="numarul este mai mic ca 0"
    } else {
        rezultat="numarul este egal cu 0"
    }
    return rezultat
}
console.log(verificaCu0(-50))


console.log("---Exercitiul - 8---");
//8. Scrie o functie care afiseaza toate numerele pare dintre un min si maxim dat ca parametru 

function interval(numar1,numar2){
    var numerePare="";
    for (i=numar1+1;i<=numar2;i++){
        var separator= i<numar2 ? ";" : "";
        if(i%2==0){
           
            numerePare=numerePare + i +separator;
        }else {
            numerePare = numerePare
        }
    }
    return numerePare
}
  console.log(interval(1,50))


 
  console.log("---Exercitiul - 9---");
//9. Scrie o functie care primeste 3 numere si afiseaza sir crescator cu acele numere. 
function ordoneazaCrescator(a,b,c){
    if((a<b)&&(b<c)){
        console.log(a,b,c)
    }else if ((a<c)&&(c<b)){
        console.log(a,c,b)
    }else if ((b<a)&&(a<c)){
        console.log(b,a,c)
    }else if ((b<c)&&(c<a)){
        console.log(b,c,a)
    }else if ((c<a)&&(a<b)){
        console.log(c,a,b)
    }else if ((c<b)&&(b<c)){
        console.log(c,b,a)
    }
}
ordoneazaCrescator(2,8,1)




console.log("---Exercitiul - 10---");
//10. Scrie o functie care primeste 3 numere si afiseaza sir descrescator cu acele numere. 
function ordoneazaDescrescator(a,b,c){
    if((a>b)&&(b>c)){
        console.log(a,b,c)
    }else if ((a>c)&&(c>b)){
        console.log(a,c,b)
    }else if ((b>a)&&(a>c)){
        console.log(b,a,c)
    }else if ((b>c)&&(c>a)){
        console.log(b,c,a)
    }else if ((c>a)&&(a>b)){
        console.log(c,a,b)
    }else if ((c>b)&&(b>c)){
        console.log(c,b,a)
    }
}
ordoneazaDescrescator(9,5,7)



console.log("---Exercitiul - 11---");
//11. Scrie o functie care primeste 1 numar si afiseaza tabla inmultirii pentru acel numar. 
function tablaInmultirii (numar){
    for (i=0;i<=10;i++){
        console.log(numar + " * " + i + " = " + numar*i)
    }
   
}
tablaInmultirii(7)




//12. Scrie o functie care primeste 3 parametrii: nr persoane, locuri disponibile, mese. 
//Aseaza numarul de persoane la mese astfel incat sa nu ramana nici o masa libera, 
//iar la final afiseaza cate locuri libere au ramas (total). 


console.log("---Exercitiul - 13---");
//13. Scrie o functie care primeste 1 singur parametru. Acest parametru defineste care dintre 
//functiile de mai sus este apelata. Afiseaza parametru primit, numele functiei apelate precum 
//si raspunsul acelei functii. 
function tema(nrExercitiu){
    var rezultat;
    switch(nrExercitiu){
        
        case "Ex-1":
            rezultat = "parametrul primit: Ex-1; " + " nume functie: parImpar ->rezultat functie: " + parImpar(50);
            break;
        case "Ex-2":
            rezultat = "parametrul primit: Ex-2; " + " nume functie: suma ->rezultat functie: " + suma(2,7);
            break;
        case "Ex-3":
            rezultat = "parametrul primit: Ex-3; " + " nume functie: procentaj ->rezultat functie: " + procentaj(10,30);
            break;
        case "Ex-4":
            rezultat = "parametrul primit: Ex-4; " + " nume functie: maiMare ->rezultat functie: " + maiMare(10,10,3);
            break;
        case "Ex-5":
            rezultat = "parametrul primit: Ex-5; " + " nume functie: sum ->rezultat functie: " + sum(10);
            break;
        case "Ex-6":
            rezultat = "parametrul primit: Ex-6; " + " nume functie: prim ->rezultat functie: " + prim(7);
            break;
        case "Ex-7":
            rezultat = "parametrul primit: Ex-7; " + " nume functie: verificaCu0 ->rezultat functie: " + verificaCu0(-50);
            break;
        case "Ex-8":
            rezultat = "parametrul primit: Ex-8; " + " nume functie: interval ->rezultat functie: " + interval(1,50);
            break;
        case "Ex-9":
            rezultat = "parametrul primit: Ex-9; " + " nume functie: ordoneazaCrescator ->rezultat functie: " + ordoneazaCrescator(2,8,1);
            break;
        case "Ex-10":
            rezultat = "parametrul primit: Ex-10; " + " nume functie: ordoneazaDescrescator ->rezultat functie: " + ordoneazaDescrescator(9,5,7);
            break;
        case "Ex-11":
            rezultat = "parametrul primit: Ex-11; " + " nume functie: tablaInmultirii ->rezultat functie: " ;
            console.log(rezultat, tablaInmultirii(7));
            
            
            break
    } 

    return rezultat
}
console.log(tema("Ex-11"))






console.log("---Exercitiul - 14---");
//14. Scrie o functie care primeste anul nasterii si calculeaza varsta in functie de anul curent. 
function varsta(anulNasterii){
    const date=new Date();
    var anCurent=date.getFullYear();
    rezultat = anCurent - anulNasterii;

    return rezultat
}
console.log(varsta(1987))





//15. Scrie o functie care calculeaza anii unui animal de companie dat ca parametru (caine sau pisica / daca alegi si altceva, go for it)
