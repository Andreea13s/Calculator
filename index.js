function pulsar(){
  var numero=document.getElementById("numero");
  var factorial=document.getElementById("factorial");
  var raiz=document.getElementById("raiz");
  var parimpar=document.getElementById("parimpar");
  var primo=document.getElementById("primo");
  raiz.innerHTML=Math.sqrt(numero.value);
  factorial.innerHTML = myfactorial(numero.value);
  parimpar.innerHTML=mypar(numero.value);
  primo.innerHTML=myprimo(numero.value);
  
 
}
function myfactorial (x) { 
	if (x == 0){ 
		return 1; 
	}
	return x * myfactorial (x-1); 
}
function mypar(y){
  if (y%2==0)
    return "Par";
  else return "Impar";
}
function myprimo(z){
  for (var i = 2; i < z; i++){
    if (z%i==0)
      return "No";
    
  }
  return "Sí";
}
