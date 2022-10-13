var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

 function start()
 {
    document.getElementById("textbox").innerHTML="";
    recognition.start();
 }

 recognition.onresult = function(event) {
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my selfie"){
      speak();
    }
    
 }
 function speak(){
   var apiting=window.speechSynthesis;
   var thingything="Taking your selfie in 5 seconds.";
   var convertspeech=new SpeechSynthesisUtterance(thingything);
   apiting.speak(convertspeech);
   setTimeout(function()  {
      takeselfie();
      save();
   }, 5000);
   Webcam.attach( '#camera' );
 }
 Webcam.set({
   width: 320,
   height: 240,
   image_format: 'jpeg',
   jpeg_quality: 90
});
var camera=document.getElementById("camera");
function takeselfie(){
   Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='selfie1' src='"+data_uri+"'>";
   });
}
function save(){
var selfiesave=document.getElementById("link");
var selfiepic=document.getElementById("selfie1").src;
selfiesave.href=selfiepic;
selfiesave.click();
}