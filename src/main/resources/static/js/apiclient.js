/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var apiclient=(function(){
	return {
            getCuadrado(numero,callback){
                return $.get("https://nameless-woodland-75107.herokuapp.com/cuadrado/"+numero,callback); 
            }
	};	

}());

