const codes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const colorBtn = document.getElementById('color-btn')
const area = document.querySelector('main')
const colorCode = document.getElementById('colorCode')

colorBtn.addEventListener('click', ()=>{
    //const randomNum = randomNumber()
    let code = '#'
    for(let i = 0; i < 6; i++){
        code += codes[randomNumber()]
    }
    area.style.backgroundColor = code;
    colorCode.textContent = code;
    colorBtn.style.backgroundColor = code;
})

function randomNumber(){
    return Math.floor(Math.random() * codes.length)
}