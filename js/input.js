document.getElementById("submit_form").addEventListener("click", sendForm);
var inputs = ["", "", "", "", "", ""];

function updateInputs(){
  inputs[0] = document.getElementById("1_v").innerHTML;
  inputs[1] = document.getElementById("2_v").innerHTML;
  inputs[2] = document.getElementById("3_v").innerHTML;
  inputs[3] = document.getElementById("4_v").innerHTML;
  inputs[4] = document.getElementById("5_v").innerHTML;
  inputs[5] = document.getElementById("6_v").innerHTML;
}
setInterval(updateInputs, 1);

function sendForm(){
  alert(inputs[0]+inputs[1]+inputs[2]+inputs[3]+inputs[4]+inputs[5]+"      ... agreed!");
}

function buttonAction(v, o){
  document.getElementById(o).innerHTML = v;
}