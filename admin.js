let adminUser = "admin";


function login(){


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



if(email && password){


document.querySelector(".login-box")
.style.display="none";


document.getElementById("dashboard")
.classList.remove("hidden");


}

else{


document.getElementById("message")
.innerHTML="Enter login details";


}


}





function addContent(){


let title =
document.getElementById("title").value;


let image =
document.getElementById("image").value;


let description =
document.getElementById("description").value;



let category =
document.getElementById("category").value;



let box =
document.createElement("div");


box.className="card";



box.innerHTML=`

<h3>${title}</h3>

<img width="150" src="${image}">

<p>${description}</p>

<b>${category}</b>

`;



document
.getElementById("contentList")
.appendChild(box);



}
