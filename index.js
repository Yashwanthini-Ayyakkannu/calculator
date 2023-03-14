let operand1;
let operand2;
let operator;
let result;
document.getElementById("operation").onclick=function(){
    operand1=Number(document.getElementById("op1").value);
    operand2=Number(document.getElementById("op2").value);
    operator=document.getElementById("op").value;
    if(operator=='+'){
       result=operand1+operand2;
       document.getElementById("result").innerHTML=result;
    }
    else if(operator=='-'){
        result=operand1-operand2;
        document.getElementById("result").innerHTML=result;
     }
    else if(operator=='*'){
        result=operand1*operand2;
        document.getElementById("result").innerHTML=result;
     }
    else if(operator=='/'){
        result=operand1/operand2;
        document.getElementById("result").innerHTML=result;
     }
    else if(operator=='%'){
        result=operand1%operand2;
        document.getElementById("result").innerHTML=result;
     }
    else{
        document.getElementById("operation").innerHTML="Please enter the vaild operands and operator";
    }

}