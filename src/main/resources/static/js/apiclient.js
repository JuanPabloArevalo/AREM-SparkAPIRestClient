/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var apiclient=(function(){
	return {
            getCuadradoPOST(numero){
                return $.ajax({
                    url: "https://756w45fq6d.execute-api.us-west-2.amazonaws.com/cuadrado",
                    type: 'POST',
                    data: '{"numero":'+numero+'}'
                });
            }
	};	

}());

