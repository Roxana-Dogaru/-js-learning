/* -------------------------------------------------------------------------- */
/*                  Exercițiul 1: Calcularea sumei vârstelor                  */
/* -------------------------------------------------------------------------- */
//Primești un obiect studenti care conține informații despre studenți, inclusiv numele și vârsta lor.
//Calculează suma vârstelor tuturor studenților și returnează rezultatul.
console.log("-----Exercitiul-1-----")
var studenti = {
  student1: { nume: "John", varsta: 20 },
  student2: { nume: "Alice", varsta: 22 },
  student3: { nume: "Mark", varsta: 19 }
};

function calcSumVarstelor(studenti){
    var suma=0;
    for(var studentCurent in studenti) {
   
        suma+=studenti[studentCurent].varsta
        
    }
    return console.log("suma tuturor studentilor este: " +suma)

}
calcSumVarstelor(studenti)



/* -------------------------------------------------------------------------- */
/*                Exercițiul 2: Concatenarea numelor de familie               */
/* -------------------------------------------------------------------------- */
//Primești un obiect familii care conține numele tatălui și al mamei pentru fiecare familie.
//Concatenează numele de familie pentru fiecare familie și returnează rezultatul sub formă de șir de caractere.
console.log("-----Exercitiul-2-----")
var familii = {
  familie1: { numeTata: "Popescu", numeMama: "Ionescu" },
  familie2: { numeTata: "Radu", numeMama: "Georgescu" }
};

function concateneazaNumele(familii){
    var numeConcatenat = "";
    for(var familieCurenta in familii){
        numeConcatenat+= familii[familieCurenta].numeTata+familii[familieCurenta].numeMama;

    }
    return console.log(numeConcatenat)
}
concateneazaNumele(familii)


/* -------------------------------------------------------------------------- */
/*                Exercițiul 3: Găsirea celui mai mare punctaj                */
/* -------------------------------------------------------------------------- */
//Primești un obiect elevi care conține informații despre elevi, inclusiv numele și punctajul lor.
//Găsește cel mai mare punctaj dintre toți elevii și returnează rezultatul.
console.log("-----Exercitiul-3-----")
var elevi = {
  elev1: { nume: "Maria", punctaj: 80 },
  elev2: { nume: "Alex", punctaj: 95 },
  elev3: { nume: "Andrei", punctaj: 85 }
};
function celMaiBunPunctaj(elevi){
    var celMaiMarePunctaj=0;
    for (var elevCurent in elevi){
        if(elevi[elevCurent].punctaj>celMaiMarePunctaj)
        celMaiMarePunctaj=elevi[elevCurent].punctaj
    }
    return console.log(celMaiMarePunctaj)
}
celMaiBunPunctaj(elevi)


/* -------------------------------------------------------------------------- */
/*       Exercițiul 4: Verificarea existenței unui email într-un obiect       */
/* -------------------------------------------------------------------------- */
//Primești un obiect utilizatori care conține informații despre utilizatori, inclusiv numele și adresa de email.
//Verifica dacă o anumită adresă de email există în obiectul utilizatori și returnează true sau false.
console.log("-----Exercitiul-4-----")
var utilizatori = {
  utilizator1: { nume: "John", email: "john@example.com" },
  utilizator2: { nume: "Alice", email: "alice@example.com" }
};

var emailCautat=prompt("please enter an email")
function verificaExistentaEmail(utilizatori, emailCautat) {
    
    for (var utilizator in utilizatori) {
      if (utilizatori[utilizator].email === emailCautat) {
        return true;
      }
    }
  
    return false;
}
console.log(verificaExistentaEmail(utilizatori, emailCautat))


/* -------------------------------------------------------------------------- */
/*    Exercițiul 5: Calcularea numărului total de persoane dintr-un obiect    */
/* -------------------------------------------------------------------------- */
//Primești un obiect angajati care conține informații despre angajați, inclusiv numele și vârsta lor.
//Calculează numărul total de persoane din obiectul angajati și returnează rezultatul.
console.log("-----Exercitiul-5-----")
var angajati = {
  departament1: { nume: "John", varsta: 30 },
  departament2: { nume: "Alice", varsta: 35 },
  departament3: { nume: "Mark", varsta: 28 }
};

function nrAngajati(angajati){
    var totalAngajati=0;
    for(var departament in angajati){
        totalAngajati++
    }
    return totalAngajati
}
console.log(nrAngajati(angajati))


/* -------------------------------------------------------------------------- */
/*    Exercițiul 6: Verificarea existenței unui departament într-un obiect    */
/* -------------------------------------------------------------------------- */
//Primești un obiect companie care conține informații despre departamentele dintr-o companie, 
//inclusiv numele și vechimea lor.
//Verifică dacă un anumit departament există în obiectul companie și returnează true sau false.
console.log("-----Exercitiul-6-----")
var companie = {
  departamentIT: { nume: "John", vechime: 5 },
  departamentVanzari: { nume: "Alice", vechime: 3 }
};

var departament=prompt("introdu un departament")
function verificaDepartament (companie,departament){
    for( var dep in companie){
        if(departament===dep){
            return true;
        }
        return false
    }
}
console.log(verificaDepartament (companie,departament))


/* -------------------------------------------------------------------------- */
/*     Exercițiul 7: Verificarea existenței unei calificări într-un obiect    */
/* -------------------------------------------------------------------------- */
//Primești un obiect candidati care conține informații despre candidați, inclusiv numele și o 
//listă de calificări.
//Verifică dacă o anumită calificare există în obiectul candidati și returnează true sau false.
console.log("-----Exercitiul-7-----")
var candidati = {
  candidat1: { nume: "Maria", calificari: ["HTML", "CSS", "JavaScript"] },
  candidat2: { nume: "Alex", calificari: ["Java", "Python", "C++"] }
};

var calificareCautata=prompt("introdu o calificare:");
function cautareCalificare(candidati,calificareCautata){
    for(var candidat in candidati){
        var calificari = candidati[candidat].calificari;
  
        for (var i = 0; i < calificari.length; i++) {
    
          if (calificari[i] === calificareCautata) {
            return true;
          }
        }
      }
    
      return false;
}
console.log(cautareCalificare(candidati,calificareCautata))