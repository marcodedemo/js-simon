

// genero 5 numeri casuali
// li memorizzo e li stampo in pagina

// dopo 10 secondi dalla generazione dei numeri in pagina i numeri scompaiono

// l'utente deve inserire nei campi di input i numeri precedentemente scomparsi

// dopo che sono stati scritti 5 numeri dall'utente negli input il software dice quanti e quali numeri sono stati scritti correttamente


// creo un array di numeri randomici
let randomNumbers = [];

// creo un array contente gli elementi creati in pagina
// variabile GLOBALE
let createdDivElement = [];

// dichiaro la variabile corrispondente al contenitore dei numeri da stampare nel DOM
let numbersContainerElement = document.getElementById("numbers-container");

// dichiaro la variabile corrispondente agli inputs nel DOM 
let inputsElement = document.querySelectorAll(".input");;

// dichiaro la variabile corrispondente al bottone di check
let numberCheckElement = document.getElementById("submit-btn");

// dichiaro la variabile corrispondente al contenitore del testo del conto alla rovescia
let counterTextElement = document.getElementById("counter");

// dichiaro la variabile corrispondente all'elemento di testo nel DOM
let resultMessageElement = document.getElementById("message");

// dichiaro la variabile conto alla rovescia
let secondsLeft = 10;

// dichiaro la variabile contatore delle risposte giuste
let rightNumberCounter = 0;

// creo un array in cui inserire i numeri inseriti dall'utente
let userNumbers = [];

// dichiaro la variabile corrispondente al bottone di reset
let resetButtonElement = document.getElementById("reset-btn");



// creo un timeout che esegue la funzione removeNumbers dopo 10 secondi
setTimeout(removeNumbersAndShowInputs, 11000);

// creao un intervallo che richiama una funzione di countdown ogni secondo 
let count = setInterval(countdown, 1000);


for (let i = 0; i < 5; i++) {
    
    // creo un nuovo elemento in pagina 
    let newElement = document.createElement("div");

    // inserisco l'elemento creato in un array 
    createdDivElement.push(newElement);

    // gli assegno una classe di stile
    newElement.classList.add("number");

    // assegno la genitorialità
    numbersContainerElement.append(newElement);

    // salvo la variabile del numero randomico generato per poterla inserire nell'array
    let generatedRandomNumber = randomNumberGenerator(1,100);

    // inserisco nell'array dei numeri randomici i numeri generati
    randomNumbers.push(generatedRandomNumber);

    // scrivo all'interno del nuovo elemento un numero casuale
    newElement.innerText = generatedRandomNumber;


}


// evento click del pulsante check
numberCheckElement.addEventListener("click", function(){

    // rendo visibile il bottone di reset
    resetButtonElement.style.display = "block";

    // ciclo di controllo dei valori randomici generati e quelli inseriti dall'utente
    for (let u = 0; u < 5; u++) {
        

        if(Number(inputsElement[u].value) == randomNumbers[u]){

            userNumbers.push(Number(inputsElement[u].value));
            rightNumberCounter++;

        }else {
            
            userNumbers.push(Number(inputsElement[u].value));
        }

        
    }
    

    
    // controllo il numero di risposte corrette e stampo nel DOM il messaggio relativo al punteggio 
    if(rightNumberCounter == 0){

        resultMessageElement.innerHTML = "Non hai inserito alcun numero corretto";

    }else if(rightNumberCounter == 5){
        
        resultMessageElement.innerHTML = "Hai inserito tutti i numeri corretti!";
        
    }else if(rightNumberCounter == 1){
        
        resultMessageElement.innerHTML = "Hai inserito un solo numero corretto: <br> i numeri generati sono " + randomNumbers + "<br> i numeri inseriti sono " + userNumbers;

    }else{

        resultMessageElement.innerHTML = "Hai inserito " + rightNumberCounter + " numeri corretti: <br> i numeri generati sono " + randomNumbers + "<br> i numeri inseriti sono " + userNumbers;
    }
    


})


resetButtonElement.addEventListener("click", refreshPage);




/* -------------------------------------------------------------------------- */
/*                                  functions                                 */
/* -------------------------------------------------------------------------- */



/**
 * genera un valore randomico contenuto tra il valore min e il valore max
 * 
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */

function randomNumberGenerator (min,max){

    let randomNumber = Math.floor(Math.random()* (max - min + 1) + min);

    return randomNumber;
}



/**
 * Rimuove il contenuto degli elementi contenuti nell'array 
 * @returns {any}
 */

function removeNumbersAndShowInputs() {

    for (let i = 0; i < 5; i++) {
        
        createdDivElement[i].innerText = "?";
        inputsElement[i].style.display = "block";
    }

    numberCheckElement.style.display = "block";
    
}



/**
 * countdown stampato in pagina 
 * @returns {any}
 */
function countdown (){

    
    counterTextElement.innerText = secondsLeft;
    
    
    if(secondsLeft == 0){
        
        clearInterval(count);
        counterTextElement.style.display = "none";
    }
    
    secondsLeft-- ;
}


// ricarica la pagina
function refreshPage (){

    window.location.reload();
}