const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7",
 "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
 "{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const btnEl = document.getElementById("btn-el")
const utputEl = document.getElementById("utput-el")
const utputEl2 = document.getElementById("utput-el2")
const inputValue = document.getElementById("input-value")


function generateRandomPassword(length) {
      let password = ""
      
      for(let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random()* characters.length)
            password += characters [randomIndex]
            
      } 
      return password
      
}

function generatePasswords() {
      let length = parseInt(inputValue.value)
      if(isNaN(length) || length < 1) {
            alert("Enter a number greater than 0")
            return
      }
      
      

      const password = generateRandomPassword(length)
      const password2 = generateRandomPassword(length)

      utputEl.textContent = password
      utputEl2.textContent = password2
}


btnEl.addEventListener("click", function() {
      generatePasswords()
      
})


