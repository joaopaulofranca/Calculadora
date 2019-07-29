document.getElementById('mostrar').value = 0;
document.getElementById('history').innerHTML = 0;
var display = "";
var historic = '';
var QntOperator='';
var arOperadores = ["+", "-", "/", "*", "="];



function mostrardisplay(num) {

    if (isOsperador(num)) {

        if (num == '=') {
            historic = historic + display
            calculo()
        }else{
            historic = historic + display + num;
            setValueHistoric();
            clearValueDisplay()
        }
    } else {
        display = display + num;
        setValueDisplay();

    }
    if(QntOperator>1){
        QntOperator=QntOperator+1
        calculo()
    }
    
    if (num == 'c') {
        clearValueDisplay();
        clearValueHistoric()
    }

}


$(document).ready(function () {

    $('#botao9').click(function () {
        mostrardisplay(9);
    });
    $('#botao8').click(function () {
        mostrardisplay(8);
    });
    $('#botao7').click(function () {
        mostrardisplay(7);
    });
    $('#botao6').click(function () {
        mostrardisplay(6);
    });
    $('#botao5').click(function () {
        mostrardisplay(5);
    });
    $('#botao4').click(function () {
        mostrardisplay(4);
    });
    $('#botao3').click(function () {
        mostrardisplay(3);
    });
    $('#botao2').click(function () {
        mostrardisplay(2);
    });
    $('#botao1').click(function () {
        mostrardisplay(1);
    });
    $('#botao0').click(function () {
        mostrardisplay(0);
    });

    // OPERADORES 
    $('#mult').click(function () {
        mostrardisplay("*");
    });
    $('#soma').click(function () {
        mostrardisplay("+");
    });
    $('#subtrair').click(function () {
        mostrardisplay("-");
    });
    $('#divide').click(function () {
        mostrardisplay("/");
    });
    $('#limp').click(function () {
        mostrardisplay("c");
    });
    $('#igualdade').click(function () {
        mostrardisplay('=');
    });


});

function isOsperador(number) {
    var indice = arOperadores.indexOf(number);
    if (indice >= 0) {
        return true;
    }
    return false;
}

function setValueDisplay() {
    document.getElementById('mostrar').value = display;
}

function setValueHistoric() {
    document.getElementById('history').innerHTML = historic;
}

function clearValueDisplay() {
    display = '';
    setValueDisplay();
}
function clearValueHistoric() {
    historic = '';
    setValueHistoric();
}

function calculo() {
    display = eval(historic);
    historic ='';
    setValueHistoric()
    setValueDisplay()

}