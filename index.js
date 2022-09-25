function clock(){

    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var am=document.getElementById("hoursAM");

    var time=new Date();
    var a=time.getHours();
    var b=time.getMinutes();
    var c=time.getSeconds();

    var am = "AM";

    if(a == 0){
        a = 12;
    }
    if(a > 12){
        a = a-12;
        am = "PM";

    }

    a = (a < 10)?"0" + a:a;
    b = (b < 10)?"0" + b:b;
    c = (c < 10)?"0" + c:c;
    
    

    hours.innerHTML=a;
    minutes.innerHTML=b;
    seconds.innerHTML=c;
    hoursAM.innerHTML=am;


}





setInterval(clock,1000);


var imgCount = -1;
var images = ["./lunch.png","./good-night.png"]
function settime() {
    imgCount++;
    var images = document.getElementById("img-container");
    images.src = images[imgCount];
}



function Makediv(){

    var container=document.createElement('div');
   //container.className="grid-item";
   // container.id="dynamic-block";

    //document.getElementById('grid-container1').appendChild(container);

    var invalue=document.getElementById("wakeUpTimeSelector");
   
   
    var value=invalue.options[invalue.selectedIndex].text;
   
    document.getElementById("dynamic-block").innerHTML="Wake up time " + " " + " "+value;
    


}

function Makediv1(){

    var container=document.createElement('div');
   // container.className="grid-item";
    //container.id="dynamic-block";

    //document.getElementById('grid-container1').appendChild(container);

    var invalue=document.getElementById("wakeUpTimeSelector1");
   
   
    var value=invalue.options[invalue.selectedIndex].text;
   
    document.getElementById("dynamic-block").innerHTML="Lunch Time  " + " " + " "+value;
    


}

function Makediv2(){

    var container=document.createElement('div');
   // container.className="grid-item";
   // container.id="dynamic-block";

   // document.getElementById('grid-container1').appendChild(container);

    var invalue=document.getElementById("wakeUpTimeSelector2");
   
   
    var value=invalue.options[invalue.selectedIndex].text;
   
    document.getElementById("dynamic-block").innerHTML="Nap time " + " " + " "+value;
    


}








function settime()  {

    var i=document.getElementsByClassName("set").value;
     
     console.log("first function")
     
     var hours=document.getElementsByClassName("set").value;
     var hours=new Date().getHours();
      
    
     let img = document.getElementsByClassName("secondselector").value;
     let y = document.getElementsByClassName("secondselector").value;
     

  if(i!== hours){
   document.getElementById('img-container').style.backgroundImage="url(./motivation-img.jpg)";
   
   
   document.getElementById('text-container').innerHTML="Your Scheduled Time Set Up";
   console.log("first function if ")

  
    }
    if(img!== y){
    
        
        document.getElementById("img-container").style.backgroundImage="url(./lunch.png)";
      }
      
    
   
    

   

}


function set()  {

    var i=document.getElementsByClassName("set").value;
     
     console.log("first function")
     
     var hours=document.getElementsByClassName("set").value;
     var hours=new Date().getHours();
      
    
     let img = document.getElementsByClassName("secondselector").value;
     let y = document.getElementsByClassName("secondselector").value;
     

  
    if(img == y){
    
        
        document.getElementById("img-container").style.backgroundImage="url(./lunch.png)";
        document.getElementById('text-container').innerHTML="Lets Have Some Lunch";
   console.log("first function if ")
      }
      Makediv1();
       
   
      
      
   
   
   

  
    
}

function nap()  {

    var i=document.getElementsByClassName("set").value;
     
     console.log("first function")
     
     var hours=document.getElementsByClassName("set").value;
     var hours=new Date().getHours();
      
    
     let good = document.getElementsByClassName("naptime").value;
     let z = document.getElementsByClassName("naptime").value;
     

  
    if(good == z){
    
        
        document.getElementById("img-container").style.backgroundImage="url(./good-night.png)";
        document.getElementById('text-container').innerHTML="Time To Go To Bad ";
   console.log("first function if ")
      }
      Makediv2();
    }

    function wake()  {

        var i=document.getElementsByClassName("set").value;
         
         console.log("first function")
         
         var hours=document.getElementsByClassName("set").value;
         var hours=new Date().getHours();
          
        
         let good = document.getElementsByClassName("naptime").value;
         let z = document.getElementsByClassName("naptime").value;
         
    
      
        if(good == z){
        
            
            document.getElementById("img-container").style.backgroundImage="url(./breakfast-img.jpg)";
            document.getElementById('text-container').innerHTML="Lets Have Some Breakfast";
       console.log("first function if ")
          }
          Makediv();
        }



    
    
   
    

   







