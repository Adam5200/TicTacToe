var turn = 1;
//this variable will be set to true if the player accidentally clicks a square which they cannot play in.
//it prevents the program from switching to the other player
var mistake = false;
var gameOver = false;
let customers = [
    {
  
      firstName: "Sam",
  
      lastName: "Smith",
  
      email: "sam.smith@gmail.com"
  
    },
  
    {
  
      firstName: "Tom",
  
      lastName: "Jones",
  
      email: "tom.jones@gmail.com"
  
    }
  ]

function check(symbol) {

    if ($(".square1").hasClass(symbol) &&
        $(".square2").hasClass(symbol) &&
        $(".square3").hasClass(symbol))
    {
        $(".square1").css("color", "green");
        $(".square2").css("color", "green");
        $(".square3").css("color", "green");
        return true;
    } else if ($(".square4").hasClass(symbol)
            && $(".square5").hasClass(symbol)
            && $(".square6").hasClass(symbol))
    {
        $(".square4").css("color", "green");
        $(".square5").css("color", "green");
        $(".square6").css("color", "green");
        return true;
    } else if ($(".square7").hasClass(symbol)
            && $(".square8").hasClass(symbol)
            && $(".square9").hasClass(symbol))
    {
        $(".square7").css("color", "green");
        $(".square8").css("color", "green");
        $(".square9").css("color", "green");
        return true;
    } else if ($(".square1").hasClass(symbol)
            && $(".square4").hasClass(symbol)
            && $(".square7").hasClass(symbol))
    {
        $(".square1").css("color", "green");
        $(".square4").css("color", "green");
        $(".square7").css("color", "green");
        return true;
    } else if ($(".square2").hasClass(symbol)
            && $(".square5").hasClass(symbol)
            && $(".square8").hasClass(symbol))
    {
        $(".square2").css("color", "green");
        $(".square5").css("color", "green");
        $(".square8").css("color", "green");
        return true;
    } else if ($(".square3").hasClass(symbol)
            && $(".square6").hasClass(symbol)
            && $(".square9").hasClass(symbol))
    {
        $(".square3").css("color", "green");
        $(".square6").css("color", "green");
        $(".square9").css("color", "green");
        return true;
    } else if ($(".square1").hasClass(symbol)
            && $(".square5").hasClass(symbol)
            && $(".square9").hasClass(symbol))
    {
        $(".square1").css("color", "green");
        $(".square5").css("color", "green");
        $(".square9").css("color", "green");
        return true;
    } else if ($(".square3").hasClass(symbol)
            && $(".square5").hasClass(symbol)
            && $(".square7").hasClass(symbol))
    {
        $(".square3").css("color", "green");
        $(".square5").css("color", "green");
        $(".square7").css("color", "green");
        return true;
    } else {
        return false;
    }
}

function reset()
{
    $("#title").text("PLAYER 1 (X) IT IS YOUR TURN");
    $(".r").removeClass("fa fa-circle");
    $(".r").removeClass("fa fa-times");
    turn = 1;
    gameOver = false;
    // Reset Colors
    $(".square1").css("color", "black");
    $(".square2").css("color", "black");
    $(".square3").css("color", "black");
    $(".square4").css("color", "black");
    $(".square5").css("color", "black");
    $(".square6").css("color", "black");
    $(".square7").css("color", "black");
    $(".square8").css("color", "black");
    $(".square9").css("color", "black");
 
}