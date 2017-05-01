var _timePassed = true;

var _date = new Date();
var _clickDate = new Date();
var _submitDate;
var elem = document.getElementById("timer");
var _time = "";

var _t = _date.getTime();
var c_t = _clickDate.getTime();

function updateTimer(){
      setTimerValue();
}
setInterval(updateTimer, 1);

function setTimerValue(){
  _date = new Date();
		
  _t = _date.getTime();
  c_t = _clickDate.getTime();

  var _diff = (_t - c_t);
  var _x = _diff / 1000;
  var _ms = Math.round(_diff % 1000);
  var _s = Math.round(_x % 60);
  _x /= 60;
  var _m = Math.round(_x % 60);
  _x /= 60;
  var _h = Math.round(_x % 24);

  _time = _h + ":" + _m + ":" + _s + "." + _ms;
  elem.innerHTML = _time;
}


function resetTimer(){
  _clickDate = new Date();
}

document.getElementById("submit_form").addEventListener("click", resetTimer);
