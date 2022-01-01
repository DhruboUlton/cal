function add() {
    let V1 = document.getElementById("FN").value;
    let V2 = document.getElementById("SN").value;
    result = (+V2 + +V1);
    document.getElementById("answer").innerText = result;
}

function subtrack() {
    let V1 = document.getElementById("FN").value;
    let V2 = document.getElementById("SN").value;
    result = (V1 - V2);
    document.getElementById("answer").innerText = result;
}

function multi() {
    let V1 = document.getElementById("FN").value;
    let V2 = document.getElementById("SN").value;
    result = (V1 * V2);
    document.getElementById("answer").innerText = result;
}

function divi() {
    let V1 = document.getElementById("FN").value;
    let V2 = document.getElementById("SN").value;
    result = (V1 / V2);
    document.getElementById("answer").innerText = result;
}

function validate() {
    do1()
    do2()

}

function do1() {
    let cName = document.getElementById("name").value;
    document.getElementById("on").innerText = cName;
}

function do2() {
    let percent = document.getElementById("prc").value;
    let income = document.getElementById("inc").value;
    govC = (income / 100) * (percent);
    youR = income - govC;
    document.getElementById("charges").innerText = govC;
    document.getElementById("left").innerText = youR;
    document.getElementById("oi").innerText = income;
}


//