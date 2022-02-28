var display = document.querySelector('h1');
var inputbt = document.querySelectorAll('button');


var operand1 = 0;
var operand2 = null;
var operator = 0;
function isOperator(vals){
return vals == "+" || vals == "-" || vals == "*" || vals == "/";
}
for(var i =0;i<inputbt.length;i++){
    
    inputbt[i].addEventListener('click', function(){
        var val = this.getAttribute('value');
        var text = display.textContent;
        if(isOperator(val)){
            operator=val;
            operand1 = parseFloat(text);

            display.textContent = "";
        }
        else if(val=="AC"){
            display.textContent = "0";
        }
        else if(val=="sign"){
            operand1 = parseFloat(text);
            operand1 = -1 * operand1;
            display.textContent = operand1;
        }else if(val=="%"){
            operand1 = parseFloat(text);
            operand1 =operand1/100;
            display.textContent = operand1;
        }else if(val=="."){
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        }else if(val=="="){
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else {
            if(text=="0"){
                display.textContent="";
                display.textContent+=val;   
            }
            else{
                display.textContent+=val; 
            }
        }
        
    });
}

