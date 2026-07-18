let flexiblevalue:any=10;
flexiblevalue="Now I am a string";
flexiblevalue=true;
let mysteryValue:unknown="Hello Vishnu";
if(typeof mysteryValue == "string"){
    console.log("Length of unknow string: "+mysteryValue.length);
}
function logNotification(message:string):void{
    console.log("ALERT:"+message);
}
logNotification("Environment Setup Complete");
