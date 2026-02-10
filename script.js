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
