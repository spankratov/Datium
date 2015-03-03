/**
 * Created by user on 02.03.2015.
 */


var current = 0;            //сюда считывается вводимое число
var firstArgument;          //сюда присваивается первый аргумент после нажатия + - * /
Operations = {              //виды операций
    addition:0,
    subtraction: 1,
    multiply: 2,
    division: 3
}
var operation;              //фиксирует операцию для выполнения


var addNumber = function(i){
    current = current * 10 + i;
    document.getElementById("editWide").value = current;
};
var setOperation = function(key){           //действует когда нажимаем на знак + - * /
    operation = key;
    firstArgument = current;
    current = 0;
};

var result = function(){
    //alert(firstArgument + ' = ' + typeof(firstArgument) + ' ' + current + ' = ' + typeof(current));
    if(operation === undefined){        //если не нажималась кнопка операции
        document.getElementById("editWide").value = firstArgument;
    }
    else{
       switch(operation) {               //производим необходимые операции, записываем результат в current
           case Operations.addition:
               firstArgument += current;
               break;
           case Operations.subtraction:
               firstArgument -= current;
               break;
           case Operations.multiple:
               firstArgument *= current;
               break;
           case Operations.division:
               firstArgument /= current;
               break;
       }
        document.getElementById("editWide").value = firstArgument;
        operation = undefined;
        current = 0;
    }
};


