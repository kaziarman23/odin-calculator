const display = document.querySelector("#inputBox")
let buttons = document.querySelectorAll("button")

const btn_Array = Array.from(buttons)
let string = ""

btn_Array.forEach(function(btn){
    btn.addEventListener("click",function(e){

        if(e.target.innerHTML === 'DEL'){
            string = string.substring(0, string.length-1)
            display.value = string
        }
        else if(e.target.innerHTML === 'AC'){
            string = "";
            display.value = string
        }
        else if(e.target.innerHTML === '='){
            string = eval(string);           // eval Function help us to calculate numbers
            display.value = string;
        }
        else{
        string += e.target.innerHTML
        display.value = string
        }
    })
})
