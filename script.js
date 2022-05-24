document.body.style.backgroundImage = "url(img/stars.jpg)";
document.body.style.backgroundColor = "black";
document.body.style.backgroundRepeat = "repeat";
document.body.style.backgroundSize = "cover";


document.getElementById("container").style.color = "white";
document.getElementById("small-container").style.color = "black";


function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("zodiac").value;
    //Displaying the Value on the page
    document.getElementById("div1").innerHTML = "<br>" + inputVal ;

var zodiacsign = inputVal;

if (zodiacsign === 'aries' || zodiacsign ==='Aries') {
console.log('It\'s Aries!');
document.getElementById("div1").innerHTML= "<img src='img/Z-Aries.png'>";
document.getElementById("luckyitem").innerHTML= "Your lucky item is:";
// document.getElementById("itm").innerHTML= "Water Bottle";
document.getElementById("luckycolor").innerHTML= "Your lucky color is:";
// document.getElementById("clr").innerHTML= "Red";
document.getElementById("luckrank").innerHTML= "Rank:";
// document.getElementById("rk").innerHTML= "How unfortunate! Your zodiac ranks dead last today!";

}

else if (zodiacsign === 'taurus' || zodiacsign ==='Taurus') {
console.log('It\'s Taurus!');
document.getElementById("div1").innerHTML= "<img src='img/Z-Taurus.png'>";
document.getElementById("luckyitem").innerHTML= "Your lucky item is:";
// document.getElementById("itm").innerHTML= "Sneakers";
document.getElementById("luckycolor").innerHTML= "Your lucky color is:";
// document.getElementById("clr").innerHTML= "Pink";
document.getElementById("luckrank").innerHTML= "Rank:";
// document.getElementById("rk").innerHTML= "Your zodiac ranks second to last today! Well, it could've been worse...";
}

else if (zodiacsign === 'gemini' || zodiacsign ==='Gemini') {
console.log('It\'s Gemini!');
document.getElementById("div1").innerHTML= "<img src='img/Z-Gemini.png'>";
document.getElementById("luckyitem").innerHTML= "Your lucky item is:";
// document.getElementById("itm").innerHTML= "Backpack";
document.getElementById("luckycolor").innerHTML= "Your lucky color is:";
// document.getElementById("clr").innerHTML= "Blue";
document.getElementById("luckrank").innerHTML= "Rank:";
// document.getElementById("rk").innerHTML= "My condolences! Your zodiac ranks 9th today!";
}

else if (zodiacsign === 'cancer' || zodiacsign ==='Cancer') {
console.log('It\'s Cancer!');
document.getElementById("div1").innerHTML= "<img src='img/Z-Cancer.png'>";
document.getElementById("luckyitem").innerHTML= "Your lucky item is:";
// document.getElementById("itm").innerHTML= "Purse";
document.getElementById("luckycolor").innerHTML= "Your lucky color is:";
// document.getElementById("clr").innerHTML= "Green";
document.getElementById("luckrank").innerHTML= "Rank:";
// document.getElementById("rk").innerHTML= "My sympathies! Your zodiac ranks 10th today!";
}

else if (zodiacsign === 'leo' || zodiacsign ==='Leo') {
console.log('It\'s Leo!');
document.getElementById("div1").innerHTML= "<img src='img/Z-Leo.png'>";
document.getElementById("luckyitem").innerHTML= "Your lucky item is:";
// document.getElementById("itm").innerHTML= "A Tree";
document.getElementById("luckycolor").innerHTML= "Your lucky color is:";
// document.getElementById("clr").innerHTML= "Gold";
document.getElementById("luckrank").innerHTML= "Rank:";
// document.getElementById("rk").innerHTML= "Pity! Your zodiac ranks 8th today!";
}

else if (zodiacsign === 'virgo' || zodiacsign ==='Virgo') {
console.log('It\'s Virgo!');
document.getElementById("div1").innerHTML= "<img src='img/Z-Virgo.png'>";
document.getElementById("luckyitem").innerHTML= "Your lucky item is:";
// document.getElementById("itm").innerHTML= "Chocolate";
document.getElementById("luckycolor").innerHTML= "Your lucky color is:";
// document.getElementById("clr").innerHTML= "Brown";
document.getElementById("luckrank").innerHTML= "Rank:";
// document.getElementById("rk").innerHTML= " Not too shabby! Your zodiac ranks 7th today!";
}

else if (zodiacsign === 'libra' || zodiacsign ==='Libra') {
console.log('It\'s Libra!');
document.getElementById("div1").innerHTML= "<img src='img/Z-Libra.png'>";
document.getElementById("luckyitem").innerHTML= "Your lucky item is:";
// document.getElementById("itm").innerHTML= "Soap";
document.getElementById("luckycolor").innerHTML= "Your lucky color is:";
// document.getElementById("clr").innerHTML= "Red";
document.getElementById("luckrank").innerHTML= "Rank:";
// document.getElementById("rk").innerHTML= "Your zodiac ranks 6th today! Just average.";
}

else if (zodiacsign === 'scorpio' || zodiacsign ==='Scorpio') {
console.log('It\'s Scorpio!');
document.getElementById("div1").innerHTML= "<img src='img/Z-Scorpio.png'>";
document.getElementById("luckyitem").innerHTML= "Your lucky item is:";
// document.getElementById("itm").innerHTML= "Hand Sanitizer";
document.getElementById("luckycolor").innerHTML= "Your lucky color is:";
// document.getElementById("clr").innerHTML= "White";
document.getElementById("luckrank").innerHTML= "Rank:";
// document.getElementById("rk").innerHTML= "Bravo! Your zodiac ranks 2nd today!";
}

else if (zodiacsign === 'sagittarius' || zodiacsign ==='Sagittarius') {
console.log('It\'s Sagittarius!');
document.getElementById("div1").innerHTML= "<img src='img/Z-Sagittarius.png'>";
document.getElementById("luckyitem").innerHTML= "Your lucky item is:";
// document.getElementById("itm").innerHTML= "Smartphone";
document.getElementById("luckycolor").innerHTML= "Your lucky color is:";
// document.getElementById("clr").innerHTML= "Black";
document.getElementById("luckrank").innerHTML= "Rank:";
// document.getElementById("rk").innerHTML= "Not too bad! Your zodiac ranks 5th today!";
}

else if (zodiacsign === 'capricorn' || zodiacsign ==='Capricorn') {
console.log('It\'s Capricorn!');
document.getElementById("div1").innerHTML= "<img src='img/Z-Capricorn.png'>";
document.getElementById("luckyitem").innerHTML= "Your lucky item is:";
// document.getElementById("itm").innerHTML= "USB Drive";
document.getElementById("luckycolor").innerHTML= "Your lucky color is:";
// document.getElementById("clr").innerHTML= "Beige";
document.getElementById("luckrank").innerHTML= "Rank:";
// document.getElementById("rk").innerHTML= "Kudos! Your zodiac ranks 4th today!";
}
    
else if (zodiacsign === 'aquarius' || zodiacsign ==='Aquarius') {
console.log('It\'s Aquarius!');
document.getElementById("div1").innerHTML= "<img src='img/Z-Aquarius.png'>";
document.getElementById("luckyitem").innerHTML= "Your lucky item is:";
// document.getElementById("itm").innerHTML= "Toy Car";
document.getElementById("luckycolor").innerHTML= "Your lucky color is:";
// document.getElementById("clr").innerHTML= "Indigo";
document.getElementById("luckrank").innerHTML= "Rank:";
// document.getElementById("rk").innerHTML= "Your zodiac ranks 3rd today! Good for you!";
}
    
else if (zodiacsign === 'pisces' || zodiacsign ==='Pisces') {
console.log('It\'s Pisces!');
document.getElementById("div1").innerHTML= "<img src='img/Z-Pisces.png'>";
document.getElementById("luckyitem").innerHTML= "Your lucky item is:";
// document.getElementById("itm").innerHTML= "Nail Polish";
document.getElementById("luckycolor").innerHTML= "Your lucky color is:";
// document.getElementById("clr").innerHTML= "Light Blue";
document.getElementById("luckrank").innerHTML= "Rank:";
// document.getElementById("rk").innerHTML= "Congrats! Your zodiac ranks 1st today!";
}

else{
    document.getElementById("div1").innerHTML = "Not a Zodiac" ;

}

}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

$(function() {
  $('#zodiac-click').click(function() {
    $.ajax({
      'type': 'GET',
      'url': 'connect.php',
      'dataType': 'html',
      'success': 
      function(colors) {
        $('#clr').html(colors)
      }
      
    }).fail(function() {
      console.log(Failed);
    });
  });
});

$('#zodiac-click').click(function() {
  $.ajax({
    'type': 'GET',
    'url': 'access.php',
    'dataType': 'html',
    'success': 
    function(items) {
      $('#itm').html(items)
    }
    
  }).fail(function() {
    console.log(Failed);
  });
});

$('#zodiac-click').click(function() {
  $.ajax({
    'type': 'GET',
    'url': 'entry.php',
    'dataType': 'html',
    'success': 
    function(ranking) {
      $('#rk').html(ranking)
    }
    
  }).fail(function() {
    console.log(Failed);
  });
});


