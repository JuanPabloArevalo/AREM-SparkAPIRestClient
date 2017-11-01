/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var apiclient=(function(){
	return {
            getCuadradoPOST(numero){
                return $.ajax({
                    url: "https://jyyg7rj388.execute-api.us-west-2.amazonaws.com/prod/CUADRADO",
                    type: 'POST',
                    data: '{"numero":'+numero+'}'
                });
            }
	};	

}());

