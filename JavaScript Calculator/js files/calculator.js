var inputLabel = document.getElementById('inputLable').innerHTML;

function pushBtn(obj) {
    var pushed = obj.innerHTML;
    // console.log(pushed)
    if (pushed == '=') {
        inputLabel = inputLabel.innerHTML = eval(inputLabel)
        document.getElementById('inputLable').innerHTML = inputLabel.innerHTML = eval(inputLabel)
        console.log('=', inputLabel)
    } else if (pushed == 'AC') {
        // inputLabel.innerHTML = '0';
        inputLabel = '0'
        document.getElementById('inputLable').innerHTML = inputLabel
    } else if (pushed == 'Backspace') {
        inputLabel = document.getElementById('inputLable').innerHTML;
        lnth = inputLabel.length - 1
        newVal = inputLabel.substring(0, lnth);
        document.getElementById('inputLable').innerHTML = newVal
        if (inputLabel.length == '1') {
            console.log('lenght is 1')
            inputLabel='0'
            document.getElementById('inputLable').innerHTML = inputLabel
        }
    } else if (inputLabel == '0') {
        // console.log('test 2', inputLabel = pushed)
        inputLabel = pushed;
        document.getElementById('inputLable').innerHTML = inputLabel
    } else {
        // console.log(inputLabel)
        inputLabel += pushed
        document.getElementById('inputLable').innerHTML = inputLabel
    }

}