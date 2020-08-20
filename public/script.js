var level1 = function(first,second, q1, q2) {

  var radios = document.getElementsByName('choice');
 
  var val= "";
  for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
         val = radios[i].value; 
         break;
       }
  }
  var modal = document.getElementById("myModal");
  
  if (val == "" ) {
    
    $( function() {
      $('#notification1').empty().append('<h1><strong>please select an answer</strong></h1>').dialog({height:'auto', width:'auto'});
     
      //$( "#pic1" ).dialog();
    } );
    //alert('please select choice answer');
  } else if ( val == "C" && first=='space_1' ) {
      
     
      $( function() {
        $('#pic1').append('<h1><strong>Great Job!</strong></h1>').append(' <img width="1000" alt="Picture1" src="https://user-images.githubusercontent.com/32419895/89215121-0ee63500-d596-11ea-87f9-72a29ccbe29f.png">').dialog({height:'auto', width:'auto'});
       
        //$( "#pic1" ).dialog();
      } );
      changeQ_A(first, second, q1, q2);
   
  } else if (val == "A" & first=='space_2'){
    
    $( function() {
   
      $('#pic2').append('<h1><strong>Great Job!</strong></h1>').append('<img width="1000" alt="Picture1" src="mary2.png">').dialog({height:'auto', width:'auto'});
    } );
      changeQ_A(first, second, q1, q2);
      //window.location.replace('mary') 

  } else {
    $('#notification2').empty().append('<h1><strong>wrong</strong></h1>').dialog({height:'auto', width:'auto'});
   // alert('Answer is wrong');
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
      $( function() {
   
        $('#pic3').append('<img width="300" alt="Picture1" src="gladys1.png">').dialog();
      } );
      changeQ_A(holder, second, q1, q2);
   
  } else if (val == "A" && first=='second'){
      alert('Great Job! ');
      $( function() {
        $('#pic4').append('<img width="300" alt="Picture1" src="gladys2.png">').dialog();
      } );
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

