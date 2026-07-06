const menuBtn=document.getElementById("mobileMenuBtn");
const nav=document.getElementById("customNavList");

menuBtn.onclick=function(){

    nav.classList.toggle("active");

}


// Dropdown

document.querySelectorAll(".has-dropdown > a").forEach(item=>{

    item.addEventListener("click",function(e){

        if(window.innerWidth<=991){

            e.preventDefault();

            this.parentElement.classList.toggle("open");

        }

    });

});
