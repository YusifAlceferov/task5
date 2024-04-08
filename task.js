


let correct=true;
const menu=document.querySelector('.dropdown')
const openmenu=document.querySelector('.dropdown_Menu');

menu.addEventListener('click',()=>
{
    if(correct){ 
        correct=false;
        openmenu.style.display='block';
    
}
else{
    openmenu.style.display='none';
    correct=true;
}
})
