const menu=document.querySelector('.toggle')
const showcase=document.querySelector('.showcase')
menu.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    showcase.classList.toggle('active')
})