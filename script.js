function inputVal(val) {
    let firstVal = $('#display1').val()
    $('#display1').val(firstVal + val)
}

function clearVal() {
    $('#display1').val("")
    $('#display2').val("")
}

function calculate() {
    let result = eval($('#display1').val())
    $('#display2').val(result)
} 

function erase() {

    let presentNum = $('#display1').val()
    if(presentNum !="") {
       $('#display1').val($('#display1').val().slice(0, -1))
    }
}


