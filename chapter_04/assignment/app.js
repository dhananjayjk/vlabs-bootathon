var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var er = document.getElementById("error");
if (typeof t1 === 'string' || typeof t2 === 'string')
    er.innerHTML = "Don't enter string values";
function add() {
    var c = parseFloat(t1.value) + parseFloat(t2.value);
    if (isNaN(c))
        er.innerHTML = "Don't enter string values";
    t3.value = c.toString();
}
function mul() {
    var c = parseFloat(t1.value) * parseFloat(t2.value);
    if (isNaN(c))
        er.innerHTML = "Don't enter string values";
    t3.value = c.toString();
}
function div() {
    var c = parseFloat(t1.value) / parseFloat(t2.value);
    if (isNaN(c))
        er.innerHTML = "Don't enter string values";
    t3.value = c.toString();
}
function sub() {
    var c = parseFloat(t1.value) - parseFloat(t2.value);
    if (isNaN(c))
        er.innerHTML = "Don't enter string values";
    t3.value = c.toString();
}
function operate() {
    var ele = document.getElementById('func');
    var i = ele.selectedIndex;
    er.innerHTML = '';
    if (i == 0) {
        add();
    }
    else if (i == 1) {
        sub();
    }
    else if (i == 2) {
        mul();
    }
    else if (i == 3) {
        div();
    }
}
//# sourceMappingURL=app.js.map