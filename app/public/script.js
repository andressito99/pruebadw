// client-side js, loaded by index.html
// run by the browser each time the page is loaded
 let btnMenu = document.querySelector(".btnMenu")
 let sideMenu = document.querySelector(".sideBar")
 
 btnMenu.addEventListener('click',function(){
   sideMenu.classList.toggle("show")
 })


