"use strict"

let menuIcon = document.querySelector(".menu-icon");

let menuList = document.getElementById("menu-List")

menuList.style.maxHeight = "0px"

function toggleMenu (){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "130px"
    }else{
        menuList.style.maxHeight = "0px"
    }
}

menuIcon.addEventListener("click",toggleMenu)