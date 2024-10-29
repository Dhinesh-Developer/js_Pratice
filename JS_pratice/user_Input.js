let username;

// way one.
// username = window.prompt("What is your username?");
// console.log(username);

//
// professional way.


{/* <h1>Welcome</h1>
<label for="">username: </label>
<input type="text" id="1"><br><br>
<button id="2"> submit</button> */}

document.getElementById("2").onclick=function(){
   username =  document.getElementById("1").value;
   console.log(username);
}