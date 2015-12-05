var users= JSON.parse(localStorage.getItem('users'));
if(!users){
	users=[];}
         function register(){ 

                var newuser = document.getElementById("username").value;	
				var newpassword = document.getElementById("userpassword").value;  	

         	var user = {   //se crea un objeto user con dos variables
		"username":newuser,
		"userpassword":newpassword
		};  
	users.push(user);   //se almacena en un array "users" que se crea al cargar el documento js (primeras tres lineas).

	localStorage.setItem('users',JSON.stringify(users)); //se rescribe el objeto "users" guardado en localStorage usando setItem. El stringify convierte todo el array a string ya que local storage solo guarda strings.
window.location.href="index.html";
}


