let characters1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let characters2 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let inputEl1 = document.getElementById("input-el1")
let inputEl2 = document.getElementById("input-el2")







 function newButton() {
      let result= ""
      let length = 12
      for (let i = 0; i< length; i++) {
            let randomIndex1 = Math.floor(Math.random() * characters1.length)
            let randomCharacter1 = characters1[randomIndex1]
            inputEl1.textContent += randomCharacter1
     
     let randomIndex2 = Math.floor(Math.random() * characters2.length)
     let randomCharacter2 = characters2[randomIndex2]
     inputEl2.textContent += randomCharacter2
     
     
      
      result += randomCharacter1 + randomCharacter2

      }
      inputEl1.value = result.slice(0, length)
      inputEl2.value = result.slice(length)
      
      
 }
 
 
 
 