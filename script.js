const colors = ['red', 'yellow', 'green', 'blue', 'pink', 'white', 'black', 'violet', 'gold', 'silver']
const colorBtn = document.getElementById('color-btn')
const area = document.querySelector('main')
const colorName = document.getElementById('colorName')
const text = document.getElementById('bgcolor-text')

colorBtn.addEventListener('click', ()=>{
    const randomNum = randomNumber()
    area.style.backgroundColor = colors[randomNum]
    colorName.textContent = colors[randomNum]
    if(colors[randomNum] == 'black'){
        colorBtn.style.backgroundColor = 'white'
    }else{
        colorBtn.style.backgroundColor = colors[randomNum]
    }
})

function randomNumber(){
    return Math.floor(Math.random() * colors.length)
}

