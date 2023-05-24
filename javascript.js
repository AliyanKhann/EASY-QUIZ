




function login(){
var email="aliyan";
var pass="12345";
var email2=document.getElementById("gmail").value
var pass2=document.getElementById("passs").value
if(email==email2 && pass==pass2){
    
    document.getElementById("login").style.display="none";
    document.getElementById("questions").style.display="flex";
    document.getElementById("q2").style.display="none";
    document.getElementById("q3").style.display="none";
    document.getElementById("q4").style.display="none";
    document.getElementById("q5").style.display="none";
    document.getElementById("q6").style.display="none";
}
else(alert("incorrect id password"))

}
function nextq1() {
    document.getElementById("q1").style.display="none"
    document.getElementById("nextbtn").style.display="none"
    document.getElementById("q2").style.display="flex"

    
}
function nextq2() {
    document.getElementById("q2").style.display="none"
    document.getElementById("nextbtna").style.display="none"
    document.getElementById("q3").style.display="flex"

    
}
function nextq3() {
    document.getElementById("q3").style.display="none"
    document.getElementById("nextbtnb").style.display="none"
    document.getElementById("q4").style.display="flex"

    
}
function nextq4() {
    document.getElementById("q4").style.display="none"
    document.getElementById("nextbtnc").style.display="none"
    document.getElementById("q5").style.display="flex"

    
}
function nextq5() {
    document.getElementById("q5").style.display="none"
    document.getElementById("nextbtnd").style.display="none"
    document.getElementById("q6").style.display="flex"
    document.getElementById("heading").style.display="none"

}


var nextbtn=document.getElementById("nextbtn")
 var hyper2=document.getElementById("hyper2")
var hyper=document.getElementById("hyper")
var hyper3=document.getElementById("hyper3")
var hyper4=document.getElementById("hyper4")
//q2
var nextbtna=document.getElementById("nextbtna")
 var hyper2a=document.getElementById("hyper2a")
var hypera=document.getElementById("hypera")
var hyper3a=document.getElementById("hyper3a")
var hyper4a=document.getElementById("hyper4a")
//q3
var nextbtnb=document.getElementById("nextbtnb")
 var hyper2b=document.getElementById("hyper2b")
var hyperb=document.getElementById("hyperb")
var hyper3b=document.getElementById("hyper3b")
var hyper4b=document.getElementById("hyper4b")
//q4
var nextbtnc=document.getElementById("nextbtnc")
 var hyper2c=document.getElementById("hyper2c")
var hyperc=document.getElementById("hyperc")
var hyper3c=document.getElementById("hyper3c")
var hyper4c=document.getElementById("hyper4c")
//q5
var nextbtnd=document.getElementById("nextbtnd")
 var hyper2d=document.getElementById("hyper2d")
var hyperd=document.getElementById("hyperd")
var hyper3d=document.getElementById("hyper3d")
var hyper4d=document.getElementById("hyper4d")
function answer1() {
   hyper.style.backgroundColor = "#77f726d9";
    nextbtn.style.display = "flex";
    hyper2.style.display='none'
    hyper3.style.display='none'
    hyper4.style.display='none'
    
}
function answer2() {
    hyper2.style.backgroundColor = "red";
        nextbtn.style.display = "flex"
        hyper.style.display='none'
        hyper3.style.display='none'
        hyper4.style.display='none'
    }
    function answer3() {
        hyper3.style.backgroundColor = "red";
            nextbtn.style.display = "flex"
            hyper2.style.display='none'
            hyper.style.display='none'
            hyper4.style.display='none'
        }
        function answer4() {
            hyper4.style.backgroundColor = "red";
                nextbtn.style.display = "flex"
                hyper2.style.display='none'
                hyper3.style.display='none'
                hyper.style.display='none'
            }
            function answer1a() {
                hypera.style.backgroundColor = "red";
                 nextbtna.style.display = "flex";
                 hyper2a.style.display='none'
                 hyper3a.style.display='none'
                 hyper4a.style.display='none'
                 
             }
             function answer2a() {
                 hyper2a.style.backgroundColor = "red";
                     nextbtna.style.display = "flex"
                     hypera.style.display='none'
                     hyper3a.style.display='none'
                     hyper4a.style.display='none'
                 }
                 function answer3a() {
                     hyper3a.style.backgroundColor = "#77f726d9";
                         nextbtna.style.display = "flex"
                         hyper2a.style.display='none'
                         hypera.style.display='none'
                         hyper4a.style.display='none'
                     }
                     function answer4a() {
                         hyper4a.style.backgroundColor = "red";
                             nextbtna.style.display = "flex"
                             hyper2a.style.display='none'
                             hyper3a.style.display='none'
                             hypera.style.display='none'
                         }
                         function answer1b() {
                            hyperb.style.backgroundColor = "red";
                             nextbtnb.style.display = "flex";
                             hyper2b.style.display='none'
                             hyper3b.style.display='none'
                             hyper4b.style.display='none'
                             
                         }
                         function answer2b() {
                             hyper2b.style.backgroundColor = "#77f726d9";
                                 nextbtnb.style.display = "flex"
                                 hyperb.style.display='none'
                                 hyper3b.style.display='none'
                                 hyper4b.style.display='none'
                             }
                             function answer3b() {
                                 hyper3b.style.backgroundColor = "red";
                                     nextbtnb.style.display = "flex"
                                     hyper2b.style.display='none'
                                     hyperb.style.display='none'
                                     hyper4b.style.display='none'
                                 }
                                 function answer4b() {
                                     hyper4b.style.backgroundColor = "red";
                                         nextbtnb.style.display = "flex"
                                         hyper2b.style.display='none'
                                         hyper3b.style.display='none'
                                         hyperb.style.display='none'
                                     }
                                     
                                        function answer1c() {
                                           hyperc.style.backgroundColor = "red";
                                            nextbtnc.style.display = "flex";
                                            hyper2c.style.display='none'
                                            hyper3c.style.display='none'
                                            hyper4c.style.display='none'
                                            
                                        }
                                        function answer2c() {
                                            hyper2c.style.backgroundColor = "red";
                                                nextbtnc.style.display = "flex"
                                                hyperc.style.display='none'
                                                hyper3c.style.display='none'
                                                hyper4c.style.display='none'
                                            }
                                            function answer3c() {
                                                hyper3c.style.backgroundColor = "#77f726d9";
                                                    nextbtnc.style.display = "flex"
                                                    hyper2c.style.display='none'
                                                    hyperc.style.display='none'
                                                    hyper4c.style.display='none'
                                                }
                                                function answer4c() {
                                                    hyper4c.style.backgroundColor = "red";
                                                        nextbtnc.style.display = "flex"
                                                        hyper2c.style.display='none'
                                                        hyper3c.style.display='none'
                                                        hyperc.style.display='none'
                                                    }  
                                                    
                                                    
                                                        function answer1d() {
                                                           hyperd.style.backgroundColor = "red";
                                                            nextbtnd.style.display = "flex";
                                                            hyper2d.style.display='none'
                                                            hyper3d.style.display='none'
                                                            hyper4d.style.display='none'
                                                            
                                                        }
                                                        function answer2d() {
                                                            hyper2d.style.backgroundColor = "red";
                                                                nextbtnd.style.display = "flex"
                                                                hyperd.style.display='none'
                                                                hyper3d.style.display='none'
                                                                hyper4d.style.display='none'
                                                            }
                                                            function answer3d() {
                                                                hyper3d.style.backgroundColor = "red";
                                                                    nextbtnd.style.display = "flex"
                                                                    hyper2d.style.display='none'
                                                                    hyperd.style.display='none'
                                                                    hyper4d.style.display='none'
                                                                }
                                                                function answer4d() {
                                                                    hyper4d.style.backgroundColor = "#77f726d9";
                                                                        nextbtnd.style.display = "flex"
                                                                        hyper2d.style.display='none'
                                                                        hyper3d.style.display='none'
                                                                        hyperd.style.display='none'
                                                                    }                                                    

