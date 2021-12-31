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