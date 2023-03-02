var keys=document.querySelectorAll(".key");

function play(url){
    new Audio(url).play();
}

var sayac=0;
for(eleman of keys){
    sayac++;
    sayac= sayac<10 ? "0"+sayac:sayac;
    
    const url="./audio/key"+sayac+".mp3" 
    eleman.addEventListener("click",function(){
           play(url);
    });
}