function goPage(pageNumber){

  let pages = document.querySelectorAll(".page");

  pages.forEach(page=>{
    page.classList.remove("active");
  });

  let currentPage = document.getElementById("page"+pageNumber);
  if(currentPage){
    currentPage.classList.add("active");
  }

  window.scrollTo(0,0);

  // Delay added so page visible ho jaye phir typing start ho
  setTimeout(()=>{
    if(pageNumber === 2){
  j = 0;
  document.getElementById("typeText2").innerHTML = "";
  typeWriter2();
}
    if(pageNumber === 6){
  k = 0;
  document.getElementById("typeText3").innerHTM>
  typeWriter3();
}
    if(pageNumber === 7){
  startUrduTyping3();
}

    if(pageNumber === 3){
      startUrduTyping();
    }

    if(pageNumber === 4){
      startTyping();
    }

    if(pageNumber === 5){
      startUrduTyping2();
    }

  },100);

}










// PASSWORD CHECK
let isHidden = true;
let password = "";
let correctPassword = "1234"; // yahan apni Nikah date likho

function addNumber(num) {
  if (password.length < 6) {
    password += num;
    updateDisplay();
  }
}

function clearInput() {
  password = "";
  updateDisplay();
}

function checkPassword() {
  if (password === correctPassword) {
    goPage(2);
  } else {
    alert("Wrong Password 💔");
    clearInput();
  }
}

function updateDisplay() {
  let display = document.getElementById("display");

  if (isHidden) {
    display.innerText = "●".repeat(password.length);
  } else {
    display.innerText = password;
  }
}

function togglePassword() {
  isHidden = !isHidden;
  updateDisplay();
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

//TYPEWRITER PAGE2
const romanticMessage2 = "You are my favorite place to escape ❤️";
let j = 0;

function typeWriter2() {
  if (j < romanticMessage2.length) {
    document.getElementById("typeText2").innerHTML += romanticMessage2.charAt(j);
    j++;
    setTimeout(typeWriter2, 50);
  }
}





// ===== PAGE 3 URDU TYPEWRITER ====
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
      el.innerHTML += urduParagraph[i];
      i++;
      setTimeout(typing,35);
    }
  }

  typing();
}






// ===== PAGE 5 URDU TYPEWRITER =====
let urduParagraph2 = `
تمہیں مسکراتا دیکھ کر سوچتا ہوں کہ محبت کتنی پیاری ہوتی ہے۔
کیسے ساری دعائیں ایک ہی شخص کے نام سے منسوب ہو جاتی ہیں!
تمہاری بے رخی سے لیکر محبت کرنے تک میں نے تمہاری ہر ادا سے محبت کی ہے۔
میری دُعا کا آغاز بھی تم سے ہوتا ہے اور اختتام بھی تم پہ ہوتا ہے۔
اللہ اللہ تمہیں دنیا جہان کی ہر خوشی نوازے،
تمہاری شرارتی آنکھیں یونہی سدا مسکراتی رہیں!
تمہیں ان منزلوں تک خدا لیکر جائے جن کے تم خواب دیکھتے ہو۔
تمہاری زندگی میں کبھی اُس چیز کی کمی نہ ہو
جو تمہارے دل کو بے چین کر دے!
میں نے ہمیشہ تمہارے حوالے سے اپنا دل پاکیزہ رکھا ہے،
اس لیے تم کبھی یہ مت سوچنا کہ میرا دل تم سے میلا ہوگا۔
تمہاری جو جگہ آج ہے ہمیشہ وہی رہے گی!
تم پاس نہ ہوگے تو تمہاری جگہ خالی رہے گی،
مگر یہاں کوئی دوسرا شخص نہیں آئے گا۔
اور دل کا حال تو بس رب جانتا ہے۔
تم سے کتنی پاکیزہ محبت ہے، یہ بس اللہ جانتا ہے۔
`;

function startUrduTyping2(){

  let el = document.getElementById("urduText2");
  if(!el) return;

  el.innerHTML = "";
  let i = 0;

  function typing(){
    if(i < urduParagraph2.length){
      el.innerHTML += urduParagraph2[i];
      i++;
      setTimeout(typing,35);
    }
  }

  typing();
}



//page 6 typewriter

const romanticMessage3 = "Forever isn't long enough with you ❤️";
let k = 0;

function typeWriter3() {
  if (k < romanticMessage3.length) {
    document.getElementById("typeText3").innerHTML += romanticMessage3.charAt(k);
    k++;
    setTimeout(typeWriter3, 50);
  }
}




// ===== PAGE 7 URDU TYPEWRITER =====

let urduParagraph3 = `
میری خواہش ہے میں تمہاری زندگی میں وہ انسان بنوں اگر تمہیں کوئی بھی خوشی ملے تو آکر مجھے بتاؤ تمہیں کوئی پرشانی ، دکھ ہو تو مجھ سے بانٹو میری دعاوں پہ تمہیں یقین ہو

تمہیں یقین ہو اس دنیا میں میں کوئی  ایسا ہے جسکی سانسیں میرے ہونے سے ہیں اگر دنیا میرا ساتھ کبھی چھوڑ بھی دے تو وہ میرے ساتھ ہے

تم دنیا کے سامنے تو مضبوط رہو لیکن میرے کندھے پہ سر رکھ کے اپنے آنسو بہا دو اور ہر دکھ ، غم بھول جاؤ اور تمہیں یقین ہو ، یہ میری آواز ساری زندگی کے لیے سن سکتا ہے

میں فقط اتنا چاہتا ہوں

`;

function startUrduTyping3(){

  let el = document.getElementById("urduText3");
  if(!el) return;

  el.innerHTML = "";
  let i = 0;

  function typing(){
    if(i < urduParagraph3.length){
      el.innerHTML += urduParagraph3[i];
      i++;
      setTimeout(typing,35);
    }
  }

  typing();
}
