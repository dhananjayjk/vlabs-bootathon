var t1: HTMLInputElement = <HTMLInputElement>document.getElementById("t1");
var t2: HTMLInputElement = <HTMLInputElement>document.getElementById("t2");
var t3: HTMLInputElement = <HTMLInputElement>document.getElementById("t3");

function add()
{
    var c:number = parseFloat(t1.value) + parseFloat(t2.value);
    t3.value = c.toString();
}

var tt1: HTMLInputElement = <HTMLInputElement>document.getElementById("tt1");
var tt2: HTMLInputElement = <HTMLInputElement>document.getElementById("tt2");
var tt3: HTMLInputElement = <HTMLInputElement>document.getElementById("tt3");

function sub()
{
    var c:number = parseFloat(tt1.value) - parseFloat(tt2.value);
    tt3.value = c.toString();
}