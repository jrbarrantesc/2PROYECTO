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


			var destinatario = document.getElementById("destino").value;
			var asunto = document.getElementById("asunto").value;	
			var contenido = document.getElementById("contenido").value;
			var contador = Number(localStorage.getItem('cont'));
	contador ++;//se incrementa el contador en la variable local
	localStorage.setItem('cont',contador);//agarre lo del local storage y cambielo

		var correo = {   //se crea un objeto user con dos variables
			"bandeja":"salida",
			"id":contador,
			"destinatario": destino ,
			"asunto": asunto,
			"contenido":contenido
		};
         	correosalida.push(correo);//se almacena en un array "correos" 
         	localStorage.setItem('correosalida',JSON.stringify(correosalida));//aqui antes de la  acoma a quien y despues que le va a sobreescribir 


         	window.location.href="Principal.html";
         }
         function register(){
         	var newuser = prompt("Nombre de Usuario?");
         	var newpassword = prompt("Nueva Contraseña?");

	var user={   //se crea un objeto user con dos variables
		"username":newuser,
		"password":newpassword
	};  
	users.push(user);   //se almacena en un array "users" que se crea al cargar el documento js (primeras tres lineas).

	localStorage.setItem('users',JSON.stringify(users)); //se rescribe el objeto "users" guardado en localStorage usando setItem. El stringify convierte todo el array a string ya que local storage solo guarda strings.
}

function isUser(){
	var user= document.getElementById("username").value;
	var userpassword= document.getElementById("userpassword").value;
	var usersList = JSON.parse(localStorage.getItem("users"));//el parse convierte el objeto guardado en local storage a un array manipulable.
	var valid= false;

	for(var i=0; i<usersList.length; i++){ //se obtienen los datos de cada usuario y se comparan con los datos ingresados para ver si coinciden.
		var name = usersList[i].username;
		var clave = usersList[i].password;
		if(name===user&&clave===userpassword){
			valid=true;
		}

		if(!valid){

		document.getElementById("username").value=""; //se limpian los campos de texto y se envia el mensaje de rechazo
		document.getElementById("userpassword").value="";
		window.alert("Usuario Invalido");
	}
	else{     //si la respuesta es positiva solo se redirecciona.
		window.location.href="Principal.html";
			}
}}
