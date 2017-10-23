var app = (function(){
    return{
        getCuadrado(){
            var numero = document.getElementById("idNumero").value;
            apiclient.getCuadrado(numero, function(valor){ document.getElementById("idCuadrado").value=valor;});
        }
    };
}());

