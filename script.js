let starttime=document.getElementById('start');
let gettimee=document.getElementById('gettime');
let resettime=document.getElementById('reset');




let time=new Date();
let gettime=time.toLocaleTimeString();

starttime.addEventListener('click',()=>{
   
   gettimee.innerHTML=gettime;
    
});

resettime.addEventListener('click',()=>{
gettimee.innerHTML=0;
    
})
