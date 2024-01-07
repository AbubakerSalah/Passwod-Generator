const characters1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const inputEl1 = document.getElementById("input-el1")
const inputEl2 = document.getElementById("input-el2")







 function newButton() {
let result= ""
let length = 12
for(let i = 0; i< length *2 ; i++) {
     const randomIndex = Math.floor(Math.random() * characters1.length)
     result += characters1 [randomIndex]

      }
      inputEl1.value = result.slice(0, length)
      inputEl2.value = result.slice(length)
      
      
 }
 
 
 
 