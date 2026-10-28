function add() {
        let firstNumber= document.getElementById("firstNo").value;
        let secondNumber= document.getElementById("secondNo").value;
        let total= +firstNumber + +secondNumber;
        let ouranswer= document.getElementById("answer");
        ouranswer.innerHTML= `The answer is ${total}`;
        let oursign= document.getElementById("sign");
        oursign.innerHTML= `+`
      }

function sub() {
    let firstNumber= document.getElementById("firstNo").value;
    let secondNumber= document.getElementById("secondNo").value;
    let total= firstNumber - secondNumber;
    let ouranswer= document.getElementById("answer");
    ouranswer.innerHTML= `The answer is ${total}`;
    let oursign= document.getElementById("sign");
    oursign.innerHTML= `-`
}

function multiply() {
    let firstNumber= document.getElementById("firstNo").value;
    let secondNumber= document.getElementById("secondNo").value;
    let total= firstNumber * secondNumber;
    let ouranswer= document.getElementById("answer");
    ouranswer.innerHTML= `The answer is ${total}`;
    let oursign= document.getElementById("sign");
    oursign.innerHTML= `x`
}

function div() {
    let firstNumber= document.getElementById("firstNo").value;
    let secondNumber= document.getElementById("secondNo").value;
    let total= firstNumber / secondNumber;
    let ouranswer= document.getElementById("answer");
    ouranswer.innerHTML= `The answer is ${total}`;
    let oursign= document.getElementById("sign");
    oursign.innerHTML= `/`
}


/* secondDiv JavaScript */
//Retire calculator

function retirecalc(){
    let thisyear = new Date().getFullYear();
    let yearofBirth = document.getElementById("onlyNo").value;
    let age = thisyear - +yearofBirth;

    let myanswer= document.getElementById("finalize");
    if (!yearofBirth){
        `Please enter a valid year!`
        return yearofBirth;
    }else if(age === 64) {
         myanswer.innerHTML= `You are ${age} yrs old. You will retire next year.`
    }else if (age == 66) {
         myanswer.innerHTML= `You are ${age} yrs old. You suppose to retire last year.`
    }else if (age == 65) {
        myanswer.innerHTML= `You are ${age} yrs old. You suppose to retire this year.`
    }else if (age < 65) {
        myanswer.innerHTML= `You are ${age} yrs old. You will retire in ${65-age} yrs time.`
    } else {
        myanswer.innerHTML= `You are ${age} yrs old. You are supposed to be retired ${age-65} yrs ago.`
    }
   
}
