var users= JSON.parse(localStorage.getItem('users'));
if(!users){
	users=[];}
	//aarray de correos
	var correosalida = JSON.parse(localStorage.getItem('correosalida'));
	if(!correosalida){
		correosalida=[];}
		var cont = Number(localStorage.getItem('cont'));
		if(!cont )
		{
			cont =1;
			localStorage.setItem('cont',cont);
		};


		function crearCorreo(){
			var d = new Date();
			var i = d.getMonth();
			var u=i+1;
			var my = d.getDate()+"/"+u+"/"+d.getFullYear();
			var asunto = document.getElementById("asunto").value;
			var p = document.getElementById("pedro").value;	
			var contenido = document.getElementById("contenido").value;
			var contador = Number(localStorage.getItem('cont'));

	contador ++;//se incrementa el contador en la variable local

	localStorage.setItem('cont',contador);//agarre lo del local storage y cambielo

if ((asunto==null||asunto=="") ||(p==null||pedro=="")||(contenido==null||contenido=="")) 
         	{
         		alert("Datos vacios");
         	}
         	else 
         	{
         		if (validateEmail(pedro)==false) {
         			alert(" Direccion de Correo Invalido " );
         		}
         		else{


		var correo = {   //se crea un objeto user con dos variables
			"bandeja":"salida",
			"id":contador,
			"fecha":my,
			"destinatario": p ,
			"asunto": asunto,
			"contenido":contenido	

		};
         	correosalida.push(correo);//se almacena en un array "correos" 
         	localStorage.setItem('correosalida',JSON.stringify(correosalida));//aqui antes de la  acoma a quien y despues que le va a sobreescribir 


         	window.location.href="bandeja.html";
         }
     }
 }
         function register(){ 

         	var newnombre = document.getElementById("newnombre").value; 
         	var newapellido = document.getElementById("newapellido").value;  	
         	var newpassword = document.getElementById("userpassword").value;  	
         	var newuser = document.getElementById("username").value;
         	if ((newnombre==null||newnombre=="") ||(newapellido==null||newapellido=="")||(newuser==null||username=="") ||(newpassword==null||newpassword=="")) 
         	{
         		alert("Datos vacios");
         	}else {
         		if (validateEmail(username)==false) {
         			alert(" Direccion de Correo Invalido " );
         		}
         		else{



         	var user = {   //se crea un objeto user con dos variables
         		"newnombre":newnombre,
         		"newapellido":newapellido,
         		"userpassword":newpassword,
         		"username":newuser
         	};  
	users.push(user);   //se almacena en un array "users" que se crea al cargar el documento js (primeras tres lineas).

	localStorage.setItem('users',JSON.stringify(users)); //se rescribe el objeto "users" guardado en localStorage usando setItem. El stringify convierte todo el array a string ya que local storage solo guarda strings.
	window.location.href="index.html";	
}
}
}
function isUser(){


	var user= document.getElementById("username").value;
	var userpassword= document.getElementById("userpassword").value;
	var usersList = JSON.parse(localStorage.getItem("users"));//el parse convierte el objeto guardado en local storage a un array manipulable.
	var valid= false;

	for(var i=0; i<usersList.length; i++){ //se obtienen los datos de cada usuario y se comparan con los datos ingresados para ver si coinciden.
		var name = usersList[i].username;
		var clave = usersList[i].userpassword;
		if(name===user&&clave===userpassword){

			window.location.href="bandeja.html";
		}


	}

	if(!valid){
	//	window.alert("Usuario Invalido");
}

		document.getElementById("username").value=""; //se limpian los campos de texto y se envia el mensaje de rechazo
		document.getElementById("userpassword").value="";
	}

	function cargarCorreo()
	{
		var correos = localStorage.getItem('correosalida');
var data = JSON.parse(correos); //Parse the Data back into the object
var correo_html = "";
for (var i = 0; i < data.length; i++) {
		// add users to the table

		var c = data[i];
		correo_html =correo_html+"<tr><td>"+c.fecha+"</td><td>"+c.destinatario+"</td><td>"+c.asunto+"</td><td>"+c.contenido+"</td></tr>";

	}


	$('#correo_table').html(correo_html);
}
window.onload = function () {
	cargarCorreo();

	$('#tablacargar').find('tr').click( function(){
		kd= ($(this).index()+1);
		var dd=(kd-1);
		var retrievedObject = localStorage.getItem('correosalida');
	 var datePerson = JSON.parse(retrievedObject); //Parse the Data back into the object
	 $('#myModal').modal('show');
	 document.getElementById("pedro").value = datePerson[dd].destinatario;
	 document.getElementById("asunto").value = datePerson[dd].asunto;
	 document.getElementById("contenido").value = datePerson[dd].contenido;

	});
}
function reiniciar(){

	document.getElementById("pedro").value = "";
	document.getElementById("asunto").value = "";
	document.getElementById("contenido").value = "";

}
function validateEmail(pedro){
	//var email = document.getElementById('username')
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (!filter.test(pedro.value)) {
		pedro.focus;
		return false;
	}
}

