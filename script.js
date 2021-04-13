function kaelanWanted() {
  
  document.getElementById("mainHeading").innerText = "Kaelan Lovan Is The Most Wanted Genius!";

 
  for (var i = 0; i < document.getElementsByClassName("colorText").length; i++) {
          document.getElementsByClassName("colorText")[i].style.color="#7c40ff";
        
      }



  alert('Hello, my name is Kaelan.');
 
}

function jahraiWanted() {
  document.getElementById("mainHeading").innerText = "Jahrai Haile Is The Most Wanted Genius!";

  for (var i = 0; i < document.getElementsByClassName("colorText").length;) {
          document.getElementsByClassName("colorText")[i].style.color="blue";
          i++
      }
  alert('Hello, my name is Jahrai.');
}

function michaelWanted() {
  document.getElementById("mainHeading").innerText = "Michael Ochoa Is The Most Wanted Genius!";

  for (var i = 0; i < document.getElementsByClassName("colorText").length; i++) {
          document.getElementsByClassName("colorText")[i].style.color="red";

      }
  alert('Hello, my name is Michael.');
}

function jasonWanted() {
  document.getElementById("mainHeading").innerText = "Jason Smith Is The Most Wanted Genius!";
  for (var i = 0; i < document.getElementsByClassName("colorText").length; i++) {
          document.getElementsByClassName("colorText")[i].style.color="green";
          
      }
  alert('Hello, my name is Jason.');
}


function testFunction() {
  for (var i = 0; i < document.getElementsByClassName("testClass").length; i++) 
  {
    document.getElementsByClassName("testClass")[i].style.color="yellow";
  }
}


//document.getElementsByClassName("testClass")
//[ "person1 wanted", "person2 wanted", "person3 wanted"]
//[ 0, 1, 2]