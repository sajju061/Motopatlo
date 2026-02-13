function goPage(pageNumber){

  let pages = document.querySelectorAll(".page");

  pages.forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById("page" + pageNumber).classList.add("active");


  // ===== PAGE 3 PARAGRAPH ANIMATION =====
  if(pageNumber === 3){

    let letter = document.getElementById("letter");
    letter.style.display = "block";

    let lines = document.querySelectorAll(".line");

    lines.forEach((line,index)=>{
      setTimeout(()=>{
        line.classList.add("show");
      }, index * 800);
    });

  }
}

if(pageNumber !== 3){
  document.querySelectorAll(".line").forEach(line=>{
    line.classList.remove("show");
  });
}

if(pageNumber === 4){
      startTyping();
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



// HEARTS FLOATING
document.addEventListener("DOMContentLoaded", function(){

  setInterval(function(){

    let heart = document.createElement("span");
    heart.innerHTML = "❤";

    heart.style.left = Math.random()*100 + "vw";
    heart.style.fontSize = (15 + Math.random()*25) + "px";

    document.querySelector(".hearts").appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },6000);

  },700);

});


//TYPEWRITER

let text = "You Are My Forever Person ❤️";
let i = 0;

function startTyping(){

  let el = document.getElementById("typeText");
  if(!el) return;

  el.innerHTML = "";
  i = 0;

  function typing(){
    if(i < text.length){
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing,80);
    }
  }

  typing();
}

