const button1 = document.getElementsByClassName("butt")[0];
const button2 = document.getElementsByClassName("butt")[1];
const container = document.getElementsByClassName("main-container")[0];
const login_buttcontainer = document.getElementsByClassName("login_button")[0];
const register_buttcontainer = document.getElementsByClassName("register_button")[0];
const login_btn = document.getElementsByClassName('loginbtn')[0];
const register_btn = document.getElementsByClassName('registerbtn')[0];
const login_anim_div = document.getElementsByClassName('butt-anim-div')[0];
const register_anim_div = document.getElementsByClassName('butt-anim-div')[1];
const alert_container = document.getElementsByClassName('alert-container')[0];
const pbar = document.getElementsByClassName('progress')[0];
const pwdvalidation = document.getElementsByClassName('pwdvalidation')[0];
const infobtn = document.getElementsByClassName('info-icon')[0];
const pwdtextbox = document.querySelector(".register input[type='password']");
const tccheck = document.querySelector(".tandc input[type='checkbox']");
const rules = document.querySelectorAll(".pwdvalidation ul li");
const pwdvisiblebtn = document.querySelector(".pwdvisibility");
const alertcontent = document.querySelector(".alert .alertcontent");

var given_pwd = "";

function verifypwd(pwd){
    const p2 = /[!,._()@#%^&*]/
    const p3 = /[0-9]/
    const c1 = pwd.length > 5;
    const c2 = p2.test(pwd);
    const c3 = p3.test(pwd);
    rules[0].style.color = c1 ? 'green' : 'red'
    rules[1].style.color = c2 ? 'green' : 'red'
    rules[2].style.color = c3 ? 'green' : 'red'
    return (c1&c2&c3);
}


button1.addEventListener("click", () => {
    container.className = "main-container scroll-left";
    setTimeout(()=>{
        login_buttcontainer.style.display = 'none';
        register_buttcontainer.style.display = 'flex';
    }, 819)
})

button2.addEventListener("click", () => {
    container.className = "main-container scroll-right";
    setTimeout(()=>{
        register_buttcontainer.style.display = 'none';
        login_buttcontainer.style.display = 'flex';
    }, 819)
})

login_btn.addEventListener("mouseover", () => {
    login_anim_div.className = 'butt-anim-div btnanim'
})

login_btn.addEventListener("mouseleave", () => {
    login_anim_div.className = 'butt-anim-div'
})

register_btn.addEventListener("mouseover", () => {
    register_anim_div.className = 'butt-anim-div btnanim'
})

register_btn.addEventListener("mouseleave", () => {
    register_anim_div.className = 'butt-anim-div'
})

register_btn.addEventListener("click", (e) => {

    e.preventDefault();
    if(!verifypwd(given_pwd)){
        alert_container.className='alert-container alert-drop';
        pbar.className='progress progressing';
        alertcontent.textContent = "password constraints aren't satisfied. ";
        setTimeout(()=>{
            alert_container.className='alert-container alert-lift';
            pbar.className='progress';
        }, 5800)
    }
    else if(!tccheck.checked){
            alert_container.className='alert-container alert-drop';
            pbar.className='progress progressing';
            alertcontent.textContent = "Please check the terms and conditions. ";
            setTimeout(()=>{
                alert_container.className='alert-container alert-lift';
                pbar.className='progress';
            }, 5800)
    }else {
        alert_container.className='alert-container alert-drop';
        pbar.className='progress progressing';
        alertcontent.textContent = "Account created successfully !";
        setTimeout(()=>{
            alert_container.className='alert-container alert-lift';
            pbar.className='progress';
        }, 5800)
    }
    
})

infobtn.addEventListener("click", () => {
    pwdvalidation.classList.toggle("show-info-box");
})

pwdtextbox.addEventListener("keyup", (e) => {
    given_pwd = e.target.value;
    const bool = verifypwd(given_pwd);
    if(bool){
        e.target.classList.remove("invalidpwd");
        e.target.classList.add("validpwd");
    }else{
        e.target.classList.remove("validpwd");
        e.target.classList.add("invalidpwd");
    }
})

pwdvisiblebtn.addEventListener("click", () => {
    const type = pwdtextbox.type;
    if(type == "password") {
        pwdtextbox.type = "text";
        pwdvisiblebtn.innerHTML = "HIDE";
    }
    else {
        pwdtextbox.type = "password";
        pwdvisiblebtn.innerHTML = "SHOW";
    }
})
