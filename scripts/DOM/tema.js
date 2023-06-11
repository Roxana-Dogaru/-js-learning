/* ----------- Exercițiul 1: Schimbarea culorii de fundal la clic ----------- */
//Creați un element HTML cu un anumit ID.
//Adăugați un eveniment de clic la acest element. 
//În funcția de tratare a evenimentului de clic, schimbați culoarea de fundal a elementului.
console.log("======Ex 1======")

const newP=document.createElement("p");
const textNewP=document.createTextNode("Sunt nou aici");
newP.appendChild(textNewP);
const parentNewP=document.getElementsByClassName("parent");
parentNewP.appendChild(newP)





