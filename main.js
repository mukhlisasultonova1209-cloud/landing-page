let open = document.querySelector(".hamburger_btn").addEventListener("click",function(){
    let navigtion = document.querySelector(".responcive")
    navigtion.classList.add("open")
});


let close = document.querySelector(".close").addEventListener("click",function(){
    let navigtion = document.querySelector(".responcive")
    navigtion.classList.remove("open")
});