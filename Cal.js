let screen=document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue =' ';
for(item of buttons){
    item.addEventListener('click',(e)=> {
        buttonText = e.target.innerText;
        console.log('button text is',buttonText);
       
        if(buttonText =='×'){
            buttonText='*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText =='÷'){
            buttonText = '/';
            screenValue += buttonText;
            screen.value = screenValue;
            
        }
      
        else if(buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        
        }
        else if(buttonText=='√'){
            screenValue=Math.sqrt(screenValue);
            screen.value= screenValue;
          
        }
        else if(buttonText=='±'){
            screenValue=Math.abs(screenValue,-1);
            screen.value= screenValue;

        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'ans'){
            screen.value = eval(screenValue);
        }
        else if(buttonText=='del'){
            screen.value=screen.value.slice(0,-1);
            screenValue=screen.value;
            
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }




    })
}