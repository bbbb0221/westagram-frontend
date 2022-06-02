'use strict';

const text = document.querySelector("textarea");
const btn = document.querySelector(".comment_post");
const comment = document.createElement("li");
const postdiv = document.querySelector("div");
const postUl = document.querySelector("ul");
const x = document.createElement("input");
x.setAttribute("type","checkbox");
postdiv.appendChild(x);

function addComment() {
   if(text.value !== "" ) {
       const comment = document.createElement("div");
       comment.innerHTML = `bbbb_0221 ${text.value}  `;
       postUl.appendChild(comment);
       text.value="";
   }
}
btn.addEventListener("click", addComment);

function enterkey() {
    if (window.event.keyCode == 13) {
        
         if(text.value !== "" ) {
       const comment = document.createElement("div");
       comment.innerHTML = `bbbb_0221 ${text.value} `;
       postUl.appendChild(comment);
       text.value="";
    }
}
}
text.addEventListener("keyup",btnStyle);

function btnStyle() {
    if(text.value !=="" ) {
        btn.style.color = "#0c9af6";
        btn.disabled = false;
    } else {
        btn.style.color = "skyblue";
        btn.disabled = true;
    }
}
/*if(text.value > 0 ) {
    const comment = document.createElement("span");
    comment.innerHTML = `hi`;
    upText.appendChild(comment);
    console.log("click");
} */