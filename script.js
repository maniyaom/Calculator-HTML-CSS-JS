function clearAll(){
    document.querySelector("#query").value = "";
    document.querySelector("#answer").value = "";
}

function clearLast(){
    let x = document.querySelector("#query").value;
    x = x.slice(0,x.length - 1);
    document.querySelector("#query").value = x;
}

function calculate(){
    let x;
    try{
        x = eval(document.querySelector("#query").value);
    } catch{
        document.querySelector("#answer").value = "Invalid Sytanx";
    }
    if(x.toString().length > 13){
        x = x.toFixed(11);
    }
    document.querySelector("#answer").value = x;
    equalBtnState = true;
}

function isOperator(character) {
    let operators = ['+', '-', '*', '/', '%'];
    let isOperator = false;
    for (const q of operators) {
        if (q == character) {
            isOperator = true;
            break;
        }
    }
    return isOperator;
}

let equalBtnState = false;
let buttons = document.querySelectorAll(".btn-inp");
let opState = false;
for (const i of buttons){
    i.addEventListener("click",(e) => {
        if(equalBtnState == true){
            if(isOperator(i.innerHTML)){
                document.querySelector("#query").value = document.querySelector("#answer").value + i.innerHTML;
            }
            else{
                document.querySelector("#query").value = i.innerHTML;
            }
            equalBtnState = false;
        }
        else{
            document.querySelector("#query").value += i.innerHTML;
        }
    })
}