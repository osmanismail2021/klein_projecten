var character = document.getElementById("character");
// var block = document.getElementById("block");
var image = document.getElementById("addimage");
var counter = 0;
var i = 0;
var blockReach = false;
//var letter =["a","b","c","d"]
var letter = [`<img src="test.jpg"/>`, `<img src="test1.jpg"/>`,`<img src="orange.jpg"/>`];

function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 3000);
}

var checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );

  let blockLeft = parseInt(
    window.getComputedStyle(image).getPropertyValue("left")
  );

  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    image.style.animation = "none";
    alert("Game Over. score: " + Math.floor(counter / 100));
    letterChanger();
    image.style.animation = "block 3s infinite linear";
  } else if (blockLeft === 0 && !blockReach) {
    letterChanger();
    blockReach = true;
  } else if (blockLeft > 0 && blockReach) {
    blockReach = false;
  } else {
    counter++;
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);

function letterChanger() {
  i++;
  console.log(i);

  if (i === letter.length) {
    i = 0;
  }
  addImage();
}

function letterUpdate() {
  image.innerHTML = letter[i];
}
function addImage() {
  image.innerHTML = letter[i];
}
