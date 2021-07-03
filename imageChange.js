const image = document.querySelectorAll(".panel");
image.forEach(img => {
    img.addEventListener('click', () => {
  removeActiveClasses() 
  img.classList.add("active")     
    })
})
function removeActiveClasses(){
    image.forEach(image =>{
        image.classList.remove('active')
    } )
} 