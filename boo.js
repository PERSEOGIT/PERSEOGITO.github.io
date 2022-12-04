var texto = document.getElementById("11");
//var nombre = prompt("escribe tu nombre");
//texto.innerHTML=nombre;
var momento = 0;
setInterval(()=>{
	momento++;
	if (momento == 5000){
		texto.innerHTML="QUE"
	}
	if (momento == 7500){
		texto.innerHTML="QUE ES"
	}
	if (momento == 9000){
		texto.innerHTML="QUE ES UNA IA"
	}

})








