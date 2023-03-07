const numbersContainerDom = document.querySelector('.numbersContainer');
const scoreDom = document.getElementById('score');
const startDom = document.getElementById('start');
const userMessageDom = document.getElementById('userMessage');


startDom.addEventListener('click', function(){

    userMessageDom.classList.add('d-none');
    numbersContainerDom.classList.remove('d-none');
    scoreDom.classList.add('d-none');
    sortedNumber = createSlotsOfRandomNumbers(5, numbersContainerDom);
    
    console.log(sortedNumber);
    
    setTimeout(startGame, 30000); //30000
    setTimeout(function(){
        userPrompt(sortedNumber);
    }, 31000); //31000
});





function createSlotsOfRandomNumbers(quantity, domContainer){
    console.log();
    domContainer.innerHTML = '';
    let numbers = [];
    for(i=0; i < quantity; i++){
        numbers.push(createUniqueNumberedSlot(domContainer, numbers));
    }
    return numbers;
}

function createUniqueNumberedSlot(domContainer, blacklistArray){
    let newSlot = document.createElement('div');
    let slotsNumber = document.createElement('div');
    let number = createUniqueRandomNumber(blacklistArray, 0, 100);
    slotsNumber.append(number);
    slotsNumber.classList.add('number');
    slotsNumber.classList.add('d-flex');
    newSlot.append(slotsNumber);
    newSlot.classList.add('slot');
    domContainer.append(newSlot);
    return number;
}

function randomNumber(min, max){
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}

function createUniqueRandomNumber(arrayOfNumber, min, max){
    let alreadyExist = true;
    let newNumber;
    while(alreadyExist){
        newNumber = randomNumber(min, max);
        if(!arrayOfNumber.includes(newNumber)){
            alreadyExist = false;
        }
    }
    return newNumber;
}

function startGame(){
    const numbers = document.getElementsByClassName('number');
    for(i=0; i < numbers.length; i++){
        numbers[i].classList.remove('d-flex');
        numbers[i].classList.add('d-none');
    }
}

function userPrompt(checkList){
    const numbers = document.getElementsByClassName('number');
    let userChoosenNumber = [];
    let rightInputNumber = [];
    let number;
    let foundNumber = 0;
    for(i=0; i < checkList.length; i++){
        do{
            number = parseInt(prompt(`Inserisci il ${i+1}° numero`));
        }
        while(isNaN(number) || (number < 0 || number > 100) || userChoosenNumber.includes(number))
        userChoosenNumber.push(number);
        if(checkList.includes(number)){
            foundNumber++
            rightInputNumber.push(number);
        } 
    }
    console.log(rightInputNumber);
    console.log("checkList.length=",checkList.length);
    for(i=0; i < checkList.length; i++){
        if(userChoosenNumber.includes(checkList[i])){
            numbers[i].classList.add('found');
            console.log(`userChoosenNumber: ${userChoosenNumber} checkList[i]: ${checkList[i]}`);
        } else {
            numbers[i].classList.add('noFound');
        }
    }

    for(i=0; i < numbers.length; i++){
            numbers[i].classList.add('d-flex');
        }
        scoreDom.classList.remove('d-none');
        scoreDom.innerHTML = `Hai indovinato ${foundNumber} numeri!`;
}
