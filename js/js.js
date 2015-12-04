function ValidateEmail(inputText)
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
/*
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
*/