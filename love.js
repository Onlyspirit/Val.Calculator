const answer = document.querySelector('.answer')
const buttonC = document.querySelector('.button-c')
const iinput = document.querySelector('.iinput')
const form = document.querySelector('.form')
const inputOne = document.querySelector('input1')
const inputTwo = document.querySelector('input2')
let loveCal = Math.round(Math.random()*100)

answer.innerHTML = `<h3 style="color:red; font-family:cursive; ">One lovely fact about your love story is that your love percentage is ${loveCal}<h3>`
if (loveCal == 41 || loveCal <= 50) {
    answer.innerHTML = `<h3 style="color:red; font-family:cursive; display:flex;">${inputOne}, One lovely fact about your love story is that your love percentage is ${loveCal}.</h3>
<h3 style="color:blue; font-family:default;"> Its Ok to experience times like this but don't let any situation define your Love. You are the Captain of your Ship.</h3>`    
}
if (inputOne  === '') {
     answer.innerHTML = `<h3 style="color:brown; font-family:default; ">Pls input Lover's name<h3>`
 }   
 buttonC.addEventListener('click',  () => {
     lovely2.html);
})  