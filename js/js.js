function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
   
    if(inputText.value.match(mailformat))
    {
        window.location.href='bandeja.html';
    }
    else
    {
        alert("Esto no es un correo");
    }
}

function ValidateRegistro(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
   
    if(inputText.value.match(mailformat))
    {
        window.location.href='index.html';
    }
    else
    {
        alert("Esto no es un correo");
    }
}

function CrearCorreo(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   
   
    if(inputText.value.match(mailformat))
    {
        window.location.href='Enviar.html';
    }
    else
    {
        alert("Esto no es un correo");
    }
}
function Validar_Correo(inputText)
{
    var c =0;
    var p =0;
for(i=0;i<correo.length;i++)
{

 if(correo.charAt(i-1)--"@")
    {
        c ++;
}
 if(c==2){

     if(correo.charAt(i-1)--"."){

        p ++;
     }
 }
}
       if(c==1 & p==2 || p==1){
        alert("valido");



       }
       else{
alert("correo invalido")

       }