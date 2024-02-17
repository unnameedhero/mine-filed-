let btn=document.getElementsByClassName("btn");
let mayın=[],sayac=0,text=0,mayın_cout,sayac1=0,sayac2=0,plus;
let radio=document.getElementsByName("radio");
let scores=document.getElementById("score");
let score=0;
let start=document.getElementById("start").addEventListener("click",fun2);
for (let index = 0; index < btn.length; index++) {
   btn[index].addEventListener("click",fun);
   btn[index].addEventListener("auxclick",fun3);
   btn[index].setAttribute("value",index);
   
   
    
}


function fun() {
    
    for (let index = 0; index < mayın.length; index++) {
        if (mayın[index]==this.value) {
            sayac++;
            break;
        }
        
    }
    if (sayac==0) {
        this.style.backgroundColor="green";
        score+=plus;
        scores.innerHTML="Score="+score;
        this.disabled="true";
        
        //ilk
    if (this.value==0) {
        for (let index = 0; index < mayın.length; index++) {
            if (mayın[index]==btn[7].value) {
                text++;
                
            }
            if (mayın[index]==btn[1].value) {
                text++;
                
            }
            if (mayın[index]==btn[8].value) {
                text++;
                
            }
            
        }
        this.innerText=text;
        text=0;
    }
    //ilk altı
    if (this.value==35) {
        for (let index = 0; index < mayın.length; index++) {
            if (mayın[index]==btn[28].value) {
                text++;
                
            }
            if (mayın[index]==btn[36].value) {
                text++;
                
            }
            if (mayın[index]==btn[29].value) {
                text++;
                
            }
            
        }
        this.innerText=text;
        text=0;
    }
    //ilk sağ
    if (this.value==6) {
        for (let index = 0; index < mayın.length; index++) {
            if (mayın[index]==btn[5].value) {
                text++;
                
            }
            if (mayın[index]==btn[12].value) {
                text++;
                
            }
            if (mayın[index]==btn[13].value) {
                text++;
                
            }
            
        }
        this.innerText=text;
        text=0;
    }
    //sağ alt
    if (this.value==41) {
        for (let index = 0; index < mayın.length; index++) {
            if (mayın[index]==btn[33].value) {
                text++;
                
            }
            if (mayın[index]==btn[34].value) {
                text++;
                
            }
            if (mayın[index]==btn[40].value) {
                text++;
                
            }
            
        }
        this.innerText=text;
        text=0;
    }
    else{
        for (let index = 0; index < mayın.length; index++) {
            if (parseInt(this.value)-8==mayın[index]) {
                text++;
            }
            if (parseInt(this.value)-7==mayın[index]) {
                text++;
            }
            if (parseInt(this.value)-6==mayın[index]) {
                text++;
            }
            if (parseInt(this.value)-1==mayın[index]) {
                text++;
            }
            if (parseInt(this.value)+1==mayın[index]) {
                text++;
            }
            if (parseInt(this.value)+6==mayın[index]) {
                text++;
            }
            if (parseInt(this.value)+7==mayın[index]) {
                text++;
            }
            if (parseInt(this.value)+8==mayın[index]) {
                text++;
            }
            
        }
        this.innerText=text;
        text=0;
    }
    
    //sol    
    for (let index = 7; index < 29; index+=7) {
        if (this.value==index) {
            
            for (let indexs = 0; indexs <mayın.length; indexs++) {
              
                if ((parseInt(this.value)-7)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)-6)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)+1)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)+7)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)+8)==mayın[indexs]) {
                    text++;
                }
            }
            this.innerText=text; 
            text=0;
           
        }
        
        
    }
    //sağ
    for (let index = 13; index < 35; index+=7) {
        if (this.value==index) {
            
            for (let indexs = 0; indexs <mayın.length; indexs++) {
              
                if ((parseInt(this.value)-7)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)-8)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)-1)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)+6)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)+7)==mayın[indexs]) {
                    text++;
                }
            }
            this.innerText=text; 
            text=0;
           
        }
        
        
    }
    //yukarı
    for (let index = 1; index < 6; index++) {
        if (this.value==index) {
            
            for (let indexs = 0; indexs <mayın.length; indexs++) {
              
                if ((parseInt(this.value)-1)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)+1)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)+6)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)+7)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)+8)==mayın[indexs]) {
                    text++;
                }
            }
            this.innerText=text; 
            text=0;
           
        }
        
        
    }
    //aşağı
    for (let index = 36; index < 41; index++) {
        if (this.value==index) {
            
            for (let indexs = 0; indexs <mayın.length; indexs++) {
              
                if ((parseInt(this.value)-1)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)+1)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)-6)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)-7)==mayın[indexs]) {
                    text++;
                }
                if ((parseInt(this.value)-8)==mayın[indexs]) {
                    text++;
                }
            }
            this.innerText=text; 
            text=0;
           
        }
        
        
    }
    
   















    }
    else{
        this.style.backgroundColor="red";
        score-=30;
        scores.innerHTML="Score="+score;
        this.disabled="true";
        
    }
    sayac=0;
    
    

    
    
        
    

    
}
function fun2() {
    if (radio[0].checked) {
        mayın_cout=8;
        plus=10;
    }
    if (radio[1].checked) {
        mayın_cout=12;
        plus=12;
    }
    if (radio[2].checked) {
        mayın_cout=15;
        plus=15;
    }
    for (let index = 0; index < mayın_cout; index++) {
        if (index==0) {
            mayın.push(parseInt(Math.floor(Math.random()*43)));

        }
        else{
            let mayınvalue=parseInt(Math.floor(Math.random()*43));
            for (let j = 0; j < mayın.length; j++) {
                if (mayın[j]==mayınvalue) {
                    sayac1++;
                    break;
                }
                
            }
            if (sayac1==0) {
                mayın.push(mayınvalue);
            }
            else{
                index--;
            }
            sayac1=0;
        }
        
        
        
    }
    for (let index = 0; index < btn.length; index++) {
        btn[index].style.visibility="visible"
        this.style.visibility="hidden";
        
        
    }
    scores.style.visibility="visible";
    
}
function fun3() {
    for (let index = 0; index < mayın.length; index++) {
        if (mayın[index]==this.value) {
            sayac2++;
            break;
        }
        
        
    }
    if (sayac2!=0) {
        this.style.backgroundColor="blue";
        this.innerText="";
        this.disabled="true";
        score+=20;
        scores.innerText="Score="+score;
    }
    else{
        this.style.backgroundColor="yellow";
        this.innerText="";
        this.disabled="true";
        score-=30;
        scores.innerText="Score="+score;
    }
    sayac2=0;
    
    
}