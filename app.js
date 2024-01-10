let arr=[
    {
       dp:"https://images.unsplash.com/photo-1616207133278-0064d3440006?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MH xzZWFyY2h8NjN8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D",
       story:" https://images.unsplash.com/photo-1535704882196-765e5fc62a53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1692340973718-6be7d39e8881?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUzfHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1541519481457-763224276691?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D "
    },
     {
        dp:"https://images.unsplash.com/photo-1617633150878-7df1d12a9a57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY3fHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1612904370392-d1dde7a8ddc8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
     },
     {
       
        
        dp:"https://images.unsplash.com/photo-1617922304319-48eba6011532?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fG1vZGVsJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D ",
        story:"https://images.unsplash.com/photo-1542596594-649edbc13630?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkyfHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
    },
     {
        dp:"https://images.unsplash.com/photo-1624309845812-a7c7e12259f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1613257052795-83032ebf92c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA3fHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
     },
     {
        dp:"https://images.unsplash.com/photo-1625795191138-8ffb8b9fd89e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1619789332426-00fc137633d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI3fHxtb2RlbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
     },

];
let clutter="";
let storiyan=document.querySelector("#storiyan")

arr.forEach(function(el,idx){
    clutter+=` <div class="story">
    <img id= "${idx}"src="${el.dp}" alt="">
         </div>`

});
storiyan.innerHTML=clutter;

storiyan.addEventListener("click",function(dets){
    var value=arr[dets.target.id].story;
    document.querySelector("#full-screen").style.display="block";
    document.querySelector("#full-screen").style.backgroundImage=`url(${value})`;

    setTimeout(function(){
        document.querySelector("#full-screen").style.display="none";
    },1500);

});