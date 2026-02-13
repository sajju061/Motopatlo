function goPage(pageNumber){

  let pages = document.querySelectorAll(".page");

  pages.forEach(page=>{
    page.classList.remove("active");
  });

  document.getElementById("page"+pageNumber).classList.add("active");

  window.scrollTo(0,0);

  // ===== PAGE 3 PARAGRAPH ANIMATION =====
  if(pageNumber === 3){

    let letter = document.getElementById("letter");
    letter.style.display = "block";

    let lines = document.querySelectorAll(".line");

    lines.forEach(line=>{
      line.classList.remove("show"); // reset
    });

    lines.forEach((line,index)=>{
      setTimeout(()=>{
        line.classList.add("show");
      }, index * 700);
    });
  }

  // reset animation when leaving page 3
  if(pageNumber !== 3){
    document.querySelectorAll(".line").forEach(line=>{
      line.classList.remove("show");
    });
  }
  if(pageNumber === 3){
   startUrduTyping();
}

  // ===== PAGE 4 TYPEWRITER =====
  if(pageNumber === 4){
    startTyping();
  }
}


// PASSWORD CHECK
function checkPassword(){
  let pass = document.getElementById("password").value;
  if(pass === "1234"){
    goPage(2);
  } else {
    alert("Wrong Password ❌");
  }
}


// MUSIC
let music = document.getElementById("bgm");
let playBtn = document.getElementById("playBtn");

playBtn.onclick = ()=>{
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


// TYPEWRITER
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


//URDU TYPEWRITER

let urduParagraph = `
تم میرے لیے بہت خاص ہو۔
تم وہ واحد شخص ہو جس کے لیے
مجھے نیند سے محروم رہنے میں کوئی اعتراض نہیں۔
صرف تم ہو جس سے بات کرتے ہوئے
میں کبھی تھک نہیں سکتا۔
تمہارا خیال ہی میرے لبوں پر
مسکراہٹ بکھیر دیتا ہے۔
تم وہ واحد شخص ہو جسے
مجھے کھو دینے کا ڈر ہے۔
تم وہ شخص ہو جس کے ساتھ
مجھے آخری آرامگاہ تک سفر
کرنے کی خواہش ہے۔
`;

function startUrduTyping(){

  let el = document.getElementById("urduText");
  if(!el) return;

  el.innerHTML = "";
  let i = 0;

  function typing(){
    if(i < urduParagraph.length){
      el.innerHTML += urduParagraph.charAt(i);
      i++;
      setTimeout(typing,40);
    }
  }

  typing();
}

