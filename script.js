let display1 = {
    evaluation: ""
};

function inputVal(val) {
    let firstVal = $('#display1').val();
    $('#display1').val(firstVal + val);
    $('#display2').val(firstVal + val);
    $('#display2').val(eval($('#display1').val()))
}

function clearVal() {
    $('#display1').val("");
    $('#display2').val("");
    
}



function calculate() {
    let result = eval($('#display1').val());
    
    $('#display2').val(result);
    $('#display1').val(result)
    $('#display2').val("")
} 

function answer() {
$('#display1').val($('#display2').val());
$('#display2').val("");

}

function erase() {

    let presentNum = $('#display1').val();
    if(presentNum !="") {
       $('#display1').val($('#display1').val().slice(0, -1));
       $('#display2').val(eval($('#display1').val()))
    }
}


