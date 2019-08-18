var a = 0;
var b = 0; 

var count1=0;
var count2=0;
var count3=0;
var count4=0;

 function rfun(){
        	
	 var m = document.getElementsByName('prim');
     var n = document.getElementsByName('prim1');
    
	 for( var i = 0; i < m.length; i++)
	   {
		if ( m[i].checked ) 
		        {
		          if (m[i].value == 1000) a = 1000;else if (m[i].value==1200) a=1200;else a=2500;		            
			      break;
		         }
 		}

	 for( var k=0; k<n.length; k++)
	   {
		if ( n[k].checked ) 
		        {
                if (n[k].value==500) b=500; else if (n[k].value==700) b=700; else b=750;                  
		        break;
		         }
        }
}

function fun1(){
var chbox1;
chbox1=document.getElementById("one1");
if(chbox1.checked) {
	count1 = 1000;	
	} 
	  else count1 = 0; 
	   	   

}


function fun2(){
var chbox2;
chbox2=document.getElementById("one2");
if(chbox2.checked) {
	  count2 = 1500; 
	} 
	   else count2 = 0; 
}

function fun3(){
var chbox3;
chbox3=document.getElementById("one3");
if(chbox3.checked) {
	count3 = 2000; 
	} 
	  else count3 = 0;	  
}


function fun4(){
var chbox4;
chbox4=document.getElementById("one4");
if(chbox4.checked) {
	 count4 = 2500;
	} 
	  else count4 = 0; 
}

function sum_output() {
  var sum=0;
  sum=a+b+count1+count2+count3+count4;
  document.getElementById('myAnchor').innerHTML="Сумма: "+sum+" рублей";
}

function clean(){
	document.getElementById('myAnchor').innerHTML="Сумма: 0 рублей";
	document.getElementById("one1").checked=false;
	document.getElementById("one2").checked=false;
	document.getElementById("one3").checked=false;
    document.getElementById("one4").checked=false;
    document.getElementById("one6").checked=false;
    document.getElementById("one7").checked=false;
    document.getElementById("one8").checked=false;
    document.getElementById("one9").checked=false;
    document.getElementById("one10").checked=false;
    document.getElementById("one11").checked=false;
}





    







