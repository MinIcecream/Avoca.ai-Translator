var outputBoxRows = 0;

function getScrollHeight(elm) {
    var savedValue = elm.value
    elm.value = ''
    elm._baseScrollHeight = elm.scrollHeight
    elm.value = savedValue
}

function expandTextBoxes() {
    // make sure the input event originated from a textarea and it's desired to be auto-expandable
    inputBox = document.getElementById("input-box"); 
    var inputMinRows = inputBox.getAttribute('data-min-rows') | 0, inputRows;
    !inputBox._baseScrollHeight && getScrollHeight(inputBox)
     
    inputRows = Math.ceil((inputBox.scrollHeight - inputBox._baseScrollHeight) / 21); 

    inputBoxRows = inputMinRows + inputRows;

    if (inputBoxRows > outputBoxRows) {
        inputBox.rows = inputBoxRows;
    } 
}
function updateOutputBox(){
    inputBox = document.getElementById("input-box");
    outputBox = document.getElementById("output-box");
    var inputMinRows = inputBox.getAttribute('data-min-rows') | 0, inputRows;
    !inputBox._baseScrollHeight && getScrollHeight(inputBox)

    inputBox.rows = inputMinRows
    outputBox.rows = inputMinRows
    inputRows = Math.ceil((inputBox.scrollHeight - inputBox._baseScrollHeight) / 21);
     

    inputBox.rows = inputMinRows + inputRows; 
    outputBox.rows = inputMinRows + inputRows;
}
 