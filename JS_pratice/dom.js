console.log(document);

document.title = "My website";
document.body.style.backgroundColor = "black";
document.body.style.color = "white";
const userName = "dhinesh Kumar";
const welcome_msg = document.getElementById("welcome_msg");

welcome_msg.textContent+= userName==="" ?`Guest `: userName;