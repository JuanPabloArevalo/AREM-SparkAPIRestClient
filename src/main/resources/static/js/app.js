var app = (function(){
    return{
        getCuadrado(){
            var numero = document.getElementById("idNumero").value;
            var promesa = apiclient.getCuadradoPOST(numero);
            promesa.then(
                        function (retorno) {
                            document.getElementById("idCuadrado").value = retorno.numero;
                        },
                        function () {
                            alert("Ha ocurrido un error");
                        }
                );
        }
    };
}());

