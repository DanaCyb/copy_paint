const canvas=document.getElementById("canvas"),increaseBtn=document.getElementById("increase"),decreaseBtn=document.getElementById("decrease"),sizeE1=document.getElementById("size"),colorE1=document.getElementById("color"),clearE1=document.getElementById("clear"),ctx=canvas.getContext("2d");let size=30,isPressed=!1,color="black",x=void 0,y=void 0;function drawCircle(e,t){ctx.beginPath(),ctx.arc(e,t,size,0,2*Math.PI),ctx.fillStyle=color,ctx.fill()}function drawLine(e,t,n,c){ctx.beginPath(),ctx.moveTo(e,t),ctx.lineTo(n,c),ctx.strokeStyle=color,ctx.lineWidth=2*size,ctx.stroke()}function updateSizeOnScreen(){sizeE1.innerText=size}canvas.addEventListener("mousedown",e=>{isPressed=!0,x=e.offsetX,y=e.offsetY}),canvas.addEventListener("mouseup",e=>{isPressed=!1,x=void 0,y=void 0}),canvas.addEventListener("mousemove",e=>{if(isPressed){const t=e.offsetX,n=e.offsetY;drawCircle(t,n),drawLine(x,y,t,n),x=t,y=n}}),increaseBtn.addEventListener("click",()=>{(size+=5)>50&&(size=50),updateSizeOnScreen()}),decreaseBtn.addEventListener("click",()=>{(size-=5)<50&&(size=50),updateSizeOnScreen()}),colorE1.addEventListener("change",e=>{color=e.target.value}),clearE1.addEventListener("click",()=>{ctx.clearRect(0,0,canvas.width,canvas.height)});