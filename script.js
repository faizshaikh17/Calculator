const display = document.querySelector("#display");
const Cbtn = document.querySelector("#C");
const btn = document.querySelectorAll(".btn");
const onebtn = document.querySelector("#one")
const twobtn = document.querySelector("#two")
const threebtn = document.querySelector("#three")
const fourbtn = document.querySelector("#four")
const fivebtn = document.querySelector("#five")
const sixbtn = document.querySelector("#six")
const sevenbtn = document.querySelector("#seven")
const eightbtn = document.querySelector("#eight")
const ninebtn = document.querySelector("#nine")
const zerobtn = document.querySelector("#zero")
const plusbtn = document.querySelector("#plus")
const minusbtn = document.querySelector("#minus")
const multiplybtn = document.querySelector("#multiply")
const dividebtn = document.querySelector("#divide")
const equalbtn = document.querySelector("#equal")
const pointbtn = document.querySelector("#point")

 Cbtn.addEventListener("click",()=>{
    display.value = "";
 });

 onebtn.addEventListener("click",()=>{
    display.value += 1 ;
 });

 twobtn.addEventListener("click",()=>{
    display.value += 2;
 });
 
 threebtn.addEventListener("click",()=>{
    display.value += 3;
 });

 fourbtn.addEventListener("click",()=>{
    display.value += 4;
 });
 
 fivebtn.addEventListener("click",()=>{
    display.value += 5;
 });
 
 sixbtn.addEventListener("click",()=>{
    display.value += 6;
 });
 
 sevenbtn.addEventListener("click",()=>{
    display.value += 7;
 });
 
 eightbtn.addEventListener("click",()=>{
    display.value += 8;
 });
 
 ninebtn.addEventListener("click",()=>{
    display.value += 9;
 });
 
 zerobtn.addEventListener("click",()=>{
    display.value+= 0;
 });

 plusbtn.addEventListener("click",()=>{
    display.value += "+";
 });
 
 minusbtn.addEventListener("click",()=>{
    display.value += "-";
 });
 
 multiplybtn.addEventListener("click",()=>{
    display.value += "*";
 });
 
 dividebtn.addEventListener("click",()=>{
    display.value += "/";
 });
 
 pointbtn.addEventListener("click",()=>{
    display.value += ".";
 });
 
 equalbtn.addEventListener("click",()=>{
    display.value = eval(display.value);
 });
 