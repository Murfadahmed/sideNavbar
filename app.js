let sidebar = document.querySelector(".sidebar")
let icon = document.querySelector(".fa-bars")
let fa_x = document.querySelector(".fa-x")

console.log(fa_x)

fa_x.addEventListener('click',()=>{
    sidebar.classList.add('close')
})
icon.addEventListener('click',()=>{
    sidebar.classList.remove('close')
})