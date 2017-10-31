var app = (function(){
    return{
        getCuadrado(){
            var numero = document.getElementById("idNumero").value;
            var promesa = apiclient.getCuadradoPOST(numero);
            promesa.then(
                        function (retorno) {
                            alert(retorno.numero);
                        },
                        function () {
                             alert(promesa.responseText);
                        }
                );
        }
    };
}());

