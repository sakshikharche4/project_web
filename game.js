'use strict'
let boxes= document.querySelectorAll('.box');
let resetbtn = document.querySelector('.resetbtn');
let turno = true;
let msgContainer = document.querySelector('.msg-cont');
let msg = document.querySelector('.msg')
let clickCount = 0;


let arr =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
    [2,5,8],
    
]

 const resetb = () =>{
    turno =true;
    enablebox();
    msgContainer.classList.add('hidden')

 }

 boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        
        if(turno){
            box.innerText = "O"
            turno = false;
        }
        else{
            box.innerText = "X"
            turno = true;
        }
        box.disabled = true;
         checkwinner()
    })
 })


        const disblebox=() =>{
            for(let box of boxes){
                box.disabled = true
            }

        
        }
        const enablebox=() =>{
            for(let box of boxes){
                box.disabled = false
                box.innerText=""
            }}

        const showwinner = (winner) =>{
            msgContainer.classList.remove('hidden')

            msg.innerText = `winner is : ${winner}`;
            disblebox()
            
        }
 const checkwinner=()=>{
    for(let pattern of arr){
            let posval1 = boxes[pattern[0]].innerText;
            let posval2 = boxes[pattern[1]].innerText;
            let posval3 = boxes[pattern[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1===posval2 && posval2===posval3){
                console.log("winner");
                showwinner(posval1);


                
            }
        }
        
    }
 }
 resetbtn.addEventListener('click', resetb)