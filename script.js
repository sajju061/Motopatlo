function goPage(pageNumber){

  let pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById("page" + pageNumber).classList.add("active");

  // 👇 page3 open hone par letter show
  if(pageNumber === 3){
    document.getElementById("letter").style.display = "block";
  }
}




// PASSWORD CHECK
function checkPassword(){

  let pass = document.getElementById("password").value;

  if(pass === "1234"){   // <-- password yahan change kar sakte ho
    goPage(2);
  }
  else{
    alert("Wrong Password ❌");
  }
}


// ACTION BUTTONS
function kiss(){
  alert("💋 Kiss Sent!");
}

function hug(){
  alert("🤗 Hug Sent!");
}


// MUSIC
let music = document.getElementById("bgm");
let playBtn = document.getElementById("playBtn");

playBtn.onclick = () => {
  music.play();
};



//FALLING HEARTS
function createHeart(){

  let heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random()*100 + "vw";

  document.body.appendChild(heart);

  setTimeout(()=> heart.remove(),5000);
}

setInterval(createHeart,600);


function openLetter(){

  document.getElementById("mailBox").style.display = "none";

  document.getElementById("letter").style.display = "block";
}
