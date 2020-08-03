var submitAnswer = function(first,second, q1, q2, ques) {

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
    } else if ( val == "C" && first=='og' ) {
        alert('Great Job!');
        changeQuestion(first, second, q1, q2);
       //trying to make modal work...not rn!
        /* $(document).ready(function(){
            $("#myBtn").click(function(){
              $("#myModal").modal();
            });
          });
        */
    } else if (val == "A" & first=='new'){
        alert('Great Job! ');
    } else {
      alert('Answer is wrong');
    }
  };


  var changeQuestion = function(first, second, question1, question2, ques ) {
    var container = document.getElementById(first);
    var newContainer = document.getElementById(second);

    container.innerHTML = newContainer.innerHTML;

    var q_container = document.getElementById(question1);
    var q2_container = document.getElementById(question2);

    q_container.innerHTML = q2_container.innerHTML;

    if(ques==1){
        ques=2;
    }

  };
