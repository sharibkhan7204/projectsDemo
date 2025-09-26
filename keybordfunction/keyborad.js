let box = document.querySelector("#box");

document.addEventListener("keydown",(k)=>{
    k.preventDefault(); 
    if(k.key == 'c' || k.key == 'C')
    {
        if
        box.style.borderRadius = "50%";
    }
    else if(k.ctrlKey && k.key === 'b' || k.ctrlKey && k.key === 'B' )
    {
        box.style.border = "solid 2px black";
    }

     else if(k.shiftKey && k.key === 't' || k.shiftKey && k.key === 'T' )
    {
        
    }
    
});