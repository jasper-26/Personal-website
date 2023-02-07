let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");


menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
   
};

// Email js
function validate(){
    let name = document.querySelector(".name");
    let email = document.querySelector(".email");
    let msg = document.querySelector(".message");
    let sendBtn = document.querySelector(".send-btn");


    sendBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
    
}
validate();

function sendmail(name,email,msg){
    emailjs.send("service_lwyo6pj","template_1em30ui",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}

function emptyerror(){
    swal({
        title: "oh no....",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}

function success(){
    swal({
        title: "Email sent successfully",
        text: "We try to reply in 24 hours",
        icon: "success",
      });
}

// Header background chnage on scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});