//call this onrefresh
change();
// function to get random numbers
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//on refresh button click
function change(){
    //hide on loding
    document.querySelector('.container').style.display = 'none';

   var randomNumber1 = getRndInteger(1,6);

var randomNumber2 = getRndInteger(1,6);
document.querySelector(".img1").setAttribute("src","https://github.com/abdullah715/dicee/blob/master/images/dice"+ randomNumber1+".png?raw=true");

document.querySelector(".img2").setAttribute("src","https://github.com/abdullah715/dicee/blob/master/images/dice"+ randomNumber2 +".png?raw=true");
  //show after load
    document.querySelector('.container').style.display = 'block';
}
