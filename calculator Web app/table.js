const result = document.querySelector(".result");
const input = document.querySelector(".input_value");
const btn = document.querySelectorAll(".btn");
const sign = document.querySelectorAll(".sign");
\

btn.forEach(button => {
    button.addEventListener("click",()=>{
        input.innerHTML += button.innerHTML
    })
})

sign.forEach(click => {
    click.addEventListener("click",()=>{
        input.innerHTML += ` ${sign.innerHTML} `
    })
})

\
-