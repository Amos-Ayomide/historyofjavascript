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
        myanswer.innerHTML= `Please enter a valid year!`
        
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



//INVESTMENT CALCULATOR//
function investcalc() {
    let amount= document.getElementById("onlyNo2").value;
    let duration= document.getElementById("duration1").value;
    let roi= 15 / 100;
    let interest= (amount*roi) * (duration /12);
    let total= interest+ +amount

    let myanswer= document.getElementById("investans");
    if (duration==1) {
        myanswer.innerHTML= `Your investment interest for ${duration} month is ₦${interest}`
    }
    else{
        myanswer.innerHTML= `Your investment interest for ${duration} months is ₦${interest}`
    };
    let myanswer2= document.getElementById("investansp");
    myanswer2.innerHTML= `The total amount you get back is ₦${total}`;
}


/* Loan Calculator */
function loancalc() {
    let amount= document.getElementById("onlyNo3").value;
    let duration= document.getElementById("duration2").value;
    let ir= 15 / 100;
    let interest= amount*ir*duration;
    let total= interest+ +amount;
    let monthly= +total / +duration;

    let myanswer= document.getElementById("loanout");
    if (duration==1) {
        myanswer.innerHTML= `Your investment interest for ${duration} month is ₦${interest}`
    }
    else{
        myanswer.innerHTML= `Your loan interest for ${duration} months is ₦${interest}`
    };
    let myanswer2= document.getElementById("loanoutans");
    myanswer2.innerHTML= `The total amount you pay back is ₦${total}. <br>
    The amount you pay back monthly is ₦${monthly}`;
}
