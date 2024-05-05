const container=document.querySelector('.container')
const color1=document.querySelector('.color-1')
const color2=document.querySelector('.color-2')
const sizes=document.querySelectorAll('.size span')

color2.addEventListener('click',()=>{
    container.classList.add('change')
})

color1.addEventListener('click',()=>{
    container.classList.remove('change')
})

function removeActiveClasses(){
    sizes.forEach((size)=>{
        size.classList.remove('active')
    })
}

sizes.forEach((size)=>{
    size.addEventListener('click',()=>{
        removeActiveClasses()
        size.classList.add('active')
    })
})