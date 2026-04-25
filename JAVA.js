const mytext = document.getElementById("my-text");
const myColorPicker = document.getElementById("my-ColorPicker");
const enregistbtn = document.getElementById("enregist-btn");


enregistbtn.addEventListener("click", function() {
   
    let chosecolor = myColorPicker.value; 
    
    let nvtext = mytext.value; 
    let tascklist = document.getElementById("lista");
    tascklist.innerHTML += `<li style = " background:${chosecolor}"> ${mytext.value} </li>`
  
    
    
   

        
});