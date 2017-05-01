document.getElementById("submit_form").addEventListener("click", sendForm);
var inputs = ["", "", "", "", "", ""];
var icons = document.getElementsByClassName("images");
var d = new Date();
var correct = "142116";

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
  if(inputs[0] == "" || inputs[0] == "" || inputs[0] == "" || inputs[0] == "" || inputs[0] == "" || inputs[0] == "")
	icons[0].src = "MAYBE.png";
else{
  if(inputs[0] != correct[0] || inputs[1] != correct[1] || inputs[2] != correct[2] || inputs[3] != correct[3] || inputs[4] != correct[4] || inputs[5] != correct[5])
  icons[0].src = "NO.png";
  else
     icons[0].src = "YES.png";
}
}

function buttonAction(v, o){
  document.getElementById(o).innerHTML = v;
}