const numbers = document.getElementsByClassName('numbers')
const result = document.querySelector('.result span')
const signs = document.getElementsByClassName('sign')
const equals = document.querySelector('.equals')
const negative = document.querySelector('.negative')
const percent = document.querySelector('.percent')
const clear = document.querySelector('.AC')

let firstValue = "";
let isFirstValue = false;
let secondValue ="";
let isSecondValue = false;
let sign = "";
let resultValue = 0;

for(let i=0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e)=>{
        let att = e.target.getAttribute('value');
        if(isFirstValue === false){
            getFirstValue(att);
        }
        if(isSecondValue === false){
            getSecondValue(att);
        }
    })
}


const getFirstValue = (fV)=>{
    result.innerHTML = ""
    firstValue += fV;
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}
const getSecondValue = (sV) =>{
    if(firstValue != "" && sign != ""){
        secondValue += sV;
        result.innerHTML =secondValue;
        secondValue = +secondValue;
    }
}

const getSign = () =>{
    for(let i=0; i < signs.length; i++){
        signs[i].addEventListener('click', (e)=>{
            sign = e.target.getAttribute('value');
            isFirstValue = true;
        })
    }
}

getSign();

equals.addEventListener('click', ()=>{
    result.innerHTML="";
    if(sign === '+'){
        resultValue = firstValue+secondValue;
    }
    else if(sign === '-'){
        resultValue = firstValue-secondValue;
    }
    else if(sign === '/'){
        resultValue = firstValue/secondValue;
    }
    else if(sign === 'X'){
        resultValue = firstValue*secondValue;
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
    checkResultLength();
})

const checkResultLength = ()=>{
    resultValue = JSON.stringify(resultValue)

    if(resultValue.length >=8){
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', ()=>{
    result.innerHTML ="";
    if(firstValue != ""){
        resultValue = -firstValue;
        firstValue = resultValue;
    }
    if(secondValue != ""){
        resultValue = -secondValue;
    }
    // if(firstValue != "" && secondValue != "" && sign !=""){
    //     resultValue = -resultValue;
    // }
    result.innerHTML = resultValue;
})

percent.addEventListener('click',()=>{
    result.innerHTML = "";
    if(firstValue != ""){
        resultValue = firstValue /100;
        firstValue = resultValue;
    }
    // if(firstValue != "" && secondValue != "" && sign !=""){
    //     resultValue = resultValue/100;
    // }
    if(secondValue != ""){
        secondValue = secondValue/100;
        result.innerHTML = secondValue;
        // secondValue = resultValue;
    }
    result.innerHTML = resultValue;
})

clear.addEventListener('click', ()=>{
    result.innerHTML = 0;
    
    firstValue = "";
    isFirstValue = false;
    secondValue ="";
    isSecondValue = false;
    sign = "";
    resultValue = 0;
})