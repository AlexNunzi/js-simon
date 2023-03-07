const numbersContainerDom = document.querySelector('.numbersContainer');
const startDom = document.getElementById('start');
const userMessageDom = document.getElementById('userMessage');


startDom.addEventListener('click', function(){

    userMessageDom.classList.add('d-none');
    numbersContainerDom.classList.remove('d-none');
    let sortedNumber = [];
    
    sortedNumber = createSlotsOfRandomNumbers(5, numbersContainerDom, sortedNumber);
    
    console.log(sortedNumber);
    
    const playDelay = setTimeout(startGame, 3000); //30000

});





function createSlotsOfRandomNumbers(quantity, domContainer, blacklistArray){
    domContainer.innerHTML = '';
    let numbers = [];
    for(i=0; i < quantity; i++){
        numbers.push(createUniqueNumberedSlot(domContainer, blacklistArray));
    }
    return numbers;
}

function createUniqueNumberedSlot(domContainer, blacklistArray){
    let newSlot = document.createElement('div');
    let slotsNumber = document.createElement('div');
    let number = createUniqueRandomNumber(blacklistArray, 0, 100);
    slotsNumber.append(number);
    slotsNumber.classList.add('number');
    newSlot.append(slotsNumber);
    newSlot.classList.add('slot');
    domContainer.append(newSlot);
    console.log(number);
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
    console.log(numbers);
    for(i=0; i < numbers.length; i++){
        numbers[i].classList.add('d-none');
    }
}