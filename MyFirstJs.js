<html>
<head>
 <title>Calculation</title>

 <script type="text/javascript">
    
    function calculate(){

        var a = document.getElementById("first").value;
       var  b = document.getElementById("last").value;
        
        document.getElementById("r").innerHTML="Result= "+ a+b;
        //console.log(a+b);

    }

     var id =0;
     var seconds =0;    
    function printOne(){
        document.getElementById("result").innerHTML=seconds +"Seconds";
        seconds++;
    }

    function start(){

       id = window.setInterval(printOne,1000);
    }

    function stop(){

        window.clearInterval(id);
    }
    var opacity =0;
     var intervalId =0;

    function fadeOut(){
        intervalId = setInterval(hide,200);


    }

    function hide(){

        var img = document.getElementById("one");
         opacity = window.getComputedStyle(img).getPropertyValue("opacity");
         if(opacity>0){

            opacity =opacity-0.1;
            img.style.opacity = opacity;
         }else{
             clearInterval(intervalId);
         }
    }
    function fadeIn(){
      intervalId = setInterval(apear,200);
    }
     
       function apear(){

        var img = document.getElementById("one");
        opacity = window.getComputedStyle(img).getPropertyValue("opacity");

        if(opacity<1){

            opacity = opacity+0.4;
            img.style.opacity =opacity;
        }else{

            clearInterval(intervalId);
        }
       
    

       }

       var width= 100;
       var difference = 2;
       var intervalId =0;

       function increase(){
        clearInterval(intervalId);
         intervalId =   setInterval(zoomIn,20);

       }

       function zoomIn(){
           if(width<200){

            width = width+difference;
            document.getElementById('heart').style.width = width;
            console.log(width);
           }else{
               clearInterval(intervalId);
           }
       }

       function decrease(){
        
        clearInterval(intervalId);
          setInterval(zoomOut,20);
       }

       function zoomOut(){

        if(width>100){

        width = width-difference;
            document.getElementById("heart").style.width =width;
            console.log(width);
      }else{

        clearInterval(intervalId);
      }
       }
       

     </script>
    </head>

   <body>
          
     <div class="container">
     <b>FirstNumber:</b> <input type="text" id="first" ><br/><br/>
     <b>SecondNumber:</b> <input type="text" id="last"><br/><br/>
      </div>
      <div class="button">
      <button onclick="calculate()">Add</button>
      </div>
      <div class="result">
       <h2 id="r"><b>Result</b></h2>:
        </div>

        <hr>

        <button  onclick="start()"> Start </button>
        <h3 id="result">Some Text</h3>

        <button onclick="stop()"> Stop    </button>

        <hr/>
        <div class="firstOne">
         <button onclick="fadeOut()" id="in"> FadeOut </button>
            </div>
              <div class="secondOne">
               <img id="one" src="images/one.png" >
              </div>
            <div class="container">
                    <button onclick="fadeIn()" id="out"> FadeIn </button>
                       </div>
                       <hr/>
                       <br/>
                       <div class="last">
                       <img src="images/heart.png" id="heart" onmouseover="increase()" onmouseout="decrease()" width="100">
                        </div>
  
                  <div class="copy">
                   <center><h2 ><b>Copy Right All rght Reserved</b></h2></center>
                   </div>

       </body>

    </html>
