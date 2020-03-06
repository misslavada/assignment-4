//EVENT LISTENER 
window.addEventListener('load', init);
//CREATE USER DEFINED FUNCTION INIT() 
function init() {
    let $ = function (id) { //ANONYMOUS HELPER FUNCTION
        'use strict';
        return window.document.getElementById(id);
    };
    let allBtns = $('allBtns');
    let result = $('result');
    let equal = $('equal');
    allBtns.addEventListener('click', enter); //EVENT LISTENER
    function enter(val) {
        window.console.log(val.target.value);
        $(result).value += val.target.value;
    }
    function calculate(val) {
        $('result').value += val.target.value;
        console.log(val.target.value);
    }
equal.addEventListener('click', function calculate() {
        'use strict';
        $('result').value = eval($('result').value);
})
}
