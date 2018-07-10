var x = {};
x.clear = function(){
  document.getElementById('screen').value = '';
  document.getElementById('screen1').value = '';
}
function operation(value){
  var numb0 = parseInt(document.getElementById('screen').value);
  var numb1 = parseInt(document.getElementById('screen1').value);
    switch (value) {
      case 1:
        document.getElementById('result').value = numb0 + numb1;
          break;
      case 2:
          document.getElementById('result').value = numb0 - numb1;
            break;
      case 3:
          document.getElementById('result').value = numb0 * numb1;
            break;
      case 4:
          document.getElementById('result').value = numb0 / numb1;
            break;
    }//end switch
  if(value == 5){x.clear();}
}
