function goPage(pageNumber){

  let pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById("page" + pageNumber).classList.add("active");
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


// Paragraph animation
function openMail(){

  let letter = document.getElementById("letter");
  letter.style.display = "block";

  let lines = document.querySelectorAll(".line");

  lines.forEach((line,index)=>{

    setTimeout(()=>{
      line.style.transition = "1s";
      line.style.opacity = "1";
      line.style.transform = "translateY(0)";
    }, index * 1000);

  });

}


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
