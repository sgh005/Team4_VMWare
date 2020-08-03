var level1 = function(first,second, q1, q2) {

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
    } else if ( val == "C" && first=='space_1' ) {
        alert('Great Job!');
        changeQ_A(first, second, q1, q2);
     
    } else if (val == "A" & first=='space_2'){
        alert('Great Job! ');
        changeQ_A(first, second, q1, q2);

    } else {
      alert('Answer is wrong');
    }
  };

  var level2 = function(holder, first,second, q1, q2) {

    var radios = document.getElementsByName('choice');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         } }

    if (val == "" ) {
      alert('please select choice answer');
    } else if ( val == "B" && first=='first' ) {
        alert('Great Job!');
        changeQ_A(holder, second, q1, q2);
     
    } else if (val == "A" && first=='second'){
        alert('Great Job! ');
        changeQ_A(holder, second, q1, q2);

    } else if (val == "D" && first=='third'){
        alert('Great Job! ');
        changeQ_A(holder, second, q1, q2);
        
    } else {
      alert('Answer is wrong');
    }
  };

  var level3 = function(holder, first,second, q1, q2) {

    var radios = document.getElementsByName('choice');
    var val= "";
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
           val = radios[i].value; 
           break;
         } }

    if (val == "" ) {
      alert('please select choice answer');
    } else if ( val == "A" && first=='first' ) {
        alert('Great Job!');
        changeQuestion('q1', q2);
     
    } else if (val == "C" && first=='second'){
        alert('Great Job! ');
        changeQuestion('q1', q2);

    } else if (val == "A" && first=='third'){
        alert('Great Job! ');
        changeQuestion('q1', q2);

    } else if (val == "B" && first=='fourth'){
        alert('Great Job! ');
        changeQuestion('q1', q2);

    } else {
      alert('Answer is wrong');
    }
  };

  //function to change question and answer
  var changeQ_A = function(first, second, question1, question2 ) {
    var container = document.getElementById(first);
    var newContainer = document.getElementById(second);

    container.innerHTML = newContainer.innerHTML;

    var q_container = document.getElementById(question1);
    var q2_container = document.getElementById(question2);

    q_container.innerHTML = q2_container.innerHTML;

  };

  //function to take question
  var changeQuestion = function(question1, question2 ) {
    
    var q_container = document.getElementById(question1);
    var q2_container = document.getElementById(question2);
    q_container.innerHTML = q2_container.innerHTML;
  };

 