//Trayendonos los elementos que utilizaremos
var todo = document.getElementById("todo");
var parrafo = document.createElement("p");
var texto = document.createTextNode('Nuestras Coders');
	console.log(texto);
    parrafo.appendChild(texto);
    todo.appendChild(parrafo);

var hr = document.createElement("hr");
	todo.appendChild(hr);

	var coders = ["valentina Peña" ,"Carola Carrillo","Aitana Vega","Tatiana Martiz","Silvana Rosas","Abril Bilbao"];
  	var imprime = document.getElementById("cuerpo")
  	imprime.innerHTML="";
				
			for(var i=0 ;i<coders.length;i++){

				var newDiv =document.createElement('div');
					newDiv.classList.add('box-image');

				var imagen = document.createElement("img"); 
					imagen.classList.add('coder');

				var newSpan =document.createElement('span');
					newSpan.classList.add('text');
					newSpan.textContent=coders[i];
				
					imagen.setAttribute("src",'img/'+ (i+1)+'.jpg');
  					newDiv.appendChild(imagen);
  					newDiv.appendChild(newSpan);

  					imprime.appendChild(newDiv) ;

				 }
				
