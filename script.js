// page navigation
function goPage(n){
  document.querySelectorAll('.page')
    .forEach(p=>p.classList.remove('active'));
  document.getElementById('page'+n).classList.add('active');
}

// password check
function checkPassword(){
  const pw = document.getElementById("password").value;
  if(pw === "love"){
    goPage(2);
  }else{
    alert("Galat password 😢");
  }
}

// music play (user click required)
document.getElementById("playBtn").onclick = () => {
  document.getElementById("bgm").play();
  document.getElementById("playBtn").innerText="Music Playing";
};

// kiss & hug
function kiss(){ show("💋"); }
function hug(){ show("🤗"); }

function show(e){
  let d=document.createElement("div");
  d.className="pop";
  d.innerText=e;
  document.body.appendChild(d);
  setTimeout(()=>d.remove(),1500);
}
