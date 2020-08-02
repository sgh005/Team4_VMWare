var submitAnswer = function() {

    var radios = document.getElementsByName('choice');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         }
    }
    
    if (val == "" ) {
      alert('please select choice answer');
    } else if ( val == "Scripting" ) {
      alert('Answer is correct !');
    } else {
      alert('Answer is wrong');
    }
  };

 